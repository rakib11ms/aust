import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route ,useParams} from "react-router-dom";

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
function EditJobPost() {

    const params=useParams();

    const editId=params.id;
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

    const [allJobSectors, setAllJobSectors] = useState([]);
    const [allJobSubSectors, setAllJobSubSectors] = useState([]);
    console.log('sub sector',allJobSubSectors)

    const [editData,setEditData]=useState({

    });

    console.log('edit data ',editData)








    // const [jobPost,setJobPost]=useState({
    //     job_type:'',
    //     department_id:'',
    //     job_location:'',
    //     job_title:'',
    //     application_deadline:"",
    //     company_name:'',

    // })

    const handleInputChange=(e)=>{
        setEditData({
            ...editData,[e.target.name]:e.target.value
        })
    }

    const [image, setImage] = useState('');
    console.log('image info', image)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };

    
    const updateJobPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job_type', editData.job_type);
        formData.append('job_sector', editData.job_sector);
        formData.append('job_sub_sector', editData.job_sub_sector);    
            formData.append('job_location', editData.job_location);
        formData.append('job_title', editData.job_title);
        formData.append('application_deadline', editData.application_deadline);
        formData.append('company_name', editData.company_name);
        formData.append('job_description', content1);
        formData.append('isPublished', editData.isPublished);
        formData.append('isArchived', editData.isArchived);
        formData.append('posted_by', localStorage.getItem('user_id'));
        formData.append('isPublished', editData.isPublished);
        
        formData.append('image', image);
      

        console.log('check all data', formData);

     
  
            axios.post(`/api/update-job-post/${editId}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    navigate('/view-all-jobs')
                    setEditData({
                        job_type:'',
                        department_id:'',
                        job_location:'',
                        job_title:'',
                        application_deadline:"",
                        company_name:'',
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

        axios.get(`/api/edit-job-post/${editId}`).then(res => {
            if (res.data.status == 200) {
                setEditData(res.data.post);
                setContent1(res.data.post.job_description)
                // setPicture(res.data.post.image)
      
            }
        })

        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSectors(res.data.job_sector);
                // setTotalDepartment(res.data.total_departments)
                // setLoading(false);
            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSectors(res.data.job_sub_sector);
                // setTotalDepartment(res.data.total_departments)
                // setLoading(false);
            }
        })


    }, [])


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
                                    <h5>Edit Job</h5>
                                   <Link to="/view-all-jobs"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form onSubmit={updateJobPost}>

                                    <div class="row">
                                        <div className='col-md-6'>
                                            <div class="">
                                                <label for="exampleFormControlInput1 " class="form-label fs-6">Job Type</label>
                                                <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name="job_type" value={editData.job_type}>
                                                    <option selected>Select</option>
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
                                                <label for="exampleFormControlInput1 " class="form-label fs-6">Job Sector</label>
                                                <select class="form-select" aria-label="Default select example"  onChange={handleInputChange} name="job_sector" value={editData.job_sector}>
                                                    <option selected>Select</option>
                                                    {
                                                            allJobSectors.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id} key={i}>{item.job_sector_name}</option>

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
                                                <label for="exampleFormControlInput1 " class="form-label fs-6">Job Sub Sector</label>
                                                <select class="form-select" aria-label="Default select example"  onChange={handleInputChange} name="job_sub_sector" value={editData.job_sub_sector}>
                                                    <option selected>Select</option>
                                                    {
                                                            allJobSubSectors.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id} key={i}>{item.job_sub_sector_name}</option>

                                                                    </>

                                                                )
                                                            })
                                                        }
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class="">
                                                <label for="exampleFormControlInput1 " class="form-label fs-6">Job Location</label>
                                                <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name="job_location" value={editData.job_location}>
                                                    <option selected>Select</option>

                                                    <option value="on_site" >On Site</option>
                                                    <option value="remote" >Remote</option>




                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div class="mt-1">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="job_title" value={editData.job_title}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col-md-6'>
                                            <div class="mt-1">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Company Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="company_name" value={editData.company_name} />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class="mt-1">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Application Deadline</label>
                                                <input type="date" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="application_deadline" value={editData.application_deadline}/>
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
                                                    onChange={newContent => { }}
                                                />

                                            </div>
                                        </div>

                                    </div>

                                    <div class="row mt-2">

                                    <div className='col-md-6'>
                                            <div class="mt-1">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Status</label>
                                                {/* <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="company_name" value={editData.company_name} /> */}
                                                <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name="isPublished" value={editData.isPublished}>
                                                    <option selected>Select</option>

                                                    <option value="1" >Active</option>
                                                    <option value="0" >InActive</option>




                                                </select>
                                            </div>
                                        </div>

                                        <div class="mb-3 col-md-6 ">
                                            <label for="formFile" class="form-label fs-6">Company Logo/Image</label>
                                            <input class="form-control" type="file" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />



                                        {
                                                    picture == ''? <div className="form-group mt-3" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/${editData.image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                    :
                                                    <div className="form-group mt-3" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>

                                                }
                                                   {
                                                    image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
                                                }
                                    </div>

                                    </div>

                                    <div class="text-center">
                                        <button type="submit" className='btn btn-success rounded-3' onSubmit={updateJobPost}> UPDATE</button>
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

export default EditJobPost;