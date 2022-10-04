import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import AdminLogin from './Authentication/AdminLogin';
import Dashboard from './BackendComponents/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
      <Route path="admin-login" element={<AdminLogin />}></Route>
      <Route path="admin-dashboard" element={<Dashboard />}></Route>
      </Routes>

    
    </>
  );
}

export default App;
