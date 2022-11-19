import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import '../JobManagement.css'


import Modal from 'react-modal';
function JobConfiguration() {

    const [allJobTypes, setAllJobTypes] = useState([]);

    console.log('all job types', allJobTypes)

    const [totalDepartment,setTotalDepartment]=useState([])
    const [totalJobType,setTotalJobType]=useState([])

    console.log('ass',totalDepartment)

    
    const [editJobTypeId,setEditJobTypeId]=useState('');

    const [editJobTypeData,setEditJobTypeData]=useState([]);
    console.log('editjobtype  ',editJobTypeData)

    const [editDepartmentData,setEditDepartmentData]=useState([]);


    useEffect(() => {
  
        Modal.setAppElement('body');

    }, [])

    const [renderAllJobTypes, setRenderAllJobTypes] = useState('');
    const [addJobType, setAddJobType] = useState({
        type_name: "",
        created_by: '',
        error_list: []

    })

    console.log('job type data typing',addJobType)

    const handleInput = (e) => {
        setAddJobType({
            ...addJobType, [e.target.name]: e.target.value
        })


    }
    const handleEditJobTypeInput=(e)=>{
        setEditJobTypeData({
            ...editJobTypeData,[e.target.name]: e.target.value
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
    function openEditJobTypeModal(e,editId) {
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




    useEffect(() => {
        axios.get(`/api/job-type`).then(res => {
            if (res.data.status == 200) {
                setAllJobTypes(res.data.job_type);
                // setLoading(false);
                setTotalJobType(res.data.total_job_types)
            }
        })

        axios.get(`/api/edit-job-type/${editJobTypeId}`).then(res => {
            if (res.data.status == 200) {
                setEditJobTypeData(res.data.job_type);
                // setLoading(false);
            }
        })

  


    }, [renderAllJobTypes,editJobTypeId])
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
    const addDepartmentModalStyle = {
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


    const [allDepartments, setAllDepartments] = useState([]);

    console.log('all job types', allDepartments)




    const [addDepartmentModalIsOpen, setaddDepartmentModalIsOpen] = useState(false);

    function closeAddDepartmentModal(e) {
        setaddDepartmentModalIsOpen(false);

    }
    const openAddDepartmentModal = (e) => {
        e.preventDefault();
        setaddDepartmentModalIsOpen(true)

    }

    const [renderAllDepartment, setRenderAllDepartment] = useState('');
    const [addDepartment, setAddDepartment] = useState({
        department_name: "",
        created_by: '',
        error_list: []

    })
    console.log('eror dekh',addDepartment)

    const handleAddDepartment = (e) => {
        setAddDepartment({
            ...addDepartment, [e.target.name]: e.target.value
        })


    }
    


    
    const handleDepartmentSave = (e) => {
        e.preventDefault();
        const addDept = {
            department_name: addDepartment.department_name,
            created_by: '',
        }
        axios.post(`/api/add-department`, addDept).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllDepartment(res.data);
                closeAddDepartmentModal();
                setAddDepartment({
                    department_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddDepartment({ ...addDepartment, error_list: res.data.errors });
                // Swal.fire(addDepartment.error_list.department_name[0], '', 'error')

            }
        })


    }
    const [editDepartmentId,setEditDepartmentId]=useState('');

    const [editDepartmentModalIsOpen, seteditDepartmentModalIsOpen] = useState(false);
    function openEditDepartmentModal(e,editId) {
        e.preventDefault();
        seteditDepartmentModalIsOpen(true)
        setEditDepartmentId(editId);
    }
    function closeEditDepartmentModal(e) {
        seteditDepartmentModalIsOpen(false);

    }



    // const [editDepartment, seteditDepartment] = useState({
    //     department_name: "",
    //     created_by: '',
    //     error_list: []

    // })
    // console.log('eror dekh',editDepartment)

    const handleEditDepartment = (e) => {
        setEditDepartmentData({
            ...editDepartmentData, [e.target.name]: e.target.value
        })


    }
    


    
    const handleDepartmentUpdate = (e) => {
        e.preventDefault();
        const updateDept = {
            department_name: editDepartmentData.department_name,
            created_by: '',
        }
        axios.post(`/api/update-department/${editDepartmentId}`, updateDept).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllDepartment(res.data);
                closeEditDepartmentModal();
                setEditDepartmentData({
                    department_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddDepartment({ ...addDepartment, error_list: res.data.errors });
                // Swal.fire(addDepartment.error_list.department_name[0], '', 'error')

            }
        })


    }


    console.log('edit dep data ',editDepartmentId)






    useEffect(() => {
        axios.get(`/api/department`).then(res => {
            if (res.data.status == 200) {
                setAllDepartments(res.data.department);
                setTotalDepartment(res.data.total_departments)
                // setLoading(false);
            }
        })

        axios.get(`/api/edit-department/${editDepartmentId}`).then(res => {
            if (res.data.status == 200) {
                setEditDepartmentData(res.data.department);
                // setLoading(false);
            }
        })


    }, [renderAllDepartment,editDepartmentId])


    

    const deleteDepartment = (e, id) => {
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
                axios.delete(`/api/delete-department/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllDepartment(res.data);
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
                                <div class="inside ">
                                    <div class="item1">
                                        <h2 className=' mb-0'>{totalJobType}</h2>
                                        <p className=''>Job Types</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>{totalDepartment}</h2>
                                        <p className=''>Departments</p>
                                    </div>
                                    {/* <div class="item2">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div> */}


                                </div>
                                <div class=" ">

                                <Link to="/create-job-post"><button type='button' className='btn border btn-sm text-light'> +  <span className='mx-1 ' style={{textDecoration:'none'}}>  Create A job </span></button> </Link>

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

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addJobType.type_name} name="type_name" onChange={handleInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    <span className='text-danger'> {addJobType.error_list.type_name}</span>
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
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Type Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editJobTypeData.type_name} name="type_name" onChange={handleEditJobTypeInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
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
                                            allJobTypes.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.type_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteJobType(e,item.id)
                                                                
                                                                }}>
                                                                <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                      openEditJobTypeModal(e,item.id)

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

                                            <h5 className='job-type-text '>Departments</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddDepartmentModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>


                                        <Modal
                                                isOpen={addDepartmentModalIsOpen}
                                                onRequestClose={closeAddDepartmentModal}
                                                style={addDepartmentModalStyle}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddDepartmentModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Create Department</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Department Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addDepartment.type_name} name="department_name" onChange={handleAddDepartment} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    <span className='text-danger'> {addDepartment.error_list.department_name}</span>
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleDepartmentSave}>Save</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>


                                            <Modal
                                                isOpen={editDepartmentModalIsOpen}
                                                onRequestClose={closeEditDepartmentModal}
                                                style={addDepartmentModalStyle}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditDepartmentModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Edit Department</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Department Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editDepartmentData.department_name} name="department_name" onChange={handleEditDepartment} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    {/* <span className='text-danger'> {editDepartmentData.error_list.department_name}</span> */}
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleDepartmentUpdate}>Update</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>

                                    </div>

                                    <div className='job-type-secs '>

                                  

                                        {
                                            allDepartments.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.department_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteDepartment(e,item.id)
                                                                
                                                                }}>
                                                                <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                      openEditDepartmentModal(e,item.id)

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


                                {/* <div class="job-type-sec">
                                    <div className='job-type-nav'>
                                        <div>

                                            <h5 className='job-type-text'>Tags</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2'> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>

                                    </div>

                                    <div className='job-type-secs'>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border  mb-4'> Part time
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                        <div>
                                            <button type='button' className='btn border  mb-4'> Contactual
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>



                                        <div>
                                            <button type='button' className='btn border  mb-4'> Permanent
                                                <i class="fa fa-times mx-3" aria-hidden="true"></i>
                                                <i class="fa fa-edit " aria-hidden="true"></i>

                                            </button>
                                        </div>


                                    </div>



                                </div> */}

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