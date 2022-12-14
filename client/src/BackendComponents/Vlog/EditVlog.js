import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route, useParams } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
// import '../JobManagement.css'
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
function EditVlog() {

    const params = useParams();

    const editId = params.id;
    const navigate = useNavigate();


    const [editData, setEditData] = useState({

    });

    console.log('edit data ', editData)




    const handleInputChange = (e) => {
        setEditData({
            ...editData, [e.target.name]: e.target.value
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


    const updateVlog = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_id', editData.category_id);
        formData.append('vlog_title', editData.vlog_title);
        formData.append('streaming_link', editData.streaming_link);
        formData.append('posted_by', 1);

        formData.append('image', image);


        console.log('check all data', formData);



        axios.post(`/api/update-vlog/${editId}`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                navigate('/view-vlog')
                setEditData({
                    category_id: '',
                    streaming_link: '',
                    vlog_title: '',
                  
                });

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

    const [allVlogCategory,setAllVlogCategory]=useState([]);

    useEffect(() => {
        axios.get(`/api/vlog-category`).then(res => {
            if (res.data.status == 200) {
                setAllVlogCategory(res.data.category);
                // setLoading(false);
                // setTotalJobType(res.data.total_category_ids)
            }
        })



        axios.get(`/api/edit-vlog/${editId}`).then(res => {
            if (res.data.status == 200) {
                setEditData(res.data.vlog);
                // setPicture(res.data.vlog.image)

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
                                    <h5>Create a Vlog</h5>
                                   <Link to="/view-vlog"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form onSubmit={updateVlog}>

                                    <div class="row">
                                        <div className='col-md-12'>
                                            <div class="">
                                                <label for="exampleFormControlInput1 " class="form-label fs-6">Category</label>
                                                <select class="form-select" aria-label="Default select example" onChange={handleInputChange} name="category_id" value={editData.category_id}>
                                                    <option selected>Select</option>
                                                    {
                                                        allVlogCategory.map((item, i) => {
                                                            return (
                                                                <>
                                                                    <option value={item.id} key={i}>{item.category_name}</option>

                                                                </>

                                                            )
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                 
                                    </div>

                                    <div className='row mt-2'>
                                    <div className='col-md-12'>
                                            <div class="mt-1">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="vlog_title" value={editData.vlog_title}/>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div class="mt-2">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Streaming Link</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="streaming_link" value={editData.streaming_link}/>
                                            </div>
                                        </div>
                                    </div>

                               

                            

                                    <div class="row mt-2">
                                        <div class="mb-3 col-md-6 ">
                                            <label for="formFile" class="form-label fs-6">Add Thumbnail</label>
                                            <input class="form-control" type="file" id="image" name="image" onChange={onChangePicture} />
                                        </div>

                                        {/* <div class="mb-3 col-md-6">
                                            <label for="formFile" class="form-label fs-6">Default file input example</label>
                                            <input class="form-control" type="file" id="formFile" />
                                        </div> */}
                                    </div>
                             


                                    {
                                                    picture == ''? <div className="form-group mt-1" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/${editData.image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                    :
                                                    <div className="form-group mt-1" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>

                                                }
                                                   {
                                                    image.size > 524288 && <div className='text-danger mt-1'>Image Size Must be less than 0.5 Mb </div>
                                                }

                                    <div class="text-center">
                                        <button type="submit" className='btn btn-success rounded-3' onSubmit={updateVlog}> PUBLISH NOW</button>
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

export default EditVlog;