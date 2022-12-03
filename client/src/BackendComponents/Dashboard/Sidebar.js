import User from '../../image/User.png'
import React, { useState, useEffect } from 'react';
import EastIcon from '@mui/icons-material/East';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

function Sidebar() {
    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(true);
    const [isActive4, setIsActive4] = useState(true);
    const [isActive5, setIsActive5] = useState(true);
    const [isActive6, setIsActive6] = useState(true);
    const [isActive7, setIsActive7] = useState(true);
    const [isActive8, setIsActive8] = useState(true);
    const [isActive9, setIsActive9] = useState(true);
    const [isActive10, setIsActive10] = useState(true);
    console.log('is active cheking', isActive)


    const navigate = useNavigate();
    const handleLogOut = (e) => {
        e.preventDefault();
        axios.post('/api/admin-logout').then(res => {
            if (res.data.status == 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('user_type');
                localStorage.removeItem('user_info');
                localStorage.removeItem('user_id');

                navigate('/admin-login')
                // Swal.fire('Logged Out successfully', '', 'success')
                // window.location.reload();

            }

        })
    }

    // const [stickyClass, setStickyClass] = useState('');



    // const stickNavbar = () => {
    //     return window.scrollY >= 100 ? setStickyClass('sticky-nav') : setStickyClass('');

    // };
    // window.addEventListener('scroll', stickNavbar);
    const [trigger, setTrigger] = useState('')
    console.log('trigger', trigger);
    const handleTrigger = (val) => {
        setTrigger(val)
    }
    var path = window.location.pathname;
    console.log('widnow', path)
    return (
        <>
            <div className="">
                <div className="sidebar-top-content d-flex justify-content-between align-items-center mt-3">
                    <div class="">
                        <img src={User} style={{ width: "45px" }} />
                    </div>
                    <div class="p-0 m-0 text-white">
                        <h6 className='m-1'>Anwarul Islam</h6>
                        <span>Admin</span>
                    </div>
                    <div class=" text-white" onClick={handleLogOut}>
                        <i class="fa-solid fa-right-from-bracket" ></i>
                    </div>


                </div>

                <div className='sidebar-search '>
                    <div class="input-group input-group-sm py-0 mt-4 ">
                        <span class="input-group-text bg-transparent" id="basic-addon1">
                            <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </span>

                        <input type="text" class="form-control bg-transparent" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                {/* <div className='home-menu d-flex  mt-4 px-2 menu-left rounded-2'>
                    <i className='fa-solid fa-home mt-2 d-block text-white ' />
                    <p className='mx-2 fw-500 my-1 text-white'>Home</p>

                </div> */}
                <Link to="/admin-dashboard" style={{ textDecoration: 'none' }}>
                    <div className='home-menu d-flex  mt-4 py-1 px-2 menu-left rounded-2'>
                        <i className='fa-solid fa-home mt-2 d-block text-white ' />
                        <h6 className='mx-2 fw-500 my-1 text-white'>Home</h6>


                    </div>
                </Link>

                <div className='mt-2'>
                    <div className=''>

                        <div className={`menu-name  d-flex justify-content-between align-items-center`} onClick={() => setIsActive(!isActive)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i className='fas fa-user d-block' />

                                <h6 className='mx-2 mt-2 text-white'>User Management</h6>

                            </div>
                            <div className='menu-content  mx-2 text-white'>
                                {isActive ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }
                            </div>
                        </div>
                        <div class="menu-content ">
                            {
                                isActive && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to="/view-all-users" className={`text-form ${path == '/view-all-users' ? 'text-warning' : 'text-light '}`}  >View All Users</Link>
                                        </li>
                                        <li>
                                            <a href='#' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Create User</a>
                                        </li>
                                        <li>
                                            <a href='#' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Aproval List</a>
                                        </li>
                                        <li>
                                            <Link to="/role-management" className={`text-form ${path == '/role-management' ? 'text-warning' : 'text-light '}`}  >Role Management</Link>
                                        </li>
                                        <li>
                                            <a href='#' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>E-Resister Users </a>
                                        </li>
                                        <li>
                                            <Link to="/user-configuration" className={`text-form ${path == '/user-configuration' ? 'text-warning' : 'text-light '}`} >Configuration</Link>
                                        </li>
                                    </ul>
                                </>

                            }
                        </div>
                    </div>
                    <div className=''>
                        {/* {`menu-name  d-flex justify-content-between align-items-center ${isActive2?'px-2 menu-left rounded-2':'' } `}  */}
                        {/* <div className={`menu-name  d-flex justify-content-between align-items-center`} onClick={() => setIsActive2(!isActive2)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-newspaper d-block"></i>

                                <h6 className='mx-2 mt-2'>Notice & News </h6>

                            </div>
                            <div className='menu-content  mx-2 text-white '>
                                {isActive2 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }
                            </div>
                        </div> */}
                        {/* <div class="menu-content ">
                            {
                                isActive2 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <a href=''className={`text-form ${path == '/create-blog-article' ? 'text-warning' : 'text-light '}`}>Home</a>
                                        </li>
                                        <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>About</a>
                                        </li>
                                        <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Contact</a>
                                        </li>
                                        <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Home</a>
                                        </li>
                                    </ul>
                                </>

                            }
                        </div> */}
                    </div>
                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive3(!isActive3)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-suitcase d-block"></i>

                                <h6 className='mx-2 mt-3'>Job Management</h6>

                            </div>
                            <div className='menu-content  text-white mx-2 '>
                                {isActive3 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }
                            </div>
                        </div>
                        <div class="menu-content ">
                            {
                                isActive3 && <>
                                    <ul className='text-light mx-4 '>

                                        <li className='mt-1'>
                                            <Link to="/view-all-jobs" className={`text-form ${path == '/view-all-jobs' ? 'text-warning' : 'text-light '}`}>View All Jobs</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/job-configuration" className={`text-form ${path == '/job-configuration' ? 'text-warning' : 'text-light '}`}>Job Configuration</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/create-job-post" className={`text-form ${path == '/create-job-post' ? 'text-warning' : 'text-light '}`}>Create a Job</Link>
                                        </li>
                                        {/* <li className='mt-1'>
                                            <Link to="" className={`text-form ${path == '/view-all-banner' ? 'text-warning' : 'text-light '}`}>Approval List</Link>
                                        </li>

                                        <li className='mt-1'>
                                            <Link to="" className={`text-form ${path == '/view-all-banner' ? 'text-warning' : 'text-light '}`}>Archeived</Link>
                                        </li> */}
                                    </ul>
                                </>

                            }

                        </div>
                    </div>

                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive4(!isActive4)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i className='fa-solid fa-blog d-block' />

                                <h6 className='mx-2 mt-3'>Blogs & Articles</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive4 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive4 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to="/view-blog-article" className={`text-form ${path == '/view-blog-article' ? 'text-warning' : 'text-light '}`}>View Article/Blog</Link>

                                        </li>
                                        <li>
                                            <Link to="/create-blog-article" className={`text-form ${path == '/create-blog-article' ? 'text-warning' : 'text-light '}`}>Add Article/Blog</Link>

                                        </li>

                                        <li>
                                            <Link to="/blog-article-configuration" className={`text-form ${path == '/blog-article-configuration' ? 'text-warning' : 'text-light '}`}>Configuration</Link>

                                        </li>
                                    </ul>
                                </>

                            }
                        </div>
                    </div>




                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive5(!isActive5)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-brands fa-usps mt-1"></i>

                                <h6 className='mx-2 mt-3'>User Posts</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive5 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive5 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/post-type' className={`text-form ${path == '/post-type' ? 'text-warning' : 'text-light '}`} >User Posts </Link>
                                        </li>
                                        {/* <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>About</a>
                                        </li>
                                        <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Contact</a>
                                        </li>
                                        <li>
                                            <a href='' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Home</a>
                                        </li> */}
                                    </ul>
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive6(!isActive6)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-sharp fa-solid fa-calendar-days mt-1"></i>

                                <h6 className='mx-2 mt-3'>Events</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive6 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive6 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/create-event' className={`text-form ${path == '/create-event' ? 'text-warning' : 'text-light '}`}>Create Event</Link>
                                        </li>
                                        <li>
                                            <Link to='/view-all-events' className={`text-form ${path == '/view-all-events' ? 'text-warning' : 'text-light '}`}>View All Events</Link>
                                        </li>
                                        <li>
                                            <Link to='/event-configuration' className={`text-form ${path == '/event-configuration' ? 'text-warning' : 'text-light '}`}>Configuration</Link>
                                        </li>
                                        <li>
                                            <Link to='/view-event-payment' className={`text-form ${path == '/view-event-payment' ? 'text-warning' : 'text-light '}`}>View Payment</Link>
                                        </li>

                                    </ul>
                                </>

                            }
                        </div>
                    </div>
                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive7(!isActive7)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-rectangle-ad mt-1"></i>

                                <h6 className='mx-2 mt-3'>Advertisement</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive7 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive7 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/create-advertisement' className={`text-form ${path == '/create-advertisement' ? 'text-warning' : 'text-light '}`}>Create Advment</Link>
                                        </li>
                                        <li class="mt-1">
                                            <Link to='/view-all-advertisement' className={`text-form ${path == '/view-all-advertisement' ? 'text-warning' : 'text-light '}`}>View All Advment</Link>
                                        </li>


                                    </ul>
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive8(!isActive8)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-rectangle-ad mt-1"></i>

                                <h6 className='mx-2 mt-3'>Banner</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive8 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive8 && <>
                                    <ul className='text-light mx-4 '>
                                        <li class="mt-1">
                                            <Link to='/view-all-banner' className={`text-form ${path == '/view-all-banner' ? 'text-warning' : 'text-light '}`}>View Banner</Link>
                                        </li>
                                        <li>
                                            <Link to='/create-banner' className={`text-form ${path == '/create-banner' ? 'text-warning' : 'text-light '}`}>Create</Link>
                                        </li>


                                    </ul>
                                </>

                            }
                        </div>
                    </div>


                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive10(!isActive10)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i className='fa-solid fa-blog d-block' />

                                <h6 className='mx-2 mt-3'>Notice & News</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive10 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive10 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to="/view-notice-news" className={`text-form ${path == '/view-notice-news' ? 'text-warning' : 'text-light '}`}>View Notice/News</Link>

                                        </li>
                                        <li>
                                            <Link to="/create-notice-news" className={`text-form ${path == '/create-notice-news' ? 'text-warning' : 'text-light '}`}>Add Notice/News</Link>

                                        </li>

                                        <li>
                                            <Link to="/notice-news-configuration" className={`text-form ${path == '/notice-news-configuration' ? 'text-warning' : 'text-light '}`}>Configuration</Link>

                                        </li>
                                    </ul>
                                </>

                            }
                        </div>
                    </div>








                    <div className=''>

                        <div className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive9(!isActive9)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-rectangle-ad mt-1"></i>

                                <h6 className='mx-2 mt-3'>Settings</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive9 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive9 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/settings' className={`text-form ${path == '/settings' ? 'text-warning' : 'text-light '}`}>Get In <EastIcon /></Link>
                                        </li>

                                    </ul>
                                </>

                            }
                        </div>
                    </div>


                </div>




            </div>




            {/* <div className=' checker'>
                <h6 className='fw-500 my-1 text-white bg-danger d-block border w-100 m-0  '>Settings</h6>

                </div> */}




        </>
    )
}

export default Sidebar;