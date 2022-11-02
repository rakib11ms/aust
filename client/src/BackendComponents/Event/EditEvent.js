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

function EditEvent() {

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allUsers, setAllUsers] = useState([]);

    console.log('all users check', allUsers)





    ///add event functionality start//
    const [event_time, setevent_time] = React.useState(null);
    const [event_date, setevent_date] = React.useState(null);

    const [event_fee, setevent_fee] = useState('');
    const [priority, setpriority] = useState('normal');
    const [payment_type, setpayment_type] = useState();
    const [showMobile, setshowMobile] = useState();
    const [showDesktop, setshowDesktop] = useState();

    const [contactPerson, setcontactPerson] = React.useState([]);
  



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

    console.log('eventstate', eventState.event_type_id)

    const handleInputChange = (e) => {
        seteventState({
            ...eventState, [e.target.name]: e.target.value
        })
    }

    //////////images code ///////////


    const [allImagesFromDatabase,setAllImagesfromDatabase]=useState([]);
    console.log('checking',allImagesFromDatabase)

    const [multipleImages, setMultipleImages] = useState([]);
    const [multipleImageFiles, setMultipleImageFiles] = useState({
        files: []
    });



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
        return data.map((image) => {
            return <img className="image mx-3 my-2 rounded-3" src={image} alt="" key={image} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />;
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

    const [allEventTypes, setAllEventTypes] = useState([]);
    console.log('allllllllllllllllllllllllllllllllllllllllllllllll', allEventTypes)









    const { id } = useParams();


    const [editData, setEditData] = useState({

    });

    console.log('edit data ', editData)

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


        axios.get(`/api/edit-event/${id}`).then(res => {
            if (res.data.status == 200) {
                setEditData(res.data.event);
                seteventState({
                    event_type_id: res.data.event.event_type_id,
                    event_title: res.data.event.event_title
                })
                setContent1(res.data.event.event_description)
                setevent_date(res.data.event.event_date)
                setevent_time(res.data.event.event_time)
                setpayment_type(res.data.event.payment_type)
                setevent_fee(res.data.event.event_fee)
                setshowDesktop(res.data.event.showDesktop)
                setshowMobile(res.data.event.showMobile)
                setpriority(res.data.event.priority)
                setAllImagesfromDatabase(res.data.event.image.split(','))
                setcontactPerson(res.data.users)
                // setcontactPerson(res.data.event.contact_person.split(','))
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
                                    <h5>Edit a Event</h5>
                                    <Link to="/view-all-events"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={handleSubmit}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '73%' }}>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Event Type</label>

                                                    <div class="input-group mb-3">

                                                        <select class="form-select" aria-label="Default select example" onChange={handleInputChange} value={eventState.event_type_id} name="event_type_id">
                                                            <option selected>Choose</option>

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

                                                <div class="mt-4">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Contact Person</label>
                                                    <Stack spacing={5} sx={{ width: '100%', paddingTop: '7px' }}>
                                                        <Autocomplete
                                                            multiple
                                                            id="tags-standard"
                                                            options={allUsers}
                                                            value={contactPerson}

                                                            getOptionLabel={(option) => option.name}
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


                                                        />
                                                    </Stack>




                                                </div>

                                                <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFile" multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2' >
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

                                                                    <Stack sx={{
                                                                        height: '30px', border: 'none', padding: '0'
                                                                    }}
                                                                    >


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
                                                                    </Stack>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" checked={payment_type == 1} id="flexCheckChecked" onChange={
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



                                                                <div class="my-3">
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


                                        {/* {
                                                    picture == ''? <div className="form-group mt-3" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/${editData.image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                    :
                                                    <div className="form-group mt-3" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>

                                                } */}

                                                <div className='mb-2 border'>
                                                {
                                            allImagesFromDatabase.map((item,i)=>{
                                                // console.log('bal item',item)
                                                return(
                                                    <>
                                         <img className="rounded mx-2" src={`${global.img_url}/images/${item.trim()}`} style={{ width: '100px', height: '90px' }}></img>

                                                    </>
                                                )
                                            })
                                        }
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
export default EditEvent;

