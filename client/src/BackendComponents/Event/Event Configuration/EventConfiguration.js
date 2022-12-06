import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import '../../Job Management/JobManagement.css'


import Modal from 'react-modal';
function EventConfiguration() {

    const [allEventTypes, setAllEventTypes] = useState([]);

    console.log('all job types', allEventTypes)

    const [totalJobType, setTotalJobType] = useState([])



    const [editEventTypeId, setEditEventTypeId] = useState('');

    const [editeventTypeData, setEditeventTypeData] = useState([]);
    console.log('editjobtype  ', editeventTypeData)

    const [editDepartmentData, setEditDepartmentData] = useState([]);


    useEffect(() => {

        Modal.setAppElement('body');

    }, [])

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
    const handleEditJobTypeInput = (e) => {
        setEditeventTypeData({
            ...editeventTypeData, [e.target.name]: e.target.value
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


    const handleJobTypeUpdate = (e) => {
        e.preventDefault();
        const editJob = {
            event_type_name: editeventTypeData.event_type_name,
            created_by: '',
        }
        axios.post(`/api/update-event-type/${editEventTypeId}`, editJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllEventTypes(res.data);
                closeEditJobTypeModal();
                setEditeventTypeData({
                    event_type_name: "",
                    created_by: '',
                    error_list: []

                });
                setEditEventTypeId('')

            }
            // else if (res.data.status == 400) {
            //     setEditJobType({ ...editJobType, error_list: res.data.errors });
            //     Swal.fire(addEventType.error_list.event_type_name[0], '', 'error')

            // }
        })


    }



    const [addEventTypeModalIsOpen, setaddEventTypeModalIsOpen] = useState(false);

    function closeAddEventTypeModal(e) {
        setaddEventTypeModalIsOpen(false);

    }
    const openAddEventTypeModal = (e) => {
        e.preventDefault();
        setaddEventTypeModalIsOpen(true)

    }


    const [editJobTypeModalIsOpen, seteditJobTypeModalIsOpen] = useState(false);
    function openEditJobTypeModal(e, editId) {
        e.preventDefault();
        seteditJobTypeModalIsOpen(true)
        setEditEventTypeId(editId);
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
                axios.delete(`/api/delete-event-type/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllEventTypes(res.data);
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




    useEffect(() => {
        axios.get(`/api/event-type`).then(res => {
            if (res.data.status == 200) {
                setAllEventTypes(res.data.event_type);
                // setLoading(false);
                setTotalJobType(res.data.total_event_types)
            }
        })

        axios.get(`/api/edit-event-type/${editEventTypeId}`).then(res => {
            if (res.data.status == 200) {
                setEditeventTypeData(res.data.event_type);
                // setLoading(false);
            }
        })




    }, [renderAllEventTypes, editEventTypeId])
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




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />

                        <section class="job-config m-3  rounded-3">
                            {/* <div class="row"> */}

                            <div class="card">
                                <div class="card-header">
                                    <h5>All Event Types (Event Configuration)</h5>
                                </div>

                                <div class="card-body">
                                    <div className='job-department-tag-section py-3 px-2'>
                                        <div class="job-type-sec">
                                            <div className='job-type-nav'>
                                                <div>

                                                    <h5 className='job-type-text'>Event Type</h5>
                                                </div>

                                                <div>
                                                    <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddEventTypeModal} data-aos="fade-left"> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>


                                                    <Modal
                                                        isOpen={addEventTypeModalIsOpen}
                                                        onRequestClose={closeAddEventTypeModal}
                                                        style={customStyles1}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddEventTypeModal}><i class="fa fa-times"></i></span>

                                                            <h5 className=""> Create Event Type</h5>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">

                                                                    <div className='d-flex align-items-center'>
                                                                        <div class="mb-3" style={{ width: '60%' }}>
                                                                            <label for="exampleFormControlInput1" class="form-label fs-6">Event Type Name</label>
                                                                            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addEventType.event_type_name} name="event_type_name" onChange={handleInput} />
                                                                        </div>

                                                                        <div>
                                                                        </div>


                                                                        <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                            <span className='text-danger'> {addEventType.error_list.event_type_name}</span>
                                                                        </div>
                                                                    </div>







                                                                    <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleJobTypeSave}>Save</button>





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

                                                            <h5 className=""> Edit Event Type</h5>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">

                                                                    <div className='d-flex align-items-center'>
                                                                        <div class="mb-3" style={{ width: '60%' }}>
                                                                            <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editeventTypeData.event_type_name} name="event_type_name" onChange={handleEditJobTypeInput} />
                                                                        </div>

                                                                        <div>
                                                                        </div>


                                                                        <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                            {/* <span className='text-danger'> {editeventTypeData.error_list.event_type_name !=undefined && editeventTypeData.error_list.event_type_name  }</span> */}
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
                                                    allEventTypes.map((item, i) => {
                                                        return (
                                                            <>
                                                                <div>
                                                                    <button type='button' className='btn border  mb-4'
                                                                        value={item.id}> <span> {item.event_type_name}</span>

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

export default EventConfiguration