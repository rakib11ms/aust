import React, { useState, useEffect } from 'react';
import '../../PostType/Post.css';

import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';


function ViewAllJob() {
    const [loading, setLoading] = useState(true);

    const [allPosts, setallPosts] = useState([]);

    const [specificPost, setSpecificPost] = useState('');
    const [specificPostData,setSpecificPostData]=useState([]);



    console.log('specificPostData', specificPostData)

    const [renderAllPosts, setRenderAllPosts] = useState('');

    // console.log('all posts check', allPosts)

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
    const formData = new FormData();

    const handlePostApproval = (e, id) => {
        setSpecificPost(id);
        const IsApprovedValue = e.target.checked === true ? 1 : 0;
        // formData.append('_method', 'POST');

       formData.append('isPublished',IsApprovedValue);
       formData.append('post_title',specificPostData.post_title);
       formData.append('post_type',specificPostData.post_type);
       formData.append('post_description',specificPostData.post_description);
       formData.append('posted_by',specificPostData.posted_by);
       formData.append('date',specificPostData.date);
       formData.append('image',specificPostData.image);
       formData.append('tag',specificPostData.tag);

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
        axios.post(`/api/update-post/${id}`, formData,    {
            headers: {
                'Content-Type': 'multipart/form-data',
            },

        }).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllPosts(res.data);
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




    useEffect(() => {
        axios.get(`/api/all-posts`).then(res => {
            if (res.data.status == 200) {
                setallPosts(res.data.posts);
                setLoading(false);
            }
        })
        axios.get(`/api/edit-post/${specificPost}`).then(res => {
            if (res.data.status == 200) {
                setSpecificPostData(res.data.post);
                setLoading(false);
            }
        })
        Modal.setAppElement('body');

    }, [renderAllPosts,specificPost])


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
                                    <span className='mx-1'>{moment(row.created_at).format("MMM Do YY")}</span>
                                </span>
                            </div>
                            <div className='d-flex align-items-center text-secondary'>
                                <h6 className='my-1'>Posted By:<span> rakib </span></h6>
                                <i className='fa fa-eye mx-2'></i>
                            </div>
                        </div>
                        <div>


                            <button className='btn btn-warning  table-cat-btns btn-sm '> <span className='text-center'>Help Post</span> </button>

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
                        row.isPublished === 1 ? <button className='btn btn-danger  btn-sm  px-4 btn-sm rounded-pill'> Approved</button> : <button className='btn btn-success btn-sm px-4  btn-sm rounded-pill'> Pending</button>
                    }

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'right'
            },
        },


        // {
        //     title: "Action", field: "", render: (row) => <div className='d-flex'><Link to={`/edit-service-type/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
        //         <button onClick={(e) => deletePostType(e, row.id)} className="btn btn-danger btn-sm action-btn mx-4"> <i class="fas fa-trash"></i> </button></div>
        // },

        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center'>
                <div class="form-check form-switch mx-2  text-danger">
                    <form encType="multipart/form-data" method='POST'  onChange={(e) => {

handlePostApproval(e, row.id)

}} >
                    <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault" defaultChecked={row.isPublished == 1}
                    />
                    </form>

                </div>

                <div className='mx-2 ' onClick={(e) => deletePost(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                </div>

                <div className='mx-2'>


                    <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                </div>


            </div>,
            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
            },
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



    const deleteAllRecords= (e) => {

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
                        setRenderAllPosts(res.data)
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

    // console.log('filtered post val',allPosts)
    console.log('filter click check',postFiltering)


    useEffect(()=>{
        axios.get(`/api/filter-post/${postFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallPosts(res.data.posts);
                setLoading(false);
            }
        })

    },[postFiltering])



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
                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                            <h6 className={`${postFiltering ==='all'? 'filterTrack':""} mx-2`} onClick={()=>setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering ===1? 'filterTrack':""} mx-3`} onClick={()=>setPostFiltering(1)}>Active</h6>
                                                <h6 className={`${postFiltering ===0? 'filterTrack':""} mx-3`}onClick={()=>setPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${postFiltering ==='decline'? 'filterTrack':""} mx-3`}onClick={()=>setPostFiltering('decline')}>Decline</h6>

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
                                            columns={columns}
                                            data={allPosts}
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



                    {/* add post category modal */}
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

export default ViewAllJob