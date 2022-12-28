import React, { useState, useEffect } from 'react';

import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
// import '../JobManagement.css'

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@mui/material';

function ViewNotification() {
    const [loading, setLoading] = useState(true);

    const [allJobPosts, setallJobPosts] = useState([]);
    const [totalActiveJobs, settotalActiveJobs] = useState([]);
    const [totalPendingJobs, settotalPendingJobs] = useState([]);

    console.log('totalActiveJobs', totalActiveJobs)


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
                settotalActiveJobs(res.data.total_active_jobs)
                settotalPendingJobs(res.data.pending_jobs)
                setLoading(false);

            }
        })
        Modal.setAppElement('body');

    }, [renderAllJobPosts])


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

                <div className='py-2 px-2' >


                    <div className='top-secc d-flex align-items-center'>

                        <div className=''>

                            <p> 21 Dec,2022 | <span> 8 Am</span></p>

                        </div>
                        <div className='mx-3 mb-3'>

                            <i class="fa-solid fa-signs-post"></i>
                            <span className='mx-2'>EMERGENCY</span>
                        </div>
                        <div className='mx-3  d-flex justify-content-center text-center align-items-center' style={{ width: '200px', height: "30px" }}>
                            <div className='px-2 bg-success p-2 text-white opacity-50 flex-grow-1 py-2' style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>

                                <span className=''> 200 Succecss</span>
                            </div>
                            <div className='px-2 bg-warning flex-grow-1 py-2' style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>

                                <span className=''>300 UnSuccess</span>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h6>Notification  Title</h6>
                    </div>

                    <div className='' style={{ color: '#777777' }}>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum hasLorem Ipsum ha  Lorem Ipsum hasLorem Ipsum ha Lorem Ipsum hasLorem Ipsum has Lorem Ipsum has been th</p>

                    </div>
                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                // textAlign: 'left',
                padding: 3,
            },
        },

        // {
        //     title: '  ', field: ``

        //     ,
        //     render: (row) =>

        //         <div className=''>
        //             <div class="tooops d-flex align-items-center justify-content-between">
        //                 <div className=''>
        //                     <div className='text-secondary'>
        //                         <span>
        //                             <i className="fa-solid fa-calendar-days"></i>
        //                             {/* <span className='mx-2'>{moment(row.application_deadline).format("L")}</span> */}
        //                             <span className='mx-2'>Deadline : {row.application_deadline}</span>
        //                         </span>
        //                     </div>

        //                 </div>
        //                 <div className='pt-1'>


        //                     <button className='btn  btn-sm  px-3 my-0 outline-0 ' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{row.type_name}</span> </button>
        //                     {
        //                         row.isPublished == 1 ?
        //                             <button className='btn  btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>Active</span> </button>
        //                             :
        //                             <button className='btn btn-danger btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>In active</span> </button>

        //                     }

        //                 </div>

        //             </div>

        //             <div>
        //                 <h5 className=''>
        //                     {row.job_title}
        //                 </h5>


        //                 <div className='text-secondary' dangerouslySetInnerHTML={{ __html: row.job_description.length > 50 ? `${row.job_description.substring(0, 50)}...` : row.job_description }} />


        //                 <div className=' bg-light d-inline-block rounded '>

        //                     <span className=' px-1 text-secondary'>{row.dept_name}</span>

        //                 </div>
        //             </div>




        //         </div>

        //     ,




        //     cellStyle: {
        //         // marginLeft: 50,
        //         // maxWidth: 300,
        //         // width: 600,
        //         // padding:0
        //     },
        // },




        // {
        //     title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>



        //         <div class="form-check form-switch mx-2  text-danger">
        //             {
        //                 row.isArchived == 0 &&
        //                 <form encType="multipart/form-data" method='POST' onChange={(e) => {

        //                     handlePostApproval(e, row)

        //                 }} >

        //                     <input class="form-check-input " style={{ cursor: 'pointer' }} type="checkbox" id="flexSwitchCheckDefault" checked={row.isPublished == 1}
        //                     />

        //                 </form>
        //             }

        //         </div>
        //         <div className='text-secondary'>
        //             <Link to={`/edit-jobs/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

        //         </div>


        //         <div className='mx-2 ' onClick={(e) => deleteJobPost(e, row.id)}>
        //             <i class="fa-solid fa-trash icon-table-trash" ></i>
        //         </div>

        //         <div className='mx-2' onClick={(e) => archiveJobPost(e, row)}>
        //             {
        //                 row.isArchived == 1 ? <i class="fa-solid fa-box-archive icon-table-archive text-danger"></i> :
        //                     <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>


        //             }



        //         </div>


        //         <div className='text-secondary'>

        //             <div onClick={(e) => {
        //                 openViewJobPostModal(e, row)
        //             }
        //             }>
        //                 <i className='fa fa-eye mx-2 '  >
        //                 </i>

        //             </div>

        //         </div>





        //     </div>



        //     ,


        //     cellStyle: {
        //         marginLeft: 50,
        //         textAlign: 'right'
        //     },
        // },
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


    const handleAllJobStatus = (e) => {

        if (e.target.value === 'archive') {
            axios.put(`/api/archive-all-job-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallJobPosts(res.data.posts)
                    setRenderAllJobPosts(res.data);

                }

            })
        }
        else if (e.target.value === 'active') {
            axios.put(`/api/active-all-job-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallJobPosts(res.data.posts)

                    setRenderAllJobPosts(res.data);

                }

            })
        }
        else if (e.target.value === 'pending') {
            axios.put(`/api/pending-all-job-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallJobPosts(res.data.posts)

                    setRenderAllJobPosts(res.data);

                }

            })
        }
        else {

        }
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

                        <div className='container-fluid' style={{ color: '#777777' }}>

                            <div className='button-create my-3 float-end'>
                                <Link to="/create-global-notification"> <button className='btn btn-success px-3'>+ Create</button> </Link>

                            </div>


                            <div className='d-flex  pt-5'>
                                
                                <div>
                                    <p className='fs-6'>For All</p>
                                </div>
                                <div className='mx-4'>
                                    <p className='fs-6'>For Alumni</p>
                                </div>
                                <div className='mx-4'>
                                    <p className='fs-6'>For Admin</p>
                                </div>
                                <div className='mx-4'>
                                    <p className='fs-6'>For Moderators</p>
                                </div>
                                <div className='mx-4'>
                                    <p className='fs-6'>For Staff</p>
                                </div>
                            </div>

                            {/* <hr className='my-0 py-0' /> */}




                        </div>

                        <div className='nottification-table-body mt-1 mx-3 card'>

                            <div className='card-header bg-white'>
                                <h6 className='' style={{ color: "#777777" }}>View All Global notification</h6>

                            </div>

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
                            //         Container: props => <Paper {...props} elevation={0}/>
                            //    }}
                            />

                        </div>

                    </div>








                </div>
            </div>

        </>

    )

}

export default ViewNotification