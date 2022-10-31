import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import AdminLogin from './Authentication/AdminLogin';
import ProtectedRoutes from './Authentication/ProtectedRoutes';
import Dashboard from './BackendComponents/Dashboard/Dashboard';
import PostType from './BackendComponents/PostType/PostType';
import axios from 'axios';
import JobConfiguration from './BackendComponents/Job Management/JobConfiguration/JobConfiguration';
import CreateJobPost from './BackendComponents/Job Management/JobPost/CreateJobPost';
import ViewAllJob from './BackendComponents/Job Management/JobPost/ViewAllJob';
import EditJobPost from './BackendComponents/Job Management/JobPost/EditJobPost';
import './imageUrl';
import CreateEvent from './BackendComponents/Event/CreateEvent';
import EventConfiguration from './BackendComponents/Event/Event Configuration/EventConfiguration';
import ViewAllEvent from './BackendComponents/Event/ViewAllEvent';
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


const [trigger,setTrigger]=useState('');
console.log('hel',trigger);

useEffect(()=>{
  if(trigger){
    <Navigate to="/admin-login" />

  }

},[trigger]);

    axios.interceptors.response.use(response => {
      return response;

    }, error => {
      if (error.response.status === 401) {
        // setTrigger(error.response.status);
        console.log('use effect triggered');
        alert('trii')
          // Swal.fire("Unauthorized", '', 'error')
          // navigate('admin-login')
          {<Navigate to="/admin-login" />}

      }
      return error;

    });













  const navigate = useNavigate();
  useEffect(() => {
    if (successStatus.status == 'yes') {
      localStorage.setItem('auth_token', successStatus.token);
      localStorage.setItem('username', successStatus.username);
      localStorage.setItem('email', successStatus.email);
      localStorage.setItem('user_type', successStatus.user_type);
      if (successStatus.user_type === 'admin') {

        navigate('/admin-dashboard')
        // setSuccessStatus('');
      }
      else if (successStatus.user_type === 'user') {
        navigate('/admin-login')

      }

    }
 
  }, [successStatus])

  return (
    <>
      <Routes>
        <Route path="admin-login" element={<AdminLogin handleSucessLogin={handleSucessLogin} />}></Route>
     


        
          <Route element={<ProtectedRoutes />}>
          {
          successStatus == 'yes' ?
            storage === 'admin' && <>
              <Route path="admin-dashboard" element={<Dashboard />}></Route>
            </>

            :
            <Route path="admin-login" element={<AdminLogin />}></Route>

        }

            <Route path="admin-dashboard" element={<Dashboard />}></Route>
            <Route path="post-type" element={<PostType/>}></Route>
            <Route path="job-configuration" element={<JobConfiguration/>}></Route>
            <Route path="create-job-post" element={<CreateJobPost/>}></Route>
            <Route path="view-all-jobs" element={<ViewAllJob/>}></Route>
            <Route path="edit-jobs/:id" element={<EditJobPost/>}></Route>

            <Route path="create-event" element={<CreateEvent/>}></Route>
            <Route path="event-configuration" element={<EventConfiguration/>}></Route>
            <Route path="view-all-events" element={<ViewAllEvent/>}></Route>


            



          </Route>
        


      </Routes>


    </>
  );
}

export default App;
