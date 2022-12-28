import React, { useState, useEffect } from 'react';
import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';


function PostType() {



    const [loading, setLoading] = useState(true);

    const [allPosts, setallPosts] = useState([]);
    console.log('allll postsss', allPosts)

    const [totalPosts, setTotalPosts] = useState('');
    const [activePosts, setActivePosts] = useState('');
    const [pendingPosts, setPendingPosts] = useState('');
    const [renderAllPosts, setRenderAllPosts] = useState('');




    //add functionality for post category

    const [checkboxMapping, setcheckboxMapping] = useState({
        val: [],
    });


    const [postCheckboxMapping, setPostCheckboxMapping] = useState({
        val: [],
    });



    const handleAddPostTypeChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { val } = checkboxMapping;


        // console.log(`${value} is ${checked}`);

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

    const [checkboxStatus, setCheckBoxStatus] = useState(false)





    ////handle post approval




    const handlePostApproval = (e, id) => {
        console.log('update', id)

        if (e.target.checked === true) {
            const formData = new FormData();

            formData.append('isPublished', 1);
            formData.append('isArchived', id.isArchived);
            // formData.append('_method', 'PUT');

            formData.append('post_title', id.post_title);
            formData.append('post_type', id.post_type);
            formData.append('post_description', id.post_description);
            formData.append('posted_by', id.posted_by);
            formData.append('date', id.date);
            formData.append('image', id.image);
            formData.append('tag', id.tag);

            axios.post(`/api/update-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllPosts(res.data);
                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                else if (res.data.status == 400) {
                    setAddPostType({ ...addPostType, error_list: res.data.errors });
                    Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                }
            })
        }
        if (e.target.checked === false) {
            const formData = new FormData();

            formData.append('isPublished', 0);
            // formData.append('_method', 'PUT');

            formData.append('post_title', id.post_title);
            formData.append('post_type', id.post_type);
            formData.append('post_description', id.post_description);
            formData.append('posted_by', id.posted_by);
            formData.append('date', id.date);
            formData.append('image', id.image);
            formData.append('tag', id.tag);
            formData.append('isArchived', id.isArchived);

            axios.post(`/api/update-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllPosts(res.data);

                    // setIdChange('');

                    // closeAddPostCategoryModal();
                    // setAddPostType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                else if (res.data.status == 400) {
                    setAddPostType({ ...addPostType, error_list: res.data.errors });
                    Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                }
            })
        }




    }


    const archivePost = (e, id) => {

        if (id.isArchived == 0) {
            // console.log('acrhived holom 0 ',id)

            const formData = new FormData();

            formData.append('isPublished', 0);
            formData.append('isArchived', 1);
            // formData.append('_method', 'PUT');


            formData.append('post_title', id.post_title);
            formData.append('post_type', id.post_type);
            formData.append('post_description', id.post_description);
            formData.append('posted_by', id.posted_by);
            formData.append('date', id.date);
            formData.append('image', id.image);
            formData.append('tag', id.tag);

            axios.post(`/api/update-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllPosts(res.data);

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
            // console.log('acrhived holom 1 ',id)

            const formData = new FormData();

            formData.append('isPublished', 1);
            formData.append('isArchived', 0);
            formData.append('post_title', id.post_title);
            formData.append('post_type', id.post_type);
            formData.append('post_description', id.post_description);
            formData.append('posted_by', id.posted_by);
            formData.append('date', id.date);
            formData.append('image', id.image);
            formData.append('tag', id.tag);


            axios.post(`/api/update-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllPosts(res.data);

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
                axios.post(`/api/delete-post/${id}`).then(res => {
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








    ////modal functionality start 



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
    const viewPostStyles = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "60vw",
            height: "70vh",
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

    const [addPostModalIsOpen, setaddPostModalIsOpen] = useState(false);

    function openAddPostModal(e) {
        e.preventDefault();
        setaddPostModalIsOpen(true)
    }
    function closeAddPostModal(e) {
        setaddPostModalIsOpen(false);

    }


    ////modal functionality end


    useEffect(() => {
        axios.get(`/api/all-posts`).then(res => {
            if (res.data.status == 200) {
                setallPosts(res.data.posts);
                setTotalPosts(res.data.total_posts)
                setActivePosts(res.data.total_active_posts)
                setPendingPosts(res.data.total_pending_posts)
                setLoading(false);
            }
        })

        Modal.setAppElement('body');

    }, [renderAllPosts])



    const columns = [
        // {
        //     title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

        //     width: "40 !important"
        // },
        {
            title: 'ALL  ', field: ``

            ,
            render: (row) =>

                <div className=''>
                    <div class="tooops d-flex align-items-center justify-content-between">
                        <div className=''>
                            <div className='text-secondary'>
                                <span>
                                    <i className='fa fa-calendar'></i>
                                    <span className='mx-2'>{moment(row.created_at).format("YYYY-MM-DD")}</span>
                                </span>
                            </div>
                            <div className='d-flex align-items-center text-secondary'>
                                <h6 className='my-1'>Posted By:<span> {row.full_name}</span></h6>
                                {/* <i className='fa fa-eye mx-2'></i> */}
                            </div>
                        </div>
                        <div>


                            <button className='btn btn-warning  table-cat-btns btn-sm '> <span className='text-center'>{row.type_name}</span> </button>

                        </div>

                    </div>

                    <div>
                        <h5 className='my-1 '>
                            {row.post_title}
                        </h5>

                        <p className='text-secondary'>{row.post_description}</p>


                    </div>




                </div>

            ,




            cellStyle: {
                marginLeft: 50,
                maxWidth: 200
                // width: 400
            },
        },
        {
            title: "", field: `isPublished`, render: (row) =>
                <div>
                    {
                        row.isPublished == 1 && <button className='btn btn-success  btn-sm  px-4 btn-sm rounded-pill'> Approved</button>

                    }
                    {
                        row.isPublished == 0 && <button className='btn btn-danger btn-sm px-4  btn-sm rounded-pill'> Pending</button>

                    }
                    {/* {
                      row.isArchived == 1 && row.isPublished==0 &&  <button className='btn btn-danger btn-sm px-4  btn-sm rounded-pill'> Archived</button>
  
                    } */}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'right'
            },
        },



        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>
                {
                    row.isArchived !== 1 &&
                    <div class="form-check form-switch mx-2  text-danger">
                        <form encType="multipart/form-data" method='POST' >
                            <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault"
                                value={checkboxStatus}

                                checked={row.isPublished == 1 && true}

                                onChange={(e) => {

                                    handlePostApproval(e, row)

                                }} />
                        </form>

                    </div>

                }

                <div className='mx-2 mb-1' onClick={(e) => deletePost(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                </div>

                <div className='mx-2 mb-1' onClick={(e) => archivePost(e, row)}>



                    {
                        row.isArchived == 1 && <i class="fa-solid fa-box-archive icon-table-archive text-danger"></i>
                    }
                    {
                        row.isArchived == 0 && <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                    }
                </div>

                <div className='mx-2 mb-1 text-secondary' onClick={(e) => openViewPostModal(e, row)}>

                    <i className='fa fa-eye'></i>
                </div>
                {/* view  post modal */}
                <Modal
                    isOpen={viewPostModalIsOpen}
                    onRequestClose={closeViewPostModal}
                    style={viewPostStyles}
                    contentLabel="Example Modal"
                >

                    <div className='card-body '>
                        <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewPostModal}><i class="fa fa-times"></i></span>

                        <h5 className=""> Full Post View</h5>
                        <hr />



                        <div className="row">

                            <div className="col-12 ">

                                <div className=''>
                                    <div className='mx-auto' style={{ width: '50%', height: '150px' }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="rounded-3" src={`${global.img_url}/images/${viewPostDescription.image}`} />
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between mt-2'>
                                    <div className='mt-3'>
                                        <h5>{viewPostDescription.post_title}</h5>
                                        <div>
                                            <i class="fas fa-calendar"></i>
                                            <span className='mx-2'>Posted Date: {moment(viewPostDescription.created_at).format('YYYY-MM-DD')}</span>
                                        </div>

                                        <div className='mt-2'>

                                            <div className=' d-inline py-1 rounded-pill me-4' >

                                                <span class="bg-white">Posted By : </span> <span className='bg-light'> {viewPostDescription.full_name}</span>
                                            </div>
                                        </div>





                                    </div>
                                    <div className='mt-3'>
                                        <button className='btn  bg-warning text-dark btn-sm py-1   px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewPostDescription.type_name}</span> </button>

                                        {
                                            viewPostDescription.isPublished == 1 ?
                                                <button className='btn  btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>Active</span> </button>
                                                :
                                                <button className='btn btn-danger btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>In active</span> </button>

                                        }

                                    </div>
                                </div>

                                <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewPostDescription.post_description }}
                                />











                            </div>



                        </div>
                    </div>

                </Modal>



            </div>,
            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
            },
        },
    ];



    //delete functionality start 

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




    const [postFiltering, setPostFiltering] = useState('all');


    // console.log('filtered post val',allPosts)
    console.log('filter click check', postFiltering)


    useEffect(() => {
        axios.get(`/api/filter-post/${postFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallPosts(res.data.posts);
                setLoading(false);
            }
        })

    }, [postFiltering])



    // searchPostByRadioButton functionality
    const [searchRadioButtonValue, setSearchRadioButtonValue] = useState('');
    const [searchInputValue, setSearchInputValue] = useState('');
    console.log('search input val', searchInputValue)
    console.log('radio button seracg ', searchRadioButtonValue)

    const searchPostByRadioButton = (e, searchBy) => {

        // e.preventDefault();
        console.log('seacrh by', searchBy)
        setSearchRadioButtonValue(searchBy)

    }

    useEffect(() => {

        axios.get(`/api/filter-post-by-search-input-radio/${searchInputValue}/${searchRadioButtonValue}`).then(res => {
            console.log('reesssssssssssss', res)
            if (res.data.status == 200) {
                setallPosts(res.data.posts);
                setLoading(false);
            }
        })
        // }
        console.log('useefefct run')

    }, [searchRadioButtonValue, searchInputValue])







    //selection tracking

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
                axios.post(`/api/delete-multiple-posts/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllPosts(res.data)
                        window.location.reload();
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


    const handleAllPostStatus = (e) => {

        if (e.target.value === 'archive') {
            axios.put(`/api/archive-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallPosts(res.data.posts)
                    setRenderAllPosts(res.data);

                }

            })
        }
        else if (e.target.value === 'active') {
            axios.put(`/api/active-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallPosts(res.data.posts)

                    setRenderAllPosts(res.data);

                }

            })
        }
        else if (e.target.value === 'pending') {
            axios.put(`/api/pending-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallPosts(res.data.posts)

                    setRenderAllPosts(res.data);

                }

            })
        }
        else {

        }
    }
    const [viewPostDescription, setViewPostDescription] = useState('');

    console.log('view post', viewPostDescription)

    const [viewPostModalIsOpen, setviewPostModalIsOpen] = useState(false);
    function openViewPostModal(e, viewPost) {
        e.preventDefault();
        setViewPostDescription(viewPost)
        setviewPostModalIsOpen(true)
    }
    function closeViewPostModal(e) {
        setviewPostModalIsOpen(false);

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
                                        <div class="input-group py-2" data-aos="fade-right">
                                            <input type="text" class="form-control inp shadow-sm" placeholder="Search.." value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                        <div class="search-by d-flex mt-3">

                                            <div className='fw-bold'>
                                                Search By
                                            </div>
                                            <div class="form-check mx-3">
                                                <input class="form-check-input " type="radio" name="flexRadioDefault" id="btn-1" onClick={(e) => {
                                                    searchPostByRadioButton(e, 'postType');
                                                    // setSearchRadioButtonValue('postTitle')

                                                }
                                                }
                                                />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    Post Type
                                                </label>
                                            </div>

                                            <div class="form-check mx-3">
                                                <input class="form-check-input " type="radio" name="flexRadioDefault" id="btn-1" onClick={(e) => {
                                                    searchPostByRadioButton(e, 'postTitle');
                                                    // setSearchRadioButtonValue('postTitle')

                                                }
                                                }
                                                />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    Post Title
                                                </label>
                                            </div>


                                            <div class="form-check mx-3">
                                                <input class="form-check-input " type="radio" name="flexRadioDefault" id="btn-1" onClick={(e) => {
                                                    searchPostByRadioButton(e, 'userName');
                                                    // setSearchRadioButtonValue('userName')

                                                }
                                                }
                                                />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    UserName
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='text-center  mt-4' data-aos="fade-right">
                                        <div className='shadow-sm mx-3 border py-2 px-2  cat-btn mb-1 ' onClick={openAddPostCategoryModal}>
                                            <h6 className='mt-1' > + Category</h6>

                                        </div>
                                        <Link to="/post-configuration" class="text-decoration-none"><span className=''> View All Categories </span> </Link>
                                    </div>






                                </div>
                                <div class="post-top-con-right text-light text-center rounded-end px-5 py-2" data-aos="flip-right">

                                    <div className=' mb-0'>

                                        <h5 className=' m-0'>{totalPosts}</h5>
                                        <p className='mb-2'>Total Posts</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>{activePosts}</h5>
                                        <p className='mb-2'>Active Posts</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>{pendingPosts}</h5>
                                        <p className='mb-1'>Pending Posts</p>
                                    </div>



                                </div>



                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Post</h5>

                                <div className="card bg-white">


                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${postFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(1)}>Active</h6>
                                                <h6 className={`${postFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${postFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('archive')}>Archived</h6>

                                            </div>

                                            <div className='d-flex align-items-center'>



                                                {
                                                    selectedRowsLength > 1 &&
                                                    <>


                                                        <div className='mx-2 '
                                                            onClick={
                                                                deleteAllRecords
                                                            }
                                                        >
                                                            <i class="fa-solid fa-trash icon-table-trash"></i>
                                                        </div>

                                                        <div className='mx-2'>
                                                            <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllPostStatus}>
                                                                <option selected>Action</option>
                                                                <option value="active">Active</option>
                                                                <option value="pending">Pending</option>
                                                                <option value="archive">Archive</option>
                                                            </select>
                                                        </div>



                                                    </>
                                                }


                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            columns={columns}
                                            data={allPosts}
                                            isLoading={loading === true ? true : false}
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
                        </div>

                    </div>



                    {/* view profile modal */}
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


                                    <button className='btn btn-success btn-sm float-end me-5 rounded-3 px-5 py-2 mt-1' onClick={handleSave}>Save</button>





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