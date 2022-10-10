import React, { useState, useEffect } from 'react';
import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MaterialTable from 'material-table';

import Modal from 'react-modal';



function PostType() {

    const [allPosts, setallPosts] = useState([]);

    const [renderAllPosts, setRenderAllPosts] = useState('');

    console.log('all posts check', allPosts)
    const [addPostType, setAddPostType] = useState({
        type_name: "",
        created_by: '',
        error_list: []

    })

    const handleInput = (e) => {
        setAddPostType({
            ...addPostType, [e.target.name]: e.target.value
        })


    }


    const handleSave = (e) => {
        e.preventDefault();
        axios.post(`/api/add-post-type`, addPostType).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllPosts(res.data);
                closeAddModal();
                setAddPostType({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddPostType({ ...addPostType, error_list: res.data.errors });
                Swal.fire(addPostType.error_list.type_namep[0], '', 'error')

            }
        })
    }

    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)

    const customStyles1 = {
        content: {
            // marginTop: '70px',
            top: '35vh',
            left: '35%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "35%",
            height: "280px",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };
    const [addModalIsOpen, setaddModalIsOpen] = useState(false);
    function openAddModal(e) {
        e.preventDefault();
        setaddModalIsOpen(true)
    }
    function closeAddModal(e) {
        setaddModalIsOpen(false);

    }


    useEffect(() => {
        axios.get(`/api/post-type`).then(res => {
            if (res.data.status == 200) {
                setallPosts(res.data.post_type);
            }
        })
        Modal.setAppElement('body');

    }, [renderAllPosts])


    const columns = [
        {
            title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

            width: "40 !important"
        },
        {
            title: "Post Type", field: `type_name`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "Action", field: "", render: (row) => <div className='d-flex'><Link to={`/edit-service-type/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deletePostType(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
        },
    ];


    const deletePostType = (e, id) => {
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
                axios.delete(`/api/delete-post-type/${id}`).then(res => {
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
                            <div className="row">

                                <div className='post-top-con mt-2'>
                                    <div class="card rounded-3 post-top-con-wrapper ">
                                        <div class="left-1 px-5 py-3 ">

                                            <div class="left-1-inner-con  d-flex  ">

                                                <div class="left-1-inner-con-search " style={{ width: '70%' }}>
                                                    <div className=' '>
                                                        <div class="input-group  ">
                                                            <span class="input-group-text bg-white" id="basic-addon1">
                                                                <i class="fa-solid fa-magnifying-glass text-dark"></i>
                                                            </span>

                                                            <input type="text" class="form-control bg-transparent py-2" aria-label="Username" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="mx-3">
                                                    <div class=" shadow-sm d-flex rounded-3  py-2 px-2 fw-bold  justify-content-center align-items-center border">

                                                        <i className='fa fa-plus '> </i>


                                                        <span className='mx-2'>  Category </span>





                                                    </div>

                                                </div>




                                            </div>

                                            <div className=' d-flex   align-items-center py-2 ' style={{ width: '70%' }}>
                                                <b>Search By</b>

                                                <div class="d-flex  justify-content-between align-items-center py-2 mx-5 " style={{ width: '70%' }}>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Post Id
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Post Title
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Post UserName
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="left-2 px-4 py-3  text-center rounded-end text-light">

                                            <div className='px-4'>

                                                <div className=''>
                                                    <h5 className='p-0 m-0'>1332</h5>
                                                    <p className='p-0 m-0'> Active Post</p>
                                                </div>

                                                <div className='mt-1'>
                                                    <h5 className='p-0 m-0'>489</h5>
                                                    <p className='p-0 m-0'> Pending Post</p>
                                                </div>

                                                <div className='mt-1'>
                                                    <h5 className='p-0 m-0'>10</h5>
                                                    <p className='p-0 m-0'>Categories</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-12 mt-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6 className="card-title">Post Type
                                                {/* <Link to='/add-service-type' className="btn btn-success btn-sm float-end"> Add Post Type</Link> */}
                                                <button className="btn btn-success btn-sm float-end" onClick={openAddModal}> Add Post Type</button>
                                            </h6>
                                        </div>
                                        <div className="card-body">

                                            <MaterialTable
                                                columns={columns}
                                                data={allPosts}
                                                options={{
                                                    search: true,
                                                    // filtering: filter,
                                                    showTitle: false,
                                                    searchFieldAlignment: "left",
                                                    pageSize: 5,
                                                    emptyRowsWhenPaging: false,
                                                    pageSizeOptions: [5, 10, 20, 50, 100],
                                                    isLoading: true

                                                }}

                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* add modal */}
                    <Modal
                        isOpen={addModalIsOpen}
                        onRequestClose={closeAddModal}
                        style={customStyles1}
                        contentLabel="Example Modal"
                    >

                        <div className='card-body '>
                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddModal}><i class="fa fa-times"></i></span>

                            <h5 className=""> Add Post Type</h5>
                            <hr />


                            <div className="row">

                                <div className="col-12">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text bg-light" id="basic-addon1">Post Type Name</span>
                                        <input type="text" class="form-control" aria-label="Type Name" aria-describedby="basic-addon1" value={addPostType.type_name} name="type_name" onChange={handleInput} />
                                    </div>

                                    <button className='btn btn-success btn-sm float-end rounded-3 px-3 mt-1' onClick={handleSave}>Save</button>





                                </div>



                            </div>
                        </div>

                    </Modal>
                </div>
            </div>

        </>

    )

}

export default PostType