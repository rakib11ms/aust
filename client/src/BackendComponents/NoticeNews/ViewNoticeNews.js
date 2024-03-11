
import React, { useState, useEffect } from 'react';
import '../PostType/../PostType/Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';


import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as XLSX from 'xlsx';
function ViewNoticeNews() {



    /////slider code ////////////

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // cssEase: "linear",
        // variableWidth: 90,


        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    };

    const [loading, setLoading] = useState(true);

    const [allNoticeNews, setallNoticeNews] = useState([]);
    console.log('allll NoticeNewsss', allNoticeNews)

    const [totalNoticeNews, setTotalNoticeNews] = useState('');
    const [activeNoticeNews, setActiveNoticeNews] = useState('');
    const [pendingNoticeNews, setPendingNoticeNews] = useState('');
    const [renderAllNoticeNews, setRenderAllNoticeNews] = useState('');



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
            formData.append('notice_news_title', id.notice_news_title);
            formData.append('notice_news_description', id.content1);
            formData.append('notice_news_image', id.notice_news_image);


            axios.post(`/api/update-notice-news/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllNoticeNews(res.data);
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
            formData.append('notice_news_title', id.notice_news_title);
            formData.append('notice_news_description', id.content1);
            formData.append('notice_news_image', id.notice_news_image);
            formData.append('posted_by', 1);

            axios.post(`/api/update-notice-news/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    setRenderAllNoticeNews(res.data);

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
            formData.append('notice_news_title', id.notice_news_title);
            formData.append('notice_news_description', id.content1);
            formData.append('notice_news_image', id.notice_news_image);


            axios.post(`/api/update-notice-news/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllNoticeNews(res.data);

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
            formData.append('notice_news_title', id.notice_news_title);
            formData.append('notice_news_description', id.content1);
            formData.append('notice_news_image', id.notice_news_image);


            axios.post(`/api/update-notice-news/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {
                    window.location.reload();

                    // Swal.fire(res.data.message, '', 'success')
                    setRenderAllNoticeNews(res.data);

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





    useEffect(() => {
        axios.get(`/api/all-notice-news`).then(res => {
            if (res.data.status == 200) {
                setallNoticeNews(res.data.notice_news);
                setTotalNoticeNews(res.data.total_news)
                setActiveNoticeNews(res.data.total_active)
                setPendingNoticeNews(res.data.total_pending)
                setLoading(false);
            }
        })


    }, [])

    useEffect(() => {
        Modal.setAppElement('body');

    }, [])


    //notice news view modal

    const viewNoticeNewsStyles = {
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
    const [viewPostDescription, setViewPostDescription] = useState('');

    console.log('view post', viewPostDescription)

    const [viewNoticeNewsModalIsOpen, setviewNoticeNewsModalIsOpen] = useState(false);
    function openViewNoticeNewsModal(e, viewPost) {
        e.preventDefault();
        setViewPostDescription(viewPost)
        setviewNoticeNewsModalIsOpen(true)
    }
    function closeViewNoticeNewsModal(e) {
        setviewNoticeNewsModalIsOpen(false);

    }

    const [noticeNewsImages, setNoticeNewsImages] = useState([]);

    console.log('heda', noticeNewsImages)


    useEffect(() => {
        axios.get(`/api/notice-news-multiple-images-by-id/${viewPostDescription.id}`).then(res => {
            if (res.data.status == 200) {
                setNoticeNewsImages(res.data.notice_news_images);
            }
        })

    }, [viewPostDescription])



    // const customStyles1 = {
    //     content: {
    //         // marginTop: '70px',
    //         top: '45vh',
    //         left: '30%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         padding: '5px',
    //         // marginRight: '-50%',
    //         transform: 'translate(-7%, -45%)',
    //         width: "60vw",
    //         height: "90vh",
    //         // background: "#ffffff",
    //     },
    //     overlay: { zIndex: 1000 }

    // };

    // const [viewBanner, setViewBanner] = useState('');


    // const [viewJobPostModalIsOpen, setviewJobPostModalIsOpen] = useState(false);
    // function openViewEventPostModal(e, viewEventPost) {
    //     e.preventDefault();
    //     setViewBanner(viewEventPost)
    //     setviewJobPostModalIsOpen(true)
    //     // setAllImagesfromDatabase(viewEventPost.image.split(','))

    // }
    // function closeViewJobPostModal(e) {
    //     setviewJobPostModalIsOpen(false);

    // }






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
                                    <i className='fa fa-calendar-days'></i>

                                    <span className='mx-2'>{moment(row.created_at).format("YYYY-MM-DD")} | <span class="mx-1"> {moment(row.created_at).format("LT")}</span> </span>
                                </span>
                            </div>
                            <div className='d-flex align-items-center text-secondary '>
                                <h6 className='my-1 fs-6' >Posted By:<span>{row.full_name}</span></h6>
                                {/* <i className='fa fa-eye mx-2'></i> */}
                            </div>
                        </div>
                        <div>


                            <button className='btn btn-warning  table-cat-btns btn-sm '> <span className='text-center'>{row.category_name}</span> </button>

                        </div>

                    </div>

                    <div>
                        <h5 className='my-1 fs-5'>
                            {row.notice_news_title}
                        </h5>


                        <div className='text-secondary' dangerouslySetInnerHTML={{ __html: row.notice_news_description.length > 50 ? `${row.notice_news_description.substring(0, 50)}...` : row.notice_news_description }} />



                    </div>




                </div>

            ,




            cellStyle: {
                marginLeft: 50,
                maxWidth: 250
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
            title: "", field: "", render: (row) => <div className='d-flex align-items-center ' style={{ cursor: 'pointer' }}>
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
                    <Link to={`/edit-notice-news/${row.id}`}> <i class="fa-solid fa-edit icon-table-archive" ></i></Link>
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



                <div className='mx-2 mb-1 text-secondary' onClick={(e) => openViewNoticeNewsModal(e, row)}>

                    <i className='fa fa-eye'></i>


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
                axios.post(`/api/delete-notice-news/${id}`).then(res => {
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


    // console.log('filtered post val',allNoticeNews)
    // console.log('filter click check', postFiltering)


    useEffect(() => {
        axios.get(`/api/filtering-notice-news-by-status/${postFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallNoticeNews(res.data.notice_news);
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
        setSearchRadioButtonValue(searchBy)

    }

    useEffect(() => {
        if (searchRadioButtonValue !== "" && searchInputValue !== "") {
            axios.get(`/api/filter-notice-news-by-search-input-radio/${searchInputValue}/${searchRadioButtonValue}`).then(res => {
                console.log('reesssssssssssss', res)
                if (res.data.status == 200) {
                    setallNoticeNews(res.data.notice_news);
                    setLoading(false);
                }
            })
        }
        else if (searchInputValue == "") {
            axios.get(`/api/filtering-notice-news-by-status/${postFiltering}`).then(res => {
                if (res.data.status == 200) {
                    setallNoticeNews(res.data.notice_news);
                    setLoading(false);
                }
            })
        }
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
                axios.post(`/api/delete-multiple-notice-news/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllNoticeNews(res.data)
                        // window.location.reload();
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'All NoticeNews deleted successfully',
                    'success'
                )
            }
        })


    }


    const handleAllNoticeNewstatus = (e) => {

        if (e.target.value === 'archive') {
            axios.put(`/api/archive-all-NoticeNews-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallNoticeNews(res.data.NoticeNews)
                    setRenderAllNoticeNews(res.data);

                }

            })
        }
        else if (e.target.value === 'active') {
            axios.put(`/api/active-all-NoticeNews-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallNoticeNews(res.data.NoticeNews)

                    setRenderAllNoticeNews(res.data);

                }

            })
        }
        else if (e.target.value === 'pending') {
            axios.put(`/api/pending-all-NoticeNews-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    setallNoticeNews(res.data.NoticeNews)

                    setRenderAllNoticeNews(res.data);

                }

            })
        }
        else {

        }
    }




    const [allExcelNoticeNews, setAllExcelNoticeNews] = useState([]);

    // console.log('du', allExcelNoticeNews)

    useEffect(() => {
        axios.get(`/api/export-all-notice-news-as-excel`).then(res => {
            if (res.data.status == 200) {
                setAllExcelNoticeNews(res.data.all_notice_news);
            }
        })

    }, [])


    const handleExportClick = () => {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
    
        // Add a worksheet with the JSON data
        const ws = XLSX.utils.json_to_sheet(allExcelNoticeNews);
        XLSX.utils.book_append_sheet(workbook, ws, 'All Notice News');
    
        // Save the workbook to an XLSX file
        const xlsxBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
        // Convert buffer to Blob
        const blob = new Blob([xlsxBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        // Create a download link and trigger a click to download the file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'All Notice News.xlsx';
        downloadLink.click();
      };



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

                                        <h5 className=' m-0'>{totalNoticeNews}</h5>
                                        <p className='mb-2'>Total Notice/News</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>{activeNoticeNews}</h5>
                                        <p className='mb-2'>Active Notice/News</p>
                                    </div>


                                    <div className='mb-0'>

                                        <h5 className=' m-0'>{pendingNoticeNews}</h5>
                                        <p className='mb-1'>Pending Notice/News</p>
                                    </div>



                                </div>



                            </div>

                            <div className="col-md-12 mt-3 ">
                                <h5 className=''>ALL Notice/News</h5>

                                <div className="card bg-white">


                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${postFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setPostFiltering('all')}>All</h6>
                                                <h6 className={`${postFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(1)}>Active</h6>
                                                <h6 className={`${postFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering(0)}>Pending</h6>
                                                <h6 className={`${postFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => setPostFiltering('archive')}>Archived</h6>
                                                
                                                <div className='btn btn-light btn-sm border py-1 justify-content-end ' onClick={handleExportClick} >
                                                       {/* <CSVLink data={allExcelJobPosts} filename="UserPost" className="" >
                                                                <li><a class="dropdown-item1" ><i style={{ marginRight: 9 }} class="fa-regular fa-file-excel"></i>         Download Excel</a></li>

                                                            </CSVLink> */}

                                                            Download Excel
                                           
                                                </div>

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
                                                                <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllNoticeNewstatus}>
                                                                    <option selected>Action</option>
                                                                    <option value="active">Active</option>
                                                                    <option value="pending">Pending</option>
                                                                    <option value="archive">Archive</option>
                                                                </select>
                                                            </div>



                                                        </>
                                                    }


                                                </div>


                                                <div className='mx-3'>


                                                    <Link to="/create-notice-news"><button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}> <span>+ </span>Create </button></Link>

                                                </div>
                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            columns={columns}
                                            data={allNoticeNews}
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


                            {/* view  post modal */}
                            <Modal
                                isOpen={viewNoticeNewsModalIsOpen}
                                onRequestClose={closeViewNoticeNewsModal}
                                style={viewNoticeNewsStyles}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewNoticeNewsModal}><i class="fa fa-times"></i></span>

                                    <h5 className=""> Full Post View</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 ">

                                            {/* <div className=''>
                                                <div className='mx-auto' style={{ width: '50%', height: '150px' }}>
                                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="rounded-3" src={`${global.img_url}/images/${viewPostDescription.notice_news_image}`} />
                                                </div>
                                            </div> */}
                                            <div className='col-6 mx-auto '>


                                                <Slider {...settings}>

                                                    {
                                                        noticeNewsImages !== undefined && noticeNewsImages.map((item, i) => {
                                                            return (
                                                                <>
                                                                    <div class="rounded-3">
                                                                        <img src={`${global.img_url}/images/${item.image}`} className="rounded-3" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }





                                                </Slider>

                                            </div>

                                            <div className='d-flex justify-content-between mt-2'>
                                                <div className='mt-3'>
                                                    <h5>{viewPostDescription.notice_news_title}</h5>
                                                    <div>
                                                        <i class="fas fa-calendar-days"></i>
                                                        <span className='mx-2'>Posted Date: {moment(viewPostDescription.created_at).format('YYYY-MM-DD')}</span>
                                                    </div>

                                                    <div className='mt-2'>

                                                        <div className=' d-inline py-1 rounded-pill me-4' >

                                                            <span class="bg-white">Posted By : </span> <span className='bg-light'> {viewPostDescription.full_name}</span>
                                                        </div>
                                                    </div>





                                                </div>
                                                <div className='mt-3'>
                                                    <button className='btn  bg-warning text-dark btn-sm py-1   px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewPostDescription.category_name
                                                    }</span> </button>

                                                    {
                                                        viewPostDescription.isPublished == 1 ?
                                                            <button className='btn  btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>Active</span> </button>
                                                            :
                                                            <button className='btn btn-danger btn-sm py-1  px-3 my-0 mx-3' style={{ borderRadius: "7px", color: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>In active</span> </button>

                                                    }

                                                </div>
                                            </div>

                                            <div className='mt-3' dangerouslySetInnerHTML={{
                                                __html: viewPostDescription.notice_news_description
                                            }}
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

export default ViewNoticeNews