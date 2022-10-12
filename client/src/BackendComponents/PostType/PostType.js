import React, { useState, useEffect } from 'react';
import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';



function PostType() {

    const [allPosts, setallPosts] = useState([]);

    const [renderAllPosts, setRenderAllPosts] = useState('');

    // console.log('all posts check', allPosts)

    //add functionality for post category

    const [checkboxMapping, setcheckboxMapping] = useState({
        val: [],
    });



    const handleAddPostTypeChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { val } = checkboxMapping;


        console.log(`${value} is ${checked}`);

        // Case 1 : The user checks the box
        if (checked) {
            setcheckboxMapping({
                val: [...val, value],
            });
        }

        // Case 2  : The user unchecks the box
        else {
            setcheckboxMapping({
                val: val.filter((e) => e !== value),
            });
        }
    };

    //   console.log('uuuuuuu',checkboxMapping.val)










    const [addPostType, setAddPostType] = useState({
        type_name: "",
        created_by: '',
        error_list: []

    })

    console.log('checking error', addPostType.error_list.type_name)

    const handleInput = (e) => {
        setAddPostType({
            ...addPostType, [e.target.name]: e.target.value
        })


    }


    const handleSave = (e) => {
        e.preventDefault();
        const addpostCat = {
            type_name: addPostType.type_name,
            created_by: '',
            mapping_user: checkboxMapping.val
        }
        axios.post(`/api/add-post-type`, addpostCat).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllPosts(res.data);
                closeAddPostCategoryModal();
                setAddPostType({
                    type_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddPostType({ ...addPostType, error_list: res.data.errors });
                Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            }
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
    const [addPostCategoryModalIsOpen, setaddPostCategoryModalIsOpen] = useState(false);
    function openAddPostCategoryModal(e) {
        e.preventDefault();
        setaddPostCategoryModalIsOpen(true)
    }
    function closeAddPostCategoryModal(e) {
        setaddPostCategoryModalIsOpen(false);

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

                            <div className='post-top-con border rounded mt-2'>

                                <div class="post-top-con-left  p-4">

                                    <div className='mb-3 input-search mt-3'>
                                        <div class="input-group py-2">
                                            <input type="text" class="form-control inp shadow-sm" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                        <div class="search-by d-flex mt-3">

                                            <div className='fw-bold'>
                                                Search By
                                            </div>
                                            <div class="form-check mx-3">
                                                <input class="form-check-input " type="radio" name="flexRadioDefault" id="btn-1" />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    Post Id
                                                </label>
                                            </div>

                                            <div class="form-check mx-3">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="btn-2" />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    Post Title
                                                </label>
                                            </div>


                                            <div class="form-check mx-3">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="btn-3" />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    UserName
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='text-center  mt-4'>
                                        <div className='shadow-sm mx-3 border py-2 px-2  cat-btn mb-1 ' onClick={openAddPostCategoryModal}>
                                            <h6 className='mt-1' > + Category</h6>

                                        </div>
                                        <span className=''> View All Categories </span>
                                    </div>






                                </div>
                                <div class="post-top-con-right text-light rounded-end px-5 py-2">

                                    <div className=' mb-0'>

                                        <h5 className=' m-0'>1332</h5>
                                        <p className='mb-2'>Active Post</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>1332</h5>
                                        <p className='mb-2'>Active Post</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>1332</h5>
                                        <p className='mb-1'>Active Post</p>
                                    </div>



                                </div>



                            </div>

                            <div className="col-md-12 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="card-title">Post Type
                                            {/* <Link to='/add-service-type' className="btn btn-success btn-sm float-end"> Add Post Type</Link> */}
                                            {/* <button className="btn btn-success btn-sm float-end" onClick={openAddPostCategoryModal}> Add Post Type</button> */}
                                        </h6>
                                    </div>
                                    <div className="card-body">

                                        {/* <MaterialTable
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

                                            /> */}


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* add modal */}
                    <Modal
                        isOpen={addPostCategoryModalIsOpen}
                        onRequestClose={closeAddPostCategoryModal}
                        style={customStyles1}
                        contentLabel="Example Modal"
                    >

                        <div className='card-body '>
                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddPostCategoryModal}><i class="fa fa-times"></i></span>

                            <h5 className=""> Create Post Category</h5>
                            <hr />


                            <div className="row">

                                <div className="col-12">

                                    <div className='d-flex align-items-center'>
                                        <div class="mb-3" style={{ width: '60%' }}>
                                            <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>
                                            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addPostType.type_name} name="type_name" onChange={handleInput} />
                                        </div>

                                        <div>
                                        </div>


                                        <div style={{ width: '40%' }} className="mx-2 mt-1">
                                            <span className='text-danger'> {addPostType.error_list.type_name}</span>
                                        </div>
                                    </div>





                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label fs-6">Mapping</label>
                                        <div className='d-flex mt-2'>
                                            <div className=''>
                                                Mapping With
                                            </div>


                                            <div class="form-check mx-3">
                                                <input class="form-check-input" type="checkbox" value="administrator" id="flexCheckDefault" name="administrator" onChange={handleAddPostTypeChange}
                                                />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Administrator
                                                </label>
                                            </div>

                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="moderator" id="flexCheckDefault" name="moderator" onChange={handleAddPostTypeChange} />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Moderator
                                                </label>
                                            </div>

                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="alumni" id="flexCheckDefault" name="alumni" onChange={handleAddPostTypeChange} />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alumni
                                                </label>
                                            </div>

                                            <div class="form-check mx-2">
                                                <input class="form-check-input" type="checkbox" value="stuff" id="flexCheckDefault" name="stuff" onChange={handleAddPostTypeChange} />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Stuff
                                                </label>
                                            </div>





                                        </div>

                                    </div>


                                    <button className='btn btn-secondary btn-sm float-end me-5 rounded-3 px-5 py-2 mt-1' onClick={handleSave}>Save</button>





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