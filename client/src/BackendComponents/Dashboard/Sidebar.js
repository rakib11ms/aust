import User from '../../image/User.png'
import React, { useState, useEffect } from 'react';
import EastIcon from '@mui/icons-material/East';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import './Dashboard.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);
    const [isActive12, setIsActive12] = useState(false);
    const [isActive13, setIsActive13] = useState(false);
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


    useEffect(() => {

        path == '/view-all-jobs' && setIsActive3(true) || path == '/job-configuration' && setIsActive3(true) || path == '/create-job-post' && setIsActive3(true)
        path == '/view-all-users' && setIsActive(true) || path == '/role-management' && setIsActive(true) || path == '/user-configuration' && setIsActive(true)
        path == '/view-blog-article' && setIsActive4(true) || path == '/create-blog-article' && setIsActive4(true) || path == '/blog-article-configuration' && setIsActive4(true)
        path == '/post-type' && setIsActive5(true) || path == '/post-configuration' && setIsActive5(true)
        path == '/create-event' && setIsActive6(true) || path == '/view-all-events' && setIsActive6(true) || path == '/event-configuration' && setIsActive6(true) || path == '/view-event-payment ' && setIsActive6(true)
        path == '/create-advertisement' && setIsActive7(true) || path == '/view-all-advertisement' && setIsActive7(true)
        path == '/view-all-banner' && setIsActive8(true) || path == '/create-banner' && setIsActive8(true)
        path == '/view-notice-news' && setIsActive10(true) || path == '/create-notice-news' && setIsActive10(true) || path == '/notice-news-configuration' && setIsActive10(true)
        path == '/create-vlog' && setIsActive11(true) || path == '/view-vlog' && setIsActive11(true) || path == '/vlog-configuration' && setIsActive11(true)
        path == '/create-global-notification' && setIsActive12(true) || path == '/view-global-notification' && setIsActive12(true)
        path == '/create-organization' && setIsActive13(true) || path == '/view-organization' && setIsActive13(true)

    }, [path])

    return (
        <>
            <div className="">
                <div className="sidebar-top-content d-flex justify-content-between align-items-center mt-3">
                    <div class="">
                        <img src={`${global.img_url}/images/${localStorage.getItem('image')}`} className="rounded-pill" style={{ width: "45px", objectFit: "cover" }} />
                    </div>
                    <div class="p-0 m-0 text-white">
                        {/* <h6 className='m-1'>{localStorage.getItem('full_name').length>12?localStorage.getItem('full_name').substring(0, 12):'...'}
                         </h6> */}
                        <h6 className='m-1'>{localStorage.getItem('full_name')}
                        </h6>
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

                        <div id='user-mange' className={`menu-name  d-flex justify-content-between align-items-center`} onClick={() => setIsActive(!isActive)} >
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i className='fas fa-user d-block' />

                                <h6 className='mx-2 mt-2 text-white '>User Management</h6>

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
                                            <Link to="/view-all-users" className={`text-form ${path == '/view-all-users' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}  >View All Users</Link>
                                        </li>
                                        {/* <li className='mt-1'>
                                            <a href='#' className={`text-form ${path == '/' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>Create User</a>
                                        </li> */}
                                        {/* <li className='mt-1'>
                                            <a href='#' className={`text-form ${path == '/' ? 'text-warning' : 'text-light '}`}>Aproval List</a>
                                        </li> */}
                                        <li className='mt-1'>
                                            <Link to="/role-management" className={`text-form ${path == '/role-management' ? 'text-light bg-active-color pt-1 pe-1 pb-1 rounded' : 'text-light'}`}  >Role Management</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <a href='#' className={`text-form ${path == '/' ? 'text-light bg-active-color pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>E-Resister Users </a>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/user-configuration" className={`text-form ${path == '/user-configuration' ? 'text-light bg-active-color pt-1 pe-3 pb-1 rounded' : 'text-light '}`} >Configuration</Link>
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

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive3(!isActive3)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-suitcase d-block mt-2"></i>

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
                                            <Link to="/view-all-jobs" className={`text-form ${path == '/view-all-jobs' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`} >View All Jobs</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/job-configuration" className={`text-form ${path == '/job-configuration' ? 'text-light bg-active-color pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>Job Configuration</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/create-job-post" className={`text-form ${path == '/create-job-post' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>Create a Job</Link>
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

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive4(!isActive4)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i className='fa-solid fa-blog d-block mt-2' />

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
                                            <Link to="/view-blog-article" className={`text-form ${path == '/view-blog-article' ? 'text-light bg-active-color ps-1 pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>View Article/Blog</Link>

                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/create-blog-article" className={`text-form ${path == '/create-blog-article' ? 'text-light bg-active-color ps-1 pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>Add Article/Blog</Link>

                                        </li>

                                        <li className='mt-1'>
                                            <Link to="/blog-article-configuration" className={`text-form ${path == '/blog-article-configuration' ? 'text-light bg-active-color ps-2 pt-1 pe-3 pb-1 rounded' : 'text-light '}`}>Configuration</Link>

                                        </li>
                                    </ul>
                                </>

                            }
                        </div>
                    </div>




                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive5(!isActive5)}>
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
                                            <Link to='/post-type' className={`text-form ${path == '/post-type' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`} >User Posts </Link>
                                        </li>
                                        <li>
                                            <Link to='/post-configuration' className={`text-form ${path == '/post-configuration' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`} >Configuration </Link>

                                        </li>

                                    </ul>
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive6(!isActive6)}>
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
                                        <li className='mt-1'>
                                            <Link to='/create-event' className={`text-form ${path == '/create-event' ? 'text-light bg-active-color ps-2 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>Create Event</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to='/view-all-events' className={`text-form ${path == '/view-all-events' ? 'text-light bg-active-color ps-1 pt-1 pe-3 pb-1 rounded' : 'text-light '}`}>View All Events</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to='/event-configuration' className={`text-form ${path == '/event-configuration' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>Configuration</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to='/view-event-payment' className={`text-form ${path == '/view-event-payment' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>View Payment</Link>
                                        </li>

                                    </ul>
                                </>

                            }
                        </div>
                    </div>
                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive7(!isActive7)}>
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
                                            <Link to='/create-advertisement' className={`text-form ${path == '/create-advertisement' ? 'text-light bg-active-color ps-1 pt-1 pe-2 pb-1 rounded' : 'text-light '}`}>Create</Link>
                                        </li>
                                        <li class="mt-1">
                                            <Link to='/view-all-advertisement' className={`text-form ${path == '/view-all-advertisement' ? 'text-light bg-active-color ps-1 pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>View</Link>
                                        </li>


                                    </ul>
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive8(!isActive8)}>
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
                                            <Link to='/view-all-banner' className={`text-form ${path == '/view-all-banner' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded' : 'text-light '}`}>View Banner</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link to='/create-banner' className={`text-form ${path == '/create-banner' ? 'text-light bg-active-color ps-1 pt-1 pe-5 pb-1 rounded' : 'text-light '}`}>Create</Link>
                                        </li>


                                    </ul>
                                </>

                            }
                        </div>
                    </div>


                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive10(!isActive10)}>
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
                                            <Link to="/view-notice-news" className={`text-form ${path == '/view-notice-news' ? 'text-light bg-active-color ps-1 pt-1 pe-3 pb-1 rounded' : 'text-light '}`}>Notices / News</Link>

                                        </li>
                                        <li className='mt-1'>
                                            <Link to="/create-notice-news" className={`text-form ${path == '/create-notice-news' ? 'text-light bg-active-color ps-1 pt-1 pe-1 pb-1 rounded' : 'text-light '}`}>Add Notice/News</Link>

                                        </li>

                                        <li className='mt-1'>
                                            <Link to="/notice-news-configuration" className={`text-form ${path == '/notice-news-configuration' ? 'text-light bg-active-color ps-1 pt-1 pe-3 pb-1 rounded' : 'text-light '}`}>Configuration</Link>

                                        </li>
                                    </ul>
                                </>

                            }
                        </div>
                    </div>


                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive9(!isActive9)}>
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
                                    {/* <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/settings' className={`text-form ${path == '/settings' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Get In <EastIcon className='ms-3' /></Link>
                                        </li>

                                    </ul> */}
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive11(!isActive11)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-rectangle-ad mt-1"></i>

                                <h6 className='mx-2 mt-3'>Vlog</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive11 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive11 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/create-vlog' className={`text-form ${path == '/create-vlog' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Create</Link>
                                        </li>
                                        <li>
                                            <Link to='/view-vlog' className={`text-form ${path == '/view-vlog' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>View</Link>
                                        </li>

                                        <li>
                                            <Link to='/vlog-configuration' className={`text-form ${path == '/vlog-configuration' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Configuration</Link>
                                        </li>

                                    </ul>
                                </>

                            }
                        </div>
                    </div>


                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive12(!isActive12)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa-solid fa-bell mt-1"></i>

                                <h6 className='mx-2 mt-3'>Notification</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive11 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive12 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/create-global-notification' className={`text-form ${path == '/create-global-notification' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Create</Link>
                                        </li>
                                        <li>
                                            <Link to='/view-global-notification' className={`text-form ${path == '/view-global-notification' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>View</Link>
                                        </li>



                                    </ul>
                                </>

                            }
                        </div>
                    </div>

                    <div className=''>

                        <div id='user-mange' className='menu-name  d-flex justify-content-between align-items-center' onClick={() => setIsActive13(!isActive13)}>
                            <div class="menu-name-logo d-flex align-items-center text-white">
                                <i class="fa fa-building-o" aria-hidden="true"></i>

                                <h6 className='mx-2 mt-3'>Organization Setup</h6>

                            </div>
                            <div className='menu-content text-white mx-2 '>
                                {isActive13 ?
                                    <b className=''>-</b>
                                    :
                                    <b className=''>+</b>
                                }                            </div>
                        </div>
                        <div class="menu-content ">

                            {
                                isActive13 && <>
                                    <ul className='text-light mx-4 '>
                                        <li>
                                            <Link to='/create-organization' className={`text-form ${path == '/create-organization' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Create</Link>
                                        </li>
                                        <li>
                                            <Link to='/view-organization' className={`text-form ${path == '/view-organization' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>View</Link>
                                        </li>

                                        <li>
                                            <Link to='/create-district' className={`text-form ${path == '/create-district' ? 'text-light bg-active-color ps-1 pt-1 pe-4 pb-1 rounded ' : 'text-light '}`}>Create District</Link>
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