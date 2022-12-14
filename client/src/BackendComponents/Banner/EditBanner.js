import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route, useParams } from "react-router-dom";
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


// import Checkbox from '@mui/material/Checkbox';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function EditBanner() {
    const [renderData, setRenderData] = useState('')


    const params = useParams();

    const editId = params.id;


    const [clickedRender, setClickedRender] = useState(false);


    const [bannerState, setbannerState] = useState({
        banner_description: '',
        banner_title: '',

    })

    console.log('bannerState', bannerState)

    const handleInputChange = (e) => {
        setbannerState({
            ...bannerState, [e.target.name]: e.target.value
        })
    }

    //////////images code ///////////

    const [allImagesFromDatabase, setAllImagesfromDatabase] = useState([]);


    const [multipleImages, setMultipleImages] = useState([]);
    const [multipleImageFiles, setMultipleImageFiles] = useState({
        files: []
    });



    useEffect(() => {
        if (multipleImages.length == 0) {
            document.getElementById('formFileImage').value = "";
        }
    }, [multipleImages])



    console.log('image files', multipleImageFiles.files)
    console.log('image url', multipleImages)

    // multipleImages.map((item,i)=>{
    //     console.log('hello abba',i)
    // })

    function removeArray(i) {
        console.log('index clicked', i)
        // setMultipleImageFiles({
        //     files:
        // });

        const filterRemoveFileImgs = multipleImageFiles.files.filter((item, index) => {
            console.log('kosuy', item)
            return index !== i
        })

        const filterRemovePreviewImgs = multipleImages.filter((item, index) => {
            console.log('kosuy', item)
            return index !== i
        })
        // console.log('checking333333',filterRemoveImgs)

        setMultipleImageFiles({
            files: filterRemoveFileImgs
        })
        setMultipleImages(filterRemovePreviewImgs)



    }


    // Functions to preview multiple images
    const changeMultipleFiles = (e) => {
        setMultipleImageFiles({
            files: [...multipleImageFiles.files, ...e.target.files]
        })
        if (e.target.files) {
            const imageArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
        }
    };

    const render = (data) => {
        return data.map((image, i) => {
            return <div className='image-main mt-1' onClick={() => {
                removeArray(i);
            }}>
                <i class="fa fa-close image-close text-danger " ></i>
                <img className="image mx-2 mt-3 rounded-3 " src={image} alt="" key={i} style={{ width: '105px', height: '90px', objectFit: 'cover' }} />
            </div>
        });
    };


    const navigate = useNavigate();

    function handleUpdate(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("banner_title", bannerState.banner_title);
        formData.append("banner_description", bannerState.banner_description);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });
        setClickedRender(true)



        axios.post(`/api/update-banner/${editId}`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setClickedRender(false)

                setbannerState({
                    banner_description: '',
                    banner_title: ''
                });


                setMultipleImageFiles([]);
                setMultipleImages([]);
                navigate('/view-all-banner');

                // setImage('');
                // setPicture('');
                // document.getElementById('job_post_logo').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }



    useEffect(() => {
        axios.get(`/api/edit-banner/${editId}`).then(res => {
            if (res.data.status == 200) {
                setbannerState({
                    banner_description: res.data.banner.banner_description,
                    banner_title: res.data.banner.banner_title,
                })
                setAllImagesfromDatabase(res.data.banner_images)


                // setPicture(res.data.post.image)

            }
        })

    }, [])


    

    useEffect(() => {
        axios.get(`/api/edit-banner/${editId}`).then(res => {
            if (res.data.status == 200) {
             
                setAllImagesfromDatabase(res.data.banner_images)


                // setPicture(res.data.post.image)

            }
        })

    }, [renderData])



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
                                <div className='card-header d-flex align-items-center justify-content-between'>
                                    <h5>Edit a Banner</h5>
                                    <Link to="/view-all-banner"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleUpdate}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '100%' }}>


                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="banner_title" value={bannerState.banner_title} />

                                                </div>

                                                <div class="mt-3">
                                                    <div class="form-group">
                                                        <label for="exampleFormControlTextarea1" className='fs-6'>Description</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="banner_description" value={bannerState.banner_description} ></textarea>
                                                    </div>

                                                </div>


                                                <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFileImage" multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2 ' >
                                                            {
                                                                render(multipleImages)

                                                            }
                                                            {

                                                                allImagesFromDatabase.map((item, i) => {
                                                                    return (
                                                                        <>
                                                                            {/* <img className="rounded mx-2" src={`${global.img_url}/images/${item.trim()}`} style={{ width: '100px', height: '90px' }}></img> */}
                                                                            <div class="" style={{ position: 'relative' }} >
                                                                                <div style={{ position: 'absoulute', right: '-10px', top: '0px' }} onClick={(e) => {
                                                                                    {
                                                                                        axios.post(`/api/delete-banner-multiple-image/${item.id}`).then(res => {
                                                                                            if (res.data.status == 200) {
                                                                                                setRenderData(res.data)
                                                                                            }
                                                                                        })
                                                                                    }

                                                                                }}>
                                                                                    <i class="fa fa-close text-danger"></i>

                                                                                </div>

                                                                                <img className="rounded mx-2" src={`${global.img_url}/images/${item.image}`} style={{ width: '100px', height: '90px' }}></img>

                                                                            </div>



                                                                        </>
                                                                    )
                                                                })

                                                            }

                                                        </div>




                                                    </div>


                                                </div>

                                            </div>


                                        </div>



                                        <div class="">
                                            <button type="submit" className='btn btn-success rounded-3 px-4 mx-2 mt-2' onSubmit={handleUpdate}>

                                                UPDATE
                                                {
                                                    clickedRender ? <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span> : ''

                                                }
                                            </button>
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
export default EditBanner;

