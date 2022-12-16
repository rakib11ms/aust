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
import moment from "moment/moment";
function Dashboard() {


    const [totalPosts, settotalPosts] = useState('');
    const [totalUsers, settotalUsers] = useState('');
    const [totalAnnouncements, settotalAnnouncements] = useState('');
    const [totalJobs, settotalJobs] = useState('');
    const [totalAdvertisements, settotalAdverisements] = useState('');

    //card section job management//
    const [totalNewJobs, settotalNewJobs] = useState('');
    const [totalArchiveJobs, setTotalArchiveJobs] = useState('');
    const [totalPendingJobs, setTotalPendingJobs] = useState('');

    //card section posts total count start
    const [totalNews, settotalNews] = useState('');
    const [totalArchiveNews, setTotalArchiveNews] = useState('');
    const [totalPendingNews, setTotalPendingNews] = useState('');

    const [totalEvents, setTotalEvents] = useState('');
    const [totalArchiveEvents, setTotalArchiveEvents] = useState('');
    const [totalPendingEvents, setTotalPendingEvents] = useState('');

    const [totalBlogs, settotalBlogs] = useState('');
    const [totalArchiveBlogs, setTotalArchiveBlogs] = useState('');
    const [totalPendingBlogs, setTotalPendingBlogs] = useState('');

    const [totalArticles, settotalArticles] = useState('');
    const [totalArchiveArticles, setTotalArchiveArticles] = useState('');
    const [totalPendingArticles, setTotalPendingArticles] = useState('');



    console.log('eee', totalBlogs)





    //card section total count end


    const [allActiveNoticeNews, setAllActiveNoticeNews] = useState([]);
    const [allActiveEvents, setAllActiveEvents] = useState([]);
    const [allActiveJobs, setAllActiveJobs] = useState([]);
    const [allActiveBlogs, setAllActiveBlogs] = useState([]);
    const [allActiveArticles, setAllActiveArticles] = useState([]);
    console.log('all blogs', allActiveBlogs)
    const [jobpostFiltering, setJobPostFiltering] = useState(true)

    const [postTabSection, setPostTabSection] = useState('news');
    const [jobTabSection, setJobTabSection] = useState('All');
    const [advertisementTabSection, setAdvertisementTabSection] = useState('All');
    console.log('post tab section ', postTabSection)
    useEffect(() => {
        axios.get(`/api/total-users-jobs-posts-announce-advertisements`).then(res => {
            if (res.data.status == 200) {
                settotalUsers(res.data.total_users);
                settotalAdverisements(res.data.total_advertisements)
                settotalJobs(res.data.total_Jobs)
                settotalPosts(res.data.total_posts)
                settotalNewJobs(res.data.total_new_jobs)
                setTotalArchiveJobs(res.data.total_archived_jobs)
                setTotalPendingJobs(res.data.total_pending_jobs);

                settotalNews(res.data.total_news);
                setTotalArchiveNews(res.data.total_news_archived);
                setTotalPendingNews(res.data.total_news_pending);

                setTotalEvents(res.data.total_events);
                setTotalArchiveEvents(res.data.total_events_archived);
                setTotalPendingEvents(res.data.total_events_pending);


                settotalBlogs(res.data.total_blogs);
                setTotalArchiveBlogs(res.data.total_blogs_archived);
                setTotalPendingBlogs(res.data.total_blogs_pending);

                settotalArticles(res.data.total_articles);
                setTotalArchiveArticles(res.data.total_articles_archived);
                setTotalPendingArticles(res.data.total_articles_pending);





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
        axios.get(`/api/all-job-post`).then(res => {
            if (res.data.status == 200) {
                // setJobPostFiltering(false);

                setAllActiveJobs(res.data.active_jobs)
            }
        });
        axios.get(`/api/all-article-blogs`).then(res => {
            if (res.data.status == 200) {
                // setJobPostFiltering(false);
                setAllActiveArticles(res.data.active_articles)
                setAllActiveBlogs(res.data.active_blogs);
            }
        });




    }, [advertisementTabSection])


    useEffect(() => {

        axios.get(`/api/job-filtering-admin-homepage/${jobTabSection}`).then(res => {
            if (res.data.status == 200) {
                setJobPostFiltering(false);

                setAllActiveJobs(res.data.data)
            }
        });
    }, [jobTabSection])


    var settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        // slidesToShow: `${allActiveJobs.length<=1?1:2}`,
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

                    <nav className="publication-nav text-normal fw-300 " style={{ cursor: 'pointer' }}>
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
                                    {/* <li className={`${postTabSection == 'pending' ? 'fw-bold' : ""} pending-btn px-2 `} onClick={() => setPostTabSection('pending')}>
                                        Pendings
                                        <span class="badge bg-danger badge-sm badge-noti">4</span>

                                    </li> */}

                                    {
                                        postTabSection == 'news' && <li className={`pending-btn px-2 `}>
                                            Pendings
                                            <span class="badge bg-danger badge-sm badge-noti">{totalPendingNews}</span>

                                        </li>
                                    }
                                    {
                                        postTabSection == 'events' && <li className={`pending-btn px-2 `}>
                                            Pendings
                                            <span class="badge bg-danger badge-sm badge-noti">{totalPendingEvents}</span>

                                        </li>
                                    }
                                    {
                                        postTabSection == 'articles' && <li className={`pending-btn px-2 `}>
                                            Pendings
                                            <span class="badge bg-danger badge-sm badge-noti">{totalPendingArticles}</span>

                                        </li>
                                    }
                                    {
                                        postTabSection == 'blogs' && <li className={`pending-btn px-2 `}>
                                            Pendings
                                            <span class="badge bg-danger badge-sm badge-noti">{totalPendingBlogs}</span>

                                        </li>
                                    }





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
                                {
                                    postTabSection == 'news' && <>
                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalNews}</h4>
                                            <p className="mx-4 mt-1">News Are posted</p>
                                        </div>



                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalArchiveNews}</h4>
                                            <p className="mx-4 mt-1">News Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                        </div>
                                    </>
                                }
                                {
                                    postTabSection == 'events' && <>
                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalEvents}</h4>
                                            <p className="mx-4 mt-1">Events Are posted</p>
                                        </div>



                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalArchiveEvents}</h4>
                                            <p className="mx-4 mt-1">Events Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                        </div>
                                    </>
                                }
                                {
                                    postTabSection == 'articles' && <>
                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalArticles}</h4>
                                            <p className="mx-4 mt-1">Articles Are posted</p>
                                        </div>



                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalArchiveArticles}</h4>
                                            <p className="mx-4 mt-1">Articles Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                        </div>
                                    </>
                                }
                                {
                                    postTabSection == 'blogs' && <>
                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalBlogs}</h4>
                                            <p className="mx-4 mt-1">Blogs Are posted</p>
                                        </div>



                                        <div className="d-flex">
                                            <h4 className="publiction-num">{totalArchiveBlogs}</h4>
                                            <p className="mx-4 mt-1">Blogs Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                        </div>
                                    </>
                                }

                            </div>


                            <div className="col-9 " >


                                <div className="px-3 ">

                                    {
                                        postTabSection == 'events' &&
                                        <Slider {...settings}>


                                            {

                                                allActiveEvents.map((item, i) => {
                                                    return (
                                                        <>
                                                            <div className="cards border  border-success rounded-side bb px-1 " >
                                                                <Link to={`/edit-events/${item.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                                                    <nav className="card-tops-con d-flex align-items-center justify-content-between my-1">



                                                                        <div className="calenda-icon d-flex align-items-center ">
                                                                            <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                            <span className="mx-2 d-block  publiction-num"> {item.created_at}</span>



                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div>
                                                                                <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">{item.event_type_name}</button>

                                                                            </div>
                                                                            {/* <div>
                                                                                <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                                            </div> */}
                                                                            <div>
                                                                                <div class="form-check form-switch form-check-sm mx-3">
                                                                                    <input class="form-check-input form-check-sm" type="checkbox" checked id="flexSwitchCheckDefault" />
                                                                                </div>
                                                                            </div>

                                                                        </div>






                                                                    </nav>
                                                                    <div className="mt-3">
                                                                        <p className="m-0 p-0">{item.event_title}</p>
                                                                        <div className="my-2 p-0"
                                                                            dangerouslySetInnerHTML={{ __html: item.event_description.length > 50 ? `${item.event_description.substring(0, 100)}...` : item.event_description }}
                                                                        />                                                                    </div>
                                                                </Link>

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
                                    }
                                    {

                                        postTabSection == 'news' &&
                                        <Slider {...settings}>


                                            {

                                                allActiveNoticeNews.map((item, i) => {
                                                    return (
                                                        <>
                                                            <div className="cards border p-2  border-success rounded-side bb  " >
                                                                <Link to={`/edit-notice-news/${item.id}`} style={{ textDecoration: 'none', color: "black" }}>

                                                                    <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                                        <div className="calenda-icon d-flex align-items-center ">
                                                                            <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                            <span className="mx-2 d-block  publiction-num"> {moment(item.created_at).format("LL")}</span>



                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div>
                                                                                <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">{item.category_name}</button>

                                                                            </div>
                                                                            {/* <div>
                                                                                    <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                                                                </div> */}
                                                                            <div>
                                                                                <div class="form-check form-switch form-check-sm mx-2">
                                                                                    <input class="form-check-input form-check-sm" type="checkbox" checked={item.isPublished == 1} id="flexSwitchCheckDefault" />
                                                                                </div>
                                                                            </div>

                                                                        </div>






                                                                    </nav>
                                                                    <div className="mt-3">
                                                                        <p className="m-0 p-0">{item.notice_news_title}</p>

                                                                    </div>
                                                                    <div className="my-2 p-0"
                                                                        dangerouslySetInnerHTML={{ __html: item.notice_news_description.length > 50 ? `${item.notice_news_description.substring(0, 100)}...` : item.notice_news_description }}
                                                                    />

                                                                </Link>
                                                            </div>

                                                        </>
                                                    )
                                                })

                                            }

                                        </Slider>

                                    }

                                    {

                                        postTabSection == 'blogs' &&
                                        <Slider {...settings}>


                                            {

                                                allActiveBlogs.map((item, i) => {
                                                    return (
                                                        <>
                                                            <div className="cards border p-2  border-success rounded-side bb  " >
                                                                <Link to={`/edit-blog-article/${item.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                                                    <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                                        <div className="calenda-icon d-flex align-items-center ">
                                                                            <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                            <span className="mx-2 d-block  publiction-num"> {moment(item.created_at).format("LL")}</span>



                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div>
                                                                                <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">{item.category_name}</button>

                                                                            </div>
                                                                            {/* <div>
                                            <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                        </div> */}
                                                                            <div>
                                                                                <div class="form-check form-switch form-check-sm mx-2">
                                                                                    <input class="form-check-input form-check-sm" type="checkbox" checked={item.isPublished == 1} id="flexSwitchCheckDefault" />
                                                                                </div>
                                                                            </div>

                                                                        </div>






                                                                    </nav>
                                                                    <div className="mt-3">
                                                                        <p className="m-0 p-0">{item.article_blog_title}</p>

                                                                    </div>
                                                                    <div className="my-2 p-0"
                                                                        dangerouslySetInnerHTML={{ __html: item.article_blog_description.length > 50 ? `${item.article_blog_description.substring(0, 100)}...` : item.article_blog_description }}
                                                                    />

                                                                </Link>
                                                            </div>

                                                        </>
                                                    )
                                                })

                                            }

                                        </Slider>

                                    }

                                    {

                                        postTabSection == 'articles' &&
                                        <Slider {...settings}>


                                            {

                                                allActiveArticles.map((item, i) => {
                                                    return (
                                                        <>
                                                            <div className="cards border p-2  border-success rounded-side bb  " >
                                                                <Link to={`/edit-blog-article/${item.id}`} style={{ textDecoration: 'none', color: "black" }}>

                                                                    <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                                        <div className="calenda-icon d-flex align-items-center ">
                                                                            <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                            <span className="mx-2 d-block  publiction-num"> {moment(item.created_at).format("LL")}</span>



                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div>
                                                                                <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">{item.category_name}</button>

                                                                            </div>
                                                                            {/* <div>
                                            <i class="fa fa-trash d-block mx-2" aria-hidden="true"></i>

                                        </div> */}
                                                                            <div>
                                                                                <div class="form-check form-switch form-check-sm mx-2">
                                                                                    <input class="form-check-input form-check-sm" type="checkbox" checked={item.isPublished == 1} id="flexSwitchCheckDefault" />
                                                                                </div>
                                                                            </div>

                                                                        </div>






                                                                    </nav>
                                                                    <div className="mt-3">
                                                                        <p className="m-0 p-0">{item.article_blog_title}</p>

                                                                    </div>
                                                                    <div className="my-2 p-0"
                                                                        dangerouslySetInnerHTML={{ __html: item.article_blog_description.length > 50 ? `${item.article_blog_description.substring(0, 100)}...` : item.article_blog_description }}
                                                                    />
                                                                </Link>

                                                            </div>

                                                        </>
                                                    )
                                                })

                                            }

                                        </Slider>

                                    }


                                </div>

                            </div>
                        </div>

                    </section>





                </div>

                <div className="publication mt-5">
                    <hr />

                    <h6 className="text-success ">Job Management</h6>

                    <nav className="publication-nav text-normal fw-300" style={{ cursor: 'pointer' }}>
                        <div className="row d-flex align-items-center">
                            <div className="publication-left col-md-6">
                                <ul className="d-flex justify-content-between all-left-public-li m-0 p-0">
                                    <li className={`${jobTabSection == 'All' ? 'fw-bold' : ""}`} onClick={() => setJobTabSection('All')}>
                                        All
                                    </li>
                                    {/* <li>
                                        Pendings
                                    </li> */}
                                    <li className={`${jobTabSection == 'Full Time' ? 'fw-bold' : ""}`} onClick={() => setJobTabSection('Full Time')}>
                                        Full Time
                                    </li>
                                    <li className={`${jobTabSection == 'Part Time' ? 'fw-bold' : ""}`} onClick={() => setJobTabSection('Part Time')}>
                                        Part Time
                                    </li>
                                    <li className={`${jobTabSection == 'Contractual' ? 'fw-bold' : ""}`} onClick={() => setJobTabSection('Contractual')}>
                                        Contractual
                                    </li>
                                    <li className={`${jobTabSection == 'Pending' ? 'fw-bold' : ""} pending-btn px-2`} onClick={() => setJobTabSection('Pending')}>
                                        Pendings
                                        <span class="badge bg-danger badge-sm badge-noti">{totalPendingJobs}</span>

                                    </li>
                                    {/* 
                                    <li className={`pending-btn px-2`} >
                                        Pendings
                                        <span class="badge bg-danger badge-sm badge-noti">{totalPendingJobs}</span>

                                    </li> */}

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
                                    <h4 className="publiction-num">{totalNewJobs}</h4>
                                    <p className="mx-4 mt-1">New Jobs Are posted</p>
                                </div>



                                <div className="d-flex">
                                    <h4 className="publiction-num">{totalArchiveJobs}</h4>
                                    <p className="mx-4 mt-1">Jobs Are <span className="border-bottom border-2 border-success "> Archieved</span></p>
                                </div>
                            </div>


                            <div className="col-9 " >


                                <div className="px-3 ">
                                    {
                                        jobpostFiltering == true && 'Loading...'
                                    }
                                    <Slider {...settings}>

                                        {
                                            allActiveJobs.map((item, i) => {
                                                return (

                                                    <div className="cards border p-2 border-success rounded-side bb ">
                                                        <Link to={`/edit-jobs/${item.id}`} style={{ textDecoration: 'none', color: "black" }}>

                                                            <nav className="card-tops-con d-flex align-items-center justify-content-between ">



                                                                <div className="calenda-icon d-flex align-items-center ">
                                                                    <i class="fa fa-calendar  text-secondary" aria-hidden="true"></i>
                                                                    <span className="mx-2 d-block  publiction-num">  {moment(item.created_at).format('LL')}</span>



                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <button className="btn btn-sm btn-success text-light px-2 m-0 p-0 rounded-pill">{item.type_name}</button>

                                                                    </div>
                                                                    {/* <div>
                                                                        <i class="fa fa-archive d-block mx-2" aria-hidden="true"></i>

                                                                    </div> */}
                                                                    <div>
                                                                        <div class="form-check form-switch form-check-sm mx-3">
                                                                            {
                                                                                // item.isPublished == 0 ?
                                                                                // <input class="form-check-input form-check-sm" type="checkbox" id="flexSwitchCheckDefault" />
                                                                                // :
                                                                                // item.isPublished==1?
                                                                                <input class="form-check-input form-check-sm" type="checkbox" checked={item.isPublished == 1} id="flexSwitchCheckDefault" />
                                                                                // :
                                                                                // ''

                                                                            }
                                                                        </div>
                                                                    </div>

                                                                </div>






                                                            </nav>
                                                            <div className="mt-3">
                                                                <span>{item.job_title}</span>
                                                                <div className="m-0 p-0"
                                                                    dangerouslySetInnerHTML={{ __html: item.job_description.length > 100 ? `${item.job_description.substring(0, 50)}...` : item.job_description }}
                                                                />
                                                                <div className="d-flex justify-content-between fs-7 mt-3">
                                                                    <p className="">Deadline: <b> {item.application_deadline} </b></p>
                                                                    <p className="">Posted: <b> {item.full_name} </b></p>

                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </div>
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
                                        </div> */}

                                        {/* <div className="cards border p-2 border-success rounded-side bb" >
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

                    <h6 className="text-success ">Advertiements</h6>

                    <nav className="publication-nav text-normal fw-300">
                        <div className="row d-flex align-items-center">
                            <div className="publication-left col-md-6 ">
                                <ul className="d-flex justify-content-start all-left-public-li m-0 p-0">
                                    <li className={`${advertisementTabSection == 'All' ? 'fw-bold' : ""}`} onClick={() => setAdvertisementTabSection('All')}>
                                        All
                                    </li>
                                    <li className={`${advertisementTabSection == 'Pending' ? 'fw-bold' : ""} mx-4`} onClick={() => setAdvertisementTabSection('Pending')}>
                                        Pendings
                                    </li>
                                    <li className={`${advertisementTabSection == 'Running' ? 'fw-bold' : ""} mx-3`} onClick={() => setAdvertisementTabSection('Running')}>
                                        Running
                                    </li>
                                    <li className={`${advertisementTabSection == 'Archived' ? 'fw-bold' : ""} mx-3`} onClick={() => setAdvertisementTabSection('Archived')}>
                                        Archieved
                                    </li>



                                </ul>

                            </div>
                            {/* <div className="">

                        </div> */}

                            <div className="publication-right col-md-6  d-flex justify-content-end align-items-center">
                                <Link to="/create-advertisement" style={{ textDecoration: 'none', color: "black" }}>

                                    <div className="right-fn-icon me-3 border px-1 text-success border-success rounded">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </Link>
                                <div className="">
                                    <Link to="/view-all-advertisement" style={{ textDecoration: 'none', color: "black" }}>
                                        <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>
                                    </Link>


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