import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import AdminLogin from './Authentication/AdminLogin';
import ProtectedRoutes from './Authentication/ProtectedRoutes';
import Dashboard from './BackendComponents/Dashboard/Dashboard';
import PostType from './BackendComponents/PostType/PostType';

function App() {
  const [storage, setStorage] = useState('');
  useEffect(() => {
    setStorage(localStorage.getItem('user_type') === 'admin');
  }, [])

  const [successStatus, setSuccessStatus] = useState('')
  console.log('susccess status', successStatus);

  const handleSucessLogin = (val) => {
    setSuccessStatus(val)
  }


  const navigate = useNavigate();
  useEffect(() => {
    if (successStatus.status == 'yes') {
      localStorage.setItem('auth_token', successStatus.token);
      localStorage.setItem('username', successStatus.username);
      localStorage.setItem('email', successStatus.email);
      localStorage.setItem('user_type', successStatus.user_type);
      if (successStatus.user_type === 'admin') {

        navigate('/admin-dashboard')
      }
      else if (successStatus.user_type === 'user') {
        navigate('/')

      }

    }
  }, [successStatus])

  return (
    <>
      <Routes>
        <Route path="admin-login" element={<AdminLogin handleSucessLogin={handleSucessLogin} />}></Route>
        {
          successStatus == 'yes' ?
            storage === 'admin' && <>
              <Route path="admin-dashboard" element={<Dashboard />}></Route>
            </>

            :
            <Route path="admin-login" element={<AdminLogin />}></Route>

        }


        
          <Route element={<ProtectedRoutes />}>

            <Route path="admin-dashboard" element={<Dashboard />}></Route>
            <Route path="post-type" element={<PostType/>}></Route>


          </Route>
        


      </Routes>


    </>
  );
}

export default App;
