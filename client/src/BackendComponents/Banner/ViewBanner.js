import React, { useState, useEffect } from 'react';


import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import '../PostType/../PostType/Post.css';

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, ThemeProvider, createTheme } from '@mui/system';



function ViewAllBanner() {
    const [loading, setLoading] = useState(true);

    const [allBanners, setallBanners] = useState([]);

    const [totalEvents, setTotalEvents] = useState([]);
    const [totalArchiveEvents, setTotalArchiveEvents] = useState([]);




    console.log('all banners', allBanners)


    const [renderAllBanners, setRenderAllBanners] = useState('');

    // console.log('all posts check', allBanners)

    //add functionality for post category






    const formData = new FormData();



    // const archiveBanner = (e, id) => {

    //     if (id.isArchived == 0) {

    //         const formData = new FormData();

    //         // formData.append('_method', 'PUT');

    //         formData.append('posted_by', id.posted_by);
    //         formData.append('update_by', id.update_by);
    //         formData.append('banner_description', id.banner_description);
    //         formData.append('image', id.image);
    //         formData.append('isArchived', 1);
    //         formData.append('banner_title', id.banner_title);

    //         axios.post(`/api/update-banner/${id.id}`, formData).then(res => {
    //             if (res.data.status == 200) {

    //                 // Swal.fire(res.data.message, '', 'success')
    //                 window.location.reload();

    //                 setRenderAllBanners(res.data);

    //                 // setIdChange('');
    //                 // closeAddPostCategoryModal();
    //                 // setAddPostType({
    //                 //     type_name: "",
    //                 //     created_by: '',
    //                 //     error_list: []

    //                 // });

    //             }
    //             // else if (res.data.status == 400) {
    //             //     setAddPostType({ ...addPostType, error_list: res.data.errors });
    //             //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

    //             // }
    //         })

    //     }
    //     if (id.isArchived == 1) {

    //         const formData = new FormData();

    //         // formData.append('_method', 'PUT');

    //         formData.append('posted_by', id.posted_by);
    //         formData.append('update_by', id.update_by);
    //         formData.append('banner_description', id.banner_description);
    //         formData.append('image', id.image);
    //         formData.append('isArchived', 0);
    //         formData.append('banner_title', id.banner_title);

    //         axios.post(`/api/update-banner/${id.id}`, formData).then(res => {
    //             if (res.data.status == 200) {

    //                 // Swal.fire(res.data.message, '', 'success')
    //                 window.location.reload();

    //                 setRenderAllBanners(res.data);

    //                 // setIdChange('');
    //                 // closeAddPostCategoryModal();
    //                 // setAddPostType({
    //                 //     type_name: "",
    //                 //     created_by: '',
    //                 //     error_list: []

    //                 // });

    //             }
    //             // else if (res.data.status == 400) {
    //             //     setAddPostType({ ...addPostType, error_list: res.data.errors });
    //             //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

    //             // }
    //         })

    //     }
    // }
    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)

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

    const [viewBanner, setViewBanner] = useState('');


    const [viewJobPostModalIsOpen, setviewJobPostModalIsOpen] = useState(false);
    function openViewEventPostModal(e, viewEventPost) {
        e.preventDefault();
        setViewBanner(viewEventPost)
        setviewJobPostModalIsOpen(true)
        // setAllImagesfromDatabase(viewEventPost.image.split(','))

    }
    function closeViewJobPostModal(e) {
        setviewJobPostModalIsOpen(false);

    }






    useEffect(() => {
        axios.get(`/api/all-banner`).then(res => {
            if (res.data.status == 200) {
                setallBanners(res.data.banner);

                setLoading(false);

            }
        })
        // Modal.setAppElement('body');

    }, [renderAllBanners])







    const deleteBanner = (e, id) => {


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
                axios.post(`/api/delete-banner/${id}`).then(res => {
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

                <div className=''>

                    {
                        row.banner_image !== undefined &&
                        <img className="rounded" src={`${global.img_url}/images/${row.banner_image[0]?.image}`} width="100px" height="70px" alt="No Image" />

                    }




                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                // textAlign: 'left',
                width: 10,
            },
        },

        {
            title: '  ', field: ``

            ,
            render: (row) =>

                <div className=''>
                    <div className='d-flex justify-content-end'>


                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center py-2 ' style={{ cursor: 'pointer' }}>






                                <div className='text-secondary'>
                                    <Link to={`/edit-banner/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

                                </div>


                                <div className='mx-2 ' onClick={(e) => deleteBanner(e, row.id)}>
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>

{/* 
                                <div className='text-secondary mx-2' onClick={(e) => archiveBanner(e, row)}>

                                    {
                                        row.isArchived == 1 ? <i class="fa fa-archive mx-2 icon-table-archive text-danger"></i> :
                                            row.isArchived == 0 ? <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                                                : ''

                                    }

                                </div> */}




                                <div className='text-secondary mx-2'>

                                    <div onClick={(e) => {
                                        openViewEventPostModal(e, row)
                                    }
                                    }>
                                        <i className='fa fa-eye  '  >
                                        </i>

                                    </div>

                                </div>





                            </div>


                        </div>
                    </div>

                    <div class="tooops   " >

                        <div style={{ color: 'black' }} className="">
                            {
                                row.isArchived == 1 &&
                                <span className=' bg-info '>Archived</span>

                            }
                            {
                                row.isArchived == 0 &&
                                <span className=' bg-info d-inline p-2 px-3 rounded-1 '>Published</span>

                            }
                            {/* <span className='mx-2'>{row.isArchived==1?"Archived":'Published'}</span> */}
                        </div>
                        <div class="d-flex mt-2 text-secondary"  >
                            <div className='d-flex d-inline-block py-1 '>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span> Published Date: {moment(row.created_at).format('LL')}</span>
                                </div>
                            </div>

                        </div>

                        <div className='mt-2'>
                            <h5>{row.banner_title}</h5>
                        </div>


                        <div className='mt-2' style={{ color: '#777777' }} dangerouslySetInnerHTML={{ __html: row.banner_description.length > 50 ? `${row.banner_description.substring(0, 50)}...` : row.banner_description }}
                        />
                        {/* 
<div className='mt-2' style={{ color: '#777777' }} dangerouslySetInnerHTML={{ __html: row.banner_description}}
                        /> */}




                    </div>






                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },



    ];









    // const [eventPostFiltering, seteventPostFiltering] = useState('all');

    // // console.log('filtered post val',allBanners)
    // console.log('filter click check', eventPostFiltering)


    // useEffect(() => {
    //     axios.get(`/api/filter-event-posts/${eventPostFiltering}`).then(res => {
    //         if (res.data.status == 200) {
    //             setallBanners(res.data.event_posts);
    //             setLoading(false);
    //         }
    //     })

    // }, [eventPostFiltering])

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
                axios.delete(`/api/delete-multiple-banner/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllBanners(res.data)
                        // window.location.reload();
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your Data deleted successfully',
                    'success'
                )
            }
        })


    }





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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }]
    };

    // const [allImagesFromDatabase, setAllImagesfromDatabase] = useState([]);
    // console.log('checking', allImagesFromDatabase)


    const handleAllBannerstatus = (e) => {
        if (e.target.value == 'archive') {
            axios.put(`/api/archive-all-events-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallBanners(res.data.allBanners)
                    setRenderAllBanners(res.data);

                }

            })
        }
        else if (e.target.value == 'active') {
            axios.put(`/api/active-all-events-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallBanners(res.data.allBanners)
                    setRenderAllBanners(res.data);

                }

            })
        }
    }


    const [value, setValue] = React.useState([null, null]);



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

                            <section className='view-event-header d-flex justify-content-center rounded-3 py-3 mt-3'>
                                <div class="col-5 ">
                                    <div class="view-event-header-form  px-3 ">
                                        <div class="input-group rounded-3" data-aos="flip-up">
                                            <input type="text" class="form-control  inp shadow-sm" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white inp py-3 shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>

                                </div>
                                {/* <div class="view-event-header-data text-light px-3">
                                    <div class=" d-flex">
                                        <div class="i mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalEvents}</h4>
                                            <p className=''>Total Events</p>
                                        </div>
                                        <div class=" mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalArchiveEvents} </h4>
                                            <p className=''> Archive Events</p>
                                        </div>
                                 

                                    </div>
                                </div> */}


                            </section>




                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Banner</h5>

                                {/* <div className='mb-3' style={{ position: 'relative', zIndex: '9999' }}>

                                   asd
                                </div> */}

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                {/* <h6 className={`${eventPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => seteventPostFiltering('all')}>All</h6> */}
                                                {/* <h6 className={`${eventPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(1)}>Active</h6>
                                                <h6 className={`${eventPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(0)}>Pending</h6> */}
                                                {/* <h6 className={`${eventPostFiltering === 'upcoming_filter' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('upcoming_filter')}>Upcoming 15 days</h6>
                                                <h6 className={`${eventPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('archive')}>Archived</h6> */}

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
                                                            <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllBannerstatus}>
                                                                <option selected>Action</option>
                                                                <option value="active">Active</option>
                                                                <option value="archive">Archive</option>
                                                            </select>
                                                        </div>



                                                    </>
                                                }


                                                <div className='mx-3'>


                                                    <Link to="/create-banner"><button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}> <span>+ </span>Create </button></Link>

                                                </div>


                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            //        components={{
                                            //         Container: props => <Paper {...props} />
                                            //    }}
                                            columns={columns}
                                            data={allBanners}
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





                            {/* add post category modal */}
                            <Modal
                                isOpen={viewJobPostModalIsOpen}
                                onRequestClose={closeViewJobPostModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobPostModal}><i class="fa fa-times"></i></span>

                                    <h5 className="">View Banner</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 ">

                                            <div className='col-6 mx-auto'>

                                                <Slider {...settings}>

                                                    {
                                                        viewBanner.banner_image !== undefined && viewBanner.banner_image.map((item, i) => {
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


                                            <div className='d-flex justify-content-between mt-3'>
                                                <div className='mt-3'>
                                                    <h5>{viewBanner.banner_title}</h5>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <i class="fas fa-calendar"></i>
                                                            <span className='mx-2'>Created Date: {moment(viewBanner.created_at).format("LL")}</span>
                                                        </div>
                                                        {/* <div className='mx-3'>
                                                            <i class="fas fa-clock"></i>
                                                            <span className='mx-2'>Event Time: {moment(viewBanner.event_time).format("LT")}</span>
                                                        </div> */}
                                                    </div>







                                                </div>

                                                <div>
                                                    <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewBanner.isArchived == 0 ? "Published" : 'Archived'}</span> </button>


                                                </div>
                                            </div>




                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewBanner.banner_description }}
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

export default ViewAllBanner