import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import '../JobManagement.css'
import JoditEditor from "jodit-react";
import dayjs, { Dayjs } from 'dayjs';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Modal from 'react-modal';
function CreateJobPost() {

    const navigate = useNavigate();
    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
    };


    const [allJobTypes, setAllJobTypes] = useState([]);

    console.log('all job typesssssssssssssss', allJobTypes)
    const [allDepartments, setAllDepartments] = useState([]);


    useEffect(() => {
        axios.get(`/api/job-type`).then(res => {
            if (res.data.status == 200) {
                setAllJobTypes(res.data.job_type);
                // setLoading(false);
                // setTotalJobType(res.data.total_job_types)
            }
        })

        axios.get(`/api/department`).then(res => {
            if (res.data.status == 200) {
                setAllDepartments(res.data.department);
                // setTotalDepartment(res.data.total_departments)
                // setLoading(false);
            }
        })


    }, [])


    const [jobPost, setJobPost] = useState({
        job_type: '',
        department_id: '',
        job_location: '',
        job_title: '',
        application_deadline: "",
        company_name: '',

    })

    const handleInputChange = (e) => {
        setJobPost({
            ...jobPost, [e.target.name]: e.target.value
        })
    }

    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const submitJobPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job_type', jobPost.job_type);
        formData.append('department_id', jobPost.department_id);
        formData.append('job_location', jobPost.job_location);
        formData.append('job_title', jobPost.job_title);
        formData.append('application_deadline', jobPost.application_deadline);
        formData.append('company_name', jobPost.company_name);
        formData.append('job_description', content1);
        formData.append('posted_by', localStorage.getItem('user_id'));
        formData.append('isApproved', 1);
        formData.append('image', image);


        console.log('check all data', formData);



        axios.post(`/api/save-job-post`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                navigate('/view-all-jobs')
                setJobPost({
                    job_type: '',
                    department_id: '',
                    job_location: '',
                    job_title: '',
                    application_deadline: "",
                    company_name: '',
                });
                setContent1('');

                setImage('');
                setPicture('');
                document.getElementById('job_post_logo').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />
                        <div className='create-job-wrapper mt-2'>
                            <div className='card mt-3'>
                                <div className='card-header d-flex align-items-center justify-content-between'>
                                    <h5>Create a Job</h5>
                                    <Link to="/view-all-jobs"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form onSubmit={submitJobPost}>

                                        <div class="row">
                                            <div className='col-md-6'>
                                                <div class="">
                                                    <label for="exampleFormControlInput1 " class="form-label fs-6">Job Type</label>
                                                    <select required class="form-select" aria-label="Default select example" onChange={handleInputChange} name="job_type" value={jobPost.job_type}>
                                                        <option selected value="" disabled>Select</option>
                                                        {
                                                            allJobTypes.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id} key={i}>{item.type_name}</option>

                                                                    </>

                                                                )
                                                            })
                                                        }

                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div class="">
                                                    <label for="exampleFormControlInput1 " class="form-label fs-6">Department</label>
                                                    <select required class="form-select" aria-label="Default select example" onChange={handleInputChange} name="department_id" value={jobPost.department_id}>
                                                        <option selected value="" disabled>Select</option>
                                                        {
                                                            allDepartments.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id} key={i}>{item.department_name}</option>

                                                                    </>

                                                                )
                                                            })
                                                        }
                                                    </select>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-2'>
                                            <div className='col-md-6'>
                                                <div class="">
                                                    <label for="exampleFormControlInput1 " class="form-label fs-6">Job Location</label>
                                                    <select required class="form-select" aria-label="Default select example" onChange={handleInputChange} name="job_location" value={jobPost.job_location}>
                                                        <option selected value="" disabled>Select</option>

                                                        <option value="on_site" >On Site</option>
                                                        <option value="remote" >Remote</option>




                                                    </select>

                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>
                                                    <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="job_title" value={jobPost.job_title} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-2'>
                                            <div className='col-md-6'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Company Name</label>
                                                    <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="company_name" value={jobPost.company_name} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Application Deadline</label>
                                                    <input type="date" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="application_deadline" value={jobPost.application_deadline} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-2'>
                                            <div className='col-md-12'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Job Description</label>
                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        // onChange={newContent => { setContent1(newContent)}}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                        <div class="row mt-2">
                                            <div class="mb-3 col-md-6 ">
                                                <label for="formFile" class="form-label fs-6">Job Logo/Image</label>
                                                <input class="form-control" type="file" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />
                                            </div>

                                            {/* <div class="mb-3 col-md-6">
                                            <label for="formFile" class="form-label fs-6">Default file input example</label>
                                            <input class="form-control" type="file" id="formFile" />
                                        </div> */}
                                        </div>
                                        {
                                            picture !== '' && <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                            </div>

                                        }
                                        {
                                            image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
                                        }

                                        <div class="text-center">
                                            <button type="submit" className='btn btn-success rounded-3' onSubmit={submitJobPost}> PUBLISH NOW</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}

export default CreateJobPost;