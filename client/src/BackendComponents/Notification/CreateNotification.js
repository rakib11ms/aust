import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

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
function CreateNotification() {

    const navigate = useNavigate();


    const [notificationState, setnotificationState] = useState({
        category_id: '',
        streaming_link: '',
        vlog_title: '',


    })

    const [allPersonCheckBox, setAllPersonCheckBox] = useState({
        for_all: '',
        for_alumni: '',
        for_moderator: '',
        for_staff: '',
        for_admin: '',

    });
    function handlePersonCheckbox(e) {
        setAllPersonCheckBox({
            ...allPersonCheckBox, [e.target.name]: e.target.checked
        })

    }


    const [allNotificationType, setAllNotificationType] = useState({
        both: '',
        mail: '',
        push: '',


    });
    function handleNotificationTypeCheckbox(e) {
        setAllNotificationType({
            ...allNotificationType, [e.target.name]: e.target.checked
        })

    }
    const [notification_title, setNotification_title] = useState("");
    const [notification_body, setNotification_body] = useState("");

    const [clickedRender, setClickedRender] = useState(false)


    const submitaddNotification = (e) => {
        e.preventDefault();
        setClickedRender(true)
        const notification = {
            notification_title: notification_title,
            notification_body: notification_body,
            for_all_users: allPersonCheckBox.for_all ? 1 : 0,
            for_admin: allPersonCheckBox.for_admin ? 1 : 0,
            for_alumni: allPersonCheckBox.for_alumni ? 1 : 0,
            for_staff: allPersonCheckBox.for_staff ? 1 : 0,
            for_moderator: allPersonCheckBox.for_moderator ? 1 : 0,
            notification_both: allNotificationType.both ? 1 : 0,
            mail_notification: allNotificationType.mail ? 1 : 0,
            push_notification: allNotificationType.push ? 1 : 0,

        }

        console.log('notification', notification)

        axios.post(`/api/create-global-notification`, notification).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                // navigate('/view-all-jobs')

                setClickedRender(false)
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }

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
                                    <h5>Create a global notification</h5>
                                    <Link to="/view-global-notification"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form onSubmit={submitaddNotification}>


                                        <div className='row mt-2 '>
                                            <div className='col-md-12'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setNotification_title(e.target.value)} name="notification_title" value={notification_title} />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div class="mt-2">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Body</label>

                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setNotification_body(e.target.value)} name="notification_body" value={notification_body} ></textarea>
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div class="mt-2">
                                                <label for="exampleFormControlInput1" class="form-label fs-6">Priority</label>

                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected disabled>Choose</option>
                                                        <option value="Emergency">Emergency</option>
                                                        <option value="Normal">Normal</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>





                                        <div className='d-flex my-4 '>



                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" name="for_all" id="defaultCheck1" onChange={handlePersonCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    For All
                                                </label>
                                            </div>
                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" name="for_alumni" id="defaultCheck1" onChange={handlePersonCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    For Alumni
                                                </label>
                                            </div>
                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" name="for_admin" id="defaultCheck1" onChange={handlePersonCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    For Admin
                                                </label>
                                            </div>
                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" name="for_moderator" id="defaultCheck1" onChange={handlePersonCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    For Moderators
                                                </label>
                                            </div>

                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={handlePersonCheckbox} name="for_staff" />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    For Staff
                                                </label>
                                            </div>
                                        </div>


                                        <div className='d-flex my-4'>



                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="both" onChange={handleNotificationTypeCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Both
                                                </label>
                                            </div>
                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="mail" onChange={handleNotificationTypeCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Push
                                                </label>
                                            </div>
                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="push" onChange={handleNotificationTypeCheckbox} />
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Mail
                                                </label>
                                            </div>

                                        </div>

                                        <div class="text-center">
                                            <button type="submit" className='btn btn-success rounded-3' onSubmit={submitaddNotification}>

                                                PUBLISH NOW{
                                                    clickedRender ? <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span> : ''




                                                }
                                            </button>
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

export default CreateNotification;