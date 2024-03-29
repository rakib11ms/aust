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


function CreateEvent() {

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allUsers, setAllUsers] = useState([]);

    // console.log('all users check', allUsers)

    const [createEventErrorList, setCreateEventErrorList] = useState('');
    console.log('error', createEventErrorList)

    const [clickedRender, setClickedRender] = useState(false)



    ///add event functionality start//
    const [event_time, setevent_time] = React.useState(null);
    const [event_date, setevent_date] = React.useState(null);

    const [event_fee, setevent_fee] = useState('');
    const [priority, setpriority] = useState('normal');
    const [payment_type, setpayment_type] = useState(0);
    const [showMobile, setshowMobile] = useState(1);
    const [showDesktop, setshowDesktop] = useState(1);
    const [showBanner, setshowBanner] = useState(0);

    const [contactPerson, setcontactPerson] = React.useState([]);
    // const [contactPersonId, setcontactPersonId] =useState([]);

    // console.log('checking baal', contactPerson)


    let result = contactPerson.map(a => a.id);
    // console.log('result',result)

    // console.log('baler result', result);



    function handlePersonChange(event, values) {
        setcontactPerson(values)
    }

    const [eventState, seteventState] = useState({
        event_type_id: '',
        event_title: '',

    })

    // console.log('eventstate', eventState.event_type_id)

    const handleInputChange = (e) => {
        seteventState({
            ...eventState, [e.target.name]: e.target.value
        })
    }

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



    // console.log('image files', multipleImageFiles.files)
    // console.log('image url', multipleImages)

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



    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("posted_by", localStorage.getItem('user_id'));
        formData.append("event_title", eventState.event_title);
        formData.append("event_type_id", eventState.event_type_id);
        formData.append("event_date", event_date);
        formData.append("event_time", event_time);
        formData.append("priority", priority);
        formData.append("contact_person", result);
        formData.append("event_fee", event_fee == '' ? 0 : event_fee);
        formData.append("showBanner", showBanner);
        formData.append("payment_type", payment_type);
        formData.append("event_description", content1);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });
        setClickedRender(true)



        axios.post(`/api/add-event`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setClickedRender(false)

                seteventState({
                    event_type_id: '',
                    event_title: ''
                });
                setevent_date(null);
                setevent_time(null);
                setevent_fee('')
                setContent1('');
                setcontactPerson([]);
                setpriority('');
                setMultipleImageFiles([]);
                setMultipleImages([]);
                setpayment_type(0)
                navigate('/view-all-events');

                // setImage('');
                // setPicture('');
                // document.getElementById('job_post_logo').value = "";
            }
            else if (res.data.status == 400) {
                setCreateEventErrorList(res.data.errors);
                setClickedRender(false)

            }
        })

    }

    const [allEventTypes, setAllEventTypes] = useState([]);
    // console.log('allllllllllllllllllllllllllllllllllllllllllllllll', allEventTypes)



    useEffect(() => {
        axios.get(`/api/all-users`).then(res => {
            if (res.data.status == 200) {
                setAllUsers(res.data.all_users);

            }
        }
        )

        axios.get(`/api/event-type`).then(res => {
            if (res.data.status == 200) {
                setAllEventTypes(res.data.event_type);
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
                                    <h5>Create a Event</h5>
                                    <Link to="/view-all-events"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '73%' }}>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Event Type</label>

                                                    <div class="input-group mb-3">

                                                        <select class="form-select" aria-label="Default select example" onChange={handleInputChange} value={eventState.event_type_id} name="event_type_id" required>
                                                            <option selected value="" disabled>Choose</option>

                                                            {
                                                                allEventTypes.map((item, i) => {
                                                                    return (
                                                                        <>
                                                                            <option value={item.id}>{item.event_type_name}</option>

                                                                        </>
                                                                    )
                                                                })
                                                            }



                                                        </select>


                                                    </div>
                                                </div>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="event_title" value={eventState.event_title} required />
                                                </div>
                                                <div class="mt-2">
                                                    <span class="text-danger ">{createEventErrorList.event_title}</span>
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

                                                <div class="mt-4">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Contact Person</label>
                                                    <Stack spacing={5} sx={{ width: '100%', paddingTop: '7px' }}>
                                                        <Autocomplete
                                                            multiple
                                                            id="tags-standard"
                                                            options={allUsers}
                                                            getOptionLabel={(option) => option.full_name}
                                                            // defaultValue={[allUsers[1]]}
                                                            onChange={handlePersonChange}
                                                            // renderOption={(option) => (
                                                            //     <>
                                                            //       {option.name} ({option.user_role})
                                                            //     </>
                                                            //   )}
                                                            getOptionSelected={(option, value) =>
                                                                option.id === value.id
                                                            }

                                                            renderInput={(params) => (

                                                                <TextField


                                                                    {...params}
                                                                    // variant="standard"
                                                                    // label="Multiple values"
                                                                    placeholder="Search..."
                                                                />
                                                            )}

                                                        // renderOption={option => {
                                                        //     return (
                                                        //         <Fragment>
                                                        //                 <IconButton color="primary">
                                                        //                     <img src={'../src/img/Tables.svg'}/> {/Mock image, attribute in option/}
                                                        //                 </IconButton>
                                                        //             {option.title}
                                                        //         </Fragment>
                                                        //     );
                                                        // }}


                                                        />
                                                    </Stack>




                                                </div>
                                                <div class="mt-2">
                                                    <span class="text-danger ">{createEventErrorList.contact_person}</span>
                                                </div>

                                                <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFileImage" multiple onChange={changeMultipleFiles} required
                                                        />

                                                        <div className='d-flex mt-2 ' >
                                                            {render(multipleImages)}

                                                        </div>




                                                    </div>


                                                </div>

                                            </div>
                                            <div class="" style={{ width: '27%' }}>
                                                <div class="row bg-light rounded-3 mt-4 ">

                                                    <div className='py-4  '>
                                                        <h6 className=''>Preferences</h6>
                                                        <div className=' mt-3 d-flex align-items-stretch' style={{ color: '#777777', fontWeight: '400', fontSize: '15px' }}>

                                                            <div className=' ' style={{ width: '50%' }}>
                                                                <div className='mt-1'>
                                                                    <i className='fa fa-clock' />
                                                                    <span className='mx-2 '>Event Time</span>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <i className='fa fa-calendar' />
                                                                    <span className='mx-2'>Event Date</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Payment</span>
                                                                </div>


                                                                {
                                                                    payment_type == 1 &&
                                                                    <div className='mt-4'>
                                                                        <i class="fa-solid fa-money-bill"></i>
                                                                        <span className='mx-2'>Event Fees</span>
                                                                    </div>
                                                                }




                                                                {/* <div className='mt-4'>
                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Show Mobile</span>
                                                                </div>

                                                                <div className='mt-4'>
                                                                    <i class="fa-solid fa-globe"></i>
                                                                    <span className='mx-2'>Show  Web</span>
                                                                </div> */}
                                                                <div className='mt-4'>
                                                                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Show  Banner</span>
                                                                </div>

                                                                {/* <div className='mt-4'>
                                                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                                                    <span className='mx-2 mt-5'>Priority</span>
                                                                </div> */}

                                                            </div>
                                                            <div class="" style={{ width: '50%' }}>
                                                                <div className=''>
                                                                    <Stack sx={{
                                                                        height: '30px', border: 'none', padding: '0'
                                                                    }}
                                                                    >
                                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                            <TimePicker
                                                                                label="Time"
                                                                                value={event_time}

                                                                                onChange={(newValue) => {
                                                                                    setevent_time(newValue);
                                                                                }}
                                                                                renderInput={(params) => <TextField {...params} size="small"
                                                                                />}
                                                                            />
                                                                        </LocalizationProvider>
                                                                    </Stack>
                                                                </div>
                                                                <div className='my-3'>

                                                                    {/* <Stack sx={{
                                                                        height: '30px', border: 'none', padding: '0'
                                                                    }}
                                                                    >


                                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                            <DatePicker
                                                                                label="Date"
                                                                                value={event_date}
                                                                                inputFormat="DD-MM-YYYY"

                                                                                onChange={(newValue) => {
                                                                                    setevent_date(newValue);
                                                                                }}
                                                                                renderInput={(params) => <TextField {...params} size="small" />}
                                                                            />
                                                                        </LocalizationProvider>
                                                                    </Stack> */}

                                                                    <input type='date' class="col-12" value={event_date} onChange={(e) => setevent_date(e.target.value)} required
                                                                    />
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
                                                                                    setevent_fee('');

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
                                                                            <input type="text" class="form-control rounded-3 " id="formGroupExampleInput" value={event_fee} placeholder="" onChange={(e) => {
                                                                                setevent_fee(e.target.value)
                                                                            }} />
                                                                        </div>
                                                                        {/* <span className='d-block col-6'>BDT</span> */}

                                                                    </div>
                                                                }



                                                                {/* <div class="my-4">
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
                                                                </div> */}

                                                                <div class="mt-4">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={
                                                                            (e) => {
                                                                                if (e.target.checked) {
                                                                                    setshowBanner(1)
                                                                                }
                                                                                else {
                                                                                    setshowBanner(0)

                                                                                }
                                                                            }
                                                                        }

                                                                        />
                                                                        <label class="form-check-label" for="flexSwitchCheckDefault">{showBanner == 0 ? "No" : "Yes"}</label>
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <div class="">
                                            <button type="submit" className='btn btn-success rounded-3 mt-1 px-4 mx-2' onSubmit={handleSubmit}>

                                                SAVE
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
export default CreateEvent;

