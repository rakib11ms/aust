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

    const [create_job_sector, setcreate_job_sector] = useState('');
    const [create_job_sub_sector, setcreate_job_sub_sector] = useState('');

    const createJobSectorArrayData = create_job_sector.split(',');
    const createJobSubSectorArrayData = create_job_sub_sector.split(',');

    console.log('yyy', createJobSectorArrayData)

    // const resetCreateConfiguration=()=>{
    //     if(e.target.onClick){
    //         setcreate_job_sector(''),
    //         setcreate_job_sub_sector('');
    //     }

    // }
    const submitCreateConfiguration = (e) => {
        e.preventDefault();
        if (create_job_sector !== null) {

            createJobSectorArrayData.map((item, i) => {
                const data = {
                    job_sector_name: item
                }
                axios.post(`/api/add-job-sector`, data).then(res => {
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
        if (create_job_sub_sector !== null) {
            createJobSubSectorArrayData.map((item, i) => {
                const data = {
                    job_sub_sector_name: item
                }
                axios.post(`/api/add-job-sub-sector`, data).then(res => {
                    if (res.data.status == 200) {
                        Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        setcreate_job_sub_sector("");

                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
        }
    }

    ///create job sector and job sub sector state mapping and submit///

    const [job_sector_id_state,setjob_sector_id_state]=useState('');
    const [job_sub_sector_name_state,setjob_sub_sector_name_state]=useState('');

    const submitCreateJobMap=()=>{
        const data={
            job_sub_sector_name:job_sub_sector_name_state,
            job_sector_id:job_sector_id_state
        }
        axios.post(`/api/update-job-sub-sector/${job_sector_id_state}`, data).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                // setRenderAllPosts(res.data);
                // closeAddPostCategoryModal();
                // setjob_sector_id_state("");
                // job_sub_sector_name_state("")
            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }

    ////create map job sector and job sub sector and view modal functionality start


    const customStyles1 = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "50vw",
            height: "50vh",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };
    const customStyles2 = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "50vw",
            height: "70vh",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };


    const [addJobSectorJobSubSectorModalIsOpen, setaddJobSectorJobSubSectorModalIsOpen] = useState(false);
    function openAddJobSectorJobSubSectorModal(e) {
        e.preventDefault();
        setaddJobSectorJobSubSectorModalIsOpen(true)
    }
    function closeAddJobSectorJobSubSectorModal(e) {
        setaddJobSectorJobSubSectorModalIsOpen(false);

    }

    const [addPostModalIsOpen, setaddPostModalIsOpen] = useState(false);

    function openAddPostModal(e) {
        e.preventDefault();
        setaddPostModalIsOpen(true)
    }
    function closeAddPostModal(e) {
        setaddPostModalIsOpen(false);

    }


    ////create map job sector and job sub sector and view modal functionality end


    ////all job sector job sub sector fetch useffect start

    const [alljobSector, setAllJobSector] = useState([]);
    const [alljobSubSector, setAllJobSubSector] = useState([]);
    console.log('all job sub sector', alljobSubSector)

    useEffect(() => {
        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSector(res.data.job_sector);

            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSector(res.data.job_sub_sector);

            }
        })

        Modal.setAppElement('body');
    }, [])
    ////all job sector job sub sector fetch useffect end





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
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" onChange={(e) => {
                                                            setcreate_job_sector(e.target.value);
                                                            console.log('check create', create_job_sector)
                                                        }} name="create_job_sector" value={create_job_sector} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control my-1 py-1" id="exampleFormControlInput1" onChange={(e) => {
                                                            setcreate_job_sub_sector(e.target.value);
                                                            console.log('check create', create_job_sub_sector)
                                                        }} name="create_job_sub_sector" value={create_job_sub_sector} />

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
                                                        <div className='' onClick={openAddJobSectorJobSubSectorModal}>
                                                            <p className='border border-success rounded-3 px-2 mx-2'>Map</p>
                                                        </div>

                                                        {/* add post category modal */}
                                                        <Modal
                                                            isOpen={addJobSectorJobSubSectorModalIsOpen}
                                                            onRequestClose={closeAddJobSectorJobSubSectorModal}
                                                            style={customStyles1}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobSectorJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Mapping</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12">

                                                                        <div className=''>
                                                                            <select class="form-select" aria-label="Default select example" onChange={(e)=>setjob_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sector</option>
                                                                                {
                                                                                    alljobSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </div>

                                                                        <div className='my-3'>
                                                                            <select class="form-select" aria-label="Default select example" onChange={(e)=>setjob_sub_sector_name_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sub Sector</option>
                                                                                {
                                                                                    alljobSubSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.job_sub_sector_name}>{item.job_sub_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>


                                                                        <div className='text-center'>
                                                                        <button className='btn btn-success btn-sm  me-5 rounded-3 px-4 py-2 mt-1' onClick={submitCreateJobMap}>Map</button>

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>

                                                    </div>

                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>


                                                </div>



                                            </div>


                                        </div>






                                        <div class="mt-5 text-center">
                                            <button type="button" className='btn btn-success rounded-3 text-success px-5 mx-2 bg-white' onClick="{resetCreateConfiguration}">RESET</button>
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