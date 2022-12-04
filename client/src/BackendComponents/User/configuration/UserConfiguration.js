import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import JoditEditor from "jodit-react";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, ThemeProvider, createTheme } from '@mui/system';



function UserConfiguration() {


    const navigate = useNavigate();


    const[create_job_sector,setcreate_job_sector]=useState('');
    const[create_job_sub_sector,setcreate_job_sub_sector]=useState('');

    const createJobSectorArrayData=create_job_sector.split(',');
    const createJobSubSectorArrayData=create_job_sub_sector.split(',');

    console.log('yyy',createJobSectorArrayData)


    const submitCreateConfiguration=(e)=>{
        e.preventDefault();
        if(create_job_sector !==null){
            e.preventDefault();
            // const createJobSectorArrayData=create_job_sector.split(',');
            createJobSectorArrayData.map((item,i)=>{
                axios.post(`/api/add-job-sector`, createJobSectorArrayData).then(res => {
                    if (res.data.status == 200) {
                        Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        setcreate_job_sector("");
        
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')
        
                    // }
                })
            })
    
        }
        if(create_job_sub_sector !==null){

        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2  sidebar-left1">
                    <Sidebar />
                </div>

                <div className="col-md-10 ">
                    <Topbar />

                    <div className='container-fluid'>


                        <section>

                            <div className='card mt-3'>
                                <div className='card-header bg-light d-flex align-items-center justify-content-between'>
                                    <h5>Field Configuration</h5>
                                    <Link to="/view-all-advertisement"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={submitCreateConfiguration}>

                                        <div className='row '>

                                            <div class="px-5 d-flex align-items-center" style={{ width: '100%' }}>
                                                {/* 
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} />

                                                </div> */}

                                                <div class="col-2">
                                                    <div class="">
                                                        <p>Batch(dropdown)</p>

                                                    </div>
                                                    <div class="">
                                                        <p>Blood Group(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p>Stream(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p>Job Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p>Job Sub Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p>Name of Company</p>

                                                    </div>




                                                </div>
                                                <div className='col-7'>
                                                    <div class="">
                                                        {/* <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} /> */}
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" />

                                                    </div>
                                                    <div class="">
                                                        {/* <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} /> */}
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" />

                                                    </div>
                                                    <div class="">
                                                        {/* <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} /> */}
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" />

                                                    </div>

                                                    <div class="">
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" onChange={(e) => {setcreate_job_sector(e.target.value);
                                                            console.log('check create',create_job_sector)
                                                        }} name="create_job_sector" value={create_job_sector}  />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" onChange={(e) => {setcreate_job_sub_sector(e.target.value);
                                                            console.log('check create',create_job_sub_sector)
                                                        }} name="create_job_sub_sector" value={create_job_sub_sector}  />

                                                    </div>
                                                    <div class="">
                                                        {/* <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} /> */}
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" />

                                                    </div>

                                                </div>
                                                <div className='col-2 mx-2'>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div class="d-flex">
                                                        <div className=''>
                                                            <p>View All</p>
                                                        </div>
                                                        <div className=''>
                                                            <p className='border border-success rounded-3 px-2 mx-2'>Map</p>
                                                        </div>
                                                    </div>

                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>


                                                </div>



                                            </div>


                                        </div>






                                        <div class="mt-5 text-center">
                                            <button type="submit" className='btn btn-success rounded-3 text-success px-5 mx-2 bg-white' onSubmit="">RESET</button>
                                            <button type="submit" className='btn btn-success rounded-3 px-5 mx-2' onSubmit={submitCreateConfiguration}>SAVE</button>
                                        </div>




                                    </form>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserConfiguration;