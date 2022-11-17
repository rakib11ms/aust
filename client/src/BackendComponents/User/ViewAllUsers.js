import React, { useState, useEffect } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import "./UserManagment.css";

import MaterialTable from "material-table";
import moment from 'moment';
// import { Paper } from '@material-ui/core';
import Paper from '@mui/material/Paper';


function ViewAllUsers() {
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
                <div>
                    <img className="" src={`${global.img_url}/images/${row.image}`} width="55px" height="35px" alt="No Image" />


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

                <div className=''>
                    <div class="tooops d-flex align-items-center justify-content-between">
                        <div className=''>
                            <div className='text-secondary'>
                                <span>
                                    <i className='fa fa-calendar'></i>
                                    <span className='mx-2'>{moment(row.application_deadline).format("L")}</span>
                                </span>
                            </div>

                        </div>
                        <div>


                            <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{row.type_name}</span> </button>
                            {
                                row.isPublished == 1 ?
                                    <button className='btn  btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>Active</span> </button>
                                    :
                                    <button className='btn btn-danger btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>InActive</span> </button>

                            }
                        </div>

                    </div>

                    <div>
                        <h5 className='my-1 '>
                            {row.job_title}
                        </h5>


                        <div className='text-secondary' dangerouslySetInnerHTML={{ __html: row.job_description.length > 50 ? `${row.job_description.substring(0, 50)}...` : row.job_description }} />


                        <div className=' bg-light d-inline-block rounded '>

                            <span className='py-1 px-1 text-secondary'>{row.dept_name}</span>

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




        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>



                <div class="form-check form-switch mx-2  text-danger">
                    <form encType="multipart/form-data" method='POST' onChange={(e) => {

                        handlePostApproval(e, row)

                    }} >
                        <input class="form-check-input " style={{ cursor: 'pointer' }} type="checkbox" id="flexSwitchCheckDefault" checked={row.isPublished == 1}
                        />
                    </form>

                </div>
                <div className='text-secondary'>
                    <Link to={`/edit-jobs/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

                </div>


                <div className='mx-2 ' onClick={(e) => deleteJobPost(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                </div>

                <div className='mx-2' onClick={(e) => archiveJobPost(e, row)}>
                    {
                        row.isArchived == 1 ? <i class="fa-solid fa-box-archive icon-table-archive text-danger"></i> :
                            row.isArchived == 0 ? <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                                : ''

                    }



                </div>


                <div className='text-secondary'>

                    <div onClick={(e) => {
                        openViewJobPostModal(e, row)
                    }
                    }>
                        <i className='fa fa-eye mx-2 '  >
                        </i>

                    </div>

                </div>





            </div>



            ,


            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
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

                        <div className='container-fluid'>


                            <div className='user-config mt-3 border  rounded-3'>
                                <div className='user-config1'>

                                <div className="input-icon input-group-sm p-5 ">
                                <input style={{ width: 400, height: 50, boxShadow: "0px 0px 2px 0px", marginLeft: "-40px" }} type="text" className="form-control bg-transparent input-control" aria-label="Username" aria-describedby="basic-addon1" />
                                <span className="input-group-text bg-transparent" id="icon">
                                    <SearchRoundedIcon />
                                </span>
                            </div>
                            <div className='pending'>
                                <h6 style={{paddingRight: 10}}>Pending</h6>
                                <span className='num1'><h3 style={{color: "white", textAlign: "center", padding: "5px 12px",marginTop: 3}}>20</h3></span>
                            </div>
                            <div className='active'>
                                <h6 style={{paddingRight: 10}}>Active</h6>
                                <span className='num2'><h3 style={{color: "white", textAlign: "center", padding: "5px 12px",marginTop: 3}}>1k</h3></span>
                            </div>
                            </div>
                                <div className='user-config2'>
                                    <div className='select-box'>
                                       <MaleRoundedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>Male</h6>
                                    </div>
                                    <div className='select-box'>
                                       <FemaleRoundedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>Female</h6>
                                    </div>
                                    <div className='select-box'>
                                       <LocationCityOutlinedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>Savar</h6>
                                    </div>
                                    <div className='select-box'>
                                       <WorkOutlineOutlinedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>Floor in Charge</h6>
                                    </div>
                                    <div className='select-box'>
                                       <BloodtypeOutlinedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>O Positive</h6>
                                    </div>
                                    <div className='select-box'>
                                       <TuneOutlinedIcon style={{marginRight: 5, color: "rgb(58, 58, 58)"}}/>
                                       <h6 style={{fontWeight: 400, color: "rgb(58, 58, 58)"}}>More</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Job Post</h5>

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${jobPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setjobPostFiltering('all')}>All</h6>
                                                <h6 className={`${jobPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(1)}>Active</h6>
                                                <h6 className={`${jobPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${jobPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setjobPostFiltering('archive')}>Archived</h6>

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
                                            data={allJobPosts}
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
                                isOpen={viewJobPostModalIsOpen}
                                onRequestClose={closeViewJobPostModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobPostModal}><i class="fa fa-times"></i></span>

                                    <h5 className=""> Full Job Post View</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 ">

                                            <div className=''>
                                                <div className='' style={{ width: '120px', height: '80px' }}>
                                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="rounded-3" src={`${global.img_url}/images/${viewJobPostDescription.image}`} />
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <div className='mt-3'>
                                                    <h5>{viewJobPostDescription.job_title}</h5>
                                                    <div>
                                                        <i class="fas fa-calendar"></i>
                                                        <span className='mx-2'>Application Deadline: {moment(viewJobPostDescription.application_deadline).format("L")}</span>
                                                    </div>

                                                    <div className='mt-2'>

                                                        <div className='bg-light d-inline px-2 py-1 rounded-pill me-4' >

                                                            {viewJobPostDescription.dept_name}
                                                        </div>
                                                    </div>





                                                </div>
                                                <div>
                                                    <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewJobPostDescription.type_name}</span> </button>

                                                    {
                                                        viewJobPostDescription.isPublished == 1 ?
                                                            <button className='btn  btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>Active</span> </button>
                                                            :
                                                            <button className='btn btn-danger btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>In active</span> </button>

                                                    }

                                                    {/* <button className='btn btn-success btn-sm py-1 px-3 ' style={{ borderRadius: "8px" }}>asdasdas</button>
                                                    <button className='btn btn-danger btn-sm py-1 px-3  mx-2' style={{ borderRadius: "8px" }}>asdasdas</button> */}
                                                </div>
                                            </div>

                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewJobPostDescription.job_description }}
                                            />











                                        </div>



                                    </div>
                                </div>

                            </Modal>

















                        </div>

                    </div>






                </div>
            </div>

        </>

    )

}

export default ViewAllUsers