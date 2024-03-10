import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './auth.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

function AdminLogin({ handleSucessLogin }) {

  const navigate = useNavigate({ handleSucessLogin });
  const [clickedRender, setClickedRender] = useState(false)

  const [adminSelectedUi, setAdminSelectedUi] = useState('admin');
  // console.log('hey ',adminSelectedUi)

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setLoginInput({
      ...loginInput, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickedRender(true);
    console.log('admin info check', loginInput)

    // update('yes')

    // console.log('state checking', loginInput)

    axios.get('sanctum/csrf-cookie').then(response => {

      axios.post('/api/admin-login', loginInput).then(res => {


        if (res.data.status == 200) {
          console.log("boom",res.data);
          setClickedRender(false);
          let admin_auth = {
            full_name: res.data.full_name,
            image: res.data.image,
            user_type: res.data.user_type,
            token: res.data.token,
            email: res.data.email,
            user_id: res.data.user_id,
            status: 'yes',
            roleId:res.data.roleId
          }
          // update(admin_auth)
          handleSucessLogin(admin_auth);
          //     localStorage.setItem('auth_token',res.data.token);
          // localStorage.setItem('username',res.data.username);
          // localStorage.setItem('email',res.data.email);
          // localStorage.setItem('user_type',res.data.user_type);
          // localStorage.setItem('user_id',res.data.user_id);
          // localStorage.setItem('user_info',JSON. stringify(res.data.user_info) );

          // navigate('/admin-dashboard')

          //   if (res.data.user_type=== 'admin') {

          //     navigate('/dashboard')
          // }
          // else if(res.data.user_type=== 'user'){
          //     navigate('/')

          // }

        }
        else if (res.data.status == 401) {
          Swal.fire(res.data.message, '', 'warning')
          setClickedRender(false)

        }
        else {
          Swal.fire('Invalid Credentials', '', 'warning')
          setClickedRender(false)

        }
      })

    });
  }




  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }







  return (
    <>

      <div class="container-fluid login-wrap">
        <div className='row '>
          <div className='left-side-screen col-md-7   '>
            <div className='inside-wrapper d-flex flex-column justify-content-center align-items-center '>
              <h1 className=' text-white fw-bold'>Welcome Back !</h1>
              <h5 className='login-to mt-1  text-light'>Login to control your arena.</h5>

              <p className='text-light mt-4'>Forgot How To Manage Everyhing? Let's see the user guide</p>

              <div>
                <button className='btn bg-light user-guide mb-3 px-3 rounded-pill'>User Guide</button>
              </div>


              <div className='text-center text-light foter'>
              <p className='my-0'>Design & Develop by : <a href='https://pakizatvl.com/' className='text-light'>Pakiza technovation ltd </a>
                &copy;All rights reserved to AUSTTAA</p>
              <p> <Link to="/privacy-policy" className=' text-warning' > Privacy & Policy & Term Conditions</Link></p>
            </div>

            </div>
       

          </div>
          <div className='right-side-screen col-md-5 mx-5 px-3 '>
            <div className='inside-wrapper mx-5  d-flex flex-column justify-content-center'>


              <div class="pe-5 mx-auto">
                <div className='me-5'>

                  <div className='user_image1'>
                    <img src={admin} style={{ width: "100px" }} />

                  </div>
                  <div className='mt-2'>
                    <h5>User Login</h5>
                  </div>

                </div>

                {/* <div className='footer-area'>
                  <span className='text-white'> Design & Develop by : <a href="https://pakizatvl.com/" style={{ color: 'black', textDecoration: 'none' }} target="_blank">Pakiza Technovation Ltd.</a></span>
                  <span className='d-block text-center text-white'>© 2022 | All rights reserved to AUSTTAA</span>
                </div> */}
              </div>

              <div class="form-part  mx-5 mt-4 d-flex  flex-column">
                <form onSubmit={handleSubmit}>
                  <div class="input-group mb-3">
                    <span class="input-group-text form-color text-white" id="basic-addon1"><i class="fa-solid fa-user px-1"></i></span>
                    <input type="text" class="form-control p-2" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name='email' onChange={handleChange} />
                  </div>
                  <div class="input-group mb-3 password-wrapper">
                    <span class="input-group-text   form-color text-white" id="basic-addon1">|**</span>
                    <input type="password" class="form-control p-2" id="myInput" placeholder="Password" aria-label="Password" name='password' onChange={handleChange} aria-describedby="basic-addon1" />
                    <div className='password-wrapper-trigger text-secondary' onClick={myFunction}>
                      <i class="fa fa-eye" aria-hidden="true" ></i>
                    </div>
                  </div>
                  <button type='submit' className='btn  text-light form-color d-block w-100 fs-5 rounded-3'> Log In  {
                    clickedRender ? <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span> : ''

                  }</button>

                  <div class="input-group  mt-4">
                    <p>Forgot Your Id or Password ? <span class="text-success"> <Link to="/admin-password-reset-form">RESET NOW</Link></span></p>
                  </div>
                </form>
              </div>


            </div>

          </div>
          {/* </div> */}


        </div>

      </div>

    </>

  )

}

export default AdminLogin