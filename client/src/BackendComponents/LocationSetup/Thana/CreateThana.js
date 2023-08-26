import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
// import '../JobManagement.css'
import JoditEditor from "jodit-react";
import dayjs, { Dayjs } from 'dayjs';


import Modal from 'react-modal';
function CreateThana() {

    const navigate = useNavigate();

    const [addThana, setaddThana] = useState({
        thana_name: '',


    })

    const handleInputChange = (e) => {
        setaddThana({
            ...addThana, [e.target.name]: e.target.value
        })
    }



    const submit = (e) => {
        e.preventDefault();

        axios.post(`/api/thana`, addThana).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                navigate('/view-thana')
                setaddThana({
                    thana_name: '',

                });

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
                                    <h5>Add a thana</h5>
                                    <Link to="/view-thana"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form onSubmit={submit}>



                                        <div className='row mt-2'>
                                            <div className='col-md-12'>
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Thana Name</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} name="thana_name" value={addThana.thana_name} />
                                                </div>
                                            </div>

                                        </div>





                                        <div class="mt-2">
                                            <button type="submit" className='btn btn-success btn-sm rounded-3' onSubmit={submit}> Submit</button>
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

export default CreateThana;