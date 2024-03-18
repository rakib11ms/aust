import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route, Outlet, useHistory } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';




function ProtectedRoutes() {


    // axios.interceptors.response.use(
    //     function (response) {
    //         return response;
    //     },
    //     function (error) {
    //         if (error.response && error.response.status === 401) {
    //             alert("Unauthenticated");
    //             // Redirect the user to the login page
    //             window.location.href = '/admin-login';
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    return (
        <>

            {/* {localStorage.getItem('user_type') ? <Outlet /> : <Navigate to="/admin-login" />
            } */}
                        {localStorage.getItem('user_type')? <Outlet /> : <Navigate to="/admin-login" />}

        </>
    )
}

export default ProtectedRoutes;