
import React, { useState, useEffect } from 'react';
// import './Post.css';
import '../PostType/Post.css'
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';

function ViewBlogArticle() {



    const [loading, setLoading] = useState(true);

    const [allBlogArticle, setallBlogArticle] = useState([]);
    console.log('allll postsss', allBlogArticle)

    const [totalBlogs, setTotalBlogs] = useState('');
    const [totalArticles, settotalArticles] = useState('');
    const [pendingPosts, setPendingPosts] = useState('');
    const [renderAllBlogArticle, setRenderAllBlogArticle] = useState('');



    const [checkboxStatus, setCheckBoxStatus] = useState(false)





    ////handle post approval




    const handlePostApproval = (e, id) => {

        // alert(e.target.checked)

        if (e.target.checked === true) {
            const formData = new FormData();

            formData.append('isPublished', 1);
            formData.append('isArchived', id.isArchived);
            formData.append('category_id', id.category_id);
            formData.append('subcategory_id', id.subcategory_id);
            formData.append('article_blog_title', id.article_blog_title);
            formData.append('article_blog_description', id.content1);
            formData.append('article_blog_image', id.article_blog_image);


            axios.post(`/api/update-article-blogs/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllBlogArticle(res.data);
                    // setIdChange('');
                    // closeAddPostCategoryModal();
                    // setAddcategoryType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddcategoryType({ ...addcategoryType, error_list: res.data.errors });
                //     Swal.fire(addcategoryType.error_list.type_name[0], '', 'error')

                // }
            })
        }
        if (e.target.checked == false) {
            const formData = new FormData();

            formData.append('isPublished', 0);
            formData.append('isArchived', id.isArchived);
            formData.append('category_id', id.category_id);
            formData.append('subcategory_id', id.subcategory_id);
            formData.append('article_blog_title', id.article_blog_title);
            formData.append('article_blog_description', id.content1);
            formData.append('article_blog_image', id.article_blog_image);
            formData.append('posted_by', 1);

            axios.post(`/api/update-article-blogs/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllBlogArticle(res.data);

                    // setIdChange('');

                    // closeAddPostCategoryModal();
                    // setAddcategoryType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddcategoryType({ ...addcategoryType, error_list: res.data.errors });
                //     Swal.fire(addcategoryType.error_list.type_name[0], '', 'error')

                // }
            })
        }




    }


    const archivePost = (e, id) => {

        // if(id.isArchived==1){
        //     console.log('archived ase',id)

        // }
        // if(id.isArchived==0){
        //     console.log('published ache',id)

        // }

        if (id.isArchived == 0) {
            // console.log('acrhived holom 0 ',id)

            const formData = new FormData();

            formData.append('isPublished', 0);
            formData.append('isArchived', 1);
            formData.append('category_id', id.category_id);
            formData.append('subcategory_id', id.subcategory_id);
            formData.append('article_blog_title', id.article_blog_title);
            formData.append('article_blog_description', id.content1);
            formData.append('article_blog_image', id.article_blog_image);


            axios.post(`/api/update-article-blogs/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllBlogArticle(res.data);

                    // setIdChange('');

                    // closeAddPostCategoryModal();
                    // setAddcategoryType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddcategoryType({ ...addcategoryType, error_list: res.data.errors });
                //     Swal.fire(addcategoryType.error_list.type_name[0], '', 'error')

                // }
            })

        }
        if (id.isArchived == 1) {
            // console.log('acrhived holom 1 ',id)

            const formData = new FormData();

            formData.append('isPublished', 1);
            formData.append('isArchived', 0);
            formData.append('category_id', id.category_id);
            formData.append('subcategory_id', id.subcategory_id);
            formData.append('article_blog_title', id.article_blog_title);
            formData.append('article_blog_description', id.content1);
            formData.append('article_blog_image', id.article_blog_image);


            axios.post(`/api/update-article-blogs/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllBlogArticle(res.data);

                    // setIdChange('');

                    // closeAddPostCategoryModal();
                    // setAddcategoryType({
                    //     type_name: "",
                    //     created_by: '',
                    //     error_list: []

                    // });

                }
                // else if (res.data.status == 400) {
                //     setAddcategoryType({ ...addcategoryType, error_list: res.data.errors });
                //     Swal.fire(addcategoryType.error_list.type_name[0], '', 'error')

                // }
            })

        }

    }










    ////modal functionality start 



    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)


const [renderData,setRenderData]=useState('');


    useEffect(() => {
        axios.get(`/api/all-article-blogs`).then(res => {
            if (res.data.status == 200) {
                setallBlogArticle(res.data.article_blogs);
                setTotalBlogs(res.data.total_blogs)
                settotalArticles(res.data.total_articles)
                setPendingPosts(res.data.total_pending_posts)
                setLoading(false);
            }
        })

        Modal.setAppElement('body');

    }, [renderData])




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

                                    <span className='mx-2'>{moment(row.created_at).format("YYYY-MM-DD")} | <span class="mx-1"> {moment(row.created_at).format("LT")}</span> </span>
                                </span>
                            </div>
                            <div className='d-flex align-items-center text-secondary'>
                                <h6 className='my-1'>Posted By:<span>{row.full_name}</span></h6>
                                {/* <i className='fa fa-eye mx-2'></i> */}
                            </div>
                        </div>
                        <div>


                            <button className='btn btn-warning  table-cat-btns btn-sm '> <span className='text-center'>{row.category_name}</span> </button>

                        </div>

                    </div>

                    <div>
                        <h5 className='my-1 '>
                            {row.article_blog_title}
                        </h5>


                        <div className='text-secondary' dangerouslySetInnerHTML={{ __html: row.article_blog_description.length > 50 ? `${row.article_blog_description.substring(0, 50)}...` : row.article_blog_description }} />



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
                        row.isPublished == 1 ? <button className='btn btn-success  btn-sm  px-4 btn-sm rounded-pill'> Approved</button> : <button className='btn btn-danger btn-sm px-4  btn-sm rounded-pill'> Pending</button>
                    }

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'right'
            },
        },



        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>
                <div class="form-check form-switch mx-2  text-danger">
                    <form encType="multipart/form-data" method='POST' >
                        <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault"
                            value={checkboxStatus}

                            checked={row.isPublished == 1 ? true : false}

                            onChange={(e) => {

                                handlePostApproval(e, row)

                            }} />
                    </form>

                </div>

                <div className='mx-2'>
                    <Link to={`/edit-blog-article/${row.id}`}> <i class="fa-solid fa-edit icon-table-archive" ></i></Link>
                </div>

                <div className='mx-2 ' onClick={(e) => deleteArticleBlog(e, row.id)}>
                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                </div>

                <div className='mx-2' onClick={(e) => archivePost(e, row)}>


                    {/* <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i> */}
                    {
                        row.isArchived == 1 ? <i class="fa-solid fa-box-archive icon-table-archive text-danger"></i> :
                            <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>


                    }
                </div>


            </div>,
            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
            },
        },
    ];



    //delete functionality start 

    const deleteArticleBlog = (e, id) => {
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
                axios.post(`/api/delete-article-blogs/${id}`).then(res => {
                    if (res.data.status === 200) {
                        thisClicked.closest("tr").remove();
                        setRenderData(res.data)
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


    // console.log('filtered post val',allBlogArticle)
    // console.log('filter click check', postFiltering)


    useEffect(() => {
        axios.get(`/api/filtering-article-blogs-by-status/${postFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallBlogArticle(res.data.article_blogs);
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

        axios.get(`/api/filter-article-blogs-by-search-input-radio/${searchInputValue}/${searchRadioButtonValue}`).then(res => {
            console.log('reesssssssssssss', res)
            if (res.data.status == 200) {
                setallBlogArticle(res.data.article_blogs);
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
                axios.post(`/api/delete-multiple-article-blogs/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllBlogArticle(res.data)
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


    const handleAllBlogArticletatus = (e) => {

        if (e.target.value === 'archive') {
            axios.put(`/api/archive-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallBlogArticle(res.data.posts)
                    setRenderAllBlogArticle(res.data);

                }

            })
        }
        else if (e.target.value === 'active') {
            axios.put(`/api/active-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallBlogArticle(res.data.posts)

                    setRenderAllBlogArticle(res.data);

                }

            })
        }
        else if (e.target.value === 'pending') {
            axios.put(`/api/pending-all-posts-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallBlogArticle(res.data.posts)

                    setRenderAllBlogArticle(res.data);

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

                        <div className='container-fluid'>

                            <div className='post-top-con border rounded mt-2'>

                                <div class="post-top-con-left  p-4">

                                    <div className='mb-3 input-search mt-3'>
                                        <div class="input-group py-2" data-aos="fade-right">
                                            <input type="text" class="form-control inp shadow-sm" placeholder="Search.." value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                        <div class="search-by d-flex mt-3" data-aos="fade-up"
                                            data-aos-duration="1000">

                                            <div className='fw-bold'>
                                                Search By
                                            </div>
                                            <div class="form-check mx-3">
                                                <input class="form-check-input " type="radio" name="flexRadioDefault" id="btn-1" onClick={(e) => {
                                                    searchPostByRadioButton(e, 'categoryType');
                                                    // setSearchRadioButtonValue('postTitle')

                                                }
                                                }
                                                />
                                                <label class="form-check-label mx-2" for="flexRadioDefault1">
                                                    Category
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
                                                    Title
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

                                    {/* <div className='text-center  mt-4'>
                                        <div className='shadow-sm mx-3 border py-2 px-2  cat-btn mb-1 ' onClick={openAddPostCategoryModal}>
                                            <h6 className='mt-1' > + Category</h6>

                                        </div>
                                        <span className=''> View All Categories </span>
                                    </div> */}






                                </div>
                                <div class="post-top-con-right text-light text-center rounded-end px-5 py-2" data-aos="flip-right">

                                    <div className=' mb-0'>

                                        <h5 className=' m-0'>{totalBlogs}</h5>
                                        <p className='mb-2'>Total Blogs</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>{totalArticles}</h5>
                                        <p className='mb-2'>Total Articles</p>
                                    </div>


                                    {/* <div className='mb-0'>

                                        <h5 className=' m-0'>{pendingPosts}</h5>
                                        <p className='mb-1'>Pending Posts</p>
                                    </div> */}



                                </div>



                            </div>

                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Article/Blog</h5>

                                <div className="card bg-white">


                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${postFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(1)}>Active</h6>
                                                <h6 className={`${postFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${postFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('archive')}>Archived</h6>

                                            </div>

                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className='d-flex align-items-center '>



                                                    {
                                                        selectedRowsLength > 1 &&
                                                        <>


                                                            <div className='mx-2 mt-1 '
                                                                onClick={
                                                                    deleteAllRecords
                                                                }
                                                            >
                                                                <i class="fa-solid fa-trash icon-table-trash"></i>
                                                            </div>

                                                            <div className='mx-2'>
                                                                <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllBlogArticletatus}>
                                                                    <option selected>Action</option>
                                                                    <option value="active">Active</option>
                                                                    <option value="pending">Pending</option>
                                                                    <option value="archive">Archive</option>
                                                                </select>
                                                            </div>



                                                        </>
                                                    }


                                                </div>


                                                <div className='mx-3' data-aos="fade-up-left">


                                                    <Link to="/create-blog-article"><button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}> <span>+ </span>Create </button></Link>

                                                </div>
                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            columns={columns}
                                            data={allBlogArticle}
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




                </div>
            </div>

        </>

    )

}

export default ViewBlogArticle