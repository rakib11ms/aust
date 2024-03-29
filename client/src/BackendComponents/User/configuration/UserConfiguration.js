import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../../Dashboard/Sidebar';
import Topbar from '../../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import JoditEditor from "jodit-react";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@mui/material';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, ThemeProvider, createTheme } from '@mui/system';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function UserConfiguration() {


    const navigate = useNavigate();

    const [create_job_sector, setcreate_job_sector] = useState('');
    const [create_job_sub_sector, setcreate_job_sub_sector] = useState('');
    const [create_company_name, setcreate_company_name] = useState('');
    const [create_batch, setcreate_batch] = useState('');

    // console.log('batch', create_batch)
    const [create_stream, setcreate_stream] = useState('');
    const [create_blood_group, setcreate_blood_group] = useState('');

    const createJobSectorArrayData = create_job_sector.split(',');
    const createJobSubSectorArrayData = create_job_sub_sector.split(',');
    const createCompanyNameArrayData = create_company_name.split(',');
    const createBatchNameArrayData = create_batch.split(',');
    const createStreamArrayData = create_stream.split(',');
    const createBloodGroupArrayData = create_blood_group.split(',');

    console.log('yyy', createJobSectorArrayData, createJobSubSectorArrayData, createCompanyNameArrayData, createBatchNameArrayData, createStreamArrayData, createBloodGroupArrayData)

    const resetCreateForm = (e) => {
        e.preventDefault();
        document.getElementById("myForm").reset();
        setcreate_job_sub_sector("")
        setcreate_job_sector("")
        setcreate_company_name("")
        setcreate_blood_group("")
        setcreate_stream("")
        setcreate_batch("")
    }
    const submitCreateConfiguration = (e) => {
        e.preventDefault();
        setTimeout(() => {
            Swal.fire("Your Data Inserted Successfully", '', 'success')

        }, 1500)



        if (create_job_sector !== null) {

            createJobSectorArrayData.map((item, i) => {
                const data = {
                    job_sector_name: item
                }
                axios.post(`/api/add-job-sector`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_job_sector("");

                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_job_sector("");
            // Swal.fire("Job Sector Inserted Successfully", '', 'success')

        }
        if (create_job_sub_sector !== null) {
            createJobSubSectorArrayData.map((item, i) => {
                const data = {
                    job_sub_sector_name: item
                }
                axios.post(`/api/add-job-sub-sector`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_job_sub_sector("");
                        // setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_job_sub_sector("");

            // Swal.fire("Job Sub Sector Inserted Successfully", '', 'success')

        }

        if (create_company_name !== null) {
            createCompanyNameArrayData.map((item, i) => {
                const data = {
                    company_name: item
                }
                axios.post(`/api/add-company-name`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_company_name("");
                        // setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_company_name("");

            // Swal.fire("Company Name Inserted Successfully", '', 'success')

        }

        if (create_blood_group !== null) {
            createBloodGroupArrayData.map((item, i) => {
                const data = {
                    blood_group_name: item
                }
                axios.post(`/api/add-blood-group-name`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_blood_group("")
                        // setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_blood_group("")

            // Swal.fire("Blood Group Inserted Successfully", '', 'success')

        }

        if (create_stream !== null) {
            createStreamArrayData.map((item, i) => {
                const data = {
                    stream_name: item
                }
                axios.post(`/api/add-stream-name`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_stream("")
                        // setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_stream("")

            // Swal.fire("Stream Inserted Successfully", '', 'success')

        }

        if (create_batch !== null) {
            createBatchNameArrayData.map((item, i) => {
                const data = {
                    batch_name: item
                }
                axios.post(`/api/add-batch-name`, data).then(res => {
                    if (res.data.status == 200) {
                        // Swal.fire(res.data.message, '', 'success')
                        // setRenderAllPosts(res.data);
                        // closeAddPostCategoryModal();
                        // setcreate_batch("");
                        // setRenderAllCompanyName(res.data);
                        // setRenderAllJobSectorSubSectorMapData(res.data);
                    }
                    // else if (res.data.status == 400) {
                    //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                    //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                    // }
                })
            })
            setcreate_batch("");

            // Swal.fire("Batch Inserted Successfully", '', 'success')

        }

    }

    ///create job sector and job sub sector state mapping and submit///

    const [job_sector_id_state, setjob_sector_id_state] = useState('');
    // const [job_sub_sector_id_state, setjob_sub_sector_id_state] = useState('');

    const submitCreateJobMap = () => {

        jobSectorIds.forEach((item, i) => {
            console.log('items', item)
            const data = {
                job_sub_sector_id: item,
                job_sector_id: job_sector_id_state

            }
            axios.post(`/api/add-job-sector-job-sub-sector-map`, data).then(res => {
                if (res.data.status == 200) {
                    setRenderAllJobSectorSubSectorMapData(res.data)

                }
                // else if (res.data.status == 400) {
                //     setAddPostType({ ...addPostType, error_list: res.data.errors });
                //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

                // }
            })
        })
        Swal.fire("Mapping added successfully ", '', 'success')

    }

    ////create map job sector and job sub sector and view modal functionality start


    const jobsecjobsubsectorMappingAddModal = {
        content: {
            // marginTop: '70px',
            top: '50vh',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "80vw",
            height: "80vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1000 }

    };
    const jobsecjobsubsectorMappingeditModal = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: "45vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1200 }

    };


    const [addJobSectorJobSubSectorModalIsOpen, setaddJobSectorJobSubSectorModalIsOpen] = useState(false);
    function openAddJobSectorJobSubSectorModal(e) {
        e.preventDefault();
        setaddJobSectorJobSubSectorModalIsOpen(true)
        setRenderAllJobSectorSubSectorMapData(true)

    }
    function closeAddJobSectorJobSubSectorModal(e) {
        setaddJobSectorJobSubSectorModalIsOpen(false);
        setRenderAllJobSectorSubSectorMapData(false)

    }

    const [editJobSectorJobSubSectorModalIsOpen, seteditJobSectorJobSubSectorModalIsOpen] = useState(false);
    const [editJobSectorJobSubSectorId, seteditJobSectorJobSubSectorId] = useState("");
    const [edit_job_sector_id_state, setedit_job_sector_id_state] = useState('');
    const [edit_job_sub_sector_id_state, setedit_job_sub_sector_id_state] = useState('');

    function openEditJobSectorJobSubSectorModal(e, editJobSectorJobSubSectorId) {
        e.preventDefault();
        seteditJobSectorJobSubSectorModalIsOpen(true)
        seteditJobSectorJobSubSectorId(editJobSectorJobSubSectorId)
    }
    function closeEditJobSectorJobSubSectorModal(e) {
        seteditJobSectorJobSubSectorModalIsOpen(false);

    }


    ////create map job sector and job sub sector and view modal functionality end


    function updateEditJobMap() {
        const data = {
            job_sub_sector_id: edit_job_sub_sector_id_state,
            job_sector_id: edit_job_sector_id_state
        }

        axios.post(`/api/update-job-sector-job-sub-sector-map/${editJobSectorJobSubSectorId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllJobSectorSubSectorMapData(res.data)

                Swal.fire(res.data.message, '', 'success')
                closeEditJobSectorJobSubSectorModal();
                // setRenderAllPosts(res.data);
                // closeAddPostCategoryModal();
                // setjob_sector_id_state("");
                // job_sub_sector_id_state("")
            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    ////all job sector job sub sector fetch useffect start

    const [alljobSector, setAllJobSector] = useState([]);
    const [alljobSubSector, setAllJobSubSector] = useState([]);
    const [allJobSectorJubSectorMapData, setAllJobSectorSubSectorMapData] = useState([]);

    const [editJobSectorJobSubSectorData, seteditJobSectorJobSubSectorData] = useState("");

    console.log('edit mapping data', editJobSectorJobSubSectorData)

    const [renderAllJobSectorJubSectorMapData, setRenderAllJobSectorSubSectorMapData] = useState('');

    // console.log('all map',allJobSectorJubSectorMapData)



    useEffect(() => {
        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSector(res.data.job_sector);

            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSector(res.data.job_sub_sector);

            }
        })

        axios.get(`/api/job-sector-job-sub-sector-map`).then(res => {
            if (res.data.status == 200) {
                setAllJobSectorSubSectorMapData(res.data.all_mapping_job_sectors);
            }
        })

        axios.get(`/api/edit-job-sector-job-sub-sector-map/${editJobSectorJobSubSectorId}`).then(res => {
            if (res.data.status == 200) {
                seteditJobSectorJobSubSectorData(res.data.edit_job_sec_map);
                setedit_job_sub_sector_id_state(res.data.edit_job_sec_map.job_sub_sector_id)
                setedit_job_sector_id_state(res.data.edit_job_sec_map.job_sector_id)
            }
        })



        Modal.setAppElement('body');
    }, [renderAllJobSectorJubSectorMapData, editJobSectorJobSubSectorId])


    ////all job sector job sub sector fetch useffect end


    //job sector sub sector table map start ///

    const columns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: "Job Sub Sector", field: ``, render: (row) =>
                <div className=''>

                    {row.job_sub_sector_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: 'Job Sector', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">
                            {row.job_sector_name}

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditJobSectorJobSubSectorModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-job-sector-job-sub-sector-map/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setAllJobSectorSubSectorMapData(res.data.all_mapping_job_sectors)
                                                        // setRenderAllJobSectorSubSectorMapData(res.data)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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


    //job sector sub sector table map end ///


    //company name functionality view,edit,delete start //
    const companyNameViewModalStyle = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "80vw",
            height: "80vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1000 }

    };
    const companyNameEditModalStyle = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: "45vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1200 }

    };


    const [viewCompayNameModalIsOpen, setviewCompayNameModalIsOpen] = useState(false);
    function openViewComapnyNameModal(e) {
        e.preventDefault();
        setviewCompayNameModalIsOpen(true)
        setRenderAllCompanyName(e)
    }
    function closeViewCompanyNameModal(e) {
        setviewCompayNameModalIsOpen(false);

    }


    const [editCompanyName, setEditCompanyName] = useState('');
    const [editCompanyNameId, setEditCompanyNameId] = useState('');

    const [editCompayNameModalIsOpen, setEditCompayNameModalIsOpen] = useState(false);
    function openEditComapnyNameModal(e, editId) {
        e.preventDefault();
        setEditCompayNameModalIsOpen(true)
        setEditCompanyNameId(editId)
    }
    function closeEditCompanyNameModal(e) {
        setEditCompayNameModalIsOpen(false);

    }

    const [allCompanyName, setAllCompanyName] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([])
    console.log("all cc ", filteredCompanies)

    const [renderAllCompanyName, setRenderAllCompanyName] = useState('');

    useEffect(() => {
        axios.get(`/api/company-name`).then(res => {
            if (res.data.status == 200) {
                setAllCompanyName(res.data.company_name);
                setFilteredCompanies(res.data.company_name)

            }
        })

        axios.get(`/api/edit-company-name/${editCompanyNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditCompanyName(res.data.company_name.company_name);

            }
        })

    }, [renderAllCompanyName, editCompanyNameId])

    function updateCompanyName() {
        const data = {
            company_name: editCompanyName,
        }

        axios.post(`/api/update-company-name/${editCompanyNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllCompanyName(res.data)

                Swal.fire(res.data.message, '', 'success')
                closeEditCompanyNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const companycolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: "Company Name", field: ``, render: (row) =>
                <div className=''>

                    {row.company_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditComapnyNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-company-name/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllCompanyName(res.data.company_name)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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


    //company name functionality view,edit,delete end



    //batch name functional start //
    const BatchNameViewModalStyle = {
        content: {
            // marginTop: '70px',
            top: '50vh',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "80vw",
            height: "80vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1000 }

    };
    const BatchNameEditModalStyle = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: "45vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1200 }

    };


    const [viewBatchNameModalIsOpen, setviewBatchNameModalIsOpen] = useState(false);
    function openViewBatchNameModal(e) {
        e.preventDefault();
        setviewBatchNameModalIsOpen(true)
        setRenderAllBatchName(e)

    }
    function closeViewBatchNameModal(e) {
        setviewBatchNameModalIsOpen(false);

    }


    const [editBatchName, setEditBatchName] = useState('');
    const [editBatchNameId, setEditBatchNameId] = useState('');

    const [editBatchNameModalIsOpen, setEditBatchNameModalIsOpen] = useState(false);
    function openEditBatchNameModal(e, editId) {
        e.preventDefault();
        setEditBatchNameModalIsOpen(true)
        setEditBatchNameId(editId)
    }
    function closeEditBatchNameModal(e) {
        setEditBatchNameModalIsOpen(false);

    }

    const [allBatchName, setAllBatchName] = useState([]);
    const [renderAllBatchName, setRenderAllBatchName] = useState('');

    useEffect(() => {
        axios.get(`/api/batch-name`).then(res => {
            if (res.data.status == 200) {
                setAllBatchName(res.data.batch_name);
                // setRenderAllBatchName(res.data)

            }
        })



    }, [renderAllBatchName])

    useEffect(() => {
        axios.get(`/api/edit-batch-name/${editBatchNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditBatchName(res.data.batch_name.batch_name);

            }
        })
    }, [editBatchNameId])

    function updateBatchName() {
        const data = {
            batch_name: editBatchName,
        }

        axios.post(`/api/update-batch-name/${editBatchNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllBatchName(res.data)

                Swal.fire(res.data.message, '', 'success')
                // closeEditBatchNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const Batchcolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.batch_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditBatchNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-batch-name/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllBatchName(res.data.batch_name)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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



    //batch name functional end//


    //blood name functional start //


    const [viewBloodNameModalIsOpen, setviewBloodNameModalIsOpen] = useState(false);
    function openViewBloodNameModal(e) {
        e.preventDefault();
        setviewBloodNameModalIsOpen(true)
        setRenderAllBloodName(true)

    }
    function closeViewBloodNameModal(e) {
        setviewBloodNameModalIsOpen(false);
        setRenderAllBloodName(false)

    }


    const [editBloodName, setEditBloodName] = useState('');
    const [editBloodNameId, setEditBloodNameId] = useState('');

    const [editBloodNameModalIsOpen, setEditBloodNameModalIsOpen] = useState(false);
    function openEditBloodNameModal(e, editId) {
        e.preventDefault();
        setEditBloodNameModalIsOpen(true)
        setEditBloodNameId(editId)
    }
    function closeEditBloodNameModal(e) {
        setEditBloodNameModalIsOpen(false);

    }

    const [allBloodName, setAllBloodName] = useState([]);
    const [renderAllBloodName, setRenderAllBloodName] = useState('');

    useEffect(() => {
        axios.get(`/api/blood-group-name`).then(res => {
            if (res.data.status == 200) {
                setAllBloodName(res.data.blood_group_name);

            }
        })

        axios.get(`/api/edit-blood-group-name/${editBloodNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditBloodName(res.data.blood_group_name.blood_group_name);

            }
        })

    }, [renderAllBloodName, editBloodNameId])

    function updateBloodName() {
        const data = {
            blood_group_name: editBloodName,
        }

        axios.post(`/api/update-blood-group-name/${editBloodNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllBloodName(res.data)

                Swal.fire(res.data.message, '', 'success')
                // closeEditBatchNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const BloodGroupcolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.blood_group_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditBloodNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-blood-group-name/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllBloodName(res.data.blood_group_name)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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



    //blood group functional end//


    //stream name functional start //
    const StreamNameViewModalStyle = {
        content: {
            // marginTop: '70px',
            top: '50vh',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "80vw",
            height: "80vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1000 }

    };
    const StreamNameEditModalStyle = {
        content: {
            // marginTop: '70px',
            top: '40vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: "45vh",
            // background: "#ffffff",
        },
        // overlay: { zIndex: 1200 }

    };


    const [viewStreamNameModalIsOpen, setviewStreamNameModalIsOpen] = useState(false);
    function openViewStreamNameModal(e) {
        e.preventDefault();
        setRenderAllStreamName(true)
        setviewStreamNameModalIsOpen(true)
    }
    function closeViewStreamNameModal(e) {
        setviewStreamNameModalIsOpen(false);
        setRenderAllStreamName(false)

    }


    const [editStreamName, setEditStreamName] = useState('');
    const [editStreamNameId, setEditStreamNameId] = useState('');

    const [editStreamNameModalIsOpen, setEditStreamNameModalIsOpen] = useState(false);
    function openEditStreamNameModal(e, editId) {
        e.preventDefault();
        setEditStreamNameModalIsOpen(true)
        setEditStreamNameId(editId)
    }
    function closeEditStreamNameModal(e) {
        setEditStreamNameModalIsOpen(false);

    }

    const [allStreamName, setAllStreamName] = useState([]);
    const [renderAllStreamName, setRenderAllStreamName] = useState('');

    useEffect(() => {
        axios.get(`/api/stream-name`).then(res => {
            if (res.data.status == 200) {
                setAllStreamName(res.data.stream_name);

            }
        })

        axios.get(`/api/edit-stream-name/${editStreamNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditStreamName(res.data.stream_name.stream_name);

            }
        })

    }, [renderAllStreamName, editStreamNameId])

    function updateStreamName() {
        const data = {
            stream_name: editStreamName,
        }

        axios.post(`/api/update-stream-name/${editStreamNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllStreamName(res.data)

                Swal.fire(res.data.message, '', 'success')
                // closeEditStreamNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const Streamcolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.stream_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditStreamNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-stream-name/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllStreamName(res.data.stream_name)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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



    //stream name functional end//


    //job sector functionality start //


    const [renderAllJobSectorData, setRenderAllJobSectorData] = useState();
    const [viewJobSectorNameModalIsOpen, setviewJobSectorNameModalIsOpen] = useState(false);
    function openViewJobSectorNameModal(e) {
        e.preventDefault();
        setRenderAllJobSectorData(true)
        setviewJobSectorNameModalIsOpen(true)
    }
    function closeViewJobSectorNameModal(e) {
        setviewJobSectorNameModalIsOpen(false);
        setRenderAllJobSectorData(false)

    }


    const [editJobSectorName, setEditJobSectorName] = useState('');
    const [editJobSectorNameId, setEditJobSectorNameId] = useState('');

    const [editJobSectorNameModalIsOpen, setEditJobSectorNameModalIsOpen] = useState(false);
    function openEditJobSectorNameModal(e, editId) {
        e.preventDefault();
        setEditJobSectorNameModalIsOpen(true)
        setEditJobSectorNameId(editId)
    }
    function closeEditJobSectorNameModal(e) {
        setEditJobSectorNameModalIsOpen(false);

    }


    useEffect(() => {
        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSector(res.data.job_sector)

            }
        })

        axios.get(`/api/edit-job-sector/${editJobSectorNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditJobSectorName(res.data.job_sector.job_sector_name);

            }
        })

    }, [renderAllJobSectorData, editJobSectorNameId])

    function updateJobSectorName() {
        const data = {
            job_sector_name: editJobSectorName,
        }

        axios.post(`/api/update-job-sector/${editJobSectorNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllJobSectorData(res.data)

                Swal.fire(res.data.message, '', 'success')
                // closeEditStreamNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const JobSectorcolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.job_sector_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditJobSectorNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-job-sector/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllJobSectorData(res.data)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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
    //job sector functionality end//



    //job sub sector functionality start //


    const [renderAllJobSubSectorData, setRenderAllJobSubSectorData] = useState();
    const [viewJobSubSectorNameModalIsOpen, setviewJobSubSectorNameModalIsOpen] = useState(false);
    function openViewJobSubSectorNameModal(e) {
        e.preventDefault();
        setRenderAllJobSubSectorData(true)
        setviewJobSubSectorNameModalIsOpen(true)
    }
    function closeViewJobSubSectorNameModal(e) {
        setviewJobSubSectorNameModalIsOpen(false);
        setRenderAllJobSubSectorData(false)

    }


    const [editJobSubSectorName, setEditJobSubSectorName] = useState('');
    const [editJobSubSectorNameId, setEditJobSubSectorNameId] = useState('');

    const [editJobSubSectorNameModalIsOpen, setEditJobSubSectorNameModalIsOpen] = useState(false);
    function openEditJobSubSectorNameModal(e, editId) {
        e.preventDefault();
        setEditJobSubSectorNameModalIsOpen(true)
        setEditJobSubSectorNameId(editId)
    }
    function closeEditJobSubSectorNameModal(e) {
        setEditJobSubSectorNameModalIsOpen(false);

    }


    useEffect(() => {
        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSector(res.data.job_sub_sector)


            }
        })

        axios.get(`/api/edit-job-sub-sector/${editJobSubSectorNameId}`).then(res => {
            if (res.data.status == 200) {
                setEditJobSubSectorName(res.data.job_sub_sector.job_sub_sector_name);

            }
        })

    }, [renderAllJobSubSectorData, editJobSubSectorNameId])

    function updateJobSubSectorName() {
        const data = {
            job_sub_sector_name: editJobSubSectorName,
        }

        axios.post(`/api/update-job-sub-sector/${editJobSubSectorNameId}`, data).then(res => {
            if (res.data.status == 200) {
                setRenderAllJobSubSectorData(res.data)

                Swal.fire(res.data.message, '', 'success')
                // closeEditStreamNameModal();

            }
            // else if (res.data.status == 400) {
            //     setAddPostType({ ...addPostType, error_list: res.data.errors });
            //     Swal.fire(addPostType.error_list.type_name[0], '', 'error')

            // }
        })
    }


    const JobSubSectorcolumns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.job_sub_sector_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary'
                                    onClick={(e) => openEditJobSubSectorNameModal(e, row.id)}
                                >
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>




                                <div className='mx-2 '
                                    onClick={(e) => {
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
                                                axios.delete(`/api/delete-job-sub-sector/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRenderAllJobSubSectorData(res.data)
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
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


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
    //job sub sector functionality end//


    //job sector job sector mapping with multiple checkbox
    const [jobSectorIds, setjobSectorIds] = useState('');
    function handleChange(event, values) {
        const data = values.map((item, i) => {
            return item.id
        })
        setjobSectorIds(data)
    }


    const [replaceCompany,setReplaceCompany]=useState("");
    
    const [selectedRowsIds, setSelectedRowsIds] = useState([]);
    // console.log("selcted rows ids", selectedRowsIds)



    const selectionCheck = (selectedRows) => {
        // setSelectedRowsIds(selectedRows)
        let result = selectedRows.map(a => a.id);
        // console.log('result',result)

        setSelectedRowsIds(result);


    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2  sidebar-left1">
                    <Sidebar />
                </div>

                <div className="col-md-10 ">
                    <Topbar />

                    <div className='container-fluid'>


                        <section>

                            <div className='card mt-3'>
                                <div className='card-header bg-white  d-flex align-items-center justify-content-between'>
                                    <h5>Field Configuration</h5>
                                    <Link to="/view-all-advertisement"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={submitCreateConfiguration} id="myForm">

                                        <div className='row '>
                                            <h6 className='text-danger mb-4 mx-4 px-4'>Use Comma In Every Entity</h6>

                                            <div class="px-5 d-flex align-items-stretch" style={{ width: '100%' }}>
                                                {/* 
                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setadvertisement_title(e.target.value)} name="advertisement_title" value={advertisement_title} />

                                                </div> */}

                                                <div class="col-2 my-3" >
                                                    <div class="">
                                                        <p className=''>Batch(dropdown)</p>

                                                    </div>
                                                    <div class="">
                                                        <p className='p-0'>Blood Group(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p className=''>Stream(dropdown)</p>

                                                    </div>

                                                    <div class="">
                                                        <p class="py-1">Job Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p className='pt-1'>Job Sub Sector</p>

                                                    </div>


                                                    <div class="">
                                                        <p className='pt-2'>Name of Company</p>

                                                    </div>




                                                </div>
                                                <div className='col-7'>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder="Use comma like 1st,2nd,3rd" onChange={(e) => {
                                                            setcreate_batch(e.target.value);
                                                        }} name="create_batch" value={create_batch} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder=" Use comma like A+,A-,B+" onChange={(e) => {
                                                            setcreate_blood_group(e.target.value);
                                                        }} name="create_job_sector" value={create_blood_group} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder="Use comma like stream1,strem2,stream3" onChange={(e) => {
                                                            setcreate_stream(e.target.value);
                                                        }} name="create_stream" value={create_stream} />

                                                    </div>

                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder="" onChange={(e) => {
                                                            setcreate_job_sector(e.target.value);
                                                        }} name="create_job_sector" value={create_job_sector} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder="" onChange={(e) => {
                                                            setcreate_job_sub_sector(e.target.value);
                                                        }} name="create_job_sub_sector" value={create_job_sub_sector} />

                                                    </div>
                                                    <div class="">
                                                        <input type="text" class="form-control form-control-sm my-2" id="exampleFormControlInput1" placeholder="Pakiza Technovation,Square Group Ltd" onChange={(e) => {
                                                            setcreate_company_name(e.target.value);
                                                        }} name="create_company_name" value={create_company_name} />

                                                    </div>

                                                </div>
                                                <div className='col-2 mx-2 my-3 '>
                                                    <div className='' onClick={openViewBatchNameModal}>
                                                        <p>View All</p>

                                                    </div>

                                                    {/* view batch name modal start */}
                                                    <Modal
                                                        isOpen={viewBatchNameModalIsOpen}
                                                        onRequestClose={closeViewBatchNameModal}
                                                        style={companyNameViewModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewBatchNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className="">ALL Batch Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12 px-4">


                                                                    {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                    <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                        <MaterialTable
                                                                            components={{
                                                                                Container: props => <Paper {...props} elevation={0} />
                                                                            }}
                                                                            columns={Batchcolumns}
                                                                            data={allBatchName}
                                                                            // isLoading={loading === true ? true : false}


                                                                            options={{
                                                                                search: true,
                                                                                // filtering: true,
                                                                                toolbar: false,
                                                                                showTitle: false,
                                                                                searchFieldAlignment: "left",
                                                                                pageSize: 10,
                                                                                emptyRowsWhenPaging: false,
                                                                                // pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                selection: false,
                                                                                sorting: false,
                                                                                searchFieldAlignment: "left",

                                                                                // paging:false


                                                                            }}




                                                                        />

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit batch name modal */}
                                                    <Modal
                                                        isOpen={editBatchNameModalIsOpen}
                                                        onRequestClose={closeEditBatchNameModal}
                                                        style={companyNameEditModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditBatchNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className=""> Edit Batch Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">
                                                                    <label className='mb-2 fs-6 text-secondary '>Batch Name</label>

                                                                    <div className=''>
                                                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={editBatchName} onChange={(e) => setEditBatchName(e.target.value)} />
                                                                    </div>



                                                                    <div className='text-center mt-2'>
                                                                        <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateBatchName} style={{ color: '#0FA958' }}>Update</button>

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>



                                                    <div className='' onClick={openViewBloodNameModal}>
                                                        <p>View All</p>
                                                    </div>

                                                    {/* view blood group name modal start */}
                                                    <Modal
                                                        isOpen={viewBloodNameModalIsOpen}
                                                        onRequestClose={closeViewBloodNameModal}
                                                        style={companyNameViewModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewBloodNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className="">ALL Blood Group Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12 px-4">


                                                                    {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                    <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                        <MaterialTable
                                                                            components={{
                                                                                Container: props => <Paper {...props} elevation={0} />
                                                                            }}
                                                                            columns={BloodGroupcolumns}
                                                                            data={allBloodName}
                                                                            // isLoading={loading === true ? true : false}


                                                                            options={{
                                                                                search: true,
                                                                                // filtering: true,
                                                                                toolbar: false,
                                                                                showTitle: false,
                                                                                searchFieldAlignment: "left",
                                                                                pageSize: 5,
                                                                                emptyRowsWhenPaging: false,
                                                                                pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                selection: false,
                                                                                sorting: false,
                                                                                searchFieldAlignment: "left",

                                                                                // paging:false


                                                                            }}




                                                                        />

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit blood group name modal */}
                                                    <Modal
                                                        isOpen={editBloodNameModalIsOpen}
                                                        onRequestClose={closeEditBloodNameModal}
                                                        style={companyNameEditModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditBloodNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className=""> Edit Blood Group Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">
                                                                    <label className='mb-2 fs-6 text-secondary '>Blood Group Name</label>

                                                                    <div className=''>
                                                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={editBatchName} onChange={(e) => setEditBloodName(e.target.value)} />
                                                                    </div>



                                                                    <div className='text-center mt-2'>
                                                                        <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateBloodName} style={{ color: '#0FA958' }}>Update</button>

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>




                                                    <div className='' onClick={openViewStreamNameModal}>
                                                        <p>View All</p>
                                                    </div>

                                                    {/* view stream name modal start */}
                                                    <Modal
                                                        isOpen={viewStreamNameModalIsOpen}
                                                        onRequestClose={closeViewStreamNameModal}
                                                        style={companyNameViewModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewStreamNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className="">ALL Stream Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12 px-4">


                                                                    {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                    <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                        <MaterialTable
                                                                            components={{
                                                                                Container: props => <Paper {...props} elevation={0} />
                                                                            }}
                                                                            columns={Streamcolumns}
                                                                            data={allStreamName}
                                                                            // isLoading={loading === true ? true : false}


                                                                            options={{
                                                                                search: true,
                                                                                // filtering: true,
                                                                                toolbar: false,
                                                                                showTitle: false,
                                                                                searchFieldAlignment: "left",
                                                                                pageSize: 5,
                                                                                emptyRowsWhenPaging: false,
                                                                                pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                selection: false,
                                                                                sorting: false,
                                                                                searchFieldAlignment: "left",

                                                                                // paging:false


                                                                            }}




                                                                        />

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit stream name modal */}
                                                    <Modal
                                                        isOpen={editStreamNameModalIsOpen}
                                                        onRequestClose={closeEditStreamNameModal}
                                                        style={companyNameEditModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditStreamNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className=""> Edit Stream Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">
                                                                    <label className='mb-2 fs-6 text-secondary '>Stream Name</label>

                                                                    <div className=''>
                                                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={editStreamName} onChange={(e) => setEditStreamName(e.target.value)} />
                                                                    </div>



                                                                    <div className='text-center mt-2'>
                                                                        <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateStreamName} style={{ color: '#0FA958' }}>Update</button>

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>






                                                    <div className='' onClick={openViewJobSectorNameModal}>
                                                        <p>View All</p>

                                                    </div>

                                                    {/* view job sector name modal start */}
                                                    <Modal
                                                        isOpen={viewJobSectorNameModalIsOpen}
                                                        onRequestClose={closeViewJobSectorNameModal}
                                                        style={StreamNameViewModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobSectorNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className="">ALL Job Sector Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12 px-4">


                                                                    {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                    <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                        <MaterialTable
                                                                            components={{
                                                                                Container: props => <Paper {...props} elevation={0} />
                                                                            }}
                                                                            columns={JobSectorcolumns}
                                                                            data={alljobSector}
                                                                            // isLoading={loading === true ? true : false}


                                                                            options={{
                                                                                search: true,
                                                                                // filtering: true,
                                                                                toolbar: false,
                                                                                showTitle: false,
                                                                                searchFieldAlignment: "left",
                                                                                pageSize: 5,
                                                                                emptyRowsWhenPaging: false,
                                                                                pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                selection: false,
                                                                                sorting: false,
                                                                                searchFieldAlignment: "left",

                                                                                // paging:false


                                                                            }}




                                                                        />

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit job sector name modal */}
                                                    <Modal
                                                        isOpen={editJobSectorNameModalIsOpen}
                                                        onRequestClose={closeEditJobSectorNameModal}
                                                        style={StreamNameEditModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSectorNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className=""> Edit Job Sector Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">
                                                                    <label className='mb-2 fs-6 text-secondary '>Job Sector Name</label>

                                                                    <div className=''>
                                                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={editJobSectorName} onChange={(e) => setEditJobSectorName(e.target.value)} />
                                                                    </div>



                                                                    <div className='text-center mt-2'>
                                                                        <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateJobSectorName} style={{ color: '#0FA958' }}>Update</button>

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>


                                                    <div class="d-flex mt-4">
                                                        <div className='' onClick={openViewJobSubSectorNameModal}>
                                                            <p>View All</p>
                                                        </div>
                                                        {/* view job sub sector name modal start */}
                                                        <Modal
                                                            isOpen={viewJobSubSectorNameModalIsOpen}
                                                            onRequestClose={closeViewJobSubSectorNameModal}
                                                            style={StreamNameViewModalStyle}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewJobSubSectorNameModal}><i class="fa fa-times"></i></span>

                                                                <h6 className="">ALL Job Sub Sector Name</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12 px-4">


                                                                        {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                        <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                            <MaterialTable
                                                                                components={{
                                                                                    Container: props => <Paper {...props} elevation={0} />
                                                                                }}
                                                                                columns={JobSubSectorcolumns}
                                                                                data={alljobSubSector}
                                                                                // isLoading={loading === true ? true : false}


                                                                                options={{
                                                                                    search: true,
                                                                                    // filtering: true,
                                                                                    toolbar: false,
                                                                                    showTitle: false,
                                                                                    searchFieldAlignment: "left",
                                                                                    pageSize: 5,
                                                                                    emptyRowsWhenPaging: false,
                                                                                    pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                    selection: false,
                                                                                    sorting: false,
                                                                                    searchFieldAlignment: "left",

                                                                                    // paging:false


                                                                                }}




                                                                            />

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>

                                                        {/* edit job sub sector name modal */}
                                                        <Modal
                                                            isOpen={editJobSubSectorNameModalIsOpen}
                                                            onRequestClose={closeEditJobSubSectorNameModal}
                                                            style={StreamNameEditModalStyle}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSubSectorNameModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Edit Job Sub Sector Name</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12">
                                                                        <label className='mb-2 fs-6 text-secondary '>Job Sector Name</label>

                                                                        <div className=''>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={editJobSubSectorName} onChange={(e) => setEditJobSubSectorName(e.target.value)} />
                                                                        </div>



                                                                        <div className='text-center mt-2'>
                                                                            <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateJobSubSectorName} style={{ color: '#0FA958' }}>Update</button>

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>










                                                        <div className='' onClick={openAddJobSectorJobSubSectorModal}>
                                                            <p className='border border-success rounded-3 px-2 mx-2 s '>Map</p>
                                                        </div>

                                                        {/* add jobsector job subsector mapping modal */}
                                                        <Modal
                                                            isOpen={addJobSectorJobSubSectorModalIsOpen}
                                                            onRequestClose={closeAddJobSectorJobSubSectorModal}
                                                            style={jobsecjobsubsectorMappingAddModal}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddJobSectorJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Mapping</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12 px-4">

                                                                        <div className=''>
                                                                            <select class="form-select " aria-label="Default select example" onChange={(e) => setjob_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sector</option>
                                                                                {
                                                                                    alljobSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </div>


                                                                        <div>




                                                                            <div class="mt-4 ">
                                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Job sub sector</label>
                                                                                <Stack spacing={1} sx={{ width: '100%', paddingTop: '8px' }}>
                                                                                    <Autocomplete
                                                                                        multiple
                                                                                        id="tags-standard"
                                                                                        options={alljobSubSector}
                                                                                        getOptionLabel={(option) => option.job_sub_sector_name}
                                                                                        // defaultValue={[allUsers[1]]}
                                                                                        onChange={handleChange}

                                                                                        getOptionSelected={(option, value) =>
                                                                                            option.id === value.id
                                                                                        }

                                                                                        renderInput={(params) => (

                                                                                            <TextField


                                                                                                {...params}
                                                                                                // variant="standard"
                                                                                                // label="Multiple values"
                                                                                                placeholder="Search..."
                                                                                            />
                                                                                        )}


                                                                                    />
                                                                                </Stack>




                                                                            </div>

                                                                        </div>


                                                                        <div className='text-center'>
                                                                            <button className='btn btn-success btn-sm text-white me-5 rounded-3 text-center px-4 py-2 mt-1 ' onClick={submitCreateJobMap} style={{ color: '#0FA958' }}>Map</button>

                                                                        </div>

                                                                        <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6>

                                                                        <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                            <MaterialTable
                                                                                components={{
                                                                                    Container: props => <Paper {...props} elevation={0} />
                                                                                }}
                                                                                columns={columns}
                                                                                data={allJobSectorJubSectorMapData}
                                                                                // isLoading={loading === true ? true : false}


                                                                                options={{
                                                                                    search: true,
                                                                                    // filtering: true,
                                                                                    toolbar: false,
                                                                                    showTitle: false,
                                                                                    searchFieldAlignment: "left",
                                                                                    pageSize: 5,
                                                                                    emptyRowsWhenPaging: false,
                                                                                    pageSizeOptions: [5, 10, 20, 50, 100],
                                                                                    selection: false,
                                                                                    sorting: false,
                                                                                    searchFieldAlignment: "left",

                                                                                    // paging:false


                                                                                }}




                                                                            />

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>


                                                        {/* edit jobsector job subsector mapping modal */}
                                                        <Modal
                                                            isOpen={editJobSectorJobSubSectorModalIsOpen}
                                                            onRequestClose={closeEditJobSectorJobSubSectorModal}
                                                            style={jobsecjobsubsectorMappingeditModal}
                                                            contentLabel="Example Modal"
                                                        >

                                                            <div className='card-body '>
                                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditJobSectorJobSubSectorModal}><i class="fa fa-times"></i></span>

                                                                <h6 className=""> Edit Job Sector Mapping</h6>
                                                                <hr />


                                                                <div className="row">

                                                                    <div className="col-12">
                                                                        <label className='mb-2 fs-6 text-secondary '>Job Sector</label>

                                                                        <div className=''>
                                                                            <select class="form-select" aria-label="Default select example" value={edit_job_sector_id_state} onChange={(e) => setedit_job_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sector</option>
                                                                                {
                                                                                    alljobSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </div>

                                                                        <div className='my-3'>
                                                                            <label className='mb-2 fs-6 text-secondary'>Job Sub Sector</label>

                                                                            <select class="form-select" aria-label="Default select example" value={edit_job_sub_sector_id_state} onChange={(e) => setedit_job_sub_sector_id_state(e.target.value)}>
                                                                                <option selected disabled>Choose Job Sub Sector</option>
                                                                                {
                                                                                    alljobSubSector.map((item, i) => {
                                                                                        return (
                                                                                            <>
                                                                                                <option value={item.id}>{item.job_sub_sector_name}</option>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>


                                                                        <div className='text-center'>
                                                                            <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateEditJobMap} style={{ color: '#0FA958' }}>Update</button>

                                                                        </div>





                                                                    </div>



                                                                </div>
                                                            </div>

                                                        </Modal>


                                                    </div>

                                                    <div className='' onClick={openViewComapnyNameModal}>
                                                        <p>View All</p>

                                                    </div>

                                                    {/* view company name modal start */}
                                                    <Modal
                                                        isOpen={viewCompayNameModalIsOpen}
                                                        onRequestClose={closeViewCompanyNameModal}
                                                        style={companyNameViewModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeViewCompanyNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className="">ALL Company Name</h6>
                                                            {/* <hr /> */}

                                                            <div className='d-flex justify-content-between'>
                                                                
                                                                <div className='d-flex'>
                                                                <div className=''>
                                                                    <input type='text' className='form-control' placeholder='replace this' value={replaceCompany} onChange={(e)=>setReplaceCompany(e.target.value)}/>
                                                                </div>
                                                                <button className='btn btn-secondary btn-sm mx-2' 
                                                                onClick={()=>{
                                                                    const data={
                                                                        company_name:replaceCompany,
                                                                        replace_company_ids:selectedRowsIds
                                                                    }
                                                                    // console.log("BB",data)
                                                                    axios.post("/api/replace-company",data).then(res=>{
                                                                        if(res.data.status==200){
                                                                            Swal.fire({
                                                                                title: "Replaced Company Name?",
                                                                                icon: "success"
                                                                              });
                                                                            window.location.reload();
                                                                        }
                                                                    })
                                                               
                                                                }}
                                                                > Replace</button>
                                                                </div>
                                                         
                                                                <div className='d-flex align-items-center mt-1'>


                                                                    <div class="">
                                                                        <input type="text" onChange={(e) => {
                                                                            if (e.target.value !== null) {
                                                                                const result = allCompanyName.filter((item) => {
                                                                                    return item.company_name && item.company_name.toLowerCase().includes(e.target.value.toLowerCase());
                                                                                });
                                                                                // setAllCompanyName(result)
                                                                                // console.log("all cc ", result)
                                                                                setFilteredCompanies(result)

                                                                            }



                                                                        }} class="form-control" id="exampleFormControlInput1" placeholder="Search Company" />
                                                                    </div>
                                                                    <div className='mx-2'>
                                                                        <button className='btn btn-success '> Search..</button>
                                                                    </div>
                                                                </div>
                                                            </div>





                                                            <div className="row">

                                                                <div className="col-12 px-4">


                                                                    {/* <h6 className='mt-2 mx-1'>ALL JobSector Mapping</h6> */}

                                                                    <div class="job-sector-sub-sector-map-table mt-3 card">
                                                                        <MaterialTable
                                                                            components={{
                                                                                Container: props => <Paper {...props} elevation={0} />
                                                                            }}
                                                                            columns={companycolumns}
                                                                            data={filteredCompanies}
                                                                            // isLoading={loading === true ? true : false}
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
                                                                                selection: false,
                                                                                sorting: false,
                                                                                selection: true,

                                                                                searchFieldAlignment: "left",

                                                                                // paging:false


                                                                            }}




                                                                        />

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>

                                                    {/* edit company name modal */}
                                                    <Modal
                                                        isOpen={editCompayNameModalIsOpen}
                                                        onRequestClose={closeEditCompanyNameModal}
                                                        style={companyNameEditModalStyle}
                                                        contentLabel="Example Modal"
                                                    >

                                                        <div className='card-body '>
                                                            <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditCompanyNameModal}><i class="fa fa-times"></i></span>

                                                            <h6 className=""> Edit Company Name</h6>
                                                            <hr />


                                                            <div className="row">

                                                                <div className="col-12">
                                                                    <label className='mb-2 fs-6 text-secondary '>Company Name</label>

                                                                    <div className=''>
                                                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" value={editCompanyName} onChange={(e) => setEditCompanyName(e.target.value)} />
                                                                    </div>



                                                                    <div className='text-center mt-2'>
                                                                        <button className='btn btn-success btn-sm text-dark me-5 rounded-3 px-4 py-2 mt-1 ' onClick={updateCompanyName} style={{ color: '#0FA958' }}>Update</button>

                                                                    </div>





                                                                </div>



                                                            </div>
                                                        </div>

                                                    </Modal>


                                                </div>



                                            </div>


                                        </div>






                                        <div class="mt-5 text-center">
                                            <button type="button" className='btn btn-success rounded-3 text-success px-5 mx-2 bg-white' onClick={resetCreateForm}>RESET</button>
                                            <button type="submit" className='btn btn-success rounded-3 px-5 mx-2' onSubmit={submitCreateConfiguration}>SAVE</button>
                                        </div>




                                    </form>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserConfiguration;