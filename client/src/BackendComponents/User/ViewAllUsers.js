import React, { useState, useEffect } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import modalImge from "../../image/modal.png";
import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import "./UserManagment.css";

import MaterialTable from "material-table";
import moment from 'moment';
// import { Paper } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';


function ViewAllUsers() {
    const [loading, setLoading] = useState(true);

    const [allUserPosts, setallUserPosts] = useState([]);

    console.log('all job postssssssssss', allUserPosts)


    const [renderAllUserPosts, setRenderAllUserPosts] = useState('');

    // console.log('all posts check', allJobPosts)

    //add functionality for post category






    const formData = new FormData();

    const handlePostApproval = (e, id) => {

        if (e.target.checked === true) {
            const formData = new FormData();

            formData.append('isPublished', 1);
            // formData.append('_method', 'PUT');

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', id.isArchived);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllUserPosts(res.data);
                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                // }
            })
        }
        if (e.target.checked == false) {
            const formData = new FormData();

            formData.append('isPublished', 0);
            // formData.append('_method', 'PUT');

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', id.isArchived);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllUserPosts(res.data);
                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                // }
            })
        }
    }

    const archiveJobPost = (e, id) => {
        if (id.isArchived == 0) {

            const formData = new FormData();

            formData.append('isPublished', 0);
            // formData.append('_method', 'PUT');

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', 1);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllUserPosts(res.data);

                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                // }
            })

        }
        if (id.isArchived == 1) {

            const formData = new FormData();

            formData.append('isPublished', 1);
            // formData.append('_method', 'PUT');

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', 0);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllUserPosts(res.data);

                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                // }
            })

        }

    }
    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)

    const customStyles1 = {
        content: {
            // marginTop: '70px',
            top: '45vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "60vw",
            height: "90vh",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };

    const [viewUserDescription, setViewUserDescription] = useState('');


    const [viewUserModalIsOpen, setviewUserModalIsOpen] = useState(false);
    function openViewJobPostModal(e, viewJobPost) {
        e.preventDefault();
        setViewUserDescription(viewJobPost)
        setviewUserModalIsOpen(true)
    }
    function closeViewUserPostModal(e) {
        setviewUserModalIsOpen(false);

    }






    useEffect(() => {
        axios.get(`/api/all-job-post`).then(res => {
            if (res.data.status == 200) {
                setallUserPosts(res.data.posts);
                setLoading(false);
            }
        })
        Modal.setAppElement('body');

    }, [])


    const deleteJobPost = (e, id) => {

        e.preventDefault();
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
                axios.post(`/api/delete-job-post/${id}`).then(res => {
                    if (res.data.status === 200) {
                        thisClicked.closest("tr").remove();
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


    }


    const columns = [
        // {
        //     title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

        //     width: "40 !important"
        // },

        {
            title: "ALL", field: `image`, render: (row) =>
                <div className=''>
                    <img className="" style={{ borderRadius: "100px" }} src={`${global.img_url}/images/${row.image}`} width="55px" height="55px" alt="No Image" />


                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                // textAlign: 'left',
                width: 10,
            },
        },

        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='title-field' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <h5 className='my-1 ' style={{ fontSize: 18 }}>
                            Alena Suvra
                        </h5>

                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>+880100345677</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>@gmail.com</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>AB+</span>
                        </div>
                    </div>
                    <div className='text-bottom'>
                        <h3 className="title-text-h">Professional</h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>




                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },
        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='educational-field' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Company Name</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Designation</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Location</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Other Information</span>
                        </div>
                    </div>

                    <div className='text-bottom'>
                        <h3 className="title-text-h">Educational</h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>


                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },
        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='contact-field' style={{ borderRight: "1px solid gray" }}>
                    <div style={{ textAlign: "justify" }}>
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Last Degree Information</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Institiute</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Batch</span>
                        </div><br />
                        <div className=' bg-light d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Session</span>
                        </div>
                    </div>

                    <div className='text-bottom'>
                        <h3 className="title-text-h">information</h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>


                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },




        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>

                <div className='icon-view-field'>
                    <div className='sites-icon me-3'>
                        <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}><i class="fa-brands fa-facebook-f"></i></div>
                        <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}> <i class="fa-brands fa-linkedin-in"></i></div>
                        <div style={{ padding: "0px 60px 0px 0px" }}><i class="fa-regular fa-envelope"></i></div>
                    </div>
                    <div className='text-secondary'>
                        <div style={{ marginLeft: 20 }} onClick={(e) => {
                            openViewJobPostModal(e, row)
                        }
                        }>
                            <i className='fa fa-eye mx-2 '  >
                            </i>

                        </div>

                    </div>
                </div>

            </div>



            ,


            cellStyle: {
                marginLeft: 0,
                textAlign: 'left'
            },
        },
    ];









    const [jobPostFiltering, setjobPostFiltering] = useState('all');

    // console.log('filtered post val',allJobPosts)
    console.log('filter click check', jobPostFiltering)


    useEffect(() => {
        axios.get(`/api/filter-job-post-status/${jobPostFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallUserPosts(res.data.posts);
                setLoading(false);
            }
        })

    }, [jobPostFiltering])

    const [selectedRowsLength, setselectedRowsLength] = useState(0);
    // console.log("selcted rows",selectedRowsLength)
    const [selectedRowsIds, setSelectedRowsIds] = useState([]);
    console.log("selcted rows ids", selectedRowsIds)



    const selectionCheck = (selectedRows) => {

        setselectedRowsLength(selectedRows.length)

        // setSelectedRowsIds(selectedRows)
        let result = selectedRows.map(a => a.id);
        // console.log('result',result)

        setSelectedRowsIds(result);


    }




    const deleteAllRecords = (e) => {

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
                axios.post(`/api/delete-multiple-job-posts/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllUserPosts(res.data)
                        // window.location.reload();
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'All Posts deleted successfully',
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

                        <div className='container-fluid'>


                            <div className='user-config mt-3 border  rounded-3'>
                                <div className='user-config1 container'>

                                    <div className="input-icon input-group-sm p-5 ">
                                        <input id='res-input-icon' style={{ position: "relative", width: 400, height: 50, boxShadow: "0px 0px 23px -15px", marginLeft: "-84px" }} type="text" className="form-control bg-transparent input-control" aria-label="Username" aria-describedby="basic-addon1" />
                                        <span className="input-group-text bg-transparent" id="icon">
                                            <SearchRoundedIcon />
                                        </span>
                                    </div>
                                    <div className='d-flex ms-5'>
                                        <div className='pending mx-2'>
                                            <h6 style={{ paddingRight: 10, paddingTop: 6 }}>Pending</h6>
                                            <span className='num1'><h4
                                                className='num1-h4'
                                                style={{ color: "white", textAlign: "center", padding: "7px 12px 5px 12px", marginTop: 3, fontSize: 14 }}>20</h4></span>
                                        </div>
                                        <div className='active'>
                                            <h6 style={{ paddingRight: 10, paddingTop: 6 }}>Active</h6>
                                            <span className='num2'><h5 style={{ color: "white", textAlign: "center", padding: "8px 12px 5px 12px", marginTop: 3, fontSize: 14 }}>1k</h5></span>
                                        </div>
                                    </div>
                                </div>
                                <Container>
                                    <div className='user-config2'>
                                        <Button style={{ color: "#828282", border: "1px solid #828282", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<MaleRoundedIcon />} endIcon={<CloseIcon />}>
                                            Male
                                        </Button>
                                        <Button className='header-button' style={{ color: "#828282", border: "1px solid #828282", borderRadius: 7, fontSize: 12, marginRight: 10 }}  variant="outlined" startIcon={<FemaleRoundedIcon />} endIcon={<CloseIcon />}>
                                            Female
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<LocationCityOutlinedIcon />} endIcon={<CloseIcon />}>
                                            Savar
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<WorkOutlineOutlinedIcon />} endIcon={<CloseIcon />}>
                                            Floor in charge
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<BloodtypeOutlinedIcon />} endIcon={<CloseIcon />}>
                                            O Positive
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<TuneOutlinedIcon />} endIcon={<CloseIcon />}>
                                            More
                                        </Button>

                                    </div>
                                </Container>
                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Users</h5>

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${jobPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setjobPostFiltering('all')}>Alumni</h6>
                                                <h6 className={`${jobPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(1)}>Stuff</h6>
                                                <h6 className={`${jobPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(0)}>Admins</h6>
                                                <h6 className={`${jobPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering('archive')}>Moderators</h6>
                                                <button type="button" style={{ color: "#646464", fontWeight: 400 }} class="btn btn-light dropdown-toggle mb-2" data-bs-toggle="dropdown">
                                                    Download
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#"><i style={{ marginRight: 5 }} class="fa-regular fa-file-pdf"></i> Download CV as a PDF</a></li>
                                                    <li><a class="dropdown-item" href="#"><i style={{ marginRight: 9 }} class="fa-regular fa-file-excel"></i>Download details as a excel</a></li>
                                                    <li><a class="dropdown-item" href="#"><i style={{ marginRight: 9 }} class="fa-regular fa-file-word"></i>Download details as a docs</a></li>
                                                </ul>
                                                <h6 style={{ border: "1px solid rgb(235, 235, 235)", padding: "7px 18px", borderRadius: 15, boxShadow: "0px 0px 23px -15px" }} className={`${jobPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering('archive')}>Active</h6>

                                            </div>

                                            <div className='d-flex align-items-center'>
                                                {
                                                    selectedRowsLength > 1 &&
                                                    <>
                                                        <div class="form-check form-switch mx-2">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        </div>

                                                        <div className='mx-2 '
                                                            onClick={
                                                                deleteAllRecords
                                                            }
                                                        >
                                                            <i class="fa-solid fa-trash icon-table-trash"></i>
                                                        </div>

                                                        <div className='mx-2'>


                                                            <i class="fa-solid fa-box-archive icon-table-archive text-secondary text-secondary"></i>

                                                        </div>


                                                    </>
                                                }



                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable

                                            columns={columns}
                                            data={allUserPosts}
                                            isLoading={loading === true ? true : false}
                                            // onSelectionChange={(selectedRows)=>console.log('selected rows',selectedRows)}
                                            onSelectionChange={selectionCheck}


                                            options={{
                                                search: true,
                                                // filtering: true,
                                                toolbar: false,
                                                showTitle: false,
                                                searchFieldAlignment: "left",
                                                pageSize: 5,
                                                emptyRowsWhenPaging: false,
                                                pageSizeOptions: [5, 10, 20, 50, 100],
                                                selection: true,
                                                sorting: false,
                                                searchFieldAlignment: "left",

                                                // paging:false


                                            }}


                                        //     components={{
                                        //         Container: props => <Paper {...props} elevation={2}/>
                                        //    }}
                                        />


                                    </div>
                                </div>
                            </div>





                            {/* add post category modal */}
                            <Modal
                                isOpen={viewUserModalIsOpen}
                                onRequestClose={closeViewUserPostModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewUserPostModal}><i class="fa fa-times"></i></span>

                                    <div className="row">

                                        <div className="col-12 mt-3">

                                            <div className='modal-first'>
                                                <div className='modal-div-image'>
                                                    <img className="modal-image" src={modalImge} />
                                                </div>
                                                <div>
                                                    <h4>Alena  shuvra</h4>
                                                    <h6 className='modal-h6'>Phone number</h6>
                                                    <h6 className='modal-h6'>Blood group</h6>
                                                    <div className='modal-location'>
                                                        <i className="fa fa-map-location me-1 mb-1 modal-icon"></i>
                                                        <h6 className='modal-h6'>Show Location in map</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="text-center mt-4 mb-4">
                                                    <a class="btn line-btn-dark btn-icon btn-radius border" href="#" title=""><i class="fa fa-download" download></i> <span className='modal-h6'>Download CV</span></a>
                                                </div>

                                                <div className='select-down-div'>
                                                    <select className="form-select form-select-sm mb-3 select-down" aria-label=".form-select-sm example">
                                                        <option selected>Moderator</option>
                                                        <option value="1">Super Admin</option>
                                                        <option value="2">Admin</option>
                                                        <option value="3">Stuff</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className='d-flex'>
                                                    <i class="fa fa-briefcase"></i>
                                                    <h6 className='modal-h6 ms-2'>Professional</h6>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <div className='d-flex'>
                                                    <i class="fa fa-graduation-cap"></i>
                                                    <h6 className='modal-h6  ms-2'>Education</h6>
                                                </div>
                                                <div>
                                                    <article className='modal-article'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a efficitur risus, vitae mattis nulla. Phasellus interdum posuere tortor vel tempor. Fusce ligula nisi, scelerisque sed pulvinar sed, condimentum eu orci. Quisque lacinia lacus sed arcu imperdiet, quis lobortis elit maximus. Suspendisse dictum hendrerit odio, sed accumsan libero iaculis sit amet. Integer at turpis sapien. Nunc ut dolor molestie, convallis purus sed, mattis sem. Orci varius natoque penatibus et magnis dis parturient montes
                                                        <br />
                                                        <br />

                                                        orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a efficitur risus, vitae mattis nulla. Phasellus interdum posuere tortor vel tempor. Fusce ligula nisi, scelerisque sed pulvinar sed, condimentum eu orci. Quisque lacinia lacus sed arcu imperdiet, quis lobortis elit maximus. Suspendisse dictum hendrerit odio, sed accumsan libero iaculis sit amet. Integer at turpis sapien. Nunc ut dolor molestie, convallis purus sed, mattis sem. Orci varius natoque penatibus et magnis dis parturient montes
                                                        <br />
                                                        <br />
                                                        orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a efficitur risus, vitae mattis nulla. Phasellus interdum posuere tortor vel tempor. Fusce ligula nisi, scelerisque sed pulvinar sed, condimentum eu orci. Quisque lacinia lacus sed arcu imperdiet, quis lobortis elit maximus. Suspendisse dictum hendrerit odio, sed accumsan libero iaculis sit amet. Integer at turpis sapien. Nunc ut dolor molestie, convallis purus sed, mattis sem. Orci varius natoque penatibus et magnis dis parturient montes</article></div>
                                            </div>

                                            <div>
                                                {/*<button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewUserDescription.type_name}</span> </button>*/}



                                                {/* <button className='btn btn-success btn-sm py-1 px-3 ' style={{ borderRadius: "8px" }}>asdasdas</button>
                                                    <button className='btn btn-danger btn-sm py-1 px-3  mx-2' style={{ borderRadius: "8px" }}>asdasdas</button> */}
                                            </div>




                                        </div>



                                    </div>
                                </div>

                            </Modal>



                        </div>

                    </div>


                </div>
            </div >

        </>

    )

}

export default ViewAllUsers