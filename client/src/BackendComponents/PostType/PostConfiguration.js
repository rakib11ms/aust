import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';

import '../Job Management/JobManagement.css';


import Modal from 'react-modal';
function PostConfiguration() {

    const [allPostTypes, setAllPostTypes] = useState([]);

    console.log('all job types', allPostTypes)

    const [totalJobType, setTotalJobType] = useState([])



    const [editEventTypeId, setEditEventTypeId] = useState('');

    const [editeventTypeData, setEditeventTypeData] = useState([]);
    console.log('editjobtype  ', editeventTypeData)

    const [editDepartmentData, setEditDepartmentData] = useState([]);


    useEffect(() => {

        Modal.setAppElement('body');

    }, [])

    const [renderAllPostTypes, setRenderAllPostTypes] = useState('');
    const [addEventType, setAddEventType] = useState({
        type_name: "",
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


    const handlePostTypeSave = (e) => {
        e.preventDefault();
        const addType = {
            type_name: addEventType.type_name,
            created_by: '',
        }
        axios.post(`/api/add-post-type`, addType).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllPostTypes(res.data);
                closeAddPostTypeModal();
                setAddEventType({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddEventType({ ...addEventType, error_list: res.data.errors });
                // Swal.fire(addEventType.error_list.type_name[0], '', 'error')

            }
        })


    }


    const handleJobTypeUpdate = (e) => {
        e.preventDefault();
        const editJob = {
            type_name: editeventTypeData.type_name,
            created_by: '',
        }
        axios.post(`/api/update-post-type/${editEventTypeId}`, editJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllPostTypes(res.data);
                closeEditJobTypeModal();
                setEditeventTypeData({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });
                setEditEventTypeId('')

            }
            // else if (res.data.status == 400) {
            //     setEditJobType({ ...editJobType, error_list: res.data.errors });
            //     Swal.fire(addEventType.error_list.type_name[0], '', 'error')

            // }
        })


    }



    const [addEventTypeModalIsOpen, setaddPostTypeModalIsOpen] = useState(false);

    function closeAddPostTypeModal(e) {
        setaddPostTypeModalIsOpen(false);

    }
    const openAddPostTypeModal = (e) => {
        e.preventDefault();
        setaddPostTypeModalIsOpen(true)

    }


    const [editPostTypeModalIsOpen, seteditPostTypeModalIsOpen] = useState(false);
    function openEditPostTypeModal(e, editId) {
        e.preventDefault();
        seteditPostTypeModalIsOpen(true)
        setEditEventTypeId(editId);
    }
    function closeEditJobTypeModal(e) {
        seteditPostTypeModalIsOpen(false);

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
                axios.delete(`/api/delete-post-type/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllPostTypes(res.data);
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
        axios.get(`/api/post-type`).then(res => {
            if (res.data.status == 200) {
                setAllPostTypes(res.data.post_type);
                // setLoading(false);
                setTotalJobType(res.data.total_post_types)
            }
        })

        axios.get(`/api/edit-post-type/${editEventTypeId}`).then(res => {
            if (res.data.status == 200) {
                setEditeventTypeData(res.data.post_type);
                // setLoading(false);
            }
        })




    }, [renderAllPostTypes, editEventTypeId])
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
                                <div class="card-header bg-light d-flex justify-content-between" style={{ color: "#777777" }}>
                                    <div>
                                        <h5>All PostTypes (Post Configuration)</h5>

                                    </div>
                                    <div>
                                        <Link to="/post-type"><button type='button' className='btn btn-success btn-sm'>Back</button></Link>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div className='job-department-tag-section py-3 px-2'>
                                        <div class="job-type-sec">
                                            <div className='job-type-nav'>
                                                <div>

                                                    <h5 className='job-type-text'>Post Type</h5>
                                                </div>

                                                <div>
                                                    <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddPostTypeModal} data-aos="fade-left"> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>


                                                    <Modal
                                                        isOpen={addEventTypeModalIsOpen}
                                                        onRequestClose={closeAddPostTypeModal}
                                                        style={customStyles1}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddPostTypeModal}><i class="fa fa-times"></i></span>

                                                            <h5 className=""> Create Post Type</h5>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">

                                                                    <div className=''>
                                                                        <div class="mb-2" style={{ width: '100%' }}>
                                                                            <label for="exampleFormControlInput1" class="form-label fs-6">Post type name</label>
                                                                            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addEventType.type_name} name="type_name" onChange={handleInput} />
                                                                        </div>

                                                                        <div>
                                                                        </div>


                                                                        <div style={{ width: '100%' }} className="mx-2 mb-1">
                                                                            <span className='text-danger'> {addEventType.error_list.type_name}</span>
                                                                        </div>
                                                                    </div>







                                                                    <button className='btn btn-success btn-sm rounded-3 px-3 ' onClick={handlePostTypeSave}>Save</button>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit job type modal */}

                                                    <Modal
                                                        isOpen={editPostTypeModalIsOpen}
                                                        onRequestClose={closeEditJobTypeModal}
                                                        style={customStyles2}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobTypeModal}><i class="fa fa-times"></i></span>

                                                            <h5 className=""> Edit Post Type</h5>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">

                                                                    <div className=''>
                                                                        <div class="mb-1" style={{ width: '100%' }}>
                                                                            <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editeventTypeData.type_name} name="type_name" onChange={handleEditJobTypeInput} />
                                                                        </div>

                                                                        <div>
                                                                        </div>


                                                                        <div style={{ width: '100%' }} className="mx-2 mt-1">
                                                                            {/* <span className='text-danger'> {editeventTypeData.error_list.type_name !=undefined && editeventTypeData.error_list.type_name  }</span> */}
                                                                        </div>
                                                                    </div>







                                                                    <button className='btn btn-success btn-sm rounded-3 px-3 mt-1' onClick={handleJobTypeUpdate}>Update</button>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                </div>

                                            </div>

                                            <div className='job-type-secs'>
                                                {
                                                    allPostTypes.map((item, i) => {
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
                                                                            openEditPostTypeModal(e, item.id)

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

export default PostConfiguration