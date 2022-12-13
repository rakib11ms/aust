import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
// import '../JobManagement.css'


import Modal from 'react-modal';
function VlogConfiguration() {

    const [allVlogCategory, setAllVlogCategory] = useState([]);

    console.log('all job types', allVlogCategory)

    const [totalVlogCategory, setTotalVlogCategory] = useState([])



    const [editCategoryId, setEditCategoryId] = useState('');

    const [editVlogCategoryData, setEditVlogCategoryData] = useState([]);
    console.log('editjobtype  ', editVlogCategoryData)



    useEffect(() => {

        Modal.setAppElement('body');

    }, [])

    const [renderAllVlogCategory, setRenderAllVlogCategory] = useState('');
    const [addVlogCategory, setAddVlogCategory] = useState({
        category_name: "",
        created_by: '',
        error_list: []

    })

    console.log('job type data typing', addVlogCategory)

    const handleInput = (e) => {
        setAddVlogCategory({
            ...addVlogCategory, [e.target.name]: e.target.value
        })


    }
    const handleEditJobTypeInput = (e) => {
        setEditVlogCategoryData({
            ...editVlogCategoryData, [e.target.name]: e.target.value
        })
    }


    const handleJobTypeSave = (e) => {
        e.preventDefault();
        const addJob = {
            category_name: addVlogCategory.category_name,
            created_by: '',
        }
        axios.post(`/api/add-vlog-category`, addJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllVlogCategory(res.data);
                closeAddVlogCategoryModal();
                setAddVlogCategory({
                    category_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddVlogCategory({ ...addVlogCategory, error_list: res.data.errors });
                // Swal.fire(addVlogCategory.error_list.category_name[0], '', 'error')

            }
        })


    }


    const handleJobTypeUpdate = (e) => {
        e.preventDefault();
        const editJob = {
            category_name: editVlogCategoryData.category_name,
            created_by: '',
        }
        axios.post(`/api/update-vlog-category/${editCategoryId}`, editJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllVlogCategory(res.data);
                closeEditJobTypeModal();
                setEditVlogCategoryData({
                    category_name: "",
                    created_by: '',
                    error_list: []

                });
                setEditCategoryId('')

            }
            // else if (res.data.status == 400) {
            //     setEditJobType({ ...editJobType, error_list: res.data.errors });
            //     Swal.fire(addVlogCategory.error_list.category_name[0], '', 'error')

            // }
        })


    }



    const [addVlogCategoryModalIsOpen, setaddVlogCategoryModalIsOpen] = useState(false);

    function closeAddVlogCategoryModal(e) {
        setaddVlogCategoryModalIsOpen(false);

    }
    const openAddVlogCategoryModal = (e) => {
        e.preventDefault();
        setaddVlogCategoryModalIsOpen(true)

    }


    const [editJobTypeModalIsOpen, seteditJobTypeModalIsOpen] = useState(false);
    function openEditJobTypeModal(e, editId) {
        e.preventDefault();
        seteditJobTypeModalIsOpen(true)
        setEditCategoryId(editId);
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
                axios.delete(`/api/delete-vlog-category/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllVlogCategory(res.data);
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
        axios.get(`/api/vlog-category`).then(res => {
            if (res.data.status == 200) {
                setAllVlogCategory(res.data.category);
                // setLoading(false);
                setTotalVlogCategory(res.data.total_categories)
            }
        })

        axios.get(`/api/edit-vlog-category/${editCategoryId}`).then(res => {
            if (res.data.status == 200) {
                setEditVlogCategoryData(res.data.category);
                // setLoading(false);
            }
        })




    }, [renderAllVlogCategory, editCategoryId])
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

                        <section class="job-config m-3 border  rounded-3">
                            {/* <div class="row"> */}
                            <div class="job-config-header text-light rounded-top ">
                                <div class="inside " data-aos="fade-right">
                                    <div class="item1">
                                        <h2 className=' mb-0'>{totalVlogCategory}</h2>
                                        <p className=''>Category</p>
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

                                            <h5 className='job-type-text'>Category</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddVlogCategoryModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>


                                            <Modal
                                                isOpen={addVlogCategoryModalIsOpen}
                                                onRequestClose={closeAddVlogCategoryModal}
                                                style={customStyles1}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddVlogCategoryModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Create Vlog Category</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addVlogCategory.category_name} name="category_name" onChange={handleInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    <span className='text-danger'> {addVlogCategory.error_list.category_name}</span>
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

                                                    <h5 className=""> Edit Job Type</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editVlogCategoryData.category_name} name="category_name" onChange={handleEditJobTypeInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    {/* <span className='text-danger'> {editVlogCategoryData.error_list.category_name !=undefined && editVlogCategoryData.error_list.category_name  }</span> */}
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
                                            allVlogCategory.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.category_name}</span>

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





                            {/* </div> */}

                        </section>


                    </div>

                </div>

            </div>


        </>
    )

}

export default VlogConfiguration