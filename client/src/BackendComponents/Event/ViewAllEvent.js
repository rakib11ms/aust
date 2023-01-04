import React, { useState, useEffect, useRef } from 'react';

// import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';

import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

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
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import './event.css';


function ViewAllEvent() {
    const [loading, setLoading] = useState(true);

    const [allEvents, setallEvents] = useState([]);

    const [totalEvents, setTotalEvents] = useState([]);
    const [totalArchiveEvents, setTotalArchiveEvents] = useState([]);




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

    const [eventPersonName, setEventPersonName] = useState([]);
    console.log('event persons', eventPersonName)

    useEffect(() => {
        axios.get(`/api/event-contact-persons-name/${viewEventDescription.id}`).then(res => {
            if (res.data.status == 200) {
                setEventPersonName(res.data.contact_persons);


            }
        })
    }, [viewEventDescription])


    const [viewEventPostModalIsOpen, setviewEventPostModalIsOpen] = useState(false);
    console.log('view event', viewEventDescription)
    function openViewEventPostModal(e, viewEventPost) {
        e.preventDefault();
        setViewEventDescription(viewEventPost)
        setviewEventPostModalIsOpen(true)
        // setAllImagesfromDatabase(viewEventPost)

    }
    function closeViewJobPostModal(e) {
        setviewEventPostModalIsOpen(false);

    }


    const [viewQrCodeModalIsOpen, setviewQrCodeModalIsOpen] = useState(false);
    function openViewQrCodeModal(e, viewEventPost) {
        e.preventDefault();
        setViewEventDescription(viewEventPost)
        setviewQrCodeModalIsOpen(true)
        // setAllImagesfromDatabase(viewEventPost)

    }
    function closeViewQrCodeModal(e) {
        setviewQrCodeModalIsOpen(false);

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
                    {
                        row.event_image !== undefined &&
                        <img className="rounded" src={`${global.img_url}/images/${row.event_image[0].image}`} width="100px" height="70px" alt="No Image" />

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


                                <div className='text-secondary mx-1'>

                                    <div onClick={(e) => {
                                        openViewQrCodeModal(e, row)
                                    }
                                    }>
                                        <i class="fa-sharp fa-solid fa-qrcode"></i>

                                    </div>

                                </div>



                            </div>


                        </div>
                    </div>

                    <div class="tooops   " >
                        <div style={{ color: '#777777' }}>
                            <i className='fa fa-calendar-days'></i>
                            <span className='mx-2'>Posted Date: {moment(row.created_at).format("YYYY-MM-DD")}</span>
                        </div>
                        <div class="d-flex mt-1" >
                            <div className='d-flex  px-2 d-inline-block py-1 event-btn1'>
                                <div>
                                    <i class="fa fa-calendar-days"></i>
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
                                        {row.contact_person !== null && row.contact_person.split(',').length}

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
                                    <span>{row.event_fee !== "null" && row.event_fee}</span>
                                    <span>{row.event_fee == "null" && '0'}</span>
                                    <span class="mx-2">Event Fees</span>
                                </div>
                            </div>
                            <div className='d-flex mx-2   px-2 d-inline-block py-1 event-btn4 text-light'>
                                <div>
                                    {/* <i class="fa fa-calendar-days"></i> */}
                                    <i class="fa-solid fa-school"></i>
                                </div>
                                <div className='mx-2 '>
                                    <span>{row.event_type !== undefined && row.event_type.event_type_name}</span>
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

    const [liveSearchVal, setLiveSearchVal] = useState('')


    useEffect(() => {
        if (liveSearchVal !== null) {

            axios.get(`/api/get-all-event-related-data/${liveSearchVal}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    // window.location.reload();
                    setallEvents(res.data.event_posts)
                    // setRenderAllEvents(res.data);

                }

            })
        }
    }, [liveSearchVal])


    //print code 
    const componentRef2 = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef2.current,
    });

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

                            <section className='view-event-header d-flex justify-content-end rounded-3 mt-3' >
                                <div class="col-5 ">
                                    <div class="view-event-header-form  px-3 ">
                                        <div class="input-group" data-aos="flip-up">
                                            <input type="text" class="form-control shadow-sm" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setLiveSearchVal(e.target.value)} />

                                            <span class="input-group-text bg-white py-3 shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="view-event-header-data text-light px-3">
                                    <div class=" d-flex">
                                        <div class="i mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalEvents}</h4>
                                            <p className=''>Total Events</p>
                                        </div>
                                        <div class=" mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalArchiveEvents} </h4>
                                            <p className=''> Archive Events</p>
                                        </div>
                                        {/* <div class="mx-2 mt-3">
                                            <h4 className=' mb-0'>20 </h4>
                                            <p className=''>Departments</p>
                                        </div> */}


                                    </div>
                                </div>


                            </section>




                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Events</h5>

                                {/* <div className='mb-3' style={{ position: 'relative', zIndex: '9999' }}>

                                   asd
                                </div> */}

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${eventPostFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => seteventPostFiltering('all')}>All</h6>
                                                {/* <h6 className={`${eventPostFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(1)}>Active</h6>
                                                <h6 className={`${eventPostFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering(0)}>Pending</h6> */}
                                                <h6 className={`${eventPostFiltering === 'upcoming_filter' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('upcoming_filter')}>Upcoming 15 days</h6>
                                                <h6 className={`${eventPostFiltering === 'archive' ? 'filterTrack' : ""} mx-3`} onClick={() => seteventPostFiltering('archive')}>Archived</h6>

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


                                                    <Link to="/create-event"><button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}> <span>+ </span>Create </button></Link>

                                                </div>


                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            //        components={{
                                            //         Container: props => <Paper {...props} />
                                            //    }}
                                            columns={columns}
                                            data={allEvents}
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





                            {/* view event post modal */}
                            <Modal
                                isOpen={viewEventPostModalIsOpen}
                                onRequestClose={closeViewJobPostModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobPostModal}><i class="fa fa-times"></i></span>

                                    <h5 className="">View Event</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 ">

                                            <div className='col-6 mx-auto'>

                                                <Slider {...settings}>

                                                    {
                                                        viewEventDescription.event_image !== undefined && viewEventDescription.event_image.map((item, i) => {
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
                                                    <h5>{viewEventDescription.event_title}</h5>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <i class="fas fa-calendar-days"></i>
                                                            <span className='mx-2'>Event Date: {viewEventDescription.event_date}</span>
                                                        </div>
                                                        <div className='mx-3'>
                                                            <i class="fas fa-clock"></i>
                                                            <span className='mx-2'>Event Time: {moment(viewEventDescription.event_time).format("LT")}</span>
                                                        </div>
                                                    </div>







                                                </div>

                                                <div>
                                                    <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewEventDescription.event_type !== undefined && viewEventDescription.event_type.event_type_name}</span> </button>


                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between mt-2'>
                                                <div className=''>

                                                    Event Fee: <span>{viewEventDescription.event_fee}</span>

                                                </div>

                                                <div className=''>
                                                    Contact Persons:
                                                    <div className='d-flex'>


                                                        {
                                                            eventPersonName.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <div className='bg-light d-inline px-2 py-1 rounded-pill me-4' >

                                                                            {item.full_name}
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>

                                            </div>



                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewEventDescription.event_description }}
                                            />





                                        </div>



                                    </div>
                                </div>

                            </Modal>



                            {/* view qr code modal */}
                            <Modal
                                isOpen={viewQrCodeModalIsOpen}
                                onRequestClose={closeViewQrCodeModal}
                                style={customStyles1}
                                contentLabel="Example Modal"
                            >

                                <div className='card-body '>
                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewQrCodeModal}><i class="fa fa-times"></i></span>

                                    <h5 className="">View Qr Code</h5>
                                    <hr />



                                    <div className="row">

                                        <div className="col-12 " >
                                            <div className='float-end'>
                                                <button type='button' class="btn btn-warning btn-sm px-4 rounded-pill ms-auto" onClick={handlePrint} >Print</button>

                                            </div>

                                            <div className='wrap-qr mt-5 d-flex '>
                                                {/* <h4>{viewEventDescription.event_title}</h4>
                                                </hr> */}

                                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "100%" }} className="mt-5" ref={componentRef2}>
                                                    <QRCode
                                                        size={256}
                                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                        value={viewEventDescription.event_unique_id}
                                                        viewBox={`0 0 256 256`}
                                                    />
                                                </div>

                                            </div>
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

export default ViewAllEvent