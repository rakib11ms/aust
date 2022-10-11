import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import '../JobManagement.css'

function JobConfiguration() {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />

                        <section class="job-config m-3 border  rounded-3">
                            {/* <div class="row"> */}
                            <div class="job-config-header text-light rounded-top ">
                                <div class="inside ">
                                    <div class="item1">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div>


                                </div>
                                <div class=" ">

                                    <button type='button' className='btn border btn-sm text-light'> +  <span className='mx-1'> Create A job</span></button>

                                </div>


                            </div>

                            <div className='job-department-tag-section py-3 px-2'>
                                <div class="job-type-sec">
                                    <div className='job-type-nav'>
                                        <div>

                                            <h5 className='job-type-text'>Job Type</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2'> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>

                                    </div>

                                    <div className='job-type-secs'>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Part time
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                        <div>
                                            <button type='button' className='btn border  mb-4'> Contactual
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>



                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                    </div>



                                </div>

                                <div class="job-type-sec">
                                    <div className='job-type-nav  '>
                                        <div className=''>

                                            <h5 className='job-type-text '>Departments</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2'> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>

                                    </div>

                                    <div className='job-type-secs '>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Part time
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                        <div>
                                            <button type='button' className='btn border  mb-4'> Contactual
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>



                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                    </div>



                                </div>


                                <div class="job-type-sec">
                                    <div className='job-type-nav'>
                                        <div>

                                            <h5 className='job-type-text'>Tags</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2'> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>

                                    </div>

                                    <div className='job-type-secs'>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Part time
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                        <div>
                                            <button type='button' className='btn border  mb-4'> Contactual
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>



                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                    </div>



                                </div>

                            </div>





                            {/* </div> */}

                        </section>


                    </div>

                </div>

            </div>


        </>
    )

}

export default JobConfiguration