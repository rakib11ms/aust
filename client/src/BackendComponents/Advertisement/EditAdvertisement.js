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



function EditAdvertisement() {

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


    const [advertisement_fee, setadvertisement_fee] = useState('');
    const [position, setposition] = useState('');
    const [payment_type, setpayment_type] = useState(0);
    const [showMobile, setshowMobile] = useState(1);
    const [showDesktop, setshowDesktop] = useState(1);


    const allViewPageArray = [
        { page_name: 'Home' },
        { page_name: 'View Job Post' },
        { page_name: 'View Event' },
        { page_name: 'View Article' },


    ];

    const [allViewPage, setAllViewPage] = useState(allViewPageArray);




    const [viewInPage, setviewInPage] = React.useState([]);
    // const [viewInPageId, setviewInPageId] =useState([]);

    // console.log('checking baal', viewInPage)


    let result = viewInPage.map(a => a.page_name);
    // console.log('result',result)




    function handlePersonChange(event, values) {
        setviewInPage(values)
        // setViewPagesArray(values)

    }

    const [advertisement_title, setadvertisement_title] = useState("");
    const [redirect_link, setredirect_link] = useState("");
    const [show_time, setshow_time] = useState("");
    const [show_days, setshow_days] = useState("");



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
            return <div className='image-main mt-2' onClick={() => {
                removeArray(i);
            }}>
                <i class="fa fa-close image-close text-danger" ></i>
                <img className="image mx-3 my-2 " src={image} alt="" key={i} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
            </div>
        });
    };





    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        // formData.append("posted_by", 1);
        formData.append("advertisement_title", advertisement_title);
        formData.append("advertisement_description", content1);
        formData.append("redirect_link", redirect_link);
        formData.append("show_time", show_time);
        formData.append("show_days", show_days);
        formData.append("payment_type", payment_type);
        formData.append("advertisement_fee", advertisement_fee);
        formData.append("view_page", result);
        formData.append("showMobile", showMobile);
        formData.append("showDesktop", showDesktop);

        formData.append("position", position);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });



        axios.post(`/api/add-advertisement`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')

                setadvertisement_fee('')
                setContent1('');
                setviewInPage([]);
                setposition('');
                setMultipleImageFiles([]);
                setMultipleImages([]);
                setpayment_type(0);
                setshow_days('');
                setshow_time('');
                setshowDesktop(1);
                setshowMobile(1);

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

    const [allEventTypes, setAllEventTypes] = useState([]);
    console.log('allllllllllllllllllllllllllllllllllllllllllllllll', allEventTypes)



    //////////////quick eveent create functionality start //////////////////
    const [addEventTypeModalIsOpen, setaddEventTypeModalIsOpen] = useState(false);

    function closeAddEventTypeModal(e) {
        setaddEventTypeModalIsOpen(false);

    }
    const openAddEventTypeModal = (e) => {
        e.preventDefault();
        setaddEventTypeModalIsOpen(true)

    }

    const customStyles1 = {
        content: {
            // marginTop: '70px',
            top: '35vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: 300,
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };



    const [renderAllEventTypes, setRenderAllEventTypes] = useState('');
    const [addEventType, setAddEventType] = useState({
        event_type_name: "",
        created_by: '',
        error_list: []

    })

    console.log('job type data typing', addEventType)

    const handleInput = (e) => {
        setAddEventType({
            ...addEventType, [e.target.name]: e.target.value
        })


    }



    const handleJobTypeSave = (e) => {
        e.preventDefault();
        const addJob = {
            event_type_name: addEventType.event_type_name,
            created_by: '',
        }
        axios.post(`/api/add-event-type`, addEventType).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllEventTypes(res.data);
                closeAddEventTypeModal();
                setAddEventType({
                    event_type_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddEventType({ ...addEventType, error_list: res.data.errors });
                // Swal.fire(addEventType.error_list.event_type_name[0], '', 'error')

            }
        })


    }



    const { id } = useParams();


    const [editData, setEditData] = useState({

    });




    const [viewPagesArray, setViewPagesArray] = React.useState([]);
    console.log('viewwwwwwwwwww page comming from data', viewPagesArray)

    const allViewPageFromDatabase = [
        // {
        //     viewPagesArray[0] !==
        // }
        { page_name: 'View Event' },
        { page_name: 'View Article' },



    ];

    console.log('beeey', allViewPageFromDatabase)

    useEffect(() => {


        axios.get(`/api/edit-advertisement/${id}`).then(res => {
            if (res.data.status == 200) {
                setEditData(res.data.event);

                setContent1(res.data.advertisement.advertisement_description)
                setpayment_type(res.data.advertisement.payment_type)
                setadvertisement_fee(res.data.advertisement.advertisement_fee)
                setshowDesktop(res.data.advertisement.showDesktop)
                setshowMobile(res.data.advertisement.showMobile)
                setposition(res.data.advertisement.position)
                // setAllImagesfromDatabase(res.data.advertisement.image.split(','))
                setshow_days(res.data.advertisement.show_days)
                setshow_time(res.data.advertisement.show_time)
                setpayment_type(res.data.advertisement.payment_type)
                setredirect_link(res.data.advertisement.redirect_link);
                setadvertisement_title(res.data.advertisement.advertisement_title)

                setViewPagesArray(res.data.view_pages);
                // setRenderAllEventTypes(res.data)
                // setLoading(false);
                // setTotalJobType(res.data.total_event_types)
            }
        })

    }, [])



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
                                    <h5>Create a Advirtesment</h5>
                                    <Link to="/view-all-advertisement"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '73%' }}>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} />

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
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Redirection Link</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setredirect_link(e.target.value)} name="redirect_link" value={redirect_link} />

                                                </div>

                                                <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFileImage" multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2 border' >
                                                            {render(multipleImages)}

                                                        </div>




                                                    </div>


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
                                                                    <span className='mx-2 '>Show time</span>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <i className='fa fa-calendar' />
                                                                    <span className='mx-2'>Show days</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Payment</span>
                                                                </div>


                                                                {
                                                                    payment_type == 1 &&
                                                                    <div className='mt-4'>
                                                                        <i class="fa-solid fa-money-bill"></i>
                                                                        <span className='mx-2'>Fee</span>
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
                                                                    <span className='mx-2'>Position</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                                                    <span className='mx-2'>View In</span>
                                                                </div>

                                                            </div>
                                                            <div class="" style={{ width: '50%' }}>
                                                                <div class="d-flex align-items-center">

                                                                    <div class="" style={{ width: '65%' }}>
                                                                        <input type="text" class="form-control form-control-sm rounded-3 " id="formGroupExampleInput" value={show_time} placeholder="" onChange={(e) => {
                                                                            setshow_time(e.target.value)
                                                                        }} />
                                                                    </div>
                                                                    <div class="mx-2" style={{ width: '35%' }}>
                                                                        <span>Sec</span>
                                                                    </div>
                                                                </div>

                                                                <div className='my-3'>

                                                                    <div class="d-flex align-items-center">

                                                                        <div class="" style={{ width: '65%' }}>
                                                                            <input type="text" class="form-control form-control-sm rounded-3 " id="formGroupExampleInput" value={show_days} placeholder="" onChange={(e) => {
                                                                                setshow_days(e.target.value)
                                                                            }} />
                                                                        </div>
                                                                        <div class="mx-2" style={{ width: '35%' }}>
                                                                            <span>Days</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='mt-3'>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input " type="checkbox" id="flexCheckChecked" checked={payment_type === 1} onChange={
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
                                                                    <div class="my-3 col-8">
                                                                        <div class="">
                                                                            <input type="text" class="form-control form-control-sm rounded-3  " id="formGroupExampleInput" value={advertisement_fee} placeholder="" onChange={(e) => {
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

                                                                <div class="my-4">
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
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" value={position}
                                                                        onChange={(e) => {
                                                                            setposition(e.target.value)
                                                                        }}>
                                                                        <option selected value="">Choose</option>
                                                                        <option value="top" >Top</option>
                                                                        <option value="right">Right</option>
                                                                        <option value="left">Left</option>
                                                                        <option value="bottom">Bottom</option>
                                                                    </select>
                                                                </div>
                                                        
                                              



                                                            </div>
                                                        </div>
                                                        <div className='mt-2'>
                                                            <Stack spacing={5} sx={{ width: '100%' }}>
                                                                <Autocomplete
                                                                    multiple
                                                                    id="tags-standard"
                                                                    options={allViewPage}
                                                                    value={viewInPage}

                                                                    getOptionLabel={(option) => option.page_name}
                                                                    // defaultValue={[allUsers[1]]}
                                                                    onChange={handlePersonChange}
                                                                    // renderOption={(option) => (
                                                                    //     <>
                                                                    //       {option.name} ({option.user_role})
                                                                    //     </>
                                                                    //   )}
                                                                    getOptionSelected={(option, value) =>
                                                                        option.page_name === value.page_name
                                                                    }

                                                                    renderInput={(params) => (

                                                                        <TextField

                                                                            {...params}
                                                                            // variant="standard"
                                                                            // label="Multiple values"
                                                                            placeholder="Search..."
                                                                            size="small"

                                                                        />
                                                                    )}

                                                        

                                                                />
                                                            </Stack>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <div class="">
                                            <button type="submit" className='btn btn-success rounded-3 px-4 mx-2' onSubmit={handleSubmit}>UPDATE</button>
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
export default EditAdvertisement;