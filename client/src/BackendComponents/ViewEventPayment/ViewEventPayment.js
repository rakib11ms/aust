import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';
import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
import './ViewEventPayment.css'

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



function ViewEventPayment() {
    const [loading, setLoading] = useState(true);

    const [allEvents, setallEvents] = useState([]);

    const [totalEvents, setTotalEvents] = useState([]);
    const [totalArchiveEvents, setTotalArchiveEvents] = useState([]);
    
    // Pagination
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event1, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event1) => {
        setRowsPerPage(parseInt(event1.target.value, 10));
        setPage(0);
      };


    console.log('all events', allEvents)


    const [renderAllEvents, setRenderAllEvents] = useState('');

    // console.log('all posts check', allEvents)

    //add functionality for post category






    const formData = new FormData();

    const handlePostApproval = (e, id) => {

        if (e.target.checked === true) {
            const formData = new FormData();

            formData.append('isPublished', 1);
            // formData.append('_method', 'PUT');

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', id.isArchived);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllEvents(res.data);
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

            formData.append('company_name', id.company_name);
            formData.append('job_type', id.job_type);
            formData.append('job_description', id.job_description);
            formData.append('posted_by', id.posted_by);
            formData.append('application_deadline', id.application_deadline);
            formData.append('image', id.image);
            formData.append('isArchived', id.isArchived);
            formData.append('job_title', id.job_title);
            formData.append('job_location', id.job_location);

            axios.post(`/api/update-job-post/${id.id}`, formData).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllEvents(res.data);
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

    const archiveEventPost = (e, id) => {

        // console.log('arhcive check row',id)


        // console.log('arhcive update',archiveUpdate)

        if (id.isArchived == 0) {

            const archiveUpdate = {
                isArchived: 1
            }


            axios.put(`/api/update-archive-status/${id.id}`, archiveUpdate).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllEvents(res.data);

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
            const archiveUpdate = {
                isArchived: 0
            }

            axios.put(`/api/update-archive-status/${id.id}`, archiveUpdate).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();

                    setRenderAllEvents(res.data);

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

    const [viewEventDescription, setViewEventDescription] = useState('');


    const [viewJobPostModalIsOpen, setviewJobPostModalIsOpen] = useState(false);
    function openViewEventPostModal(e, viewEventPost) {
        e.preventDefault();
        setViewEventDescription(viewEventPost)
        setviewJobPostModalIsOpen(true)
        setAllImagesfromDatabase(viewEventPost.image.split(','))

    }
    function closeViewJobPostModal(e) {
        setviewJobPostModalIsOpen(false);

    }






    useEffect(() => {
        axios.get(`/api/all-event-posts`).then(res => {
            if (res.data.status == 200) {
                setallEvents(res.data.all_events);
                setTotalArchiveEvents(res.data.total_archive_events);
                setTotalEvents(res.data.total_events);
                setLoading(false);

            }
        })
        // Modal.setAppElement('body');

    }, [renderAllEvents])







    const deleteEvent = (e, id) => {

        console.log('id11111111111111', id)

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
                axios.post(`/api/delete-event/${id}`).then(res => {
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

                    <img className="rounded" src={`${global.img_url}/images/${row.image.split(',')[0]}`} width="100px" height="70px" alt="No Image" />


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
                                    <Link to={`/edit-events/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

                                </div>


                                <div className='mx-2 ' onClick={(e) => deleteEvent(e, row.id)}>
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>


                                <div className='text-secondary mx-2' onClick={(e) => archiveEventPost(e, row)}>
                                    {/* <i className='fa fa-archive mx-2 icon-table-archive'></i>  */}

                                    {
                                        row.isArchived == 1 ? <i class="fa fa-archive mx-2 icon-table-archive text-danger"></i> :
                                            row.isArchived == 0 ? <i class="fa-solid fa-box-archive icon-table-archive text-secondary"></i>
                                                : ''

                                    }

                                </div>

                                {/* <div className='mx-2' onClick={(e) => archiveEventPost(e, row)}>
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
                        <div style={{ color: '#777777' }}>
                            <i className='fa fa-calendar'></i>
                            <span className='mx-2'>{row.event_date}</span>
                        </div>
                        <div class="d-flex mt-1" >
                            <div className='d-flex  px-2 d-inline-block py-1 event-btn1'>
                                <div>
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>{moment(row.event_time).format('LT')}</span> |<span className='mx-1'>{row.event_date}</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2  px-2 d-inline-block py-1 event-btn2'>
                                <div>
                                    <i class="fa fa-user"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>
                                        {row.contact_person.split(',').length}

                                    </span>
                                    <span className='mx-2'>
                                        Contact Person
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex mx-2   px-2 d-inline-block py-1  event-btn3'>
                                <div>
                                    {/* <i class="fa fa-dollar"></i> */}
                                    <i class="fas fa-money-bill"></i>
                                </div>
                                <div className='mx-2'>
                                    <span>{row.event_fee}</span>
                                    <span class="mx-2">Event Fees</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2   px-2 d-inline-block py-1 event-btn4 text-light'>
                                <div>
                                    {/* <i class="fa fa-calendar"></i> */}
                                    <i class="fa-solid fa-school"></i>
                                </div>
                                <div className='mx-2 '>
                                    <span>{row.event_type_name}</span>
                                </div>
                            </div>
                        </div>

                        <div className='mt-1'>
                            <h5>{row.event_title}</h5>
                        </div>


                        <div className='mt-2' style={{ color: '#777777' }} dangerouslySetInnerHTML={{ __html: row.event_description.length > 50 ? `${row.event_description.substring(0, 50)}...` : row.event_description }}
                        />




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









    const [eventPostFiltering, seteventPostFiltering] = useState('all');

    // console.log('filtered post val',allEvents)
    console.log('filter click check', eventPostFiltering)


    useEffect(() => {
        axios.get(`/api/filter-event-posts/${eventPostFiltering}`).then(res => {
            if (res.data.status == 200) {
                setallEvents(res.data.event_posts);
                setLoading(false);
            }
        })

    }, [eventPostFiltering])

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
                axios.delete(`/api/delete-multiple-event-posts/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllEvents(res.data)
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

    const [allImagesFromDatabase, setAllImagesfromDatabase] = useState([]);
    console.log('checking', allImagesFromDatabase)


    const handleAllEventStatus = (e) => {
        if (e.target.value == 'archive') {
            axios.put(`/api/archive-all-events-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallEvents(res.data.allEvents)
                    setRenderAllEvents(res.data);

                }

            })
        }
        else if (e.target.value == 'active') {
            axios.put(`/api/active-all-events-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallEvents(res.data.allEvents)
                    setRenderAllEvents(res.data);

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
                        <h4 className='ms-4 pt-3'>Event Payment</h4>

                        <div className='container-fluid'>

                            <section className='view-event-header d-flex justify-content-center rounded-3 mt-3 pt-4 pb-4'>
                                <div class="col-5 ">
                                    <div class="view-event-header-form  px-3 ">
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow-sm " placeholder="Search by event name, date etc." aria-label="Username" aria-describedby="basic-addon1" />

                                            <span class="input-group-text bg-white py-3 shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>

                                </div>



                            </section>




                            <div className="col-md-12 mt-3">
                                <div className='showing-sec'>
                                    <div>
                                        <h5 style={{ fontWeight: 400, fontSize: 18 }}>Showing</h5>
                                        <div className='d-flex'>
                                            <i class="fa fa-calendar mt-1 pe-2"></i>
                                            <p className=''>12 Sept, 2022 - 20 Sept, 2022</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='show-button'> <span><i class=" fa-solid fa-file-invoice"></i> </span>Export</button>
                                    </div>
                                </div>

                                {/* <div className='mb-3' style={{ position: 'relative', zIndex: '9999' }}>

                                   asd
                                </div> */}

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>
                                                <input className="form-check-input mb-2 me-3" type="checkbox" value="" id="flexCheckChecked" />

                                                <h6 className={`${eventPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => seteventPostFiltering('all')}>All</h6>

                                                <h6 className={`${eventPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(1)}>Membership</h6>

                                                <h6 className={`${eventPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(0)}>Events</h6>

                                                <h6 className={`${eventPostFiltering === 'upcoming_filter' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('upcoming_filter')}>Annual fees</h6>

                                                <h6 className={`${eventPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('archive')}>Donation</h6>

                                                <h6 className={`${eventPostFiltering === 'pendings' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('pendings')}>Pendings</h6>

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
                                                            <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllEventStatus}>
                                                                <option selected>Action</option>
                                                                <option value="active">Active</option>
                                                                <option value="archive">Archive</option>
                                                            </select>
                                                        </div>



                                                    </>
                                                }


                                                <div className='mx-3'>


                                                    <button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450', fontSize: 13 }}> <span><i className="fa-solid fa-message"></i> </span>NOTIFY</button>

                                                    <button className='btn px-4 rounded-pill shadow-sm border bg-danger' style={{ color: "white", fontWeight: '400', fontSize: 13 }}> <span><i class="fa-solid fa-trash"></i> </span>DELETE </button>

                                                </div>


                                            </div>

                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-6">
                                                <div className='d-flex '>
                                                    <div className="form-check mt-5 me-3">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    </div>

                                                    <div className='membership-sec'>
                                                        <div className='d-flex   align-items-center me-5'>
                                                            <div className='d-flex'>
                                                                <i className="fa-solid fa-calendar-days me-1"></i>
                                                                <p>30 th November 2022</p>
                                                            </div>
                                                            <div className='membership-btn'>
                                                                <button className='btn px-4 rounded-pill shadow-sm border bg-info' style={{ color: "black", fontWeight: '400', marginLeft: 65, fontSize: 14 }}>Membership fees </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 style={{fontWeight: 400}}>Fazle Arafat</h5>
                                                            <p>Alumni</p>
                                                            <p style={{marginTop:"-15px"}}>Other Information</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="col-6 d-flex paid-sec">
                                                <div>
                                                    <button className='btn rounded-pill shadow-sm border bg-success' style={{ color: "white", fontWeight: '400', padding: "7px 66px 7px 66px", fontSize: 14 }}>Paid</button>
                                                </div>
                                                
                                                <h4 style={{fontSize: 20, marginRight:"-14px"}}><i class="fa-sharp fa-solid fa-dollar-sign"></i>5</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <div className='d-flex '>
                                                    <div className="form-check mt-5 me-3">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    </div>

                                                    <div className='membership-sec'>
                                                        <div className='d-flex   align-items-center me-5'>
                                                            <div className='d-flex'>
                                                                <i className="fa-solid fa-calendar-days me-1"></i>
                                                                <p>30 th November 2022</p>
                                                            </div>
                                                            <div className='Event-registration-btn'>
                                                                <button className='btn px-4 rounded-pill shadow-sm border bg-success' style={{ color: "rgb(245, 245, 245)", fontWeight: '400', marginLeft: 65, fontSize: 14 }}>Event registraion </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 style={{fontWeight: 400}}>Nayeem Yusuf</h5>
                                                            <p>Alumni</p>
                                                            <p style={{marginTop:"-15px"}}>Other Information</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="col-6 d-flex paid-sec">
                                                <div className='d-flex'>
                                                    <button className='btn shadow-sm border btn-unpaid' style={{fontSize: 14}}>Unpaid</button>

                                                    <button className='btn shadow-sm border btn-noti'><i className="fa-solid fa-message me-1" style={{fontSize: 14}}></i>Notify</button>
                                                </div>

                                                <h4 style={{fontSize: 20, marginRight:"6px"}}><i class="fa-sharp fa-solid fa-dollar-sign"></i>5</h4>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='position-sticky'>
                                <TablePagination
                                    component="div"
                                    count={100}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                  />
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

                                    <h5 className=""> Full Event View</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 ">

                                            <div className='col-6 mx-auto'>

                                                <Slider {...settings}>

                                                    {
                                                        allImagesFromDatabase.map((item, i) => {
                                                            return (
                                                                <>
                                                                    <div class="rounded-3">
                                                                        <img src={`${global.img_url}/images/${item.trim()}`} className="rounded-3" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }





                                                </Slider>

                                            </div>


                                            <div className='d-flex justify-content-between mt-3'>
                                                <div className='mt-3'>
                                                    <h5>{viewEventDescription.event_title}</h5>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <i class="fas fa-calendar"></i>
                                                            <span className='mx-2'>Event Date: {viewEventDescription.event_date}</span>
                                                        </div>
                                                        <div className='mx-3'>
                                                            <i class="fas fa-clock"></i>
                                                            <span className='mx-2'>Event Time: {moment(viewEventDescription.event_time).format("LT")}</span>
                                                        </div>
                                                    </div>







                                                </div>

                                                <div>
                                                    <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewEventDescription.event_type_name}</span> </button>


                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between mt-2'>
                                                <div className=''>

                                                    Event Fee: <span>{viewEventDescription.event_fee}</span>

                                                </div>

                                                <div className=''>
                                                    Contact Persons:

                                                    <div className='bg-light d-inline px-2 py-1 rounded-pill me-4' >

                                                        {viewEventDescription.dept_name}
                                                    </div>
                                                </div>

                                            </div>



                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewEventDescription.event_description }}
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

export default ViewEventPayment