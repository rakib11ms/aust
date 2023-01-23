import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddModeratorSharpIcon from '@mui/icons-material/AddModeratorSharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route, Outlet } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import "./RoleManagement.css";

import MaterialTable from "material-table";
import moment from 'moment';
// import { Paper } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Grid, Input } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function RoleManagement() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [loading, setLoading] = useState(true);

    const [allJobPosts, setallJobPosts] = useState([]);

    console.log('all job postssssssssss', allJobPosts)


    const [renderAllJobPosts, setRenderAllJobPosts] = useState('');

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

                    setRenderAllJobPosts(res.data);
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

                    setRenderAllJobPosts(res.data);
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

                    setRenderAllJobPosts(res.data);

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

                    setRenderAllJobPosts(res.data);

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

    const [viewJobPostDescription, setViewJobPostDescription] = useState('');


    const [viewJobPostModalIsOpen, setviewJobPostModalIsOpen] = useState(false);
    function openViewJobPostModal(e, viewJobPost) {
        e.preventDefault();
        setViewJobPostDescription(viewJobPost)
        setviewJobPostModalIsOpen(true)
    }
    function closeViewJobPostModal(e) {
        setviewJobPostModalIsOpen(false);

    }


    useEffect(() => {
        axios.get(`/api/all-job-post`).then(res => {
            if (res.data.status == 200) {
                setallJobPosts(res.data.posts);
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
                setallJobPosts(res.data.posts);
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
                        setRenderAllJobPosts(res.data)
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
                        <h5 className='ms-4 pt-3'>Role Management</h5>

                        <div className='container-fluid'>


                            <div className='mt-3 border  rounded-3  '>
                                <h6 style={{ color: "#00602B" }} className='ms-4 pt-3'>Availabe User</h6>
                                <div className='role-config'>

                                    <div className=''>
                                        <Button   style={{ color: "white", border: "1px solid #BDBDBD", background:"#236123 ", borderRadius: 7, fontSize: 12, margin: "0px 5px 0px 25px", }} variant="outlined" startIcon={<AdminPanelSettingsSharpIcon />}>
                                            Admin
                                        </Button>
                                        <Button className='female' style={{ color: "#828282", border: "1px solid #BDBDBD", borderRadius: 7, fontSize: 12, marginRight: 5, }} variant="outlined" startIcon={<AddModeratorSharpIcon />}>
                                            Moderator
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #BDBDBD ", borderRadius: 7, fontSize: 12, marginRight: 5, }} variant="outlined" startIcon={<PeopleAltSharpIcon />}>
                                            Alumni
                                        </Button>
                                        <Button style={{ color: "#828282", border: "1px solid #BDBDBD ", borderRadius: 7, fontSize: 12, }} variant="outlined" startIcon={<SupervisedUserCircleIcon />}>
                                            Stuff
                                        </Button>
                                    </div>


                                    <div data-aos="fade-left">
                                        <Button style={{ backgroundColor: "#00602B", color: "white", borderRadius: 7, fontSize: 12, marginRight: 10, padding: "8px" }} variant="contained" startIcon={<AddIcon />}>
                                            Create Role
                                        </Button>
                                    </div>


                                </div>
                            </div>

                            <div className='col-md-12 mt-3 bg-light'>
                                <div className='row'>
                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title ">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-3 mt-2'>
                                        <div class="card">
                                            <div className='card-header bg-white py-1'>
                                            <h6 class="card-title">Users</h6>

                                            </div>
                                            <div class="card-body">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        View All Users
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Create Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Update Users
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Delete Users
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-12 mt-3">
                                <h5 style={{ border: "1px solid #9D9D9D", borderRadius: 7, padding: "10px 10px", color: "#00602B"}}>Permission Sets</h5>
                            </div>
                            <div className='tab-sec-full'>
                                <div className='tab-nav1'>
                                    <ul class="nav justify-content-end" id='tab-nav-ul'>
                                        <li className="nav-item ancor-nav1" >
                                            <a class="nav-link " style={{ marginRight: 60 }} href="#">Alumni</a>
                                        </li>
                                        <li className="nav-item ancor-nav2">
                                            <a class="nav-link" style={{ marginRight: 60 }} href="#">Stuff</a>
                                        </li>
                                        <li className="nav-item ancor-nav3">
                                            <a class="nav-link" style={{ marginRight: 35 }} href="#">Admin</a>
                                        </li>
                                        <li className="nav-item ancor-nav4">
                                            <a class="nav-link" style={{ marginRight: -87 }} href="#">Moderators</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='tab-section'>
                                    <Box
                                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                                    >
                                        <Tabs
                                            className='tab-nested-routes'
                                            orientation="vertical"
                                            variant="scrollable"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="Vertical tabs example"
                                            sx={{ borderRight: 1, borderColor: 'divider' }}
                                        >
                                            <Tab label="User management" {...a11yProps(0)} />
                                            <Tab label="Notice mangement" {...a11yProps(1)} />
                                            <Tab label="Post management" {...a11yProps(2)} />
                                            <Tab label="Job management" {...a11yProps(3)} />
                                            <Tab label="Advertise mangement" {...a11yProps(4)} />
                                            <Tab label="Misc. management" {...a11yProps(5)} />
                                            <Tab label="Website management" {...a11yProps(6)} />
                                            <Tab label="Articles & Blogs" {...a11yProps(7)} />
                                            <Tab label="Vlog " {...a11yProps(8)} />
                                        </Tabs>

                                        <TabPanel value={value} index={0}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create user
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View users
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Approve users
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Role management
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>

                                        </TabPanel>



                                        <TabPanel value={value} index={1}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create user
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View users
                                                        </ol>

                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                            </div>
                                        </TabPanel>


                                        <TabPanel value={value} index={2}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create post
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View post
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Delete Post
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create categories
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create Job
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View post
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Delete Job
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Archive job
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create categoreis
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={4}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create adv
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View adv
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Delete adv
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Pause adv
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Configure adv
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={5}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Other mangement 1
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Other mangement 2
                                                        </ol>

                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>

                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={6}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Manage website
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>


                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>


                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>


                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>


                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={7}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create article/blogs
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Show articles & blogs
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Delete articles/blogs
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Configure articles/blogs
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={8}>
                                            <div class="row" >
                                                <div class="col-4">
                                                    <ul >
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Create vlog
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            View vlog
                                                        </ol>
                                                        <ol className='create-col' style={{ color: "#333333", fontWeight: 500, fontSize: 14 }}>
                                                            Delete vlog
                                                        </ol>
                                                    </ul>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                                <div class="col-2" >
                                                    <div class="form-check mb-5 mt-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div class="form-check mb-5">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Box>

                                </div>
                                <div className='tab-button '>
                                    <Button style={{ marginRight: 10 }} variant="outlined" color="success" data-aos="flip-up">
                                        Revert
                                    </Button>
                                    <Button variant="contained" color="success" data-aos="flip-up">
                                        Grant
                                    </Button>
                                </div>
                            </div>
 */}







                        </div>

                    </div>






                </div>
            </div>

        </>

    )

}

export default RoleManagement