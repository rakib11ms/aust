import React, { useState, useEffect } from 'react';


import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';
// import './event.css'

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



function ViewAllAdvertisement() {


    const [loading, setLoading] = useState(true);

    const [allAdvertisements, setAllAdvertisements] = useState([]);

    var currentDate = moment().format("YYYY-MM-DD");

    console.log('hello dada', typeof (currentDate));




    const [totalActiveAdvertisements, setTotalActiveAdvertisements] = useState([]);
    const [totalPauseAdvertisements, setTotalPauseAdvertisements] = useState([]);




    console.log('all advertisements', allAdvertisements)


    const [renderAllAdvertisements, setRenderAllAdvertisements] = useState('');

    // console.log('all posts check', allEvents)

    //add functionality for post category






    const formData = new FormData();



    const handleAdvertisementDaysFilter = (e, id) => {
        if (e.target.value == 2) {

            axios.get(`/api/filter-advertisement-finishing-days/2`).then(res => {
                if (res.data.status == 200) {
                    setAllAdvertisements(res.data.all_advertisements);
                    setLoading(false);

                }
            })
        }
        else if (e.target.value == 5) {
            axios.get(`/api/filter-advertisement-finishing-days/5`).then(res => {
                if (res.data.status == 200) {
                    setAllAdvertisements(res.data.all_advertisements);
                    setLoading(false);

                }
            })
        }
        else if (e.target.value == 7) {
            axios.get(`/api/filter-advertisement-finishing-days/7`).then(res => {
                if (res.data.status == 200) {
                    setAllAdvertisements(res.data.all_advertisements);
                    setLoading(false);

                }
            })
        }
        else if (e.target.value == 15) {
            axios.get(`/api/filter-advertisement-finishing-days/15`).then(res => {
                if (res.data.status == 200) {
                    setAllAdvertisements(res.data.all_advertisements);
                    setLoading(false);

                }
            })
        }
        else if (e.target.value == 'all') {
            axios.get(`/api/filter-advertisement-finishing-days/all`).then(res => {
                if (res.data.status == 200) {
                    setAllAdvertisements(res.data.all_advertisements);

                    setLoading(false);

                }
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

    const [viewAdvertisementDescription, setViewAdvertisementDescription] = useState('');


    const [viewJobPostModalIsOpen, setviewJobPostModalIsOpen] = useState(false);
    function openViewEventPostModal(e, viewEventPost) {
        e.preventDefault();
        setViewAdvertisementDescription(viewEventPost)
        setviewJobPostModalIsOpen(true)
        setAllImagesfromDatabase(viewEventPost.image.split(','))

    }
    function closeViewJobPostModal(e) {
        setviewJobPostModalIsOpen(false);

    }




    useEffect(() => {
        axios.get(`/api/all-advertisements`).then(res => {
            if (res.data.status == 200) {
                setAllAdvertisements(res.data.all_advertisements);
                setTotalPauseAdvertisements(res.data.total_pause_advertisements);
                setTotalActiveAdvertisements(res.data.total_active_advertisements);
                setLoading(false);

            }
        })
        // Modal.setAppElement('body');

    }, [renderAllAdvertisements])







    const deleteAdvertisement = (e, id) => {

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
                axios.post(`/api/delete-advertisement/${id}`).then(res => {
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

                    {/* <img className="rounded" src={`${global.img_url}/images/${row.image.split(',')[0]}`} width="100px" height="70px" alt="No Image" /> */}


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
                                    <Link to={`/edit-advertisement/${row.id}`}><i className='fa fa-edit mx-2 icon-table-archive'></i> </Link>

                                </div>


                                <div className='mx-2 ' onClick={(e) => deleteAdvertisement(e, row.id)}>
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>





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

                    <div class="" >


                        <div class="d-flex" style={{ color: '#777777' }}>

                            {/* <div className='badgee'>
                                <i class="fa-solid fa-users"></i>
                            </div> */}

                            <div className=''>
                                <i class="fa fa-clock"></i>
                                <span className='mx-1'>{row.show_time} Sec</span>
                            </div>

                            <div className='mx-2'>
                                <i class="fa fa-calendar"></i>
                                <span className='mx-1'>
                                    Last showing days

                                    <span class="badge bg-warning text-dark px-2 mx-2 ">{row.last_show_days}</span>

                                </span>
                            </div>


                        </div>

                        <div className=''>
                            <h5>{row.advertisement_title}</h5>
                        </div>

                        <div className=''>
                            <i class="fas fa-link"></i>
                            <span className='mx-1'><a href={row.redirect_link}>{row.redirect_link}</a></span>
                        </div>



                        <div className='mt-2' style={{ color: '#777777' }} dangerouslySetInnerHTML={{ __html: row.advertisement_description.length > 50 ? `${row.advertisement_description.substring(0, 50)}...` : row.advertisement_description }}
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









    const [advertisementFiltering, setadvertisementFiltering] = useState('all');

    // console.log('filtered post val',allEvents)
    console.log('filter click check', advertisementFiltering)



    useEffect(() => {
        axios.get(`/api/filter-advertisement-posts/${advertisementFiltering}`).then(res => {
            if (res.data.status == 200) {
                // setallEvents(res.data.event_posts);
                setAllAdvertisements(res.data.all_advertisements)
                setLoading(false);
            }
        })

    }, [advertisementFiltering])

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
                axios.delete(`/api/delete-multiple-advertisements/${selectedRowsIds}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllAdvertisements(res.data)
                        window.location.reload();
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Advertisements deleted successfully',
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


    const handleAllAdvertisementStatus = (e) => {

        if (e.target.value == 'active') {
            axios.put(`/api/active-all-advertisements-by-update/${selectedRowsIds}`).then(res => {
                if (res.data.status == 200) {

                    // Swal.fire(res.data.message, '', 'success')
                    window.location.reload();
                    // setallEvents(res.data.allEvents)
                    setRenderAllAdvertisements(res.data);

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

                            <section className='view-event-header d-flex justify-content-end rounded-3 mt-3'>
                                <div class="col-5 ">
                                    <div class="view-event-header-form  px-3 ">
                                        <div class="input-group">
                                            <input type="text" class="form-control shadow-sm" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" data-aos="flip-up"/>

                                            <span class="input-group-text bg-white py-3 shadow-sm" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="view-event-header-data text-light px-5">
                                    <div class=" d-flex">
                                        <div class="i mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalActiveAdvertisements}</h4>
                                            <p className=''>Total Active </p>
                                        </div>
                                        <div class=" mx-2 mt-3">
                                            <h4 className=' mb-0'>{totalPauseAdvertisements} </h4>
                                            <p className=''> Total Pause</p>
                                        </div>
                                        {/* <div class="mx-2 mt-3">
                                            <h4 className=' mb-0'>20 </h4>
                                            <p className=''>Departments</p>
                                        </div> */}


                                    </div>
                                </div>


                            </section>




                            <div className="col-md-12 mt-3">
                                <h5 className=''>ALL Advertisements</h5>

                                {/* <div className='mb-3' style={{ position: 'relative', zIndex: '9999' }}>

                                   asd
                                </div> */}

                                <div className="card bg-white">

                                    <div className="card-body ">

                                        <div className='table-filter-tab bg-white'>

                                            <div className='d-flex table-filter-menus align-items-center'>

                                                <h6 className={`${advertisementFiltering === 'all' ? 'filterTrack' : ""} mx-2`} onClick={() => setadvertisementFiltering('all')}>All</h6>
                                                <h6 className={`${advertisementFiltering === 1 ? 'filterTrack' : ""} mx-3`} onClick={() => setadvertisementFiltering(1)}>Active</h6>
                                                <h6 className={`${advertisementFiltering === 0 ? 'filterTrack' : ""} mx-3`} onClick={() => setadvertisementFiltering(0)}>Paused</h6>
                                                {/* <h6 className={`${advertisementFiltering === '' ? 'filterTrack' : ""} mx-3`} onClick={() => setadvertisementFiltering('')}>Finishing 15 Days</h6> */}
                                                <h6 className='mx-3'>
                                                    <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAdvertisementDaysFilter}>
                                                        <option selected value="all">Choose</option>
                                                        <option value="2">Finish 2 days</option>
                                                        <option value="5">Finish 5 days</option>
                                                        <option value="7">Finish 1 week</option>
                                                        <option value="15">Finish 15 days</option>
                                                    </select>
                                                </h6>


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
                                                            <select class="form-select form-select-sm rounded-pill" aria-label=".form-select-sm example" onChange={handleAllAdvertisementStatus}>
                                                                <option selected>Action</option>
                                                                <option value="active">Active</option>
                                                                {/* <option value="archive">Archive</option> */}
                                                            </select>
                                                        </div>



                                                    </>
                                                }


                                                <div className='mx-3'>


                                                    <Link to="/create-advertisement"><button className='btn px-4 rounded-pill shadow-sm border' style={{ color: "#4F4F4F", fontWeight: '450' }}> <span>+ </span>Create </button></Link>

                                                </div>


                                            </div>

                                        </div>
                                        <hr />

                                        <MaterialTable
                                            //        components={{
                                            //         Container: props => <Paper {...props} />
                                            //    }}
                                            columns={columns}
                                            data={allAdvertisements}
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

                                    <h5 className=""> Full Advertisement View</h5>
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


                                            <div className='d-flex justify-content-between mt-4'>
                                                <div className='mt-3'>
                                                    <h5>{viewAdvertisementDescription.advertisement_title}</h5>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <i class="fas fa-calendar"></i>
                                                            <span className='mx-2'>Uploaded date: {moment(viewAdvertisementDescription.created_at).format("YYYY-MM-DD")}</span>
                                                        </div>
                                                        <div className='mx-3'>
                                                            <i class="fas fa-clock"></i>
                                                            <span className='mx-2'>Show Days: {viewAdvertisementDescription.show_days} days</span>
                                                        </div>
                                                    </div>







                                                </div>

                                                <div>
                                                    <button className='btn  btn-sm py-1  px-3 my-0 outline-0' style={{ borderRadius: "7px", backgroundColor: "#0FA958", color: "#f1f1f1" }}> <span className='text-center'>{viewAdvertisementDescription.show_time} Sec</span> </button>


                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between mt-2'>
                                                <div className=''>

                                                    Advertisement Fee: <span>{viewAdvertisementDescription.advertisement_fee} Taka</span>

                                                </div>

                                                <div className=''>
                                                    Contact Persons:

                                                    <div className='bg-light d-inline px-2 py-1 rounded-pill me-4' >

                                                        {viewAdvertisementDescription.dept_name}
                                                    </div>
                                                </div>

                                            </div>



                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: viewAdvertisementDescription.advertisement_description }}
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

export default ViewAllAdvertisement