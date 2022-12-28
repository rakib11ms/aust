import React, { useState, useEffect } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
import '../PostType/../PostType/Post.css';

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
    const [allUsers, setallUsers] = useState([]);
    console.log('users', allUsers)

    useEffect(() => {
        axios.get(`/api/all-users`).then(res => {
            if (res.data.status == 200) {
                setallUsers(res.data.all_users);
                setLoading(false);
            }
        })
    }, []);



    ////multiple filter search functionality start 


    const multipleFilterStyles = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "50vw",
            height: "50vh",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };


    const [addMultipleFilterModalIsOpen, setaddMultipleFilterModalIsOpen] = useState(false);
    function openAddMultipleFilterModal(e) {
        e.preventDefault();
        setaddMultipleFilterModalIsOpen(true)
    }
    function closeAddMultipleFilterModal(e) {
        setaddMultipleFilterModalIsOpen(false);

    }



    //// multiple filter search modal functionality end







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

    console.log('full profile', viewUserDescription);


    const [viewUserModalIsOpen, setviewUserModalIsOpen] = useState(false);
    function openViewUserProfileModal(e, viewJobPost) {
        e.preventDefault();
        setViewUserDescription(viewJobPost)
        setviewUserModalIsOpen(true)
    }
    function closeViewUserProfileModal(e) {
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
                width: 0,
                padding: 0,
            },
        },

        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='title-field d-flex justify-content-between align-items-center' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <h5 className='my-1 ' style={{ fontSize: 18 }}>
                            {row.full_name}
                        </h5>

                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.phone_no}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.email}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.blood_group == null ? '' : row.blood_group.blood_group_name}</span>
                        </div>
                    </div>
                    <div className='text-bottom  p-0'>
                        <h3 className="title-text-h">Professional</h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>




                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600,
                padding: 0,
            },
        },
        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='educational-field d-flex justify-content-between py-1 align-items-center' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].name_of_company}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].designation}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].office_address}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>Other Information</span>
                        </div>
                    </div>

                    <div className='text-bottom p-0 '>
                        <h3 className="title-text-h">Educational</h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>


                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600,
                padding: 0,

            },
        },
        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className='contact-field d-flex justify-content-between py-1 align-items-center' style={{ borderRight: "1px solid gray" }}>
                    <div style={{ textAlign: "justify" }}>
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>BSC </span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.educational_info.bsc_institution}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].office_address}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='py-1 px-1 text-secondary'> {row.educational_info.bsc_passing_year}</span>
                        </div>
                    </div>

                    <div className='text-bottom '>
                        <h3 className="title-text-h px-3">Contact </h3>
                        <WorkOutlineOutlinedIcon style={{ marginTop: 27, color: "#C0C0C0", cursor: "pointer" }} />
                    </div>


                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600,
                padding: 0,

            },
        },




        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>

                <div className='icon-view-field'>
                    <div className='sites-icon me-3'>
                        <a href="" style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}><i class="fa-brands fa-facebook-f"></i></div> </a>
                        <a href="" style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}> <i class="fa-brands fa-linkedin-in"></i></div> </a>
                        <a href="" style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ padding: "0px 60px 0px 0px" }}><i class="fa-regular fa-envelope"></i></div> </a>
                    </div>
                    <div className='text-secondary'>
                        <div style={{ marginLeft: 20 }} onClick={(e) => {
                            openViewUserProfileModal(e, row)
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
                textAlign: 'left',
                padding: 10,

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
    const [blood_group_name, setblood_group_name] = useState(null);
    const [company_name, setcompany_name] = useState(null);
    const [batch_name, setbatch_name] = useState(null);
    const [gender_name, setgender_name] = useState(null);
    const [stream_name, setstream_name] = useState(null);

    const [allBloodGroupName, setAllBloodGroupName] = useState([]);
    const [allCompanyName, setAllCompanyName] = useState([]);
    const [allBatchName, setAllBatchName] = useState([]);
    const [allGenderName, setAllGenderName] = useState([]);
    const [allStreamName, setAllStreamName] = useState([]);


    useEffect(() => {
        axios.get(`/api/batch-name`).then(res => {
            if (res.data.status == 200) {
                setAllBatchName(res.data.batch_name);

            }
        })
        axios.get(`/api/blood-group-name`).then(res => {
            if (res.data.status == 200) {
                setAllBloodGroupName(res.data.blood_group_name);

            }
        })
        axios.get(`/api/company-name`).then(res => {
            if (res.data.status == 200) {
                setAllCompanyName(res.data.company_name);

            }
        })
        axios.get(`/api/stream-name`).then(res => {
            if (res.data.status == 200) {
                setAllStreamName(res.data.stream_name);

            }
        })
    }, [])


    useEffect(() => {
        if (blood_group_name !== null || company_name !== null || blood_group_name !== null || stream_name !== null || gender_name !== null) {
            axios.get(`/api/multiple-filter-search-all-users/${company_name}/${blood_group_name}/${batch_name}/${stream_name}/${gender_name}`).then(res => {
                if (res.data.status == 200) {
                    setallUsers(res.data.all_users)
                    setLoading(false);
                }
            })
        }


    }, [blood_group_name, company_name, batch_name, gender_name, stream_name])


    const [globalSearch, setGlobalSearch] = useState('');

    useEffect(() => {
        if (globalSearch !== null) {
            axios.get(`/api/user-global-search/${globalSearch}`).then(res => {
                if (res.data.status == 200) {
                    setallUsers(res.data.all_users)
                    setLoading(false);
                }
            })
        }

    }, [globalSearch])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />
                        <h5 className='ms-4 pt-3'>User Management</h5>

                        <div className='container-fluid'>


                            <div className='user-config mt-3 border  rounded-3'>
                                <div className='user-config1 container d-flex justify-content-around  '>


                                    <div className="input-icon input-group-sm p-3 w-50  " data-aos="zoom-out-right">

                                        <div class="input-group py-2 text-secondary " data-aos="fade-right" >
                                            <input type="text" class="form-control inp shadow-sm" placeholder="Search.." onChange={(e) => setGlobalSearch(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white p-2 inp shadow-sm text-secondary " onClick={openAddMultipleFilterModal} id="basic-addon1">
                                                {/* <i class="fa-solid fa-magnifying-glass" ></i> */}
                                                <i class="fa fa-angle-down mx-2" aria-hidden="true"></i>

                                            </span>



                                            {/* add multiple filter modal */}
                                            <Modal
                                                isOpen={addMultipleFilterModalIsOpen}
                                                onRequestClose={closeAddMultipleFilterModal}
                                                style={customStyles1}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddMultipleFilterModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Filter You Search</h5>
                                                    <hr />


                                                    <div className="row col-12 my-4 d-flex justify-content-center align-items-center">

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Gender</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>


                                                                </select>    </div>
                                                        </div>

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Stream</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setstream_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>

                                                                    {
                                                                        allStreamName.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.stream_name}>{item.stream_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>    </div>
                                                        </div>

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Blood Group</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setblood_group_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allBloodGroupName.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.blood_group_name}>{item.blood_group_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }

                                                                </select>    </div>
                                                        </div>

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Company</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setcompany_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allCompanyName.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.company_name}>{item.company_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Batch</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setbatch_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allBatchName.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.batch_name}>{item.batch_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>


                                                        {/* <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Office Location</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected disabled>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>    </div>
                                                        </div> */}
                                                        {/* 
                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Permanent Location</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected disabled>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>    </div>
                                                        </div> */}


                                                    </div>
                                                </div>





                                            </Modal>

                                        </div>

                                    </div>


                                    <div className='d-flex ms-5'>
                                        <div className='pending mx-2' data-aos="zoom-out-left">
                                            <h6 style={{ paddingRight: 10, paddingTop: 6 }}>Pending</h6>
                                            <span className='num1'><h4
                                                className='num1-h4'
                                                style={{ color: "white", textAlign: "center", padding: "7px 12px 5px 12px", marginTop: 3, fontSize: 14 }}>20</h4></span>
                                        </div>
                                        <div className='active' data-aos="zoom-out-left">
                                            <h6 style={{ paddingRight: 10, paddingTop: 6 }}>Active</h6>
                                            <span className='num2'><h5 style={{ color: "white", textAlign: "center", padding: "8px 12px 5px 12px", marginTop: 3, fontSize: 14 }}>1k</h5></span>
                                        </div>
                                    </div>
                                </div>
                                <Container >
                                    <div className='user-config2' data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom">
                                        {
                                            gender_name !== null && <Button onClick={() => setgender_name(null)} style={{ color: "#828282", border: "1px solid #828282", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<MaleRoundedIcon />} endIcon={<CloseIcon />}>
                                                {gender_name}
                                            </Button>
                                        }

                                        {
                                            company_name !== null && <Button onClick={() => setcompany_name(null)} className='header-button' style={{ color: "#828282", border: "1px solid #828282", borderRadius: 7, fontSize: 12, marginRight: 10 }} variant="outlined" startIcon={<BusinessCenterIcon />} endIcon={<CloseIcon />}>
                                                {company_name}
                                            </Button>
                                        }


                                        {/* <Button onClick={()=>setstream_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<LocationCityOutlinedIcon />} endIcon={<CloseIcon />}>
                                            Location
                                        </Button> */}
                                        {
                                            batch_name !== null && <Button onClick={() => setbatch_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<BatchPredictionIcon />} endIcon={<CloseIcon />}>
                                                {batch_name}
                                            </Button>
                                        }

                                        {
                                            blood_group_name !== null && <Button onClick={() => setblood_group_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<BloodtypeOutlinedIcon />} endIcon={<CloseIcon />}>
                                                {blood_group_name}
                                            </Button>
                                        }
                                        {
                                            stream_name !== null && <Button onClick={() => setstream_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<AccessTimeIcon />} endIcon={<CloseIcon />}>
                                                {stream_name}
                                            </Button>
                                        }




                                    </div>
                                </Container>
                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Users</h5>

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className="nav-users">

                                                <div className='d-flex align-items-center'>
                                                    <h6 className={`${jobPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setjobPostFiltering('all')}>Alumni</h6>
                                                    <h6 className={`${jobPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(1)}>Stuff</h6>
                                                    <h6 className={`${jobPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(0)}>Admins</h6>
                                                    <h6 className={`${jobPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering('archive')}>Moderators</h6>
                                                </div>

                                                <div className='d-flex align-items-center d-a-button'>
                                                    <button type="button" style={{ color: "#646464", fontWeight: 400 }} class="btn btn-light dropdown-toggle mb-2" data-bs-toggle="dropdown">
                                                        Download
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#"><i style={{ marginRight: 5 }} class="fa-regular fa-file-pdf"></i> Download CV as a PDF</a></li>
                                                        <li><a class="dropdown-item" href="#"><i style={{ marginRight: 9 }} class="fa-regular fa-file-excel"></i>Download details as a excel</a></li>
                                                        <li><a class="dropdown-item" href="#"><i style={{ marginRight: 9 }} class="fa-regular fa-file-word"></i>Download details as a docs</a></li>
                                                    </ul>
                                                    <div className='select-div-active'>
                                                        <select className="form-select form-select-sm mb-3 select-active" aria-label=".form-select-sm example">
                                                            <option selected disabled>Active</option>
                                                            <option value="1">Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>

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
                                            data={allUsers}
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
                                onRequestClose={closeViewUserProfileModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewUserProfileModal}><i class="fa fa-times"></i></span>

                                    <div className="row">

                                        <div className="col-12 mt-3">

                                            <div className='modal-first'>
                                                <div className='modal-div-image'>
                                                    <img className="modal-image" src={`${global.img_url}/images/${viewUserDescription.image}`} />
                                                </div>
                                                <div className=''>
                                                    <h4>{viewUserDescription.full_name}</h4>
                                                    <h6 className='modal-h6'>
                                                        Email: {viewUserDescription.email}</h6>
                                                    <h6 className='modal-h6'>
                                                        <div class="d-flex">
                                                            <div>
                                                                Phone: {viewUserDescription.phone_no}

                                                            </div>
                                                            <div className='mx-2'>
                                                                Blood Group: {viewUserDescription.blood_group !== undefined && viewUserDescription.blood_group.blood_group_name}

                                                            </div>
                                                        </div>

                                                    </h6>
                                                    <div className='modal-location mx-5'>
                                                        <i className="fa fa-map-location me-1 mb-1 modal-icon"></i>
                                                        <h6 className='modal-h6 '>Show Location in map</h6>
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
                                                        <option value="1">Admin</option>
                                                        <option value="2">Alumni</option>
                                                        <option value="3">Stuff</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className='mt-4' >
                                                <div className='d-flex'>
                                                    <i class="fa fa-graduation-cap"></i>
                                                    <h6 className='modal-h6  ms-2'>Personal Information</h6>
                                                </div>
                                                <div>
                                                    <article className='modal-article'>
                                                        <table class="table table-bordered">
                                                            {/* <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Email</th>
                                                                    <th scope="col">Year</th>
                                                                    <th scope="col">Institution</th>
                                                                </tr>
                                                            </thead> */}
                                                            <tbody>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Full Name</th>
                                                                    <td>{viewUserDescription.full_name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Nick Name</th>
                                                                    <td>{viewUserDescription.nick_name}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Office Email</th>
                                                                    <td>{viewUserDescription.office_email}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Batch</th>
                                                                    <td>{viewUserDescription.batch_name !== undefined && viewUserDescription.batch_name.batch_name}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Gender</th>
                                                                    <td>{viewUserDescription.gender}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Present Address</th>
                                                                    <td>{viewUserDescription.present_address}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th style={{ width: "30%" }}>Permanent Address</th>
                                                                    <td>{viewUserDescription.permanent_address}</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>


                                                    </article></div>
                                            </div>
                                            <div className='mt-3'>

                                                <div className='d-flex  justify-content-between '>
                                                    <div className='d-flex '>
                                                        <i class="fa fa-briefcase"></i>
                                                        <h6 className='modal-h6 ms-2'>Professional Information</h6>

                                                    </div>

                                                </div>
                                                <div>
                                                    <article className=''>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Company</th>
                                                                    <th scope="col">Designation</th>
                                                                    <th scope="col">Year Active</th>
                                                                    <th scope="col">Office Address</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    viewUserDescription.professional_info !== undefined && viewUserDescription.professional_info.map((item, i) => {
                                                                        return (
                                                                            <>
                                                                                <tr>
                                                                                    <th scope="row">{item.name_of_company}</th>
                                                                                    <td>{item.designation}</td>
                                                                                    <td>{item.year}</td>
                                                                                    <td>{item.office_address}</td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    })
                                                                }


                                                            </tbody>
                                                        </table>
                                                    </article>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <div className='d-flex'>
                                                    <i class="fa fa-graduation-cap"></i>
                                                    <h6 className='modal-h6  ms-2'>Educational Information</h6>
                                                </div>
                                                <div>
                                                    <article className='modal-article'>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Education</th>
                                                                    <th scope="col">Grade</th>
                                                                    <th scope="col">Year</th>
                                                                    <th scope="col">Institution</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">SSC</th>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.ssc_grade}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.ssc_passing_year}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.ssc_institution}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">HSC</th>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.hsc_grade}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.hsc_passing_year}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.hsc_institution}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">BSC</th>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.bsc_grade}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.bsc_passing_year}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.bsc_institution}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">MSC</th>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.msc_grade}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.msc_passing_year}</td>
                                                                    <td>{viewUserDescription.educational_info !== undefined && viewUserDescription.educational_info.msc_passing_institution}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>


                                                    </article></div>
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