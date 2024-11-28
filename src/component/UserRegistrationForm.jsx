// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";

// // Zod schema for validation
// const schema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
//   email: z.string().email("Invalid email address").nonempty("Email is required"),
//   country: z.string().nonempty("Country is required"),
//   state: z.string().nonempty("State is required"),
//   city: z.string().nonempty("City is required"),
//   location: z.string().nonempty("Location is required"),
// });

// const UserRegistrationForm = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       country_id: "",
//       state_id: "",
//       city_id: "",
//       location: "",
//       latitude : '27.900383',
//       longitude : '78.072281'
//     },
//   });

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);
  
//     try {
//       const response = await fetch("http://143.110.178.49/ev-charging-backend/api/clusters/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Ensure correct content type
//         },
//         body: JSON.stringify(data), // Ensure the payload is correct
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         console.log("API Response:", result);
//         // Handle success response here
//       } else {
//         const errorResult = await response.json();
//         console.log("Error Response:", errorResult);
//         // Handle error response here
//       }
//     } catch (error) {
//       console.error("Error during API call:", error);
//       alert('There was an error with the API request.');
//     }
//   };
  

//   return (
//     <Box
//       className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-md"
//       sx={{
//         border: "1px solid #e0e0e0",
//         boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Typography
//         variant="h5"
//         className="text-center text-gray-800 font-semibold mb-4"
//       >
//         Registration Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="space-y-4">
//           {/* Name */}
//           <Controller
//             name="name"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Name"
//                 fullWidth
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Email */}
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Email"
//                 fullWidth
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Country */}
//           <Controller
//             name="country"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Country"
//                 fullWidth
//                 select
//                 error={!!errors.country}
//                 helperText={errors.country?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               >
//                 <MenuItem value="USA">USA</MenuItem>
//                 <MenuItem value="India">India</MenuItem>
//                 <MenuItem value="Canada">Canada</MenuItem>
//               </TextField>
//             )}
//           />

//           {/* State */}
//           <Controller
//             name="state"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="State"
//                 fullWidth
//                 error={!!errors.state}
//                 helperText={errors.state?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* City */}
//           <Controller
//             name="city"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="City"
//                 fullWidth
//                 error={!!errors.city}
//                 helperText={errors.city?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Location */}
//           <Controller
//             name="location"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Location"
//                 fullWidth
//                 error={!!errors.location}
//                 helperText={errors.location?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             className="mt-4"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Box>
//   );
// };

// export default UserRegistrationForm;

// import React, { useEffect, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { TextField, Button, MenuItem, Typography, Box, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// // Zod schema for validation
// const schema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
//   email: z.string().email("Invalid email address").nonempty("Email is required"),
//   country: z.string().nonempty("Country is required"),
//   state: z.string().nonempty("State is required"),
//   city: z.string().nonempty("City is required"),
//   location: z.string().nonempty("Location is required"),
// });

// const UserRegistrationForm = () => {
//   const navigate = useNavigate()
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [loadingCountries, setLoadingCountries] = useState(true);
//   const [loadingStates, setLoadingStates] = useState(false);
//   const [loadingCities, setLoadingCities] = useState(false);

//   // Fetch country, state, and city data
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch("https://countriesnow.space/api/v0.1/countries"); // Replace with actual API
//         const data = await response.json();
//         setCountries(data);
//         setLoadingCountries(false);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const fetchStates = async (countryId) => {
//     // setLoadingStates(true);
//     try {
//       const response = await fetch(`http://143.110.178.49/ev-charging-backend/api/states/${countryId}`); // Replace with actual API
//       const data = await response.json();
//       setStates(data);
//       setLoadingStates(false);
//     } catch (error) {
//       console.error("Error fetching states:", error);
//     }
//   };

//   const fetchCities = async (stateId) => {
//     // setLoadingCities(true);
//     try {
//       const response = await fetch(`http://143.110.178.49/ev-charging-backend/api/cities/${stateId}`); // Replace with actual API
//       const data = await response.json();
//       setCities(data);
//       setLoadingCities(false);
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       country: "",
//       state: "",
//       city: "",
//       location: "",
//       latitude: '27.900383',
//       longitude: '78.072281',
//     },
//   });

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);

//     try {
//       const response = await fetch("http://143.110.178.49/ev-charging-backend/api/clusters/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Ensure correct content type
//         },
//         body: JSON.stringify(data), // Ensure the payload is correct
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("API Response:", result);
//         // Handle success response here
//       } else {
//         const errorResult = await response.json();
//         console.log("Error Response:", errorResult);
//         // Handle error response here
//       }
//     } catch (error) {
//       console.error("Error during API call:", error);
//       alert('There was an error with the API request.');
//     }
//   };

//   return (
//     <div>
//     <div className="flex justify-end px-2 py-2">
//         <button onClick={()=> navigate('/')} className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">
//           Back to Home
//         </button>
//       </div>
//     <Box
//       className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-md"
//       sx={{
//         border: "1px solid #e0e0e0",
//         boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Typography
//         variant="h5"
//         className="text-center text-gray-800 font-semibold mb-4"
//       >
//         Registration Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="space-y-4">
//           {/* Name */}
//           <Controller
//             name="name"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Name"
//                 fullWidth
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Email */}
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Email"
//                 fullWidth
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Country */}
//           <Controller
//             name="country"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Country"
//                 fullWidth
//                 select
//                 error={!!errors.country}
//                 helperText={errors.country?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//                 onChange={e => {
//                   field.onChange(e);
//                   fetchStates(e.target.value); // Fetch states when country changes
//                 }}
//               >
//                 {loadingCountries ? (
//                   <MenuItem disabled>
//                     <CircularProgress size={24} />
//                   </MenuItem>
//                 ) : (
//                   countries?.map(country => (
//                     <MenuItem key={country.id} value={country.id}>
//                       {country.name}
//                     </MenuItem>
//                   ))
//                 )}
//               </TextField>
//             )}
//           />

//           {/* State */}
//           <Controller
//             name="state"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="State"
//                 fullWidth
//                 select
//                 error={!!errors.state}
//                 helperText={errors.state?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//                 onChange={e => {
//                   field.onChange(e);
//                   fetchCities(e.target.value); // Fetch cities when state changes
//                 }}
//               >
//                 {loadingStates ? (
//                   <MenuItem disabled>
//                     <CircularProgress size={24} />
//                   </MenuItem>
//                 ) : (
//                   states.map(state => (
//                     <MenuItem key={state.id} value={state.id}>
//                       {state.name}
//                     </MenuItem>
//                   ))
//                 )}
//               </TextField>
//             )}
//           />

//           {/* City */}
//           <Controller
//             name="city"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="City"
//                 fullWidth
//                 select
//                 error={!!errors.city}
//                 helperText={errors.city?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               >
//                 {loadingCities ? (
//                   <MenuItem disabled>
//                     <CircularProgress size={24} />
//                   </MenuItem>
//                 ) : (
//                   cities.map(city => (
//                     <MenuItem key={city.id} value={city.id}>
//                       {city.name}
//                     </MenuItem>
//                   ))
//                 )}
//               </TextField>
//             )}
//           />

//           {/* Location */}
//           <Controller
//             name="location"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Location"
//                 fullWidth
//                 error={!!errors.location}
//                 helperText={errors.location?.message}
//                 variant="outlined"
//                 className="text-gray-700"
//               />
//             )}
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             className="mt-4"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Box>
//     </div>
//   );
// };

// export default UserRegistrationForm;

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, MenuItem, Typography, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Zod schema for validation
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  country: z.string().nonempty("Country is required"),
  state: z.string().nonempty("State is required"),
  city: z.string().nonempty("City is required"),
  location: z.string().nonempty("Location is required"),
});

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        // Check if the response is okay (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('myData', data); // Check the structure of data

        // Ensure the 'data' key exists and contains an array
        if (data && Array.isArray(data.data)) {
          setCountries(data.data); // Assuming 'data' key holds the country data
        } else {
          throw new Error("Unexpected data structure");
        }
        setLoadingCountries(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoadingCountries(false); // Stop loading on error
      }
    };

    fetchCountries();
  }, []);

  // Fetch state data when country is selected
  const fetchStates = async (countryId) => {
    setLoadingStates(true);
    try {
      const response = await fetch(`http://143.110.178.49/ev-charging-backend/api/states/${countryId}`);
      const data = await response.json();
      setStates(data);
      setLoadingStates(false);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  // Fetch city data when state is selected
  const fetchCities = async (stateId) => {
    setLoadingCities(true);
    try {
      const response = await fetch(`http://143.110.178.49/ev-charging-backend/api/cities/${stateId}`);
      const data = await response.json();
      setCities(data);
      setLoadingCities(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      location: "",
      latitude: '27.900383',
      longitude: '78.072281',
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await fetch("http://143.110.178.49/ev-charging-backend/api/clusters/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
      } else {
        const errorResult = await response.json();
        console.log("Error Response:", errorResult);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert('There was an error with the API request.');
    }
  };

  return (
    <div>
      <div className="flex justify-end px-2 py-2">
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">
          Back to Home
        </button>
      </div>
      <Box className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-md">
        <Typography variant="h5" className="text-center text-gray-800 font-semibold mb-4">
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
            {/* Name */}
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Country */}
            <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Country"
            fullWidth
            select
            error={!!errors.country}
            helperText={errors.country?.message}
            variant="outlined"
            onChange={e => {
              field.onChange(e);
              fetchStates(e.target.value); // Fetch states when country changes
            }}
          >
            {loadingCountries ? (
              <MenuItem disabled>
                <CircularProgress size={24} />
              </MenuItem>
            ) : (
              countries.map((country) => (
                <MenuItem key={country.iso2} value={country.iso2}>
                  {country?.country}
                </MenuItem>
              ))
            )}
          </TextField>
        )}
      />

            {/* State */}
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="State"
                  fullWidth
                  select
                  error={!!errors.state}
                  helperText={errors.state?.message}
                  variant="outlined"
                  onChange={e => {
                    field.onChange(e);
                    fetchCities(e.target.value); // Fetch cities when state changes
                  }}
                >
                  {loadingStates ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : (
                    states?.map((state) => (
                      <MenuItem key={state.id} value={state.id}>
                        {state.name}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              )}
            />

            {/* City */}
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City"
                  fullWidth
                  select
                  error={!!errors.city}
                  helperText={errors.city?.message}
                  variant="outlined"
                >
                  {loadingCities ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : (
                    cities?.map((city) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              )}
            />

            {/* Location */}
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location"
                  fullWidth
                  error={!!errors.location}
                  helperText={errors.location?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default UserRegistrationForm;


