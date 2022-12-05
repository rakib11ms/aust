
import React, { useState, useEffect } from 'react';
import './ViewEventPayment.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';

function ViewEventPayment() {



    const [loading, setLoading] = useState(true);

    const [allBlogArticle, setallBlogArticle] = useState([]);
    console.log('allll postsss', allBlogArticle)

    const [totalPosts, setTotalPosts] = useState('');
    const [activePosts, setActivePosts] = useState('');
    const [pendingPosts, setPendingPosts] = useState('');
    const [renderAllBlogArticle, setRenderAllBlogArticle] = useState('');



    const [checkboxStatus, setCheckBoxStatus] = useState(false)





    ////handle post approval




    const handlePostApproval = (e, id) => {
        // setCheckBoxStatus(!checkboxStatus)
        // console.log('checked check', e.target.checked)
        // setSpecificPost(id);
        // const IsApprovedValue = e.target.checked === true ? 1 : 0;
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

                    setRenderAllBlogArticle(res.data);
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

                    setRenderAllBlogArticle(res.data);

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
                    setRenderAllBlogArticle(res.data);

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
                    setRenderAllBlogArticle(res.data);

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










    ////modal functionality start 



    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)





    useEffect(() => {
        axios.get(`/api/all-article-blogs`).then(res => {
            if (res.data.status == 200) {
                setallBlogArticle(res.data.article_blogs);
                setTotalPosts(res.data.total_posts)
                setActivePosts(res.data.total_active_posts)
                setPendingPosts(res.data.total_pending_posts)
                setLoading(false);
            }
        })

        Modal.setAppElement('body');

    }, [])




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

                                    <span className='mx-2'>{moment(row.created_at).format("YYYY-MM-DD")} </span>
                                </span>
                            </div>
                            <div className='d-flex align-items-center text-dark'>
                                <h6 className='my-1'><span>{row.full_name}</span></h6>
                                {/* <i className='fa fa-eye mx-2'></i> */}
                            </div>
                        </div>
                        <div>


                            <button className='membership-btnn'>Membership fees</button>

                        </div>

                    </div>

                    <div>
                        <p className='my-1 '>
                            Alumni
                        </p>


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
                    <button className='paid-btn'>
                        Paid
                    </button>
                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'right'
            },
        },



        {
            title: "", field: "", render: (row) => <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>

                <div>
                    <h5><span><i class="fa-solid fa-dollar-sign"></i></span>5</h5>
                </div>


            </div>,
            cellStyle: {
                marginLeft: 50,
                textAlign: 'right'
            },
        },
    ];
   



   




    const [postFiltering, setPostFiltering] = useState('all');


    // console.log('filtered post val',allBlogArticle)
    // console.log('filter click check', postFiltering)


    // useEffect(() => {
    //     axios.get(`/api/filter-post/${postFiltering}`).then(res => {
    //         if (res.data.status == 200) {
    //             setallBlogArticle(res.data.posts);
    //             setLoading(false);
    //         }
    //     })

    // }, [postFiltering])



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
                setallBlogArticle(res.data.posts);
                setLoading(false);
            }
        })
        // }
        console.log('useefefct run')

    }, [searchRadioButtonValue, searchInputValue])







    //selection tracking

    const [selectedRowsLength, setselectedRowsLength] = useState(0);
    const [selectedRowsLength1, setselectedRowsLength1] = useState(0);
    // console.log("selcted rows",selectedRowsLength)
    const [selectedRowsIds, setSelectedRowsIds] = useState([]);
    const [selectedRowsIds1, setSelectedRowsIds1] = useState([]);
    console.log("selcted rows ids", selectedRowsIds)



    const selectionCheck = (selectedRows) => {

        setselectedRowsLength(selectedRows.length)

        // setSelectedRowsIds(selectedRows)
        let result = selectedRows.map(a => a.id);
        // console.log('result',result)

        setSelectedRowsIds(result);

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

                                <div class="post-top-con-left  p-4 bg-success d-flex justify-content-center">

                                    <div className='mb-3 input-search mt-3 bg-success'>
                                        <div class="input-group py-2" data-aos="flip-up">
                                            <input type="text" class="form-control inp shadow-sm" placeholder="Search.." value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                    </div>

                                    {/* <div className='text-center  mt-4'>
                                        <div className='shadow-sm mx-3 border py-2 px-2  cat-btn mb-1 ' onClick={openAddPostCategoryModal}>
                                            <h6 className='mt-1' > + Category</h6>

                                        </div>
                                        <span className=''> View All Categories </span>
                                    </div> */}






                                </div>




                            </div>

                            <div className="col-md-12 mt-3">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h5 className=''>Showing </h5>
                                        <p><span><i className="fa-solid fa-calendar-days"></i></span> 12 Sept, 2022 - 20 Sept, 2022</p>
                                    </div>
                                    <div data-aos="fade-left">
                                        <button className='export-btn'>
                                            <span><i className="fa-solid fa-file"></i> EXPORT</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card bg-white">


                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${postFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(1)}>Membership</h6>
                                                <h6 className={`${postFiltering === 'events' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('events')}>Events</h6>
                                                <h6 className={`${postFiltering === 'annual fees' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('annual fees')}> Annual fees</h6>
                                                <h6 className={`${postFiltering === 'donation' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('donation')}> Donation</h6>
                                                <h6 className={`${postFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(0)}>Pending</h6>



                                            </div>

                                            <div className='d-flex align-items-center'>


                                            </div>


                                            <div className='mx-3' >


                                                <button className='btn px-4 rounded-pill border noti-btnn' data-aos="zoom-out-up"> <span><i className="fa-solid fa-message"></i> </span>NOTIFY</button>
                                                <button className='btn px-4 rounded-pill  border delete-btnn' data-aos="zoom-out-up" > <span><i className="fa-solid fa-trash"></i> </span>DELETE</button>

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

export default ViewEventPayment