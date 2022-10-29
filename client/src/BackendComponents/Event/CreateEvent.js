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
import { Box, ThemeProvider, createTheme } from '@mui/system';

function CreateEvent() {

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
    };
    const [allUsers, setAllUsers] = useState([]);

    console.log('all users check', allUsers)


    useEffect(() => {
        axios.get(`/api/all-users`).then(res => {
            if (res.data.status == 200) {
                setAllUsers(res.data.all_users);

            }
        }
        )

    }, [])


    ////time functionality//
    const [value, setValue] = React.useState(null);


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
                                    <form onSubmit="">

                                        <div className='row'>

                                            <div class="px-4" style={{ width: '73%' }}>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Company Name</label>

                                                    <div class="input-group mb-3">

                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2"> + Add</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange="" name="company_name" value='bal' />

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
                                                    <Stack spacing={3} sx={{ width: 500 }}>
                                                        <Autocomplete
                                                            multiple
                                                            id="tags-standard"
                                                            options={allUsers}
                                                            getOptionLabel={(option) => option.name}
                                                            // defaultValue={[allUsers[1]]}
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

                                                        <input class="form-control" type="file" id="formFile" multiple />
                                                    </div>


                                                </div>

                                            </div>
                                            <div class="" style={{ width: '27%' }}>
                                                <div class="row bg-light rounded-3 mt-4 ">

                                                    <div className='py-4 px-3 '>
                                                        <h6 className=''>Preferences</h6>
                                                        <div className='d-flex mt-3 ' style={{ color: '#777777', fontWeight: '500', fontSize: '14px' }}>

                                                            <div className='col-6 '>
                                                                <div className=''>
                                                                    <i className='fa fa-clock' />
                                                                    <span className='mx-2 '>Event Time</span>
                                                                </div>
                                                                <div className='mt-3'>
                                                                    <i className='fa fa-calendar' />
                                                                    <span className='mx-2'>Event Date</span>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Payment Stats</span>
                                                                </div>


                                                                <div className='mt-3'>
                                                                    <i class="fa-solid fa-money-bill"></i>                                                                    <span className='mx-2'>Event Fees</span>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Show in Mobile</span>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <i class="fa-solid fa-globe"></i>                                                                    <span className='mx-2'>Show in Web</span>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                                                    <span className='mx-2'>Priority</span>
                                                                </div>

                                                            </div>
                                                            <div class="col-6">
                                                                <div className=''>
                                                                    <Box sx={{ width: '100%', height: '10px' }}>
                                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                            <TimePicker
                                                                                // label="Basic example"
                                                                                value={value}

                                                                                onChange={(newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                                renderInput={(params) => <TextField {...params} size="small"
                                                                                />}
                                                                            />
                                                                        </LocalizationProvider>
                                                                    </Box>
                                                                </div>
                                                                <div className='mt-3'>
                                                                    asddddd
                                                                </div>
                                                                <div className='mt-3'>
                                                                    asddddd
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
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