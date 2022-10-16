import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";
function Publication() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
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
            <hr />
            <div className="publication mt-3">
                <h6 className="text-success ">Publications</h6>

                <nav className="publication-nav text-normal fw-300 ">
                    <div className="row d-flex align-items-center">
                        <div className="publication-left col-md-6">
                            <ul className="d-flex justify-content-between all-left-public-li m-0 p-0">
                                <li className="fw-bold">
                                    News
                                </li>
                                <li>
                                    Events
                                </li>
                                <li>
                                    Announcements
                                </li>
                                <li>
                                    Articles
                                </li>
                                <li>
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
                                <i class="fas fa-plus"></i>
                            </div>
                            <div className="">
                                <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>


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
                <h6 className="text-success ">Job Management</h6>

                <nav className="publication-nav text-normal fw-300">
                    <div className="row d-flex align-items-center">
                        <div className="publication-left col-md-6">
                            <ul className="d-flex justify-content-between all-left-public-li m-0 p-0">
                                <li className="fw-bold">
                                    News
                                </li>
                                <li>
                                    Events
                                </li>
                                <li>
                                    Announcements
                                </li>
                                <li>
                                    Articles
                                </li>
                                <li>
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
                                <i class="fas fa-plus"></i>
                            </div>
                            <div className="">
                                <button className="btn btn-sm btn-success text-light px-3   rounded-pill"> View All</button>


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

        </>
    )
}
export default Publication;