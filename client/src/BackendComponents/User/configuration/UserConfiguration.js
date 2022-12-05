import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import JoditEditor from "jodit-react";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@mui/material';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, ThemeProvider, createTheme } from '@mui/system';



function UserConfiguration() {


    const navigate = useNavigate();

    const [create_job_sector, setcreate_job_sector] = useState('');
    const [create_job_sub_sector, setcreate_job_sub_sector] = useState('');
    const [create_company_name, setcreate_company_name] = useState('');

    const createJobSectorArrayData = create_job_sector.split(',');
    const createJobSubSectorArrayData = create_job_sub_sector.split(',');
    const createCompanyNameArrayData = create_company_name.split(',');

    console.log('yyy', createJobSectorArrayData, createJobSubSectorArrayData, createCompanyNameArrayData)

    const resetCreateForm = (e) => {
        e.preventDefault();
        document.getElementById("myForm").reset();
        setcreate_job_sub_sector("")
        setcreate_job_sector("")
        setcreate_company_name("")

    }
    const submitCreateConfiguration = (e) => {
        e.preventDefault();
        setTimeout(() => {
            Swal.fire("Data Inserted Successfully", '', 'success')

        }, 1500)

        if (create_job_sector !== null) {

            createJobSectorArrayData.map((item, i) => {
                const data = {
                    job_sector_name: item
                }
                axios.post(`/api/add-job-sector`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        setcreate_job_sector("");

                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })

        }
        if (create_job_sub_sector !== null) {
            createJobSubSectorArrayData.map((item, i) => {
                const data = {
                    job_sub_sector_name: item
                }
                axios.post(`/api/add-job-sub-sector`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        setcreate_job_sub_sector("");

                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
        }

        if (create_company_name !== null) {
            createCompanyNameArrayData.map((item, i) => {
                const data = {
                    company_name: item
                }
                axios.post(`/api/add-company-name`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        setcreate_company_name("");

                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
        }

    }

    ///create job sector and job sub sector state mapping and submit///

    const [job_sector_id_state, setjob_sector_id_state] = useState('');
    const [job_sub_sector_id_state, setjob_sub_sector_id_state] = useState('');

    const submitCreateJobMap = () => {
        const data = {
            job_sub_sector_id: job_sub_sector_id_state,
            job_sector_id: job_sector_id_state
        }

        console.log('state value check', data)
        axios.post(`/api/add-job-sector-job-sub-sector-map`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllJobSectorSubSectorMapData(res.data)

                Swal.fire(res.data.message, '', 'success')
                // setRenderAllPosts(res.data);
                // closeAddPostCategoryModal();
                // setjob_sector_id_state("");
                // job_sub_sector_id_state("")
            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }

    ////create map job sector and job sub sector and view modal functionality start


    const jobsecjobsubsectorMappingAddModal = {
        content: {
            // marginTop: '70px',
            top: '50vh',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "80vw",
            height: "80vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1000 }

    };
    const jobsecjobsubsectorMappingeditModal = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: "45vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1200 }

    };


    const [addJobSectorJobSubSectorModalIsOpen, setaddJobSectorJobSubSectorModalIsOpen] = useState(false);
    function openAddJobSectorJobSubSectorModal(e) {
        e.preventDefault();
        setaddJobSectorJobSubSectorModalIsOpen(true)
    }
    function closeAddJobSectorJobSubSectorModal(e) {
        setaddJobSectorJobSubSectorModalIsOpen(false);

    }

    const [editJobSectorJobSubSectorModalIsOpen, seteditJobSectorJobSubSectorModalIsOpen] = useState(false);
    const [editJobSectorJobSubSectorId, seteditJobSectorJobSubSectorId] = useState("");
    const [edit_job_sector_id_state, setedit_job_sector_id_state] = useState('');
    const [edit_job_sub_sector_id_state, setedit_job_sub_sector_id_state] = useState('');

    function openEditJobSectorJobSubSectorModal(e, editJobSectorJobSubSectorId) {
        e.preventDefault();
        seteditJobSectorJobSubSectorModalIsOpen(true)
        seteditJobSectorJobSubSectorId(editJobSectorJobSubSectorId)
    }
    function closeEditJobSectorJobSubSectorModal(e) {
        seteditJobSectorJobSubSectorModalIsOpen(false);

    }


    ////create map job sector and job sub sector and view modal functionality end


    function updateEditJobMap() {
        const data = {
            job_sub_sector_id: edit_job_sub_sector_id_state,
            job_sector_id: edit_job_sector_id_state
        }

        axios.post(`/api/update-job-sector-job-sub-sector-map/${editJobSectorJobSubSectorId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllJobSectorSubSectorMapData(res.data)

                Swal.fire(res.data.message, '', 'success')
                closeEditJobSectorJobSubSectorModal();
                // setRenderAllPosts(res.data);
                // closeAddPostCategoryModal();
                // setjob_sector_id_state("");
                // job_sub_sector_id_state("")
            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    ////all job sector job sub sector fetch useffect start

    const [alljobSector, setAllJobSector] = useState([]);
    const [alljobSubSector, setAllJobSubSector] = useState([]);
    const [allJobSectorJubSectorMapData, setAllJobSectorSubSectorMapData] = useState([]);

    const [editJobSectorJobSubSectorData, seteditJobSectorJobSubSectorData] = useState("");

    console.log('edit mapping data', editJobSectorJobSubSectorData)

    const [renderAllJobSectorJubSectorMapData, setRenderAllJobSectorSubSectorMapData] = useState('');

    // console.log('all map',allJobSectorJubSectorMapData)



    useEffect(() => {
        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSector(res.data.job_sector);

            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSector(res.data.job_sub_sector);

            }
        })

        axios.get(`/api/job-sector-job-sub-sector-map`).then(res => {
            if (res.data.status == 200) {
                setAllJobSectorSubSectorMapData(res.data.all_mapping_job_sectors);
            }
        })

        axios.get(`/api/edit-job-sector-job-sub-sector-map/${editJobSectorJobSubSectorId}`).then(res => {
            if (res.data.status == 200) {
                seteditJobSectorJobSubSectorData(res.data.edit_job_sec_map);
                setedit_job_sub_sector_id_state(res.data.edit_job_sec_map.job_sub_sector_id)
                setedit_job_sector_id_state(res.data.edit_job_sec_map.job_sector_id)
            }
        })



        Modal.setAppElement('body');
    }, [renderAllJobSectorJubSectorMapData, editJobSectorJobSubSectorId])


    ////all job sector job sub sector fetch useffect end


    //job sector sub sector table map start ///

    const columns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: "Job Sub Sector", field: ``, render: (row) =>
                <div className=''>

                    {row.job_sub_sector_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: 'Job Sector', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">
                            {row.job_sector_name}

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditJobSectorJobSubSectorModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
                                        const thisClicked = e.currentTarget;
                                        //  thisClicked.innerText = "Deleting";

                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You won't be able to revert this!",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                axios.delete(`/api/delete-job-sector-job-sub-sector-map/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setAllJobSectorSubSectorMapData(res.data.all_mapping_job_sectors)
                                                        // setRenderAllJobSectorSubSectorMapData(res.data)
                                                        //   swal("Success", res.data.message, "success");
                                                    }
                                                });
                                                Swal.fire(
                                                    'Deleted!',
                                                    'Your data has been deleted.',
                                                    'success'
                                                )
                                            }
                                        })
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


                    </div>
                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },



    ];


    //job sector sub sector table map end ///









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
                                <div className='card-header bg-white  d-flex align-items-center justify-content-between'>
                                    <h5>Field Configuration</h5>
                                    <Link to="/view-all-advertisement"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={submitCreateConfiguration} id="myForm">

                                        <div className='row '>

                                            <div class="px-5 d-flex align-items-stretch" style={{ width: '100%' }}>
                                                {/* 
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} />

                                                </div> */}

                                                <div class="col-2 my-3" >
                                                    <div class="">
                                                        <p className=''>Batch(dropdown)</p>

                                                    </div>
                                                    <div class="">
                                                        <p className='p-0'>Blood Group(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p className=''>Stream(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p class="py-1">Job Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p className='pt-1'>Job Sub Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p className='pt-2'>Name of Company</p>

                                                    </div>




                                                </div>
                                                <div className='col-7'>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" />

                                                    </div>

                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" onChange={(e) => {
                                                            setcreate_job_sector(e.target.value);
                                                        }} name="create_job_sector" value={create_job_sector} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" onChange={(e) => {
                                                            setcreate_job_sub_sector(e.target.value);
                                                        }} name="create_job_sub_sector" value={create_job_sub_sector} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" onChange={(e) => {
                                                            setcreate_company_name(e.target.value);
                                                        }} name="create_company_name" value={create_company_name} />

                                                    </div>

                                                </div>
                                                <div className='col-2 mx-2 my-3 '>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>View All</p>

                                                    </div>
                                                    <div class="d-flex mt-4">
                                                        <div className=''>
                                                            <p>View All</p>
                                                        </div>
                                                        <div className='' onClick={openAddJobSectorJobSubSectorModal}>
                                                            <p className='border border-success rounded-3 px-2 mx-2 s '>Map</p>
                                                        </div>

                                                        {/* add jobsector job subsector mapping modal */}
                                                        <Modal
                                                            isOpen={addJobSectorJobSubSectorModalIsOpen}
                                                            onRequestClose={closeAddJobSectorJobSubSectorModal}
                                                            style={jobsecjobsubsectorMappingAddModal}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobSectorJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Mapping</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12 px-4">

                                                                        <div className=''>
                                                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sector</option>
                                                                                {
                                                                                    alljobSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </div>

                                                                        <div className='my-3'>
                                                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sub_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sub Sector</option>
                                                                                {
                                                                                    alljobSubSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sub_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>


                                                                        <div className='text-center'>
                                                                            <button className='btn btn-success btn-sm text-white me-5 rounded-3 text-center px-4 py-2 mt-1 ' onClick={submitCreateJobMap} style={{ color: '#0FA958' }}>Map</button>

                                                                        </div>

                                                                        <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6>

                                                                        <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                            <MaterialTable
                                                                                components={{
                                                                                    Container: props => <Paper {...props} elevation={0} />
                                                                                }}
                                                                                columns={columns}
                                                                                data={allJobSectorJubSectorMapData}
                                                                                // isLoading={loading === true ? true : false}


                                                                                options={{
                                                                                    search: true,
                                                                                    // filtering: true,
                                                                                    toolbar: false,
                                                                                    showTitle: false,
                                                                                    searchFieldAlignment: "left",
                                                                                    pageSize: 5,
                                                                                    emptyRowsWhenPaging: false,
                                                                                    pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                    selection: false,
                                                                                    sorting: false,
                                                                                    searchFieldAlignment: "left",

                                                                                    // paging:false


                                                                                }}




                                                                            />

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>


                                                        {/* edit jobsector job subsector mapping modal */}
                                                        <Modal
                                                            isOpen={editJobSectorJobSubSectorModalIsOpen}
                                                            onRequestClose={closeEditJobSectorJobSubSectorModal}
                                                            style={jobsecjobsubsectorMappingeditModal}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSectorJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Edit Job Sector Mapping</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12">
                                                                        <label className='mb-2 fs-6 text-secondary '>Job Sector</label>

                                                                        <div className=''>
                                                                            <select class="form-select" aria-label="Default select example" value={edit_job_sector_id_state} onChange={(e) => setedit_job_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sector</option>
                                                                                {
                                                                                    alljobSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </div>

                                                                        <div className='my-3'>
                                                                        <label className='mb-2 fs-6 text-secondary'>Job Sub Sector</label>

                                                                            <select class="form-select" aria-label="Default select example" value={edit_job_sub_sector_id_state} onChange={(e) => setedit_job_sub_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sub Sector</option>
                                                                                {
                                                                                    alljobSubSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sub_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>


                                                                        <div className='text-center'>
                                                                            <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateEditJobMap} style={{ color: '#0FA958' }}>Update</button>

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>


                                                    </div>

                                                    <div className=''>
                                                        <p>View All</p>
                                                    </div>


                                                </div>



                                            </div>


                                        </div>






                                        <div class="mt-5 text-center">
                                            <button type="button" className='btn btn-success rounded-3 text-success px-5 mx-2 bg-white' onClick={resetCreateForm}>RESET</button>
                                            <button type="submit" className='btn btn-success rounded-3 px-5 mx-2' onSubmit={submitCreateConfiguration}>SAVE</button>
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
export default UserConfiguration;