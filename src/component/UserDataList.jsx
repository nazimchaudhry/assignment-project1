import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    grow: 2,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    grow: 3,
  },
  {
    name: "Country",
    selector: (row) => row.country,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "Location Status",
    selector: (row) => (
      <span
        className={`px-2 py-1 rounded text-sm font-semibold ${
          row.locationStatus === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.locationStatus}
      </span>
    ),
  },
  {
    name: "Action",
    cell: (row) => (
      <button className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700 transition">
        Action
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    locationStatus: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    locationStatus: "Inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    country: "UK",
    state: "England",
    city: "London",
    locationStatus: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    locationStatus: "Inactive",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris.brown@example.com",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    locationStatus: "Active",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    locationStatus: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    locationStatus: "Inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    country: "UK",
    state: "England",
    city: "London",
    locationStatus: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    locationStatus: "Inactive",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris.brown@example.com",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    locationStatus: "Active",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    locationStatus: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    locationStatus: "Inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    country: "UK",
    state: "England",
    city: "London",
    locationStatus: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    locationStatus: "Inactive",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris.brown@example.com",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    locationStatus: "Active",
  },
];

const UserDataList = () => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">User Data Table</h1>
        <button onClick={()=> navigate('/registration')} className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">
          Add Cluster
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          defaultSortField="name"
          className="border rounded"
          customStyles={{
            header: {
              style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#4B5563",
              },
            },
            rows: {
              style: {
                fontSize: "14px",
                padding: "8px",
                color: "#374151",
              },
              stripedStyle: {
                backgroundColor: "#F3F4F6",
              },
            },
            headRow: {
              style: {
                backgroundColor: "#E5E7EB",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserDataList;
