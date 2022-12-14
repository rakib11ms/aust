import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route,useParams } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

function AdminPasswordReset() {

  const navigate = useNavigate();

  const [clickedRender, setClickedRender] = useState(false)
  const [validationError, setVaidationError] = useState();

  console.log('validation errors', validationError);
  const { id } = useParams();
  const [inputState, setinputState] = useState({
    email: '',
    new_password: '',
    re_type_password: '',
    token:id
  })
  const handleChange = (e) => {
    setinputState({
      ...inputState, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickedRender(true);
    // console.log('admin info check', inputState)

    // update('yes')

    // console.log('state checking', inputState)

    // axios.get('sanctum/csrf-cookie').then(response => {

    axios.post('/api/reset-admin-password', inputState).then(res => {


      if (res.data.status == 200) {
        setClickedRender(false);
        navigate('/admin-login')

        // let admin_auth = {
        //   name: res.data.username,
        //   user_type: res.data.user_type,
        //   token: res.data.token,
        //   email: res.data.email,
        //   status: 'yes'
        // }
        // update(admin_auth)
        //     localStorage.setItem('auth_token',res.data.token);
        // localStorage.setItem('username',res.data.username);
        // localStorage.setItem('email',res.data.email);
        // localStorage.setItem('user_type',res.data.user_type);
        // localStorage.setItem('user_id',res.data.user_id);
        // localStorage.setItem('user_info',JSON. stringify(res.data.user_info) );


        //   if (res.data.user_type=== 'admin') {

        //     navigate('/dashboard')
        // }
        // else if(res.data.user_type=== 'user'){
        //     navigate('/')

        // }

      }
      else if (res.data.status == 400) {
        // Swal.fire(res.data.message, '', 'warning')
        setVaidationError(res.data.validation_errors);
        setClickedRender(false);


      }
      else {
        Swal.fire(res.data.message, '', 'warning')
        setClickedRender(false);


      }
    })

    // });
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
                    <input type="text" class="form-control p-2" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name='email' value={inputState.email} onChange={handleChange} />
                  </div>
                  {/* <span className='text-danger'>{validationError.new_password[0]}</span> */}


                  <div className='my-1'>
                    <span className='fs-6'>Your New Password </span>
                  </div>
                  <div class="input-group mb-3 " >
                    <span class="input-group-text   form-color text-white" style={{ backgroundColor: '#DFA800' }} id="basic-addon1">|**</span>
                    <input type="password" class="form-control p-2" placeholder="Password" aria-label="Password" value={inputState.new_password} name='new_password' onChange={handleChange} aria-describedby="basic-addon1" />
                  </div>
                  {
                    validationError  && <span className='text-danger'>{validationError.new_password}</span>

                  }

                  <div className='my-1'>
                    <span className='fs-6'>Confirm Password </span>
                  </div>
                  <div class="input-group mb-3 rounded-3">
                    <span class="input-group-text   form-color text-white" style={{ backgroundColor: '#DFA800' }} id="basic-addon1">|**</span>
                    <input type="password" class="form-control p-2" placeholder="Confirm Password" aria-label="Password" value={inputState.re_type_password} name='re_type_password' onChange={handleChange} aria-describedby="basic-addon1" />
                  </div>
                  {
                    validationError  && <span className='text-danger'>{validationError.re_type_password}</span>

                  }

                  <button type='submit' className='btn  text-light form-color d-block mt-3 w-100 fs-5 rounded-3 btn btn-warning' style={{ backgroundColor: '#DFA800' }}> RESET  {
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