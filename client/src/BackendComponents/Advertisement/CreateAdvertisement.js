import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
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



function CreateAdvertisement() {
    const [clickedRender, setClickedRender] = useState(false)


    const navigate = useNavigate();

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allUsers, setAllUsers] = useState([]);

    // console.log('all users check', allUsers)





    ///add advertisement functionality start//


    const [position, setposition] = useState('');
    const [showMobile, setshowMobile] = useState(1);
    const [showDesktop, setshowDesktop] = useState(1);



    const [advertisement_title, setadvertisement_title] = useState("");
    const [redirect_link, setredirect_link] = useState("");
    const [show_time, setshow_time] = useState("");
    const [show_days, setshow_days] = useState("");
    const [advertisement_fee, setadvertisement_fee] = useState("");
    const [payment_type, setpayment_type] = useState(0);


    const [advertiser_name, setadvertiser_name] = useState('');
    const [advertiser_phone, setadvertiser_phone] = useState('');
    const [advertiser_email, setadvertiser_email] = useState('');
    const [po_no, setpo_no] = useState('');
    const [reference_no, setreference_no] = useState('');


    //////////images code ///////////

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
        // setMultipleImageFiles({
        //     files:
        // });

        const filterRemoveFileImgs = multipleImageFiles.files.filter((item, index) => {
            return index !== i
        })

        const filterRemovePreviewImgs = multipleImages.filter((item, index) => {
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
        // console.log('video',e.target.files);
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
            return <div className='image-main mt-2' onClick={() => {
                removeArray(i);
            }}>
                <i class="fa fa-close image-close text-danger" ></i>
                {/* {console.log("yeeo",image.split("."))} */}

                <img className="image mx-3 my-2 " src={image} alt="" key={i} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
                {/* <video width="150" height="100" controls>
  <source src={image} type="video/ogg"></source>
  </video> */}
            </div>
        });
    };

    ////advertisment file ///

    const [advertisement_file, setadvertisement_file] = useState('')
    console.log('ad', advertisement_file)
    const handleAdvertisementFile = (e) => {
        setadvertisement_file(e.target.files[0])
    }



    const [advertisementError, setadvertisementError] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        setClickedRender(true)

        const formData = new FormData();
        // formData.append("posted_by", 1);
        formData.append("advertisement_title", advertisement_title);
        formData.append("advertisement_description", content1);
        formData.append("redirect_link", redirect_link);
        formData.append("show_time", show_time);
        formData.append("show_days", show_days);
        formData.append("advertisement_fee", advertisement_fee);
        formData.append("home_page", allCheckBox.home_page ? 1 : 0);
        formData.append("news_page", allCheckBox.news_page ? 1 : 0);
        formData.append("event_page", allCheckBox.event_page ? 1 : 0);
        formData.append("blog_page", allCheckBox.blog_page ? 1 : 0);
        formData.append("post_page", allCheckBox.post_page ? 1 : 0);
        formData.append("job_page", allCheckBox.job_page ? 1 : 0);
        formData.append('isDraft', 0);
        formData.append('isPublished', 1);

        formData.append("showMobile", showMobile);
        formData.append("advertiser_name", advertiser_name);
        formData.append("advertiser_phone", advertiser_phone);
        formData.append("advertiser_email", advertiser_email);
        formData.append("reference_no", reference_no);
        formData.append("po_no", po_no);
        formData.append("advertisement_file", advertisement_file);
        formData.append("showDesktop", showDesktop);

        formData.append("position", position);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });



        axios.post(`/api/add-advertisement`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setClickedRender(false)
                localStorage.removeItem("draftAdvertisementData");


                setContent1('');
                setposition('');
                setMultipleImageFiles([]);
                setMultipleImages([]);
                setshow_days('');
                setshow_time('');
                setshowDesktop(1);
                setshowMobile(1);
                navigate('/view-all-advertisement')

                // setImage('');
                // setPicture('');
                // document.getElementById('job_post_logo').value = "";
            }
            else if (res.data.status == 400) {
                setadvertisementError(res.data.errors);

            }
        })

    }


    const draftAdvertisement = (e) => {

        e.preventDefault();
        setClickedRender(true)

        const formData = new FormData();
        // formData.append("posted_by", 1);
        formData.append("advertisement_title", advertisement_title);
        formData.append("advertisement_description", content1);
        formData.append("redirect_link", redirect_link);
        formData.append("show_time", show_time);
        formData.append("show_days", show_days);
        formData.append("advertisement_fee", advertisement_fee);
        formData.append("home_page", allCheckBox.home_page ? 1 : 0);
        formData.append("news_page", allCheckBox.news_page ? 1 : 0);
        formData.append("event_page", allCheckBox.event_page ? 1 : 0);
        formData.append("blog_page", allCheckBox.blog_page ? 1 : 0);
        formData.append("post_page", allCheckBox.post_page ? 1 : 0);
        formData.append("job_page", allCheckBox.job_page ? 1 : 0);

        formData.append("showMobile", showMobile);
        formData.append('isDraft', 1);
        formData.append('isPublished', 0);
        formData.append("advertiser_name", advertiser_name);
        formData.append("advertiser_phone", advertiser_phone);
        formData.append("advertiser_email", advertiser_email);
        formData.append("reference_no", reference_no);
        formData.append("po_no", po_no);
        formData.append("advertisement_file", advertisement_file);
        formData.append("showDesktop", showDesktop);

        formData.append("position", position);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });



        axios.post(`/api/add-advertisement`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setClickedRender(false)
                localStorage.removeItem("draftAdvertisementData");


                setContent1('');
                setposition('');
                setMultipleImageFiles([]);
                setMultipleImages([]);
                setshow_days('');
                setshow_time('');
                setshowDesktop(1);
                setshowMobile(1);
                navigate('/view-all-advertisement')

                // setImage('');
                // setPicture('');
                // document.getElementById('job_post_logo').value = "";
            }
            else if (res.data.status == 400) {
                setadvertisementError(res.data.errors);

            }
        })


















        Swal.fire('Draft Saved Successfully', '', 'success')





    }



    const [allCheckBox, setAllCheckBox] = useState({
        home_page: '',
        news_page: '',
        event_page: '',
        blog_page: '',
        post_page: '',
        job_page: '',

    });
    function handleCheckbox(e) {
        setAllCheckBox({
            ...allCheckBox, [e.target.name]: e.target.checked
        })

    }

    // console.log('heelloo yeeeeees', allCheckBox)



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
                                    <h5>Create a Advertisement</h5>
                                    <Link to="/view-all-advertisement"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '73%' }}>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title <span className='text-danger'>*</span></label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" required onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} />
                                                    <span className='text-danger mt-2 d-block'>{advertisementError.advertisement_title}</span>

                                                </div>

                                                <div class="mt-3">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Description</label>
                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Redirection Link <span className='text-danger'>*</span></label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" required onChange={(e) => setredirect_link(e.target.value)} name="redirect_link" value={redirect_link} />

                                                </div>

                                                <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed <span className='text-danger'>*</span></label>

                                                        <input class="form-control" type="file" id="formFileImage" required multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2 ' >
                                                            {render(multipleImages)}

                                                        </div>




                                                    </div>


                                                </div>
                                                <div class="mt-3 mx-auto">
                                                    {/* <button type="button" className='btn btn-secondary rounded-3 mx-2' onClick={draftAdvertisement}> DRAFT</button> */}

                                                    <button type="submit" className='btn btn-success rounded-3 px-4 ' onSubmit={handleSubmit}>SAVE
                                                        {
                                                            clickedRender ? <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span> : ''




                                                        }
                                                    </button>
                                                </div>


                                            </div>
                                            <div class="" style={{ width: '27%' }}>
                                                <div class="row bg-light rounded-3 mt-4 ">

                                                    <div className='py-4  '>
                                                        <h6 className=''>Preferences</h6>
                                                        <div className=' mt-3 d-flex align-items-stretch ' style={{ color: '#777777', fontWeight: '400', fontSize: '15px' }}>

                                                            <div className=' ' style={{ width: '50%' }} >


                                                                <div className='mt-1'>
                                                                    <i className='fa fa-clock' />
                                                                    <span className='mx-2 '>Show time <span className='text-danger'>*</span></span>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <i className='fa fa-calendar' />
                                                                    <span className='mx-2'>Show days <span className='text-danger'>*</span></span>
                                                                </div>


                                                                <div className='mt-4'>
                                                                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Payment</span>
                                                                </div>


                                                                {
                                                                    payment_type == 1 &&
                                                                    <div className='mt-4'>
                                                                        <i class="fa-solid fa-money-bill"></i>
                                                                        <span className='mx-2'>Fees</span>
                                                                    </div>
                                                                }









                                                                <div className='mt-4'>
                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Show Mobile</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa-solid fa-globe"></i>
                                                                    <span className='mx-2'>Show  Web</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Position <span className='text-danger'>*</span></span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                                                    <span className='mx-2'>View In <span className='text-danger'>*</span></span>
                                                                </div>

                                                            </div>
                                                            <div class="" style={{ width: '50%' }}>
                                                                <div class="d-flex align-items-center">

                                                                    <div class="" style={{ width: '65%' }}>
                                                                        <input type="text" class="form-control form-control-sm rounded-3 " required id="formGroupExampleInput" value={show_time} placeholder="" onChange={(e) => {
                                                                            setshow_time(e.target.value)
                                                                        }} />
                                                                    </div>
                                                                    <div class="mx-2" style={{ width: '35%' }}>
                                                                        <span>Sec</span>
                                                                    </div>
                                                                </div>

                                                                <div className='my-2'>

                                                                    <div class="d-flex align-items-center">

                                                                        <div class="" style={{ width: '65%' }}>
                                                                            <input type="text" class="form-control form-control-sm rounded-3 " required id="formGroupExampleInput" value={show_days} placeholder="" onChange={(e) => {
                                                                                setshow_days(e.target.value)
                                                                            }} />
                                                                        </div>
                                                                        <div class="mx-2" style={{ width: '35%' }}>
                                                                            <span>Days</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" checked={payment_type === 1} onChange={
                                                                            (e) => {
                                                                                if (e.target.checked) {
                                                                                    setpayment_type(1)
                                                                                }
                                                                                else {
                                                                                    setpayment_type(0);
                                                                                    setadvertisement_fee('');

                                                                                }
                                                                            }
                                                                        } />
                                                                        <label class="form-check-label" for="flexCheckChecked">
                                                                            {
                                                                                payment_type == 1 ? 'Yes' : 'No'
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    payment_type == 1 &&
                                                                    <div class="my-2">
                                                                        <div class="">
                                                                            <input type="text" class="form-control rounded-3 " id="formGroupExampleInput" value={advertisement_fee} placeholder="" onChange={(e) => {
                                                                                setadvertisement_fee(e.target.value)
                                                                            }} />
                                                                        </div>
                                                                        {/* <span className='d-block col-6'>BDT</span> */}

                                                                    </div>
                                                                }




                                                                <div class="my-4">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked onChange={
                                                                            (e) => {
                                                                                if (e.target.checked) {
                                                                                    setshowMobile(1)
                                                                                }
                                                                                else {
                                                                                    setshowMobile(0)

                                                                                }
                                                                            }
                                                                        } />
                                                                        <label class="form-check-label" for="flexSwitchCheckDefault">Yes</label>
                                                                    </div>
                                                                </div>

                                                                <div class="my-3">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked onChange={
                                                                            (e) => {
                                                                                if (e.target.checked) {
                                                                                    setshowDesktop(1)
                                                                                }
                                                                                else {
                                                                                    setshowDesktop(0)

                                                                                }
                                                                            }
                                                                        } />
                                                                        <label class="form-check-label" for="flexSwitchCheckDefault">Yes</label>
                                                                    </div>
                                                                </div>

                                                                <div class="">
                                                                    <select class="form-select form-select-sm" required aria-label=".form-select-sm example"
                                                                        onChange={(e) => {
                                                                            setposition(e.target.value)
                                                                        }} value={position}>
                                                                        <option selected disabled>Choose</option>
                                                                        <option value="top" >Top</option>
                                                                        <option value="middle">Middle</option>
                                                                        <option value="bottom">Bottom</option>
                                                                    </select>
                                                                </div>




                                                            </div>
                                                        </div>


                                                        <div class="mt-2">
                                                            <div class="d-flex flex-wrap ">
                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="home_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Home
                                                                    </label>
                                                                </div>
                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="event_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Event
                                                                    </label>
                                                                </div>
                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="news_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        News
                                                                    </label>
                                                                </div>

                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="blog_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Blog

                                                                    </label>
                                                                </div>
                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="post_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Post
                                                                    </label>
                                                                </div>
                                                                <div class="form-check mx-2 mt-2">
                                                                    <input class="form-check-input" type="checkbox" name="job_page" id="flexCheckDefault" onChange={handleCheckbox} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Job
                                                                    </label>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="row bg-light rounded-3 mt-4 ">

                                                    <div className='py-4  '>
                                                        <h6 className=''>Advertiser Information</h6>
                                                        <div className=' mt-3 d-flex align-items-stretch ' style={{ color: '#777777', fontWeight: '400', fontSize: '15px' }}>

                                                            <div className=' ' style={{ width: '100%' }} >

                                                                <div class="mb-1">
                                                                    <label for="exampleFormControlInput1" class="form-label my-1">Advertiser Name <span className='text-danger'> *</span></label>

                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" onChange={(e) => setadvertiser_name(e.target.value)} name="advertiser_name" value={advertiser_name} />

                                                                </div>

                                                                <div class="mb-1">
                                                                    <label for="exampleFormControlInput1" class="form-label my-1">Advertiser Phone <span className='text-danger'> *</span></label>

                                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertiser_phone(e.target.value)} name="advertiser_phone" value={advertiser_phone} />

                                                                </div>

                                                                <div class="mb-1">
                                                                    <label for="exampleFormControlInput1" class="form-label my-1">Advertiser Email</label>

                                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertiser_email(e.target.value)} name="advertiser_email" value={advertiser_email} />

                                                                </div>



                                                                <div class="mb-1">
                                                                    <label for="exampleFormControlInput1" class="form-label my-1">Reference No <span className='text-danger'> *</span></label>

                                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setreference_no(e.target.value)} name="reference_no" value={reference_no} />

                                                                </div>


                                                                <div class="mb-1">
                                                                    <label for="exampleFormControlInput1" class="form-label my-1">P.O/W.O No <span className='text-danger'> *</span></label>

                                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setpo_no(e.target.value)} name="po_no" value={po_no} />

                                                                </div>

                                                                <div class="">
                                                                    <label for="exampleFormControlInput1" class="form-label ">Upload Attachment Pdf,Doc</label>

                                                                    <input class="form-control" type="file" id="formFileImage" onChange={handleAdvertisementFile}
                                                                    />






                                                                </div>

                                                            </div>

                                                        </div>




                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        {/* <div class="">
                                            <button type="submit" className='btn btn-success rounded-3 px-4 mx-2' onSubmit={handleSubmit}>SAVE</button>
                                        </div> */}





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
export default CreateAdvertisement;