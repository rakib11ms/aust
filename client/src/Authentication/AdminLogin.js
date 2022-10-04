import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

function AdminLogin(){
    return(
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


        </div>


      </div>
      <div className='right-side-screen col-md-5 mx-5 px-3'>
        <div className='inside-wrapper mx-5  d-flex flex-column justify-content-center'>
          <div class="row mx-5 ">

            {/* <div className='card-top d-flex'> */}
            <div className='shadow col-6 p-3    text-center'>
              <div className='image-admin'>
                <img src={admin} style={{ width: "100px" }} />

              </div>
              <h5 className='mt-2'>Admin</h5>

            </div>
            <div className='col-6  p-3 text-center'>
              <div className='image-moderator mx-2'>
                <img src={moderator} class="p-2"style={{ width: "90px" }} />

              </div>
              <h5 className='pe-3 mt-3'>Moderator</h5>


            </div>
          </div>

          <div class="form-part  mx-5 mt-5 d-flex  flex-column">
            <div class="input-group mb-3">
              <span class="input-group-text form-color text-white" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
              <input type="text" class="form-control p-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text   form-color text-white" id="basic-addon1">|**</span>
              <input type="text" class="form-control p-2" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
              <button type='' className='btn  text-light form-color d-block'> Log In</button>

            <div class="input-group  mt-4">
              <p>Forgot Your Id or Password ? <span class="text-success"> RESET NOW</span></p>
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

export default AdminLogin