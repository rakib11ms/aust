import MasterDashboardLayout from "./MasterDashboardLayout";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import './Dashboard.css'
import Publication from "./Publication";
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Dashboard() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        // cssEase: "linear",
        // variableWidth: 90,


        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }]
    };

    const [totalPosts, settotalPosts] = useState('');
    const [totalUsers, settotalUsers] = useState('');
    const [totalAnnouncements, settotalAnnouncements] = useState('');
    const [totalJobs, settotalJobs] = useState('');
    const [totalAdvertisements, settotalAdverisements] = useState('');

    const [allActiveNoticeNews, setAllActiveNoticeNews] = useState([]);
    const [allActiveEvents, setAllActiveEvents] = useState([]);
    // console.log('hola',allActiveEvents,allActiveNoticeNews)
    useEffect(() => {
        axios.get(`/api/total-users-jobs-posts-announce-advertisements`).then(res => {
            if (res.data.status == 200) {
                settotalUsers(res.data.total_users);
                settotalAdverisements(res.data.total_advertisements)
                settotalJobs(res.data.total_Jobs)
                settotalPosts(res.data.total_posts)
            }
        });
        axios.get(`/api/all-notice-news`).then(res => {
            if (res.data.status == 200) {

                setAllActiveNoticeNews(res.data.active_notice_news)
            }
        });

        axios.get(`/api/all-event-posts`).then(res => {
            if (res.data.status == 200) {

                setAllActiveEvents(res.data.all_active_events)
            }
        });

    }, [])

    const [postTabSection, setPostTabSection] = useState('news');
    return (
        <>
            {/* <MasterDashboardLayout>
                <section className="dashboard-main-content"> */}
            {/* <h1>Hello Dashboard Main Content</h1> */}

            {/* </section>

            </MasterDashboardLayout> */}


            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar /> */}
            <MasterDashboardLayout>
                <section className="dashboard-card-top-wrapper mt-3">

                    <Link to="/view-all-users" style={{ textDecoration: 'none', color: "black" }}>

                        <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                            <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                    {/* p-1 */}
                                    <i class="fa-solid fa-users fa-2x  "></i>
                                </div>
                                <div className="col-6 mt-1">
                                    <h5 className="fw-bold">{totalUsers}</h5>
                                    <p className="m-0">Total</p>
                                    <h6 className="m-0">Users</h6>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="/post-type" style={{ textDecoration: 'none', color: "black" }}>


                        <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                            <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                    {/* p-1 */}
                                    <i class="fa-solid fa-newspaper fa-2x  "></i>
                                </div>
                                <div className="col-6 mt-1">
                                    <h5 className="fw-bold">{totalPosts}</h5>
                                    <p className="m-0">Total</p>
                                    <h6 className="m-0">Posts</h6>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                        <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                            <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                {/* p-1 */}
                                <i class="fa-solid fa-bullhorn fa-2x "></i>
                            </div>
                            <div className="col-6 mt-1">
                                <h5 className="fw-bold">103</h5>
                                <p className="m-0">Total</p>
                                <h6 className="m-0">Announces</h6>
                            </div>
                        </div>
                    </div>



                    <Link to="/view-all-jobs" style={{ textDecoration: 'none', color: "black" }}>

                        <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                            <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                <div className="fontaws-bold rounded-3 py-4 text-light col-3 ">
                                    {/* p-1 */}
                                    <i class="fa-solid fa-suitcase  fa-2x  "></i>
                                </div>
                                <div className="col-6 mt-1">
                                    <h5 className="fw-bold">{totalJobs}</h5>
                                    <p className="m-0">Total</p>
                                    <h6 className="m-0">Jobs</h6>
                                </div>
                            </div>
                        </div>
                    </Link>



                    <Link to="/view-all-advertisement" style={{ textDecoration: 'none', color: "black" }}>

                        <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                            <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                <div className="fontaws-bold rounded-3 py-4 text-light  col-3">
                                    {/* p-1 */}
                                    {/* <i class="fa-solid fa-newspaper fa-2x mx-1 "></i> */}
                                    <i class="fa-solid fa-rectangle-ad fa-2x"></i>
                                </div>
                                <div className="col-6 mt-1">
                                    <h5 className="fw-bold">{totalAdvertisements}</h5>
                                    <p className="m-0">Total</p>
                                    <h6 className="m-0">Advertisement</h6>
                                </div>
                            </div>
                        </div>
                    </Link>




                </section>

                {/* <Publication /> */}

                <hr />
                <div className="publication mt-3">
                    <h6 className="text-success ">Publications & Posts</h6>

                    <nav className="publication-nav text-normal fw-300 ">
                        <div className="row d-flex align-items-center">
                            <div className="publication-left col-md-6">
                                <ul className="d-flex justify-content-between all-left-public-li m-0 p-0">
                                    <li className={`${postTabSection == 'news' ? 'fw-bold' : ""}`} onClick={() => setPostTabSection('news')}>
                                        News
                                    </li>
                                    <li className={`${postTabSection == 'events' ? 'fw-bold' : ""}`} onClick={() => setPostTabSection('events')}>
                                        Events
                                    </li>
                                    <li className={`${postTabSection == 'announcements' ? 'fw-bold' : ""}`} onClick={() => setPostTabSection('announcements')}>
                                        Announcements
                                    </li>
                                    <li className={`${postTabSection == 'articles' ? 'fw-bold' : ""}`} onClick={() => setPostTabSection('articles')}>
                                        Articles
                                    </li>
                                    <li className={`${postTabSection == 'blogs' ? 'fw-bold' : ""}`} onClick={() => setPostTabSection('blogs')}>
                                        Blogs
                                    </li>
                                    <li className="pending-btn px-2 ">
                                        Pendings
                                        <span class="badge bg-danger badge-sm badge-noti">4</span>

                                    </li>

                                </ul>

                            </div>

                            <div className="publication-right col-md-6  d-flex justify-content-end align-items-center">

                                <div className="right-fn-icon me-3 border px-1 text-success border-success rounded">
                                    {
                                        postTabSection == 'news' ?
                                            <Link to="/create-notice-news" style={{ textDecoration: 'none', color: "black" }}>
                                                <i class="fas fa-plus"></i>
                                            </Link> :
                                            postTabSection == 'articles' ?
                                                <Link to="/create-blog-article" style={{ textDecoration: 'none', color: "black" }}>
                                                    <i class="fas fa-plus"></i>
                                                </Link> :
                                                postTabSection == 'blogs' ?
                                                    <Link to="/create-blog-article" style={{ textDecoration: 'none', color: "black" }}>
                                                        <i class="fas fa-plus"></i>
                                                    </Link> :
                                                    postTabSection == 'events' ?

                                                        <Link to="/create-event" style={{ textDecoration: 'none', color: "black" }}>
                                                            <i class="fas fa-plus"></i>
                                                        </Link> :

                                                        postTabSection == 'posts' ?
                                                            <Link to="/view-all-users" style={{ textDecoration: 'none', color: "black" }}>
                                                                <i class="fas fa-plus"></i>
                                                            </Link> :
                                                            ''

                                    }
                                </div>
                                <div className="">

                                    {
                                        postTabSection == 'news' ?
                                            <Link to="/view-notice-news" style={{ textDecoration: 'none', color: "black" }}>
                                                <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                            </Link> :
                                            postTabSection == 'articles' ?
                                                <Link to="/view-blog-article" style={{ textDecoration: 'none', color: "black" }}>
                                                    <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                                </Link> :
                                                postTabSection == 'blogs' ?
                                                    <Link to="/view-blog-article" style={{ textDecoration: 'none', color: "black" }}>
                                                        <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                                    </Link> :
                                                    postTabSection == 'events' ?

                                                        <Link to="/view-all-events" style={{ textDecoration: 'none', color: "black" }}>
                                                            <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                                        </Link> :

                                                        postTabSection == 'posts' ?
                                                            <Link to="/view-all-users" style={{ textDecoration: 'none', color: "black" }}>
                                                                <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                                            </Link> :
                                                            ''

                                    }
                                    {/* <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button> */}


                                </div>


                            </div>
                        </div>



                    </nav>

                    <section className="publication-content  px-2 mt-4 ">
                        <div className="total-publication-card  row  ">
                            <div className="total-pu-card-left    col-3 rounded-3 bg-white border d-flex flex-column  justify-content-center shadow-sm">
                                <div className="d-flex">
                                    <h4 className="publiction-num">17</h4>
                                    <p className="mx-4 mt-1">News Are posted</p>
                                </div>



                                <div className="d-flex">
                                    <h4 className="publiction-num">08</h4>
                                    <p className="mx-4 mt-1">News Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                </div>
                            </div>


                            <div className="col-9 " >


                                <div className="px-3 ">

                                    <Slider {...settings}>
                                        {

                                            allActiveEvents.map((item, i) => {
                                                return (
                                                    <>
                                                        <div className="cards border p-2 border-success rounded-side bb " >
                                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                                <div className="calenda-icon d-flex align-items-center ">
                                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                                    </div>
                                                                    <div>
                                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                                    </div>
                                                                    <div>
                                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                                        </div>
                                                                    </div>

                                                                </div>






                                                            </nav>
                                                            <div className="mt-3">
                                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                                            </div>


                                                        </div>

                                                    </>
                                                )
                                            })

                                        }
                                        {/* <div className="cards border p-2 border-success rounded-side bb " >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>

                                        
                                        </div>

                                        <div className="cards border p-2 border-success rounded-side bb" >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>
                                        </div>
                                        <div className="cards border p-2 border-success rounded-side bb" >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>
                                        </div> */}
                                    </Slider>
                                </div>

                            </div>










                        </div>

                    </section>





                </div>

                <div className="publication mt-5">
                    <hr />

                    <h6 className="text-success ">Job Management</h6>

                    <nav className="publication-nav text-normal fw-300">
                        <div className="row d-flex align-items-center">
                            <div className="publication-left col-md-6">
                                <ul className="d-flex justify-content-between all-left-public-li m-0 p-0">
                                    <li className="fw-bold">
                                        All
                                    </li>
                                    {/* <li>
                                        Pendings
                                    </li> */}
                                    <li>
                                        Full Time
                                    </li>
                                    <li>
                                        Part Time
                                    </li>
                                    <li>
                                        Contractual
                                    </li>
                                    <li className="pending-btn px-2 ">
                                        Pendings
                                        <span class="badge bg-danger badge-sm badge-noti">4</span>

                                    </li>

                                </ul>

                            </div>

                            <div className="publication-right col-md-6  d-flex justify-content-end align-items-center">

                                <div className="right-fn-icon me-3 border px-1 text-success border-success rounded">
                                    <Link to="/create-job-post" style={{ textDecoration: 'none', color: "black" }}>

                                        <i class="fas fa-plus"></i>
                                    </Link>

                                </div>
                                <div className="">
                                    {/* <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button> */}
                                    <Link to="/view-all-jobs" style={{ textDecoration: 'none', color: "black" }}>
                                        <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                    </Link>


                                </div>

                            </div>
                        </div>

                    </nav>

                    <section className="publication-content mt-2 px-2 ">
                        <div className="total-publication-card  mt-4 row">
                            <div className="total-pu-card-left   col-3 rounded-3 bg-white border d-flex flex-column justify-content-center shadow py-2 px-3">
                                <div className="d-flex">
                                    <h4 className="publiction-num">14</h4>
                                    <p className="mx-4 mt-1">News Are posted</p>
                                </div>



                                <div className="d-flex">
                                    <h4 className="publiction-num">08</h4>
                                    <p className="mx-4 mt-1">News Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                </div>
                            </div>


                            <div className="col-9 " >


                                <div className="px-3 ">

                                    <Slider {...settings}>
                                        <div className="cards border p-2 border-success rounded-side bb " >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>
                                        </div>

                                        <div className="cards border p-2 border-success rounded-side bb" >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>
                                        </div>
                                        <div className="cards border p-2 border-success rounded-side bb" >
                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                <div className="calenda-icon d-flex align-items-center ">
                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                    <span className="mx-2 d-block  publiction-num"> 12,september 2022</span>



                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">Top News</button>

                                                    </div>
                                                    <div>
                                                        <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                    </div>
                                                    <div>
                                                        <div class="form-check form-switch form-check-sm mx-2">
                                                            <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>
                                                    </div>

                                                </div>






                                            </nav>
                                            <div className="mt-3">
                                                <p className="m-0 p-0">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ips...</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>

                            </div>










                        </div>

                    </section>





                </div>

                <div className="publication mt-5">
                    <hr />

                    <h6 className="text-success ">Advertiements</h6>

                    <nav className="publication-nav text-normal fw-300">
                        <div className="row d-flex align-items-center">
                            <div className="publication-left col-md-6 ">
                                <ul className="d-flex justify-content-start all-left-public-li m-0 p-0">
                                    <li className="fw-bold">
                                        All
                                    </li>
                                    <li className="mx-4">
                                        Pendings
                                    </li>
                                    <li className="mx-3">
                                        Running
                                    </li>
                                    <li className="mx-3">
                                        Archieved
                                    </li>



                                </ul>

                            </div>
                            {/* <div className="">

                        </div> */}

                            <div className="publication-right col-md-6  d-flex justify-content-end align-items-center">

                                <div className="right-fn-icon me-3 border px-1 text-success border-success rounded">
                                    <i class="fas fa-plus"></i>
                                </div>
                                <div className="">
                                    <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>


                                </div>

                            </div>
                        </div>

                    </nav>

                    <section className="publication-content mt-2 px-2 ">
                        <div className="advertisements-card  mt-4 mb-4 ">



                            <div class="card-no-1 shadow">
                                <div class="card-h">
                                    <div class="card-image-tops">
                                        <img src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60" />
                                    </div>

                                    <div class="overlay-radius">

                                        <p className="text-light px-3 py-1  m-0"> RUNNING</p>

                                    </div>
                                </div>

                                <div class="content py-3 px-2">
                                    <p className="p-0 mt-2">The word 'lorem', for example, isn't a real Latin word, iaasdasd. for example, isn't a real Latin word,</p>


                                    <div class="footer-con ">
                                        <div class="">
                                            <i class="fa fa-calendar  text-success" aria-hidden="true"></i>
                                        </div>
                                        <div class="me-2">
                                            15 sept,2022
                                        </div>
                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            30 days
                                        </div>

                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            2 Times
                                        </div>

                                        <div className="hr-sign mx-2"></div>


                                        <div class="">
                                            <i class="fa-solid fa-edit text-success"></i>
                                        </div>

                                    </div>
                                </div>

                            </div>



                            <div class="card-no-1 shadow">
                                <div class="card-h">
                                    <div class="card-image-tops">
                                        <img src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60" />
                                    </div>

                                    <div class="overlay-radius">

                                        <p className="text-light px-3 py-1  m-0"> RUNNING</p>

                                    </div>
                                </div>

                                <div class="content py-3 px-2">
                                    <p className="p-0 mt-2">The word 'lorem', for example, isn't a real Latin word, iaasdasd. for example, isn't a real Latin word,</p>


                                    <div class="footer-con ">
                                        <div class="">
                                            <i class="fa fa-calendar  text-success" aria-hidden="true"></i>
                                        </div>
                                        <div class="me-2">
                                            15 sept,2022
                                        </div>
                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            30 days
                                        </div>

                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            2 Times
                                        </div>

                                        <div className="hr-sign mx-2"></div>


                                        <div class="">
                                            <i class="fa-solid fa-edit text-success"></i>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div class="card-no-1 shadow">
                                <div class="card-h">
                                    <div class="card-image-tops">
                                        <img src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60" />
                                    </div>

                                    <div class="overlay-radius">

                                        <p className="text-light px-3 py-1  m-0"> RUNNING</p>

                                    </div>
                                </div>

                                <div class="content py-3 px-2">
                                    <p className="p-0 mt-2">The word 'lorem', for example, isn't a real Latin word, iaasdasd. for example, isn't a real Latin word,</p>


                                    <div class="footer-con ">
                                        <div class="">
                                            <i class="fa fa-calendar  text-success" aria-hidden="true"></i>
                                        </div>
                                        <div class="me-2">
                                            15 sept,2022
                                        </div>
                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            30 days
                                        </div>

                                        <div class="">
                                            <i class="fa-solid fa-clock text-success"></i>

                                        </div>

                                        <div class="me-2">
                                            2 Times
                                        </div>

                                        <div className="hr-sign mx-2"></div>


                                        <div class="">
                                            <i class="fa-solid fa-edit text-success"></i>
                                        </div>

                                    </div>
                                </div>

                            </div>







                        </div>

                    </section>





                </div>
            </MasterDashboardLayout>
            {/* 
                    </div>
                </div>

            </div> */}




        </>
    )
}

export default Dashboard;