import React, { useState, useEffect } from 'react';

import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import './notification.css'

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@mui/material';

function ViewNotification() {
    const [loading, setLoading] = useState(true);

    const [allGlobalNotification, setallGlobalNotification] = useState([]);

    console.log('all global notification', allGlobalNotification)
    const [totalActiveJobs, settotalActiveJobs] = useState([]);
    const [totalPendingJobs, settotalPendingJobs] = useState([]);

    console.log('totalActiveJobs', totalActiveJobs)


    const [renderAllGlobalNotification, setRenderAllGlobalNotification] = useState('');

    // console.log('all posts check', allGlobalNotification)

    //add functionality for post category





    const navigate = useNavigate();



    useEffect(() => {
        axios.get(`/api/all-global-notification`).then(res => {
            if (res.data.status == 200) {
                setallGlobalNotification(res.data.all_global);
                setLoading(false);

            }
        })
        // Modal.setAppElement('body');

    }, [])

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

                            <p> {moment(row.created_at).format('LL')} | <span> {moment(row.created_at).format('LT')} </span></p>

                        </div>
                        <div className='mx-3 mb-3'>

                            <i class="fa-solid fa-signs-post"></i>
                            <span className='mx-2'>{row.priority.toUpperCase()}</span>
                        </div>
                        <div className='mx-3  d-flex justify-content-center text-center align-items-center' style={{ width: '200px', height: "30px" }}>
                            <div className='px-2 bg-success p-2 text-white opacity-50 flex-grow-1 py-2' style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>

                                <span className=''> 10 Succecss</span>
                            </div>
                            <div className='px-2 bg-warning flex-grow-1 py-2' style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>

                                <span className=''>0 UnSuccess</span>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h6>{row.notification_title}</h6>
                    </div>

                    <div className='' style={{ color: '#777777' }}>

                        <p>

                            {
                                row.notification_body
                            }
                        </p>

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









    // const [jobPostFiltering, setjobPostFiltering] = useState('all');

    // // console.log('filtered post val',allGlobalNotification)
    // console.log('filter click check', jobPostFiltering)


    // useEffect(() => {
    //     axios.get(`/api/filter-job-post-status/${jobPostFiltering}`).then(res => {
    //         if (res.data.status == 200) {
    //             setallGlobalNotification(res.data.posts);
    //             setLoading(false);
    //         }
    //     })

    // }, [jobPostFiltering])




    // const deleteAllRecords = (e) => {

    //     e.preventDefault();

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.post(`/api/delete-multiple-job-posts/${selectedRowsIds}`).then(res => {
    //                 if (res.data.status === 200) {
    //                     setRenderAllGlobalNotification(res.data)
    //                     // window.location.reload();
    //                 }
    //             });
    //             Swal.fire(
    //                 'Deleted!',
    //                 'All Posts deleted successfully',
    //                 'success'
    //             )
    //         }
    //     })


    // }

    const [activeNav,setactiveNav]=useState('moderator')

    useEffect(()=>{
        axios.get(`/api/filtering-global-notification/${activeNav}`).then(res => {
            if (res.data.status == 200) {
                setallGlobalNotification(res.data.all_global);
                setLoading(false);

            }
        })
    },[activeNav])



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

                                {/* <div>
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
                                </div> */}

                                <div className='text-success'>
                                    <h5>All Global Notification </h5>
                                </div>
                            </div>

                            {/* <hr className='my-0 py-0' /> */}




                        </div>

                        <div className='nottification-table-body mt-1 mx-3 card'>

                            <div className='card-header bg-white py-0'>
                                {/* <h6 className='' style={{ color: "#777777" }}>View All Global notification</h6> */}
                                <div className='d-flex mt-2  ' style={{color:"#777777",cursor:"pointer"}}>

                                    <div onClick={()=>setactiveNav('all')}>
                                        <p className={`fs-6 ${activeNav=='all'?'activeNavColor':""}`}>For All</p>
                                    </div>
                                    <div className='mx-4' onClick={()=>setactiveNav('alumni')}>
                                        <p className={`fs-6 ${activeNav=='alumni'?'activeNavColor':""}`}>For Alumni</p>
                                    </div>
                                    <div className='mx-4' onClick={()=>setactiveNav('admin')}>
                                        <p className= {`fs-6 ${activeNav=='admin'?'activeNavColor':""}`}>For Admin</p>
                                    </div>
                                    <div className='mx-4' onClick={()=>setactiveNav('moderator')}>
                                        <p className= {`fs-6 ${activeNav=='moderator'?'activeNavColor':""}`}>For Moderators</p>
                                    </div>
                                    <div className='mx-4' onClick={()=>setactiveNav('staff')}>
                                        <p className= {`fs-6 ${activeNav=='staff'?'activeNavColor':""}`}>For Staff</p>
                                    </div>
                                </div>

                            </div>

                            <MaterialTable

                                columns={columns}
                                data={allGlobalNotification}
                                isLoading={loading === true ? true : false}
                                // onSelectionChange={(selectedRows)=>console.log('selected rows',selectedRows)}


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