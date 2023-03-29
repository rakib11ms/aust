import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from 'moment';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route, useParams } from "react-router-dom";
function EditUser() {

    const params = useParams();

    const editId = params.id;

    const [editUserData, setEditUserData] = useState('');
    console.log('edit user', editUserData)
    useEffect(() => {
        axios.get(`/api/edit-user/${editId}`).then(res => {
            if (res.data.status == 200) {
                setEditUserData(res.data.edit_user);
            }
        })
    }, [editId])
    const [allBloodGroupName, setAllBloodGroupName] = useState([]);
    const [allCompanyName, setAllCompanyName] = useState([]);
    const [allBatchName, setAllBatchName] = useState([]);
    const [allGenderName, setAllGenderName] = useState([]);
    const [allStreamName, setAllStreamName] = useState([]);
    const [allJobSectorAsc, setAllJobSectorAsc] = useState([]);
    const [allJobSubSectorAsc, setAllJobSubSectorAsc] = useState([]);
    const [allThana, setAllThana] = useState([]);
    const [gender_name, setgender_name] = useState(null);


    useEffect(() => {
        axios.get(`/api/batch-name`).then(res => {
            if (res.data.status == 200) {
                setAllBatchName(res.data.batch_name);

            }
        })
        axios.get(`/api/blood-group-name`).then(res => {
            if (res.data.status == 200) {
                setAllBloodGroupName(res.data.blood_group_name);

            }
        })
        axios.get(`/api/company-name`).then(res => {
            if (res.data.status == 200) {
                setAllCompanyName(res.data.company_name);
            }
        })
        axios.get(`/api/stream-name`).then(res => {
            if (res.data.status == 200) {
                setAllStreamName(res.data.stream_name);

            }
        })

        axios.get(`/api/job-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSectorAsc(res.data.job_sector_asc);

            }
        })

        axios.get(`/api/job-sub-sector`).then(res => {
            if (res.data.status == 200) {
                setAllJobSubSectorAsc(res.data.job_sub_sector_asc);

            }
        })
        axios.get(`/api/all-thana`).then(res => {
            if (res.data.status == 200) {
                setAllThana(res.data.all_thana);

            }
        })
    }, [])

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>
                    <div className='col-md-10 '>
                        <Topbar />

                        <div className='wrapper-divv mt-2 px-2 py-1 '>
                            <div className='d-flex justify-content-between'>
                                <h5 className=''>Edit User</h5>
                                <button className='btn btn-sm btn-success'>
                                    <Link to="/view-all-users" className='text-white text-decoration-none'>  Back</Link>
                                </button>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 border-right'>
                                    <h6 className=''>Personal Information</h6>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Full Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="full_name" value={editUserData.full_name} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Nick Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="nick_name" value={editUserData.nick_name} />
                                        </div>

                                    </div>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Phone No</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="phone_no" value={editUserData.phone_no} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">District</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="district" value={editUserData.district} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Thana</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="thana" value={editUserData.thana} />
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Postal Code</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="postal_code" value={editUserData.postal_code} />
                                        </div>

                                    </div>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Present Address</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="present_address" value={editUserData.present_address} />
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Permanent Address</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="permanent_address" value={editUserData.permanent_address} />
                                        </div>

                                    </div>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Gender</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)} name="gender" value={editUserData.gender}>
                                                <option selected disabled>Open this select menu</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>


                                            </select>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Batch</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)} name="batch" value={editUserData.batch}>
                                                <option selected disabled>Open this select menu</option>

                                                {
                                                    allBatchName.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.batch_name}>{item.batch_name}</option>

                                                            </>
                                                        )
                                                    })
                                                }


                                            </select>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Stream</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)} name="stream" value={editUserData.stream}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allStreamName.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.stream_name}>{item.stream_name}</option>

                                                            </>
                                                        )
                                                    })
                                                }


                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h6 className=''>Social Information</h6>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Job Sector</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allJobSectorAsc.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.job_sector_name}>{item.job_sector_name}</option>

                                                            </>
                                                        )
                                                    })
                                                }


                                            </select>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Job Sub Sector</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allJobSubSectorAsc.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.job_sub_sector_name}>{item.job_sub_sector_name}</option>

                                                            </>
                                                        )
                                                    })
                                                }


                                            </select>
                                        </div>

                                    </div>

                                    {/* <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Company (Current)</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allStreamName.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.stream_name}>{item.stream_name}</option>

                                                            </>
                                                        )
                                                    })
                                                }


                                            </select>
                                        </div>

                                    </div> */}
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Facebook Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.facebook_link} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Linkedin Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="linkedin_link" value={editUserData.linkedin_link} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Twitter Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="twitter_link" value={editUserData.twitter_link} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Profile Pic</label>
                                        <div class="col-sm-10">
                                            <input type="file" class="form-control" id="inputText" name="twitter_link" value={editUserData.twitter_link} />
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <h6 className=''>Educational Information</h6>
                                    {
                                        editUserData.educational_info !== undefined &&

                                        <div className='mb-3 row'>


                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">SSC Grade</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_grade} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">SSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_passing_year} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">SSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
                                                </div>

                                            </div>
                                        </div>

                                    }
                                    {
                                        editUserData.educational_info !== undefined &&
                                        <div className='mb-3 row'>


                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">HSC Grade</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_grade} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">HSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_passing_year} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">HSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
                                                </div>

                                            </div>
                                        </div>
                                    }
                                    {
                                        editUserData.educational_info !== undefined &&


                                        <div className='mb-3 row'>


                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">BSC Grade</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_grade} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">BSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_passing_year} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">BSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
                                                </div>

                                            </div>
                                        </div>
                                    }

                                    {
                                        editUserData.educational_info !== undefined &&

                                        <div className='mb-3 row'>


                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">MSC Grade</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_grade} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">MSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_passing_year} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">MSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
                                                </div>

                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <h6 className=''>Professional Information</h6>
                                    {
                                        editUserData.professional_info !== undefined && editUserData.professional_info.map(()=>{
                                         return(
                                            <>
                                                 <div className='mb-3 row'>


<div class="col-md-3">
    <label for="inputPassword" class="col-sm-4 col-form-label">Company</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_grade} />
    </div>

</div>
<div class="col-md-3">
    <label for="inputPassword" class="col-sm-4 col-form-label">Designation</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_passing_year} />
    </div>

</div>
<div class="col-md-3">
    <label for="inputPassword" class="col-sm-4 col-form-label">Year active</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
    </div>

</div>
<div class="col-md-3">
    <label for="inputPassword" class="col-sm-8 col-form-label">Office address</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputText" name="facebook_link" value={editUserData.educational_info.ssc_institution} />
    </div>

</div>
</div>

                                            </>
                                         )   
                                        })

                                   
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default EditUser;