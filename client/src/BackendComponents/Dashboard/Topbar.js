import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import './Dashboard.css';
import moment from 'moment/moment';
function Topbar() {
    const [stickyClass, setStickyClass] = useState('');

    // const [total]

    const [clickedIcon, setClickedIcon] = useState(false);
    const [allUnreadNotification, setallUnreadNotification] = useState('');
    const [totalUnread, setTotalUnread] = useState('');
    console.log('hello', allUnreadNotification)
    const [render, setRender] = useState('')


    useEffect(() => {
        axios.get(`/api/all-notification-through-posts`).then(res => {
            if (res.data.status == 200) {

                setallUnreadNotification(res.data.all_unread)
                setTotalUnread(res.data.total_unread)
            }
        });
    }, [render])
    // const stickNavbar = () => {
    //     return window.scrollY >= 100 ? setStickyClass('sticky-nav') : setStickyClass('');

    // };

    // useEffect(()=>{
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         // window height changed for the demo
    //         windowHeight > 60 ? setStickyClass('sticky-nav') : setStickyClass('');
    //     }
    // },[])

    // window.addEventListener('scroll', stickNavbar);

    // useEffect(() => {
    //     console.log('useffect called');
    //     window.addEventListener('scroll', stickNavbar);
    //     return () => window.removeEventListener('scroll', stickNavbar);
    // }, []);


    return (
        <>
            <div className={`topbar d-flex p-2 justify-content-between align-items-center row border-bottom border-success sticky ${stickyClass}`}>
                <div className="topbar-left col-7">
                    <h5 className="text-success mt-1 ">
                        AUST Textile Alumni Association


                    </h5>
                </div>
                <div className="topbar-right d-flex justify-content-center  align-items-center  col-5" style={{ cursor: "pointer" }}>
                    <div className="toolbar-input-div col-8">
                        <div class="input-group rounded-3 border-success">
                            <span class="input-group-text bg-white " id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" class="form-control " placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='d-flex'>

                        <div className="mx-4" style={{ fontSize: '17px', position: 'relative' }} onClick={() => setClickedIcon(!clickedIcon)}>
                            <i className="fa fa-bell text-success" />
                            <span class="badge bg-danger badge-sm px-1 py-0  " style={{ position: 'absolute' }}>{totalUnread > 0 && totalUnread}</span>
                            {
                                clickedIcon && totalUnread > 0 &&


                                <div className=' mt-3 fs-6' style={{ position: "fixed", marginLeft: "-25%", zIndex: '1200', overflowY: 'scroll' }}>
                                    <div class="alert alert-secondary bg-white shadow-sm " role="alert">

                                        <button className='d-block btn btn-light d-block w-100 text-success  ms-auto fw-700' type='button' onClick={() => {
                                            axios.get(`/api/all-read-notification-through-posts`).then(res => {
                                                if (res.data.status == 200) {

                                                    setRender(res.data)
                                                }
                                            });
                                        }
                                        }>Mark all read</button>
                                        {
                                            allUnreadNotification.map((item, i) => {
                                                return (
                                                    <>

                                                        <p className='mb-3 px-2 '>
                                                            <Link to="/view-all-events" style={{ textDecoration: 'none', color: 'black' }}>
                                                                {item.users.full_name} has posted a new event on {moment(item.created_at).format("LL")}
                                                            </Link>
                                                        </p>

                                                    </>
                                                )

                                            })
                                        }


                                        {/* 
                                        <button className='d-block btn btn-light w-100 fw-700' type='button' onClick={() => {
                                            axios.get(`/api/all-read-notification-through-posts`).then(res => {
                                                if (res.data.status == 200) {

                                                    setRender(res.data)
                                                }
                                            });
                                        }
                                        }>Mark all read</button> */}

                                    </div>

                                </div>




                            }

                            {
                                clickedIcon && totalUnread == 0 &&


                                <div className=' mt-3 fs-6' style={{ position: "fixed", marginLeft: "-10%", zIndex: '1200' }}>
                                    <div class="alert alert-danger shadow-sm py-1" role="alert">


                                        <p className='mb-3 px-2 mt-1  '>No notification available</p>


                                    </div>

                                </div>




                            }



                        </div>
                        <div className="ms-3" style={{ fontSize: '17px' }}>
                            <i class="fa-solid fa-envelope text-success"></i>

                        </div>
                    </div>


                    {/* <div className="">
                        <i className="fa fa-tasks text-success"/>
                    </div> */}

                </div>

            </div>


        </>
    )
}

export default Topbar;