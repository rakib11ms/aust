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
// import { Paper } from '@material-ui/core';
import Paper from '@mui/material/Paper';
function ViewOrganization() {
    const [loading, setLoading] = useState(true);

    const [allOrganization, setallOrganization] = useState([]);

    console.log("L1", allOrganization)

    useEffect(() => {
        axios.get(`/api/organization-setup`).then(res => {
            if (res.data.status == 200) {
                setallOrganization(res.data.organization);
                setLoading(false);

            }
        })
        Modal.setAppElement('body');

    }, [])




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
















    const deletePost = (e, id) => {

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
                axios.post(`/api/delete-organization-setup/${id}`).then(res => {
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
                    <img className="rounded" src={`${global.img_url}/images/${row.image}`} width="100px" height="65px" objectFit="cover" alt="No Image" />


                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                // textAlign: 'left',
                padding: 0,
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
                                    <i className="fa-solid fa-calendar-days"></i>
                                    {/* <span className='mx-2'>{moment(row.application_deadline).format("L")}</span> */}
                                    <span className='mx-2'>Est Date : {row.est_date}</span>
                                    <span className='mx-2'>Founder : {row.organization_name}</span>
                                    <span className='mx-2'>Chairman : {row.organization_name}</span>
                                </span>
                            </div>

                        </div>
                        <div className='pt-1'>



                            <button className='btn  btn-sm py-1  px-3 my-0 mx-1' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{row.district}</span> </button>

                            <button className='btn btn-info btn-sm py-1  px-3 my-0 mx-1' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{row.thana}</span> </button>

                            <button className='btn btn-warning btn-sm py-1  px-3 my-0 mx-1' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{row.post_code}</span> </button>



                        </div>

                    </div>

                    <div>
                        <span className='mx-2'>Address: {row.organization_address}</span>




                        <div className=' bg-light d-inline-block rounded '>

                            <span className=' px-1 text-secondary'>{row.organization_address}</span>

                        </div>
                    </div>




                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600,
                // padding:0
            },
        },




        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>





                <div className='mx-2  '>
                    <Link to={`/edit-organization/${row.id}`}>
                    <i className='fa fa-edit text-secondary fs-5'></i>

                    </Link>
                </div>
                <div className='mx-2 ' onClick={(e) => deletePost(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
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

                            <div className="col-md-12 mt-3">
                                <div className='d-flex justify-content-between my-2'>
                                <h5 className=''>View Organization</h5>
                                <Link to="/create-organization">
                                <button className='btn btn-success'>Create</button>

                                </Link>
                                </div>
                         

                                <div className="card bg-white">

                                    <div className="card-body ">


                                        <MaterialTable

                                            columns={columns}
                                            data={allOrganization}
                                            isLoading={loading === true ? true : false}
                                            // onSelectionChange={(selectedRows)=>console.log('selected rows',selectedRows)}
                                            onSelectionChange=""


                                            options={{
                                                search: true,
                                                // filtering: true,
                                                toolbar: false,
                                                showTitle: false,
                                                searchFieldAlignment: "left",
                                                pageSize: 5,
                                                emptyRowsWhenPaging: false,
                                                pageSizeOptions: [5, 10, 20, 50, 100],
                                                // selection: true,
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





                            {/* view jobpost category modal */}
                            <Modal
                                isOpen={viewJobPostModalIsOpen}
                                onRequestClose={closeViewJobPostModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobPostModal}><i class="fa fa-times"></i></span>

                                    <h5 className=""> View Job</h5>
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
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                        <span className='mx-2'>Application Deadline: {viewJobPostDescription.application_deadline}</span>
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
export default ViewOrganization