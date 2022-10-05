import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moderator from '../image/moderator.png'
import admin from '../image/admin.png'
import { Link, Navigate, useNavigate, Routes, Route, Outlet } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

function ProtectedRoutes() {

    return (
        <>
            {/* {localStorage.getItem('user_info')? <Outlet/> :<Navigate to="admin-login"/>
        } */}
            {localStorage.getItem('user_type') !==null? <Outlet /> : <Navigate to="admin-login" />
            }
        </>
    )
}

export default ProtectedRoutes;