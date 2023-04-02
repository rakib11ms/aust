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
    // useEffect(() => {
    //     axios.get(`/api/edit-user/${editId}`).then(res => {
    //         if (res.data.status == 200) {
    //             setEditUserData(res.data.edit_user);
    //         }
    //     })
    // }, [editId])
    const [allBloodGroupName, setAllBloodGroupName] = useState([]);
    const [allCompanyName, setAllCompanyName] = useState([]);

    const [allBatchName, setAllBatchName] = useState([]);
    const [allGenderName, setAllGenderName] = useState([]);
    const [allStreamName, setAllStreamName] = useState([]);
    const [allJobSectorAsc, setAllJobSectorAsc] = useState([]);
    const [allJobSubSectorAsc, setAllJobSubSectorAsc] = useState([]);
    const [allThana, setAllThana] = useState([]);


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


    const [officeAddress, setOfficeAddress] = useState(null);
    const [year, setYear] = useState(null);

    console.log('office address', officeAddress)
    console.log('year', year)

    const [full_name, setFull_name] = useState('')
    const [nick_name, setNick_name] = useState('')
    const [phone, setphone] = useState('')
    const [job_sector, setjob_sector] = useState('')

    const [job_sub_sector, setjob_sub_sector] = useState('')

    console.log('job sec', job_sector)
    console.log('job sub sec', job_sub_sector)
    const [facebook_link, setfacebook_link] = useState('')
    const [twitter_link, settwitter_link] = useState('')
    const [linkedin_link, setlinkedin_link] = useState('')
    const [present_address, setpresent_address] = useState('')
    const [permanent_address, setpermanent_address] = useState('')
    const [gender_name, setgender_name] = useState(null);
    const [batch, setbatch] = useState(null);
    const [office_email, setoffice_email] = useState(null);
    const [stream, setstream] = useState(null);
    const [ssc_grade, setssc_grade] = useState(null);
    const [hsc_grade, sethsc_grade] = useState(null);
    const [bsc_grade, setbsc_grade] = useState(null);
    const [msc_grade, setmsc_grade] = useState(null);
    const [ssc_passing_year, setssc_passing_year] = useState(null);
    const [hsc_passing_year, sethsc_passing_year] = useState(null);
    const [bsc_passing_year, setbsc_passing_year] = useState(null);
    const [msc_passing_year, setmsc_passing_year] = useState(null);
    const [ssc_institution, setssc_institution] = useState(null);
    const [hsc_institution, sethsc_institution] = useState(null);
    const [bsc_institution, setbsc_institution] = useState(null);
    const [msc_institution, setmsc_institution] = useState(null);


    const handleUpdate = (e) => {
        e.preventDefault();
        const saveData = {
            full_name: full_name,
            nick_name: nick_name,
            phone_no: phone,
            present_address: present_address,
            permanent_address: permanent_address,
            gender: gender_name,
            batch: batch,
            stream: stream,
            ssc_grade: ssc_grade,
            hsc_grade: hsc_grade,
            bsc_grade: bsc_grade,
            msc_grade: msc_grade,
            ssc_institution: ssc_institution,
            hsc_institution: hsc_institution,
            bsc_institution: bsc_institution,
            msc_institution: msc_institution,
            ssc_passing_year: ssc_passing_year,
            hsc_passing_year: hsc_passing_year,
            bsc_passing_year: bsc_passing_year,
            msc_passing_year: msc_passing_year,
            job_sector: job_sector,
            job_sub_sector: job_sub_sector,
            facebook_link: facebook_link,
            twitter_link: twitter_link,
            linkedin_link: linkedin_link,
            office_email: office_email
        }

        axios.post(`/api/update-user-personal-info-web/${editId}`, saveData).then(res => {
            if (res.data.status === 200) {
                Swal.fire(res.data.message, '', 'success')
                // setrenderAllUsers(res.data)
                // // document.getElementById('modal').modal('close');

                window.location.reload();

            }
            // else if (res.data.status === 401) {
            //     Swal.fire(res.data.message, '', 'error')

            // }
        });

    }




    useEffect(() => {
        axios.get(`/api/edit-user/${editId}`).then(res => {
            if (res.data.status == 200) {
                setEditProfessionalDatas(res.data.edit_user.professional_info);
                setEditUserData(res.data.edit_user);
                setFull_name(res.data.edit_user.full_name)
                setNick_name(res.data.edit_user.nick_name)
                setphone(res.data.edit_user.phone_no)
                setpresent_address(res.data.edit_user.present_address)
                setpermanent_address(res.data.edit_user.permanent_address)
                setgender_name(res.data.edit_user.gender)
                setbatch(res.data.edit_user.batch)
                setoffice_email(res.data.edit_user.office_email)
                setstream(res.data.edit_user.stream)
                setjob_sector(res.data.edit_user.job_sector)
                setjob_sub_sector(res.data.edit_user.job_sub_sector)
                setfacebook_link(res.data.edit_user.facebook_link)
                settwitter_link(res.data.edit_user.twitter_link)
                setlinkedin_link(res.data.edit_user.linkedin_link)
                setssc_grade(res.data.edit_user.educational_info.ssc_grade)
                sethsc_grade(res.data.edit_user.educational_info.hsc_grade)
                setbsc_grade(res.data.edit_user.educational_info.bsc_grade)
                setmsc_grade(res.data.edit_user.educational_info.msc_grade)
                setssc_passing_year(res.data.edit_user.educational_info.ssc_passing_year)
                sethsc_passing_year(res.data.edit_user.educational_info.hsc_passing_year)
                setbsc_passing_year(res.data.edit_user.educational_info.bsc_passing_year)
                setmsc_passing_year(res.data.edit_user.educational_info.msc_passing_year)
                setssc_institution(res.data.edit_user.educational_info.ssc_institution)
                sethsc_institution(res.data.edit_user.educational_info.hsc_institution)
                setbsc_institution(res.data.edit_user.educational_info.bsc_institution)
                setmsc_institution(res.data.edit_user.educational_info.msc_institution)
            }
        })
    }, [editId])
    

    const[editProfessionalDatas,setEditProfessionalDatas]=useState([])

    console.log('z1',editProfessionalDatas)

    const updatedObject={
        id: 4, company_name: 'Bal Group', created_by: '1'    
    }
    const updateProfessional=(index,e)=>{

        console.log('v1',e.target.value);
            console.log('y1',index)
            const newArray = [...editProfessionalDatas];
            newArray[index] = updatedObject;
            setEditProfessionalDatas(newArray);
    }
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
                                            <input type="text" class="form-control" id="inputText" name="full_name" value={full_name} onChange={(e) => setFull_name(e.target.value)} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Nick Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="nick_name" value={nick_name} onChange={(e) => setNick_name(e.target.value)} />
                                        </div>

                                    </div>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Phone No</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="phone_no" value={phone} onChange={(e) => setphone(e.target.value)} />
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
                                            <input type="text" class="form-control" id="inputText" name="present_address" value={present_address} onChange={(e) => setpresent_address(e.target.value)} />
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Permanent Address</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="permanent_address" value={permanent_address} onChange={(e) => setpermanent_address(e.target.value)} />
                                        </div>

                                    </div>


                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Gender</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setgender_name(e.target.value)} name="gender" value={gender_name}>
                                                <option selected disabled>Open this select menu</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>


                                            </select>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Batch</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setbatch(e.target.value)} name="batch" value={batch}>
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
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setstream(e.target.value)} name="stream" value={stream}>
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
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sector(e.target.value)} name="job_sector" value={job_sector}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allJobSectorAsc.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.id}>{item.job_sector_name}</option>

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
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setjob_sub_sector(e.target.value)} name="job_sub_sector" value={job_sub_sector}>
                                                <option selected disabled>Open this select menu</option>
                                                {
                                                    allJobSubSectorAsc.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option value={item.id}>{item.job_sub_sector_name}</option>

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
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Office Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="office_email" value={office_email} onChange={(e) => setoffice_email(e.target.value)} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Facebook Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="facebook_link" value={facebook_link} onChange={(e) => setfacebook_link(e.target.value)} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Linkedin Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="linkedin_link" value={linkedin_link} onChange={(e) => setlinkedin_link(e.target.value)} />
                                        </div>

                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Twitter Link</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputText" name="twitter_link" value={twitter_link} onChange={(e) => settwitter_link(e.target.value)} />
                                        </div>

                                    </div>
                                    {/* <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Profile Pic</label>
                                        <div class="col-sm-10">
                                            <input type="file" class="form-control" id="inputText" name="twitter_link" />
                                        </div>

                                    </div> */}
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
                                                    <input type="text" class="form-control" id="inputText" name="ssc_grade" value={ssc_grade} onChange={(e) => setssc_grade(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">SSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="ssc_year" value={ssc_passing_year} onChange={(e) => setssc_passing_year(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">SSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="ssc_institution" value={ssc_institution} onChange={(e) => setssc_institution(e.target.value)} />
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
                                                    <input type="text" class="form-control" id="inputText" name="hsc_grade" value={hsc_grade} onChange={(e) => sethsc_grade(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">HSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="hsc_passing_year" value={hsc_passing_year} onChange={(e) => sethsc_passing_year(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">HSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="hsc_institution" value={hsc_institution} onChange={(e) => sethsc_institution(e.target.value)} />
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
                                                    <input type="text" class="form-control" id="inputText" name="bsc_grade" value={bsc_grade} onChange={(e) => setbsc_grade(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">BSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="bsc_passing_year" value={bsc_passing_year} onChange={(e) => setbsc_passing_year(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">BSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="bsc_institution" value={bsc_institution} onChange={(e) => setbsc_institution(e.target.value)} />
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
                                                    <input type="text" class="form-control" id="inputText" name="msc_grade" value={msc_grade} onChange={(e) => setmsc_grade(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">MSC Year</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="msc_passing_year" value={msc_passing_year} onChange={(e) => setmsc_passing_year(e.target.value)} />
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">MSC Institution</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="inputText" name="msc_institution" value={msc_institution} onChange={(e) => setmsc_institution(e.target.value)} />
                                                </div>

                                            </div>
                                        </div>
                                    }

                                    <button type='submit' className='btn btn-success mt-1 mb-3' onClick={handleUpdate}>
                                        Update
                                    </button>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <h6 className=''>Professional Information</h6>
                                    {
                                        editUserData.professional_info !== undefined && editProfessionalDatas.map((item,index) => {
                                            return (
                                                <>
                                                    <div className='mb-3 row '>


                                                        <div class="col-md-2">
                                                            <label for="inputPassword" class="col-sm-4 col-form-label">Company</label>
                                                            <div class="col-sm-10">
                                                                <select class="form-select" aria-label="Default select example" onChange={(e)=>updateProfessional(index,e)} name="name_of_company" value={item.name_of_company}>
                                                                    <option selected disabled>Open this select menu</option>
                                                                    {
                                                                        allCompanyName.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <option value={item.id}>{item.company_name}</option>

                                                                                </>
                                                                            )
                                                                        })
                                                                    }


                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-2">
                                                            <label for="inputPassword" class="col-sm-4 col-form-label">Designation</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" id="inputText" name="designation" value={item.designation}  onChange={(e)=>updateProfessional(index,e)}/>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for="inputPassword" class="col-sm-4 col-form-label">Year active</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" id="inputText" name="year" value={item.year} onChange={(e) => setYear(e.target.value)} />
                                                            </div>

                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for="inputPassword" class="col-sm-8 col-form-label">Office address</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" id="inputText" name="office_address" value={item.office_address} onChange={(e) => { setOfficeAddress(e.target.value); console.log('event', e) }} />

                                                            </div>

                                                        </div>

                                                        <div className='col-1 '>
                                                            <label for="inputPassword" class="col-sm-8 col-form-label d-block " style={{ opacity: '0' }}>Of</label>

                                                            {/* <button type='btn' className='btn btn-secondary btn-sm' onClick={()=>{updateProfessional(item.id)}}>Update</button> */}
                                                            <button type='btn' className='btn btn-secondary btn-sm' >Update</button>
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