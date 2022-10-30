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


// import Checkbox from '@mui/material/Checkbox';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

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





    ///add event functionality start//
    const [event_time, setevent_time] = React.useState(null);
    const [event_date, setevent_date] = React.useState(null);

    const [event_fee, setevent_fee] = useState('');
    const [priority, setpriority] = useState('normal');
    const [payment_type, setpayment_type] = useState(0);
    const [showMobile, setshowMobile] = useState(1);
    const [showDesktop, setshowDesktop] = useState(1);

    const [contactPerson, setcontactPerson] = React.useState([]);
    // const [contactPersonId, setcontactPersonId] =useState([]);

    console.log('checking baal', contactPerson)


    let result = contactPerson.map(a => a.id);
    // console.log('result',result)

    console.log('baler result', result);



    function handlePersonChange(event, values) {
        setcontactPerson(values)
    }

    const [eventState, seteventState] = useState({
        event_type_id: '',
        event_title: '',

    })

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

    // console.log('multiple images', multipleImages)
    // console.log('multiple images files', multipleImageFiles)

    // Functions to preview multiple images
    const changeMultipleFiles = (e) => {
        // console.log('heeeeeeelo',e.target.files)
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
        return data.map((image) => {
            return <img className="image mx-2" src={image} alt="" key={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
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
        formData.append("event_description", content1);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });



        axios.post(`/api/add-event`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')

                // setJobPost({
                //     job_type:'',
                //     department_id:'',
                //     job_location:'',
                //     job_title:'',
                //     application_deadline:"",
                //     company_name:'',
                // });
                setContent1('');

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
        axios.get(`/api/all-users`).then(res => {
            if (res.data.status == 200) {
                setAllUsers(res.data.all_users);

            }
        }
        )

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
                                    <Link to="/view-all-jobs"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row'>

                                            <div class="px-4" style={{ width: '73%' }}>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Event Type</label>

                                                    <div class="input-group mb-3">

                                                        <select class="form-select" aria-label="Default select example" onChange={handleInputChange} value={eventState.event_type_id} name="event_type_id" value={eventState.event_type_id}>
                                                            <option selected>Open this select menu</option>
                                                            <option value="1">Ceremony</option>
                                                            <option value="2">Vacation</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2"> + Add</span>
                                                        </div>
                                                    </div>
                                                </div>

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

                                                <div class="mt-3">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Contact Person</label>
                                                    <Stack spacing={5} sx={{ width: '100%', border: '1px solid #f1f1f1' }}>
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
                                                                    variant="standard"
                                                                    // label="Multiple values"
                                                                    placeholder="Search..."
                                                                />
                                                            )}
                                                        />
                                                    </Stack>




                                                </div>

                                                <div class="mt-3">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFile" multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2' style={{ width: '100px', height: '100px' }}>
                                                            {render(multipleImages)}

                                                        </div>




                                                    </div>


                                                </div>

                                            </div>
                                            <div class="" style={{ width: '27%' }}>
                                                <div class="row bg-light rounded-3 mt-4 ">

                                                    <div className='py-4  '>
                                                        <h6 className=''>Preferences</h6>
                                                        <div className='d-flex mt-3 ' style={{ color: '#777777', fontWeight: '400', fontSize: '15px' }}>

                                                            <div className='col-6 '>
                                                                <div className='mt-2'>
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
                                                                    <span className='mx-2'>Priority</span>
                                                                </div>

                                                            </div>
                                                            <div class="col-6">
                                                                <div className=''>
                                                                    <Stack sx={{

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
                                                                <div className='mt-2'>
                                                                    {/* <Stack sx={{

                                                                    }}
                                                                    >
                                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                            <TimePicker
                                                                                label="Date"
                                                                                value={event_date}

                                                                                onChange={(newValue) => {
                                                                                    setevent_date(newValue);
                                                                                }}
                                                                                renderInput={(params) => <TextField {...params} size="small"
                                                                                />}
                                                                            />
                                                                        </LocalizationProvider>
                                                                    </Stack> */}



 <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Date"
    value={event_date}

    onChange={(newValue) => {
        setevent_date(newValue);
    }}
    renderInput={(params) => <TextField {...params} size="small" />}
  />
</LocalizationProvider>
                                                                </div>
                                                                <div className='mt-3'>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={
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
                                                                    <div class="my-3">
                                                                        <div class="">
                                                                            <input type="text" class="form-control rounded-3 " id="formGroupExampleInput" value={event_fee} placeholder="" onChange={(e) => {
                                                                                setevent_fee(e.target.value)
                                                                            }} />
                                                                        </div>
                                                                        {/* <span className='d-block col-6'>BDT</span> */}

                                                                    </div>
                                                                }



                                                                <div class="mb-3">
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

                                                                <div class="mt-3">
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

                                                                <div class="mt-3">
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                                                                        onChange={(e) => {
                                                                            setpriority(e.target.value)
                                                                        }}>
                                                                        {/* <option selected>Open this select menu</option> */}
                                                                        <option value="normal" selected>Normal</option>
                                                                        <option value="urgent">Urgent</option>
                                                                        <option value="low">Low</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>






                                        <div class="">
                                            <button type="submit" className='btn btn-success rounded-3' onSubmit={handleSubmit}>SAVE</button>
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
