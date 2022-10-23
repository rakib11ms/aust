import React, { useState, useEffect } from 'react';

import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import '../JobManagement.css'

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@material-ui/core';



function ViewAllJob() {
    const [loading, setLoading] = useState(true);

    const [allJobPosts, setallJobPosts] = useState([]);

    console.log('all job postssssssssss', allJobPosts)


    const [renderAllJobPosts, setRenderAllJobPosts] = useState('');

    // console.log('all posts check', allJobPosts)

    //add functionality for post category






    const formData = new FormData();

    const handlePostApproval = (e, id) => {
        const IsApprovedValue = e.target.checked === true ? 1 : 0;
        // formData.append('_method', 'POST');

        // formData.append('isPublished', IsApprovedValue);
        // formData.append('post_title', specificPostData.post_title);
        // formData.append('post_type', specificPostData.post_type);
        // formData.append('post_description', specificPostData.post_description);
        // formData.append('posted_by', specificPostData.posted_by);
        // formData.append('date', specificPostData.date);
        // formData.append('image', specificPostData.image);
        // formData.append('tag', specificPostData.tag);

        // const updateApprovedVal = {
        //     isPublished: IsApprovedValue,
        //     post_title:specificPostData.post_title,
        //     post_type:specificPostData.post_type,
        //     post_description:specificPostData.post_description,
        //     posted_by:specificPostData.posted_by,
        //     image:specificPostData.image,
        //     date:specificPostData.date,
        //     tag:specificPostData.tag
        // }

        // console.log('updated approval data',formData)
        axios.post(`/api/update-post/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },

        }).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllJobPosts(res.data);
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
    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)

    const customStyles1 = {
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
    const customStyles2 = {
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
            height: "70vh",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };




    useEffect(() => {
        axios.get(`/api/all-job-post`).then(res => {
            if (res.data.status == 200) {
                setallJobPosts(res.data.posts);
                setLoading(false);
            }
        })
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
                width:10,
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
                                    <span className='mx-1'>{moment(row.created_at).format("MMM Do YY")}</span>
                                </span>
                            </div>
                        
                        </div>
                        <div>


                        <button className='btn btn-success btn-sm py-1 rounded-3 px-3 my-0 outline-0'> <span className='text-center'>Help Post</span> </button>
                        <button className='btn btn-success btn-sm py-1 rounded-3 px-3 my-0 mx-3'> <span className='text-center'>Help Post</span> </button>

                        </div>

                    </div>

                    <div>
                        <h5 className='my-1 '>
                            {row.job_title}
                        </h5>


                        <div className='text-secondary' dangerouslySetInnerHTML={{ __html: row.job_description }} />
                        {/* </p> */}

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




        // {
        //     title: "Action", field: "", render: (row) => <div className='d-flex'><Link to={`/edit-service-type/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
        //         <button onClick={(e) => deletePostType(e, row.id)} className="btn btn-danger btn-sm action-btn mx-4"> <i class="fas fa-trash"></i> </button></div>
        // },

        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{cursor:'pointer'}}>

            

                <div class="form-check form-switch mx-2  text-danger">
                    <form encType="multipart/form-data" method='POST' onChange={(e) => {

                        handlePostApproval(e, row.id)

                    }} >
                        <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault" defaultChecked={row.isPublished == 1}
                        />
                    </form>

                </div>
                <div className='text-secondary'>
                <Link to={`/edit-jobs/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

                </div>

         
                <div className='mx-2 ' onClick={(e) => deleteJobPost(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                </div>

                <div className='mx-2'>


                    <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                </div>
                <div className='text-secondary'>
                <i className='fa fa-eye mx-2 '></i>

                </div>



            </div>,
            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
            },
        },
    ];








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
                axios.post(`/api/delete-all-posts/`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllJobPosts(res.data)
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

    const [postFiltering, setPostFiltering] = useState('all');

    // console.log('filtered post val',allJobPosts)
    console.log('filter click check', postFiltering)


    // useEffect(()=>{
    //     axios.get(`/api/filter-post/${postFiltering}`).then(res => {
    //         if (res.data.status == 200) {
    //             setallJobPosts(res.data.posts);
    //             setLoading(false);
    //         }
    //     })

    // },[postFiltering])



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

                            <div className='   job-config mt-3 border  rounded-3'>

                                <div class="job-config-header text-light rounded-top ">
                                    <div class="inside ">
                                        <div class="item1">
                                            <h2 className=' mb-0'>33</h2>
                                            <p className=''>Available</p>
                                        </div>
                                        <div class="item2">
                                            <h2 className=' mb-0'>2343</h2>
                                            <p className=''>Pendings</p>
                                        </div>
                                        {/* <div class="item2">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div> */}


                                    </div>
                                    <div class=" ">

                                        <Link to="/create-job-post" > <button type='button' className='btn border btn-sm text-light'> +  <span className='mx-1'> Create A job</span></button> </Link>

                                    </div>


                                </div>


                            </div>

                            <div className="col-md-12 mt-3">
                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${postFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(1)}>Active</h6>
                                                <h6 className={`${postFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${postFiltering === 'decline' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('decline')}>Archived</h6>

                                            </div>

                                            <div className='d-flex align-items-center'>

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
                        </div>

                    </div>






                </div>
            </div>

        </>

    )

}

export default ViewAllJob