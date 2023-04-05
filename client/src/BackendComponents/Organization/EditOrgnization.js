import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, Routes, Route,useParams } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
// import '../JobManagement.css'
import dayjs, { Dayjs } from 'dayjs';
function EditOrganization() {



    const params=useParams();

    const editId=params.id;

    const [organization_name, setorganization_name] = useState('')
    const [organization_address, setorganization_address] = useState('')
    const [district, setdistrict] = useState('')
    const [thana, setthana] = useState('')
    const [post_code, setpost_code] = useState('')
    const [est_date, setest_date] = useState('')
    const [founder_name, setfounder_name] = useState('')
    const [current_chairman_name, setcurrent_chairman_name] = useState('')
    const [current_director_name, setcurrent_director_name] = useState('')
    const [support_person_name, setsupport_person_name] = useState('')
    const [support_person_no, setsupport_person_no] = useState('')
    const [website, setwebsite] = useState('')



    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };

    useEffect(()=>{
        axios.get(`/api/edit-organization-setup/${editId}`).then(res => {
            if (res.data.status == 200) {
                setorganization_name(res.data.post.organization_name);
                setorganization_address(res.data.post.organization_address);
                setdistrict(res.data.post.district);
                setthana(res.data.post.thana);
                setpost_code(res.data.post.post_code);
                setcurrent_director_name(res.data.post.current_director_name);
                setcurrent_chairman_name(res.data.post.current_chairman_name);
                setsupport_person_name(res.data.post.support_person_name)
                setsupport_person_no(res.data.post.support_person_no)
                setfounder_name(res.data.post.founder_name)
                setest_date(res.data.post.est_date)
                setwebsite(res.data.post.est_date)

            }
        })
    },[])

    const submitPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('organization_name',organization_name);
        formData.append('organization_address',organization_address);
        formData.append('district',district);
        formData.append('thana',thana);
        formData.append('post_code',post_code);
        formData.append('est_date',est_date);
        formData.append('founder_name',founder_name);
        formData.append('current_chairman_name', current_chairman_name);
        formData.append('current_director_name', current_director_name);
        formData.append('support_person_name', support_person_name);
        formData.append('support_person_no', support_person_no);
        formData.append('website', website);
        formData.append('image', image);


        console.log('check all data', formData);



        axios.post(`/api/update-organization-setup/${editId}`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                // navigate('/view-all-jobs')
               setorganization_address("")
               setcurrent_chairman_name("")
               setcurrent_director_name("")
               setfounder_name("")
               setthana("");
               setdistrict("");
               setsupport_person_name("")
               setsupport_person_no("")
                setImage('');
                setPicture('');
                // document.getElementById('job_post_logo').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

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
                        <div className='create-job-wrapper mt-2'>
                            <div className='card mt-3'>
                                <div className='card-header d-flex align-items-center justify-content-between'>
                                    <h5>Edit Organization/Insitute</h5>
                                    <Link to="/view-organization"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body px-4'>
                                    <form>

                                        <div class="row">
                                            <div className='col-md-7'>
                                                <div class="my-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Name of the Organization</label>
                                                    <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setorganization_name(e.target.value)} name="organization_name" value={organization_name} />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Organization Address</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setorganization_address(e.target.value)} name="organization_address" value={organization_address}></textarea>

                                                </div>

                                                <div className='col-md-12 d-flex '>
                                                    <div class="my-1 col-md-4 ">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">District</label>
                                                        <select required class="form-select" aria-label="Default select example" onChange={(e) => setdistrict(e.target.value)} name="district" value={district}>
                                                            <option selected value="" disabled>Select</option>


                                                            <>
                                                                <option value="Dhaka" >Dhaka </option>
                                                                <option value="Chittagonj" >Chittagonj </option>
                                                            </>



                                                        </select>
                                                    </div>
                                                    <div class="my-1 col-md-4 mx-3">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Thana</label>
                                                        <select required class="form-select" aria-label="Default select example" onChange={(e) => setthana(e.target.value)} name="thana" value={thana} >
                                                            <option selected value="" disabled>Select</option>


                                                            <>
                                                                <option value="Dhaka" >Dhaka </option>
                                                                <option value="Chittagonj" >Chittagonj </option>

                                                            </>



                                                        </select>
                                                    </div>
                                                    <div class="my-1 col-md-4">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Post Code</label>
                                                        <select required class="form-select" aria-label="Default select example" onChange={(e) => setpost_code(e.target.value)} name="post_code" value={post_code} >
                                                            <option selected value="" disabled>Select</option>


                                                            <>
                                                                <option value="Dhaka" >Dhaka </option>
                                                                <option value="Chittagonj" >Chittagonj </option>
                                                            </>



                                                        </select>
                                                    </div>
                                                </div>



                                                <div className=''>
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Logo/Icon</label>
                                                    <input type="file" required class="form-control" id="exampleFormControlInput1" onChange={onChangePicture} name="image" />

                                                </div>
                                                {
                                                    picture !== '' && <div className="form-group mt-3" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>

                                                }
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='bg-light rounded-3 p-2 mt-3'>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Established Date</label>
                                                        <input type="date" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setest_date(e.target.value)} name="est_date" value={est_date} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Founder Name</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setfounder_name(e.target.value)} name="founder_name" value={founder_name} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Current Chairman name</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setcurrent_chairman_name(e.target.value)} name="current_chairman_name" value={current_chairman_name} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Current Director name</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setcurrent_director_name(e.target.value)} name="current_director_name" value={current_director_name} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Support Person Name</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setsupport_person_name(e.target.value)} name="support_person_name" value={support_person_name} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Support Person No</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setsupport_person_no(e.target.value)} name="support_person_no" value={support_person_no} />

                                                    </div>
                                                    <div className=''>
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Website</label>
                                                        <input type="text" required class="form-control" id="exampleFormControlInput1" onChange={(e) => setwebsite(e.target.value)} name="website" value={website} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="text-center">
                                            <button type="submit" className='btn btn-success rounded-3' onClick={submitPost}>UPDATE</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditOrganization