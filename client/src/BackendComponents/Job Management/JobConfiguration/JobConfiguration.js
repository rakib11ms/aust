import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import '../JobManagement.css'


import Modal from 'react-modal';
function JobConfiguration() {

    const [loading, setLoading] = useState(true)

    const [allJobTypes, setAllJobTypes] = useState([]);

    console.log('all job types', allJobTypes)

    const [totalJobSector, setTotalJobSector] = useState([])
    const [totalJobSubSector, setTotalJobSubSector] = useState([])
    const [totalJobType, setTotalJobType] = useState([])

    console.log('ass', totalJobSector)


    const [editJobTypeId, setEditJobTypeId] = useState('');

    const [editJobTypeData, setEditJobTypeData] = useState([]);
    console.log('editjobtype  ', editJobTypeData)

    const [editJobSectorData, setEditJobSectorData] = useState([]);


    useEffect(() => {

        Modal.setAppElement('body');

    }, [])

    const [renderAllJobTypes, setRenderAllJobTypes] = useState('');
    const [addJobType, setAddJobType] = useState({
        type_name: "",
        created_by: '',
        error_list: []

    })

    console.log('job type data typing', addJobType)

    const handleInput = (e) => {
        setAddJobType({
            ...addJobType, [e.target.name]: e.target.value
        })


    }
    const handleEditJobTypeInput = (e) => {
        setEditJobTypeData({
            ...editJobTypeData, [e.target.name]: e.target.value
        })
    }


    const handleJobTypeSave = (e) => {
        e.preventDefault();
        const addJob = {
            type_name: addJobType.type_name,
            created_by: '',
        }
        axios.post(`/api/add-job-type`, addJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobTypes(res.data);
                closeAddJobTypeModal();
                setAddJobType({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddJobType({ ...addJobType, error_list: res.data.errors });
                // Swal.fire(addJobType.error_list.type_name[0], '', 'error')

            }
        })


    }


    const handleJobTypeUpdate = (e) => {
        e.preventDefault();
        const editJob = {
            type_name: editJobTypeData.type_name,
            created_by: '',
        }
        axios.post(`/api/update-job-type/${editJobTypeId}`, editJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobTypes(res.data);
                closeEditJobTypeModal();
                setEditJobTypeData({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });
                setEditJobTypeId('')

            }
            // else if (res.data.status == 400) {
            //     setEditJobType({ ...editJobType, error_list: res.data.errors });
            //     Swal.fire(addJobType.error_list.type_name[0], '', 'error')

            // }
        })


    }



    const [addJobTypeModalIsOpen, setaddJobTypeModalIsOpen] = useState(false);

    function closeAddJobTypeModal(e) {
        setaddJobTypeModalIsOpen(false);

    }
    const openAddJobTypeModal = (e) => {
        e.preventDefault();
        setaddJobTypeModalIsOpen(true)

    }


    const [editJobTypeModalIsOpen, seteditJobTypeModalIsOpen] = useState(false);
    function openEditJobTypeModal(e, editId) {
        e.preventDefault();
        seteditJobTypeModalIsOpen(true)
        setEditJobTypeId(editId);
    }
    function closeEditJobTypeModal(e) {
        seteditJobTypeModalIsOpen(false);

    }




    const deleteJobType = (e, id) => {
        e.preventDefault();


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
                axios.delete(`/api/delete-job-type/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllJobTypes(res.data);
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
        })

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

    const customStyles2 = {
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
    const addJobSectorModalStyle = {
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



    //department functionality


    const [allJobSectors, setAllJobSectors] = useState([]);

    console.log('all job types', allJobSectors)




    const [addJobSectorModalIsOpen, setaddJobSectorModalIsOpen] = useState(false);

    function closeAddJobSectorModal(e) {
        setaddJobSectorModalIsOpen(false);

    }
    const openAddJobSectorModal = (e) => {
        e.preventDefault();
        setaddJobSectorModalIsOpen(true)

    }

    const [renderAllJobSector, setRenderAllJobSector] = useState('');
    const [renderAllJobSubSector, setRenderAllJobSubSector] = useState('');
    const [addJobSector, setAddJobSector] = useState({
        job_sector_name: "",
        created_by: '',
        error_list: []

    })
    console.log('eror dekh', addJobSector)

    const handleAddJobSector = (e) => {
        setAddJobSector({
            ...addJobSector, [e.target.name]: e.target.value
        })


    }




    const handleJobSectorSave = (e) => {
        e.preventDefault();
        const addDept = {
            job_sector_name: addJobSector.job_sector_name,
            created_by: '',
        }
        axios.post(`/api/add-job-sector`, addDept).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobSector(res.data);
                closeAddJobSectorModal();
                setAddJobSector({
                    job_sector_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddJobSector({ ...addJobSector, error_list: res.data.errors });
                // Swal.fire(addJobSector.error_list.job_sector_name[0], '', 'error')

            }
        })


    }
    const [editJobSectorId, setEditJobSectorId] = useState('');

    const [editJobSectorModalIsOpen, seteditJobSectorModalIsOpen] = useState(false);
    function openEditDepartmentModal(e, editId) {
        e.preventDefault();
        seteditJobSectorModalIsOpen(true)
        setEditJobSectorId(editId);
    }
    function closeEditJobSectorModal(e) {
        seteditJobSectorModalIsOpen(false);

    }



    // const [editDepartment, seteditDepartment] = useState({
    //     job_sector_name: "",
    //     created_by: '',
    //     error_list: []

    // })
    // console.log('eror dekh',editDepartment)

    const handleEditJobSector = (e) => {
        setEditJobSectorData({
            ...editJobSectorData, [e.target.name]: e.target.value
        })


    }




    const handleJobSectorUpdate = (e) => {
        e.preventDefault();
        const updateJobSec = {
            job_sector_name: editJobSectorData.job_sector_name,
            created_by: '',
        }
        axios.post(`/api/update-job-sector/${editJobSectorId}`, updateJobSec).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobSector(res.data);
                closeEditJobSectorModal();
                setEditJobSectorData({
                    job_sector_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddJobSector({ ...addJobSector, error_list: res.data.errors });
                // Swal.fire(addJobSector.error_list.job_sector_name[0], '', 'error')

            }
        })


    }


    console.log('edit dep data ', editJobSectorId)

    const deleteJobSector = (e, id) => {
        e.preventDefault();


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
                axios.delete(`/api/delete-job-sector/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllJobSector(res.data);
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
        })

    }




    const [alljobSector, setAllJobSector] = useState([]);
    const [alljobSubSector, setAllJobSubSector] = useState([]);

    ///job sub sector functionality starts




    const [addJobSubSector, setAddJobSubSector] = useState({
        job_sub_sector_name: "",
        created_by: '',
        error_list: []

    })
    console.log('eror dekh', addJobSector)

    const handleAddJobSubSector = (e) => {
        setAddJobSubSector({
            ...addJobSubSector, [e.target.name]: e.target.value
        })


    }




    const handleJobSubSectorSave = (e) => {
        e.preventDefault();
        const addSubSector = {
            job_sub_sector_name: addJobSubSector.job_sub_sector_name,
            created_by: '',
        }
        axios.post(`/api/add-job-sub-sector`, addSubSector).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobSubSector(res.data);
                closeAddJobSubSectorModal();
                setAddJobSubSector({
                    job_sub_sector_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddJobSector({ ...addJobSubSector, error_list: res.data.errors });
                // Swal.fire(addJobSector.error_list.job_sector_name[0], '', 'error')

            }
        })


    }

    const [addJobSubSectorModalIsOpen, setaddJobSubSectorModalIsOpen] = useState(false);

    function closeAddJobSubSectorModal(e) {
        setaddJobSubSectorModalIsOpen(false);

    }
    const openAddJobSubSectorModal = (e) => {
        e.preventDefault();
        setaddJobSubSectorModalIsOpen(true)

    }




    const [editJobSubSectorData, setEditJobSubSectorData] = useState([]);

    const [editJobSubSectorId, setEditJobSubSectorId] = useState('');

    const [editJobSubSectorModalIsOpen, seteditJobSubSectorModalIsOpen] = useState(false);
    function openEditJobSubSectorModal(e, editId) {
        console.log('bal', editId)
        e.preventDefault();
        seteditJobSubSectorModalIsOpen(true)
        setEditJobSubSectorId(editId);
    }
    function closeEditJobSubSectorModal(e) {
        seteditJobSubSectorModalIsOpen(false);

    }





    const handleEditJobSubSector = (e) => {
        setEditJobSubSectorData({
            ...editJobSubSectorData, [e.target.name]: e.target.value
        })


    }




    const handleJobSubSectorUpdate = (e) => {
        e.preventDefault();
        const updateJobSubSec = {
            job_sub_sector_name: editJobSubSectorData.job_sub_sector_name,
            created_by: '',
        }
        axios.post(`/api/update-job-sub-sector/${editJobSubSectorId}`, updateJobSubSec).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobSubSector(res.data);
                closeEditJobSubSectorModal();
                setEditJobSubSectorData({
                    job_sub_sector_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddJobSubSector({ ...addJobSubSector, error_list: res.data.errors });
                // Swal.fire(addJobSector.error_list.job_sector_name[0], '', 'error')

            }
        })


    }


    console.log('edit dep data ', editJobSectorId)


    async function getData() {
        axios.get(`/api/job-type`).then(res => {
            if (res.data.status == 200) {
                setAllJobTypes(res.data.job_type);
                // setLoading(false);
                setTotalJobType(res.data.total_job_types)
                setLoading(false)
            }
        })

        axios.get(`/api/edit-job-type/${editJobTypeId}`).then(res => {
            if (res.data.status == 200) {
                setEditJobTypeData(res.data.job_type);
                setLoading(false)
            }
        })
        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSector(res.data.job_sector);
                setTotalJobSector(res.data.total_job_sector)
                setLoading(false)


            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSector(res.data.job_sub_sector);
                setTotalJobSubSector(res.data.total_job_sub_sector)
                setLoading(false)

            }
        })
        axios.get(`/api/edit-job-sub-sector/${editJobSubSectorId}`).then(res => {
            if (res.data.status == 200) {
                setEditJobSubSectorData(res.data.job_sub_sector);
                setLoading(false);
            }
        })

    }



    useEffect(() => {
        getData()
    }, [renderAllJobSector, renderAllJobSubSector, editJobSubSectorId, renderAllJobTypes, editJobTypeId])

    const deleteJobSubSector = (e, id) => {
        e.preventDefault();


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
                axios.delete(`/api/delete-job-sub-sector/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllJobSubSector(res.data);
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
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

                        <section class="job-config m-3 border  rounded-3">
                            {/* <div class="row"> */}
                            <div class="job-config-header text-light rounded-top ">
                                <div class="inside " data-aos="fade-right">
                                    <div class="item1">
                                        <h2 className=' mb-0'>{totalJobType}</h2>
                                        <p className=''>Job Types</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>{totalJobSector}</h2>
                                        <p className=''>Job Sectors</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>{totalJobSubSector}</h2>
                                        <p className=''>Sub Sectors</p>
                                    </div>


                                </div>
                                <div class=" " data-aos="flip-down">

                                    <Link to="/create-job-post"><button type='button' className='btn border btn-sm text-light'> +  <span className='mx-1 ' style={{ textDecoration: 'none' }}>  Create A job </span></button> </Link>

                                </div>


                            </div>

                            <div className='job-department-tag-section py-3 px-2'>
                                <div class="job-type-sec">
                                    <div className='job-type-nav'>
                                        <div>

                                            <h5 className='job-type-text'>Job Type</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddJobTypeModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>


                                            <Modal
                                                isOpen={addJobTypeModalIsOpen}
                                                onRequestClose={closeAddJobTypeModal}
                                                style={customStyles1}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobTypeModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Create Job Type</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className=''>
                                                                <div class="mb-1" style={{ width: '100%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addJobType.type_name} name="type_name" onChange={handleInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '100%' }} className="">
                                                                    <span className='text-danger d-block'> {addJobType.error_list.type_name}</span>
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 my-1 px-3' onClick={handleJobTypeSave}>Save</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>

                                            {/* edit job type modal */}

                                            <Modal
                                                isOpen={editJobTypeModalIsOpen}
                                                onRequestClose={closeEditJobTypeModal}
                                                style={customStyles2}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobTypeModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Edit Job Type</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className=''>
                                                                <div class="mb-1" style={{ width: '50%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editJobTypeData.type_name} name="type_name" onChange={handleEditJobTypeInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '50%' }} className="mx-2 mt-1">
                                                                    {/* <span className='text-danger'> {editJobTypeData.error_list.type_name !=undefined && editJobTypeData.error_list.type_name  }</span> */}
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobTypeUpdate}>Update</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>

                                        </div>

                                    </div>

                                    <div className='job-type-secs'>
                                        {
                                            loading ? 'Loading...' : allJobTypes.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.type_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteJobType(e, item.id)

                                                                }}>
                                                                    <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                    openEditJobTypeModal(e, item.id)

                                                                }
                                                                }>
                                                                    <i class="fa fa-edit  " aria-hidden="true" ></i>
                                                                </span>


                                                            </button>

                                                            {/* edit job type modal */}

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }





                                    </div>



                                </div>

                                <div class="job-type-sec">
                                    <div className='job-type-nav  '>
                                        <div className=''>

                                            <h5 className='job-type-text '>Job Sector</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddJobSectorModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>


                                        <Modal
                                            isOpen={addJobSectorModalIsOpen}
                                            onRequestClose={closeAddJobSectorModal}
                                            style={addJobSectorModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobSectorModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Create Job Sector</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-1" style={{ width: '100%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Sector Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addJobSector.type_name} name="job_sector_name" onChange={handleAddJobSector} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '100%' }} className=" ">
                                                                <span className='text-danger'> {addJobSector.error_list.job_sector_name}</span>
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobSectorSave}>Save</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>


                                        <Modal
                                            isOpen={editJobSectorModalIsOpen}
                                            onRequestClose={closeEditJobSectorModal}
                                            style={addJobSectorModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSectorModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Edit Job Sector</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-1" style={{ width: '100%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Sector Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editJobSectorData.job_sector_name} name="job_sector_name" onChange={handleEditJobSector} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '100%' }} className="mx-2 mt-1">
                                                                {/* <span className='text-danger'> {editJobSectorData.error_list.job_sector_name}</span> */}
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobSectorUpdate}>Update</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>

                                    </div>

                                    <div className='job-type-secs '>



                                        {
                                            loading ? 'Loading...' : alljobSector.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.job_sector_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteJobSector(e, item.id)

                                                                }}>
                                                                    <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                    openEditDepartmentModal(e, item.id)

                                                                }
                                                                }>
                                                                    <i class="fa fa-edit  " aria-hidden="true" ></i>
                                                                </span>


                                                            </button>

                                                            {/* edit job type modal */}

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }





                                    </div>



                                </div>







                                {/* job sub sector */}
                                <div class="job-type-sec">
                                    <div className='job-type-nav  '>
                                        <div className=''>

                                            <h5 className='job-type-text '>Job Sub Sector</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddJobSubSectorModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>


                                        <Modal
                                            isOpen={addJobSubSectorModalIsOpen}
                                            onRequestClose={closeAddJobSubSectorModal}
                                            style={addJobSectorModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Create Job Sub Sector</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-1" style={{ width: '100%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Sub Sector Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addJobSubSector.job_sub_sector_name} name="job_sub_sector_name" onChange={handleAddJobSubSector} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '100%' }} className=" ">
                                                                <span className='text-danger'> {addJobSubSector.error_list.job_sub_sector_name}</span>
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobSubSectorSave}>Save</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>


                                        <Modal
                                            isOpen={editJobSectorModalIsOpen}
                                            onRequestClose={closeEditJobSectorModal}
                                            style={addJobSectorModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSectorModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Edit Job Sector</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-1" style={{ width: '100%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Sector Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editJobSectorData.job_sector_name} name="job_sector_name" onChange={handleEditJobSector} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '100%' }} className="mx-2 mt-1">
                                                                {/* <span className='text-danger'> {editJobSectorData.error_list.job_sector_name}</span> */}
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobSectorUpdate}>Update</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>


                                        <Modal
                                            isOpen={editJobSubSectorModalIsOpen}
                                            onRequestClose={closeEditJobSubSectorModal}
                                            style={addJobSectorModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Edit Job Sub Sector</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-1" style={{ width: '100%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job Sub Sector Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editJobSubSectorData.job_sub_sector_name} name="job_sub_sector_name" onChange={handleEditJobSubSector} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '100%' }} className="mx-2 mt-1">
                                                                {/* <span className='text-danger'> {editJobSectorData.error_list.job_sector_name}</span> */}
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobSubSectorUpdate}>Update</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>

                                    </div>

                                    <div className='job-type-secs '>



                                        {
                                            loading ? 'Loading...' : alljobSubSector.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.job_sub_sector_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteJobSubSector(e, item.id)

                                                                }}>
                                                                    <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                    openEditJobSubSectorModal(e, item.id)

                                                                }
                                                                }>
                                                                    <i class="fa fa-edit  " aria-hidden="true" ></i>
                                                                </span>


                                                            </button>

                                                            {/* edit job type modal */}

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }





                                    </div>



                                </div>



                            </div>





                            {/* </div> */}

                        </section>


                    </div>

                </div>

            </div>


        </>
    )

}

export default JobConfiguration