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

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allUsers, setAllUsers] = useState([]);

    // console.log('all users check', allUsers)





    ///add event functionality start//
    const [event_time, setevent_time] = React.useState(null);
    const [event_date, setevent_date] = React.useState(null);

    const [event_fee, setevent_fee] = useState('');
    const [priority, setpriority] = useState('normal');
    const [payment_type, setpayment_type] = useState(0);
    const [showMobile, setshowMobile] = useState(1);
    const [showDesktop, setshowDesktop] = useState(1);


    // const [allViewPage, setAllViewPage] = useState([
    //     { id: '1', page_name: 'Home' },
    //     { id: '2', page_name: 'View Job Post' },
    //     { id: '3', page_name: 'View Event' },
    //     { id: '4', page_name: 'View Article' },

    // ]);


    const allViewPage = [
        { id: '1', page_name: 'Home' },
        { id: '2', page_name: 'View Job Post' },
        { id: '3', page_name: 'View Event' },
        { id: '4', page_name: 'View Article' },

    ];

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
        formData.append("posted_by", 1);
        formData.append("event_title", eventState.event_title);
        formData.append("event_type_id", eventState.event_type_id);
        formData.append("event_date", event_date);
        formData.append("event_time", event_time);
        formData.append("priority", priority);
        formData.append("contact_person", result);
        formData.append("event_fee", event_fee);
        formData.append("payment_type", payment_type);
        formData.append("event_description", content1);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });



        axios.post(`/api/add-event`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')

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


    // useEffect(() => {


    //     axios.get(`/api/event-type`).then(res => {
    //         if (res.data.status == 200) {
    //             setAllEventTypes(res.data.event_type);
    //             setRenderAllEventTypes(res.data)
    //             // setLoading(false);
    //             // setTotalJobType(res.data.total_event_types)
    //         }
    //     })

    // }, [renderAllEventTypes])


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
                setRenderAllEventTypes(res.data)
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
                                    <Link to="/view-all-events"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '73%' }}>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="event_title" value={eventState.event_title} />

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

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="event_title" value={eventState.event_title} />

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
                                                                        <span className='mx-2'>Event Fees</span>
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
                                                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                                                    <span className='mx-2'>View In</span>
                                                                </div>

                                                            </div>
                                                            <div class="" style={{ width: '50%' }}>
                                                                <div class="d-flex align-items-center">

                                                                    <div class="" style={{ width: '65%' }}>
                                                                        <input type="text" class="form-control form-control-sm rounded-3 " id="formGroupExampleInput" value={event_fee} placeholder="" onChange={(e) => {
                                                                            setevent_fee(e.target.value)
                                                                        }} />
                                                                    </div>
                                                                    <div class="mx-2" style={{ width: '35%' }}>
                                                                        <span>Sec</span>
                                                                    </div>
                                                                </div>

                                                                <div className='my-3'>

                                                                    <div class="d-flex align-items-center">

                                                                        <div class="" style={{ width: '65%' }}>
                                                                            <input type="text" class="form-control form-control-sm rounded-3 " id="formGroupExampleInput" value={event_fee} placeholder="" onChange={(e) => {
                                                                                setevent_fee(e.target.value)
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
                                                                    <div class="my-3 col-8">
                                                                        <div class="">
                                                                            <input type="text" class="form-control form-control-sm rounded-3  " id="formGroupExampleInput" value={event_fee} placeholder="" onChange={(e) => {
                                                                                setevent_fee(e.target.value)
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
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                                                                        onChange={(e) => {
                                                                            setpriority(e.target.value)
                                                                        }}>
                                                                        {/* <option selected>Open this select menu</option> */}
                                                                        <option value="top" selected>Top</option>
                                                                        <option value="right">Right</option>
                                                                        <option value="left">Left</option>
                                                                    </select>
                                                                </div>

                                                                <div className='mt-2'>

                                                                    <Stack spacing={5} sx={{ width: '100%', height: '10px' }}>
                                                                        <Autocomplete
                                                                            multiple
                                                                            id="tags-standard"
                                                                            options={allUsers}
                                                                            getOptionLabel={(option) => option.name}
                                                                            // defaultValue={[allUsers[1]]}
                                                                            onChange={handlePersonChange}

                                                                            getOptionSelected={(option, value) =>
                                                                                option.id === value.id
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
                                            </div>

                                        </div>



                                        <div class="">
                                            <button type="submit" className='btn btn-success rounded-3 px-4 mx-2' onSubmit={handleSubmit}>SAVE</button>
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
export default CreateAdvertisement;

