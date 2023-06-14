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
import { CSVLink } from 'react-csv';
import JSZip from "jszip";
import { saveAs } from 'file-saver';


function ViewAllUsers() {


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
    const [loading, setLoading] = useState(true);

    // const [allUserPosts, setallUserPosts] = useState([]);

    // console.log('all users', allUserPosts)

    const [allrole, setallrole] = useState([]);
    // console.log('all roles', allrole)


    useEffect(() => {
        axios.get(`/api/role-name`).then(res => {
            if (res.data.status == 200) {
                setallrole(res.data.role);
            }
        })
    }, [])






    ////multiple filter search functionality start 




    const [addMultipleFilterModalIsOpen, setaddMultipleFilterModalIsOpen] = useState(false);
    function openAddMultipleFilterModal(e) {
        e.preventDefault();
        setaddMultipleFilterModalIsOpen(true)
    }
    function closeAddMultipleFilterModal(e) {
        setaddMultipleFilterModalIsOpen(false);

    }



    //// multiple filter search modal functionality end

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





    // role change popover


    const [userRoleChangeInfo, setUserRoleChangeInfo] = useState({
        role_name: "",
        user_id: ""
    });

    const handleUserRoleChangeInfo = (e, row) => {
        setUserRoleChangeInfo({
            role_name: e.target.name,
            user_id: row.id
        })
    }


    const [passwordState, setPasswordState] = useState('');
    const [re_typepasswordState, setRe_typepasswordState] = useState('');
    console.log('changing check', userRoleChangeInfo);
    console.log('password check', passwordState, re_typepasswordState);

    // console.log('user_id_check',localStorage.getItem('user_id'));

    const handleSubmitRoleChange = () => {
        const roleChangeData = {
            user_id: localStorage.getItem('user_id'),
            password: passwordState,
            confirm_password: re_typepasswordState,
            change_user_id: userRoleChangeInfo.user_id,
            change_role_name: userRoleChangeInfo.role_name
        }

        axios.post(`/api/role-change-request`, roleChangeData).then(res => {
            if (res.data.status === 200) {
                Swal.fire(res.data.message, '', 'success')
                setrenderAllUsers(res.data)
                // document.getElementById('modal').modal('close');

                window.location.reload();

            }
            else if (res.data.status === 401) {
                Swal.fire(res.data.message, '', 'error')

            }
        });
    }
    const columns = [
        // {
        //     title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

        //     width: "40 !important"
        // },

        {
            title: "ALL", field: `image`, render: (row) =>
                <div className="dropdown dropend" >
                    <button class="btn btn-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className={`border border-2 ${row.roles[0].name == 'Admin' ? 'border-success' : row.roles[0].name == 'Moderator' ? 'border-info' : row.roles[0].name == 'Alumni' ? 'border-primary' : row.roles[0].name == 'Staff' ? 'border-warning' : ''}`} style={{ borderRadius: "100px" }} src={`${global.img_url}/images/${row.image}`} width="55px" height="55px" alt="No Image" />

                    </button>



                    <ul class="dropdown-menu ms-1" aria-labelledby="dropdownMenuButton1">
                        <a class={`dropdown-item ${row.roles !== undefined && row.roles[0].name == 'Admin' ? "active" : ""}`} href="#" data-bs-toggle="modal" data-bs-target={`#exampleModal${row.roles !== undefined && row.roles[0].name}`} name="Admin" onClick={(e) => handleUserRoleChangeInfo(e, row)}>Admin</a>
                        <a class={`dropdown-item ${row.roles !== undefined && row.roles[0].name == 'Alumni' ? "active" : ""}`} href="#" data-bs-toggle="modal" name="Alumni" data-bs-target={`#exampleModal${row.roles !== undefined && row.roles[0].name}`} onClick={(e) => handleUserRoleChangeInfo(e, row)}>Alumni</a>
                        <a class={`dropdown-item ${row.roles !== undefined && row.roles[0].name == 'Moderator' ? "active" : ""}`} href="#" data-bs-toggle="modal" name="Moderator" data-bs-target={`#exampleModal${row.roles !== undefined && row.roles[0].name}`} onClick={(e) => handleUserRoleChangeInfo(e, row)}>Moderator</a>
                        {/* <div class="dropdown-divider"></div> */}
                        <a class={`dropdown-item ${row.roles !== undefined && row.roles[0].name == 'Staff' ? "active" : ""}`} href="#" name="Staff" data-bs-toggle="modal" data-bs-target={`#exampleModal${row.roles !== undefined && row.roles[0].name}`} onClick={(e) => handleUserRoleChangeInfo(e, row)}>Staff</a>




                    </ul>


                    <div class="modal fade" id={`exampleModal${row.roles[0].name}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header py-2">
                                    <h5 class="modal-title text-danger py-0" id="exampleModalLabel">Warning !</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-1">
                                            <label for="" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="" value={passwordState} onChange={(e) => setPasswordState(e.target.value)} placeholder="" />
                                        </div>
                                        <div class="mb-1">
                                            <label for="" class="form-label">Confirm Password</label>
                                            <input type="password" class="form-control" id="" value={re_typepasswordState} onChange={(e) => setRe_typepasswordState(e.target.value)} placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer py-0">
                                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                    <button type="button" class="btn btn-success btn-sm" onClick={handleSubmitRoleChange}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
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

                <div className='title-field d-flex justify-content-between align-items-center p-1 my-1' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <h5 className='my-1 ' style={{ fontSize: 18 }}>
                            {row.full_name}
                        </h5>

                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.phone_no}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.email}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.blood_group == null ? '' : row.blood_group.blood_group_name}</span>
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

                <div className='educational-field d-flex justify-content-between p-1 my-1 align-items-center' style={{ borderRight: "1px solid gray" }}>
                    <div>
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].company_name.company_name}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].designation}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].office_address}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className='text-secondary'>Other Information</span>
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

                <div className='contact-field d-flex justify-content-between p-1 my-1 align-items-center' style={{ borderRight: "1px solid gray" }}>
                    <div style={{ textAlign: "justify" }}>
                        <div className=' bg-white d-inline-block rounded '>
                            <span className=' text-secondary'>BSC </span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className=' text-secondary'>{row.educational_info.bsc_institution}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className=' text-secondary'>{row.professional_info[0] !== undefined && row.professional_info[0].office_address}</span>
                        </div><br />
                        <div className=' bg-white d-inline-block rounded '>
                            <span className=' text-secondary'> {row.educational_info.bsc_passing_year}</span>
                        </div>
                    </div>

                    <div className='text-bottom '>
                        <h3 className="title-text-h px-2">Contact </h3>
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
                        <a href={row.facebook_link} style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}><i class="fa-brands fa-facebook-f"></i></div> </a>
                        <a href={`/${row.linkedin_link}`} style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ marginBottom: 5, padding: "0px 60px 0px 0px" }}> <i class="fa-brands fa-linkedin-in"></i></div> </a>
                        <a href={`mailto:${row.facebook_link}`} class="fw-bold" style={{ textDecoration: "none", color: 'black' }} target="_blank"> <div style={{ padding: "0px 60px 0px 0px" }}><i class="fa-regular fa-envelope"></i></div> </a>
                    </div>
                    <div className='text-secondary d-flex'>



                        <div style={{ marginLeft: 20 }} onClick={(e) => {
                            openViewUserProfileModal(e, row)
                        }
                        }>
                            <i className='fa fa-eye mx-1 '  >
                            </i>
                            <Link to={`/edit-user/${row.id}`} className="text-dark">
                                <i className='fa fa-edit mx-2 '  >
                                </i>
                            </Link>


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








    const [renderAllUsers, setrenderAllUsers] = useState('');



    const [userRoleFiltering, setuserRoleFiltering] = useState('All');

    const [userRoleFilter, setUserRoleFilter] = useState('All');
    console.log('user rolee', userRoleFilter)

    // console.log('filtered post val',allJobPosts)
    console.log('filter click check', userRoleFiltering)


    useEffect(() => {
        axios.get(`/api/user-role-filtering/${userRoleFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallUsers(res.data.all_users);
                setLoading(false);
            }
        })

    }, [userRoleFiltering, renderAllUsers])

    //excel export users
    const [allExcelUsers, setAllExcelUsers] = useState([]);

    console.log('du', allExcelUsers)

    useEffect(() => {
        axios.get(`/api/export-users-as-excel/${userRoleFiltering}`).then(res => {
            if (res.data.status == 200) {
                setAllExcelUsers(res.data.all_users);
            }
        })

    }, [userRoleFiltering])






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
                        // setRenderAllUserPosts(res.data)
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
    console.log('gender name', gender_name)
    const [stream_name, setstream_name] = useState(null);
    const [thana_name, setthana_name] = useState(null);
    const [job_sector_name, setjob_sector_name] = useState(null);
    const [job_sub_sector_name, setjob_sub_sector_name] = useState(null);

    const [allBloodGroupName, setAllBloodGroupName] = useState([]);
    const [allCompanyName, setAllCompanyName] = useState([]);
    const [allCompanyNameSort, setAllCompanyNameSort] = useState([]);
    const [allBatchName, setAllBatchName] = useState([]);
    const [allGenderName, setAllGenderName] = useState([]);
    const [allStreamName, setAllStreamName] = useState([]);

    const [allJobSectorAsc, setAllJobSectorAsc] = useState([]);
    const [allJobSubSectorAsc, setAllJobSubSectorAsc] = useState([]);
    const [allThana, setAllThana] = useState([]);


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
                setAllCompanyNameSort(res.data.company_name_asc);
            }
        })
        axios.get(`/api/stream-name`).then(res => {
            if (res.data.status == 200) {
                setAllStreamName(res.data.stream_name);

            }
        })

        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSectorAsc(res.data.job_sector_asc);

            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSectorAsc(res.data.job_sub_sector_asc);

            }
        })
        axios.get(`/api/all-thana`).then(res => {
            if (res.data.status == 200) {
                setAllThana(res.data.all_thana);

            }
        })
    }, [])


    useEffect(() => {
        if (batch_name !== null || company_name !== null || blood_group_name !== null || stream_name !== null || gender_name !== null || job_sector_name !== null || job_sub_sector_name !== null || thana_name !== null) {
            axios.get(`/api/multiple-filter-search-all-users/${gender_name}/${stream_name}/${blood_group_name}/${company_name}/${batch_name}/${job_sector_name}/${job_sub_sector_name}/${thana_name}}`).then(res => {
                if (res.data.status == 200) {

                    console.log('ccc', res.data)
                    setallUsers(res.data.all_users)
                    setLoading(false);
                }
            })
        }
        // else{
        //     axios.get(`/api/user-role-filtering/${userRoleFiltering}`).then(res => {
        //         if (res.data.status == 200) {
        //             setallUsers(res.data.all_users);
        //             setLoading(false);
        //         }
        //     })
        // }


    }, [blood_group_name, company_name, batch_name, gender_name, stream_name, job_sector_name, job_sub_sector_name, thana_name])


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





    const [totalActivePending, setTotalActivePending] = useState({
        total_active: "",
        total_pending: ''
    });
    console.log('bal', totalActivePending)
    useEffect(() => {
        axios.get(`/api/total-pending-or-active-users`).then(res => {
            if (res.data.status == 200) {
                setTotalActivePending({
                    total_active: res.data.active_users,
                    total_pending: res.data.pending_users
                })

            }
        })
    }, [])

    const [allUsersPdf, setAllUsersPdf] = useState([])

    console.log('pdfs', allUsersPdf)
    useEffect(() => {
        axios.get(`/api/get-all-users-pdf`).then(res => {
            if (res.data.status == 200) {
                setAllUsersPdf(res.data.pdfs)

            }
        })
    }, [])


    function saveZip() {

        //     axios.get(`/api/download-zip`).then(res => {
        //         const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
        // // const link = document.createElement("a");
        // // link.href = url;
        // // link.setAttribute("download", "fileName.zip");
        // // document.body.appendChild(link);
        // // link.click();
        //         // if (res.data.status == 200) {
        //         //     alert("downled zip");

        //         // }
        //     })

        axios({
            url: 'http://172.31.120.58/api/download-zip',
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }

    const [changeStatus, setChangeStatus] = useState();

    useEffect(() => {
        const data = {
            status: changeStatus
        }

        axios.post(`/api/change-user-status-active-or-pending/${selectedRowsIds}`, data).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                window.location.reload();

            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }, [changeStatus])

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
                                                                        allCompanyNameSort.map((item, i) => {
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


                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Job Sector</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sector_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allJobSectorAsc.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.job_sector_name}>{item.job_sector_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Job Sub Sector</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sector_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allJobSubSectorAsc.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.job_sub_sector_name}>{item.job_sub_sector_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div class="mb-3 row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label fs-6">Thana</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e) => setthana_name(e.target.value)}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allThana.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item}>{item}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>





                                            </Modal>

                                        </div>

                                    </div>


                                    <div className='d-flex ms-5'>
                                        <div className='pending mx-2' data-aos="zoom-out-left">
                                            <h6 className='my-0 px-1'>Pending</h6>
                                            <span className='num1'><h4
                                                className='num1-h4'
                                                style={{ color: "white", textAlign: "center", padding: "7px 12px 5px 12px", marginTop: 3, fontSize: 13 }}>{totalActivePending.total_pending}</h4></span>
                                        </div>
                                        <div className='active' data-aos="zoom-out-left">
                                            <h6 className='my-0 px-1'>Active</h6>
                                            <span className='num2'><h5 style={{ color: "white", textAlign: "center", padding: "7px 12px 5px 12px", marginTop: 3, fontSize: 13 }}>{totalActivePending.total_active}</h5></span>
                                        </div>
                                    </div>
                                </div>
                                <Container class="" >
                                    <div className='mx-5 px-5 mt-1 mb-3' data-aos="fade-up"
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
                                        {
                                            job_sector_name !== null && <Button onClick={() => setjob_sector_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<BusinessCenterIcon />} endIcon={<CloseIcon />}>
                                                {job_sector_name}
                                            </Button>
                                        }
                                        {
                                            job_sub_sector_name !== null && <Button onClick={() => setjob_sub_sector_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<BusinessCenterIcon />} endIcon={<CloseIcon />}>
                                                {job_sub_sector_name}
                                            </Button>
                                        }
                                        {
                                            thana_name !== null && <Button onClick={() => setthana_name(null)} style={{ color: "#828282", border: "1px solid #828282 ", borderRadius: 7, fontSize: 12, marginRight: 10 }} className="header-button" variant="outlined" startIcon={<LocationCityOutlinedIcon />} endIcon={<CloseIcon />}>
                                                {thana_name}
                                            </Button>
                                        }




                                    </div>
                                </Container>
                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Users</h5>

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className=' bg-white py-0 my-0'>

                                            <div className="d-flex justify-content-between py-0 my-0" style={{ cursor: 'pointer' }}>

                                                <div className='d-flex align-items-center text-secondary '>
                                                    <h6 className={`${userRoleFiltering === 'All' ? 'filterTrack' : ""} mx-2`} onClick={() => { setuserRoleFiltering('All') }}>All</h6>
                                                    <h6 className={`${userRoleFiltering === 'Alumni' ? 'filterTrack' : ""} mx-2`} onClick={() => { setuserRoleFiltering('Alumni') }}>Alumni</h6>
                                                    <h6 className={`${userRoleFiltering === 'Staff' ? 'filterTrack' : ""} mx-3`} onClick={() => { setuserRoleFiltering('Staff') }}>Staff</h6>
                                                    <h6 className={`${userRoleFiltering === 'Admin' ? 'filterTrack' : ""} mx-3`} onClick={() => { setuserRoleFiltering('Admin') }}>Admins</h6>
                                                    <h6 className={`${userRoleFiltering === 'Moderator' ? 'filterTrack' : ""} mx-3`} onClick={() => { setuserRoleFiltering('Moderator') }}>Moderators</h6>
                                                    <h6 className={`${userRoleFiltering === 'Pending' ? 'filterTrack' : ""} mx-3`} onClick={() => { setuserRoleFiltering('Pending') }}>Pendings</h6>
                                                </div>


                                                <div className='d-flex align-items-center'>
                                                    {/* {
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



                                                        </>
                                                    } */}



                                                </div>

                                                <div className='d-flex align-items-center  '>

                                                    <div class="mx-2">
                                                        <select className="form-select form-select-sm mb-3 rounded-pill " aria-label=".form-select-sm example" onChange={(e) => setChangeStatus(e.target.value)}>
                                                            <option selected disabled>Change status</option>
                                                            <option value="active">Active</option>
                                                            <option value="pending">Pending</option>
                                                        </select>
                                                    </div>

                                                    {
                                                        selectedRowsLength > 1 &&
                                                        <>


                                                            <div className='mx-2'
                                                                onClick={
                                                                    deleteAllRecords
                                                                }
                                                            >
                                                                <i class="fa-solid mb-1 fa-trash icon-table-trash"></i>
                                                            </div>




                                                        </>
                                                    }

                                                    <button type="button" style={{ color: "#646464", fontWeight: 400 }} class="btn btn-light dropdown-toggle mb-2" data-bs-toggle="dropdown">
                                                        Download
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#" onClick={saveZip}><i style={{ marginRight: 5 }} class="fa-regular fa-file-pdf"></i> Download CV as a PDF</a></li>
                                                        {
                                                            <CSVLink data={allExcelUsers} filename="RegisterUserData" className="" >
                                                                <li><a class="dropdown-item" ><i style={{ marginRight: 9 }} class="fa-regular fa-file-excel"></i>Download details as a excel</a></li>

                                                            </CSVLink>
                                                        }

                                                        {/* <li><a class="dropdown-item" href="#"><i style={{ marginRight: 9 }} class="fa-regular fa-file-word"></i>Download details as a docs</a></li> */}
                                                    </ul>

                                                </div>


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
                                                <div class="text-center mt-2 mb-3">
                                                    <a class="btn line-btn-dark btn-icon btn-radius border" download href={`${global.img_url}/cv/${viewUserDescription.cv_file}`} title="" ><i class="fa fa-download" download></i> <span className='modal-h6'>Download CV</span></a>
                                                </div>

                                                {/* <div className='select-down-div'>
                                                    <select className="form-select form-select-sm mb-3 select-down" aria-label=".form-select-sm example">
                                                        <option selected>Moderator</option>
                                                        <option value="1">Admin</option>
                                                        <option value="2">Alumni</option>
                                                        <option value="3">Stuff</option>
                                                    </select>
                                                </div> */}

                                            </div>

                                            <div className='mt-2' >
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
                                                                                    <th scope="row">{item.company_name.company_name}</th>
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


                                            <div className='mt-4'>
                                                <div className='d-flex align-items-center '>
                                                    <i class="fa fa-users mt-1"></i>
                                                    <h6 className='modal-h6  ms-2 mt-1 '>Social Information</h6>
                                                </div>
                                                <div>
                                                    <article className='modal-article'>
                                                        <span class="d-block my-2 fw-bold text-dark">Facebook: <a className='fw-normal mx-1' href={viewUserDescription.facebook_link} target="_blank">{viewUserDescription.facebook_link} </a></span>
                                                        <span class="d-block my-2 fw-bold text-dark">linkedin:  <a className='fw-normal mx-1' href={viewUserDescription.linkedin_link} target="_blank">{viewUserDescription.linkedin_link} </a></span>
                                                        <span class="d-block my-2 fw-bold text-dark">Twitter:  <a className='fw-normal mx-1' href={viewUserDescription.twitter_link} target="_blank">{viewUserDescription.twitter_link} </a></span>


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