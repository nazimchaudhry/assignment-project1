import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components
import UserRegistrationForm from './component/UserRegistrationForm';
import UserDataList from './component/UserDataList';

const App = () => {
  return (
    <Router>
      <div>
        <div className='flex justify-center items-center h-screen w-full px-2 py-4'>
          <Routes>
            {/* Default route showing the UserDataList */}
            <Route path="/" element={<UserDataList />} />
            
            {/* Route for the registration form */}
            <Route path="/registration" element={<UserRegistrationForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

