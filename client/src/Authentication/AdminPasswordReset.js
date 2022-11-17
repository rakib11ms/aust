import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

function AdminPasswordReset() {

  const [clickedRender, setClickedRender] = useState(false)


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
          setClickedRender(false);

          let admin_auth = {
            name: res.data.username,
            user_type: res.data.user_type,
            token: res.data.token,
            email: res.data.email,
            status: 'yes'
          }
          // update(admin_auth)
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

        }
        else {
          Swal.fire('Invalid Credentials', '', 'warning')

        }
      })

    });
  }












  return (
    <>

      <div class="container-fluid login-wrap">
        <div className='row '>
          <div className='left-side-screen col-md-7 ' style={{ backgroundColor: '#DFA800' }}>
            <div className='inside-wrapper d-flex flex-column justify-content-center align-items-center '>
              <h1 className=' text-white fw-bold'>Reset !</h1>
              <h5 className='login-to mt-1  text-light'>Reset Your Login Credential.</h5>

              <p className='text-light mt-4'>Forgot How To Manage Everyhing? Let's see the user guide</p>

              <div>
                <button className='btn bg-light user-guide mb-3 px-3 rounded-pill'>User Guide</button>
              </div>


            </div>


          </div>
          <div className='right-side-screen col-md-5 mx-5 px-3'>
            <div className='inside-wrapper mx-5  d-flex flex-column justify-content-center'>


              <div class="form-part  mx-5 mt-5 d-flex  flex-column">
                <form onSubmit={handleSubmit}>
                  <div className='my-1'>
                    <span className='fs-6'>Your Email or Phone </span>
                  </div>
                  <div class="input-group mb-3 rounded-3">
                    <span class="input-group-text form-color text-white" style={{ backgroundColor: '#DFA800' }} id="basic-addon1"><i class="fa-solid fa-user px-1"></i></span>
                    <input type="text" class="form-control p-2" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name='email' onChange={handleChange} />
                  </div>

                  <div className='my-1'>
                    <span className='fs-6'>Your New Password </span>
                  </div>
                  <div class="input-group mb-3 " >
                    <span class="input-group-text   form-color text-white" style={{ backgroundColor: '#DFA800' }} id="basic-addon1">|**</span>
                    <input type="password" class="form-control p-2" placeholder="Password" aria-label="Password" name='password' onChange={handleChange} aria-describedby="basic-addon1" />
                  </div>
                  <div className='my-1'>
                    <span className='fs-6'>Confirm Password </span>
                  </div>
                  <div class="input-group mb-3 rounded-3">
                    <span class="input-group-text   form-color text-white" style={{ backgroundColor: '#DFA800' }} id="basic-addon1">|**</span>
                    <input type="password" class="form-control p-2" placeholder="Confirm Password" aria-label="Password" name='password' onChange={handleChange} aria-describedby="basic-addon1" />
                  </div>
                  <button type='submit' className='btn  text-light form-color d-block w-100 fs-5 rounded-3 btn btn-warning' style={{ backgroundColor: '#DFA800' }}> RESET  {
                    clickedRender ? <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span> : ''

                  }</button>


                </form>
                <div class="input-group  mt-4">
                  <p>Have a Account ? <Link to="/admin-login"> <span class="text-success"> Login Now </span></Link></p>
                </div>
              </div>
            </div>

          </div>
          {/* </div> */}
        </div>
      </div>

    </>

  )

}

export default AdminPasswordReset