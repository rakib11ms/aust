import React, { useState, useEffect } from 'react';


import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import './event.css'

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@material-ui/core';



function ViewAllEvent() {
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
                    <img className="rounded" src="data:image/jpeg;base64,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" width="100px" height="70px" alt="No Image" />


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
                    <div className='d-flex justify-content-end'>


                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center py-2 ' style={{ cursor: 'pointer' }}>



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


                        </div>
                    </div>

                    <div class="tooops   " >
                        <div style={{color:'#777777'}}>
                            <i className='fa fa-calendar'></i>
                            <span className='mx-2'>Published Date : 22octover,2022</span>
                        </div>
                        <div class="d-flex mt-1" >
                            <div className='d-flex  px-2 d-inline-block py-1 event-btn1'>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>29 december,2022</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2  px-2 d-inline-block py-1 event-btn2'>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>29 december,2022</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2   px-2 d-inline-block py-1  event-btn3'>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>29 december,2022</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2   px-2 d-inline-block py-1 event-btn4'>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>29 december,2022</span>
                                </div>
                            </div>
                        </div>

                        <div className='mt-1'>
                            <h5>Title</h5>
                        </div>

                        <div className='mt-2' style={{color:'#777777'}}>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t
                            </span>
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

                            <section className='view-event-header d-flex align-items-center justify-content-end rounded-3 mt-3'>
                                <div class="col-5">
                                    <div class="view-event-header-form  px-3 ">
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow-sm" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="view-event-header-data text-light px-3">
                                    <div class=" d-flex align-items-center">
                                        <div class="i mx-2 mt-2">
                                            <h4 className=' mb-0'>20 </h4>
                                            <p className=''>Job Types</p>
                                        </div>
                                        <div class=" mx-2 mt-2">
                                            <h4 className=' mb-0'>20 </h4>
                                            <p className=''>Departments</p>
                                        </div>
                                        <div class="mx-2 mt-2">
                                            <h4 className=' mb-0'>20 </h4>
                                            <p className=''>Departments</p>
                                        </div>


                                    </div>
                                </div>


                            </section>




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
                                                <div className='mx-2'>


                                                    <button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}><span>+ </span>Create</button>

                                                </div>


                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            //        components={{
                                            //         Container: props => <Paper {...props} />
                                            //    }}
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

export default ViewAllEvent