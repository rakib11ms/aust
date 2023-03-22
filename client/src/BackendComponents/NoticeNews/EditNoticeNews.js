import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";

import Swal from 'sweetalert2';
import axios from 'axios';

import Modal from 'react-modal';

import MaterialTable from "material-table";
import moment from 'moment';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, ThemeProvider, createTheme } from '@mui/system';



function EditNoticeNews() {


    const navigate = useNavigate();

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allCategory, setAllCategory] = useState([]);
    const [allSubCategory, setAllSubCategory] = useState([]);
    const [isArchived, setisArchived] = useState('');
    const [isPublished, setIsPublished] = useState('');

    const [category_id, setcategory_id] = useState([]);
    const [subcategory_id, setsubcategory_id] = useState([]);



    const params = useParams();

    const editId = params.id;
    const [EditNoticeNewsData, setEditNoticeNewsData] = useState('');
    console.log('edit article blogs data', EditNoticeNewsData)
    useEffect(() => {
        axios.get(`/api/notice-news-category`).then(res => {
            if (res.data.status == 200) {
                setAllCategory(res.data.category);
                // setLoading(false);
            }
        })



        axios.get(`/api/notice-news-subcategory`).then(res => {
            if (res.data.status == 200) {
                setAllSubCategory(res.data.category);
            }
        })





    }, [])


    useEffect(() => {
        axios.get(`/api/get-notice-news-subcategories-by-category-id/${category_id}`).then(res => {
            if (res.data.status == 200) {
                setAllSubCategory(res.data.sub_categories);
            }
        })
    }, [category_id])




    useEffect(() => {
        axios.get(`/api/edit-notice-news/${editId}`).then(res => {
            if (res.data.status == 200) {
                setEditNoticeNewsData(res.data.notice_news);
                setnotice_news_title(res.data.notice_news.notice_news_title)
                setContent1(res.data.notice_news.notice_news_description)
                setcategory_id(res.data.notice_news.category_id)
                setsubcategory_id(res.data.notice_news.subcategory_id)
                setisArchived(res.data.notice_news.isArchived)
                setIsPublished(res.data.notice_news.isPublished)
                // setLoading(false);
            }
        })

    }, [])










    // console.log('all users check', allUsers)





    ///add advertisement functionality start//



    const [notice_news_title, setnotice_news_title] = useState("");

    // console.log('heelloo yeeeeees', allCheckBox)
    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const updateBlogArticle = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_id', category_id);
        formData.append('subcategory_id', subcategory_id);
        formData.append('notice_news_title', notice_news_title);
        formData.append('notice_news_description', content1);
        formData.append('notice_news_image', image);
        formData.append('isArchived', isArchived);
        formData.append('isPublished', isPublished);

        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });


        console.log('check all data', formData);



        axios.post(`/api/update-notice-news/${editId}`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                navigate('/view-notice-news')
                setcategory_id('');
                setsubcategory_id('');
                setnotice_news_title('')

                setContent1('');

                setImage('');
                setPicture('');
                document.getElementById('notice_news_image').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }


    const [allImagesFromDatabase, setAllImagesfromDatabase] = useState([]);
    console.log('checking', allImagesFromDatabase)

    const [multipleImages, setMultipleImages] = useState([]);
    console.log('images check', multipleImages)
    const [multipleImageFiles, setMultipleImageFiles] = useState({
        files: []
    });


    const changeMultipleFiles = (e) => {
        setMultipleImageFiles({
            files: [...multipleImageFiles.files, ...e.target.files]
        })
        if (e.target.files) {
            const imageArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
        }
    };

    const render = (data) => {
        return data.map((image, i) => {
            return <div className='image-main mt-1' onClick={() => {
                removeArray(i);
            }}>
                <i class="fa fa-close image-close text-danger " ></i>
                <img className="image mx-2 mt-3 rounded-3 " src={image} alt="" key={i} style={{ width: '105px', height: '90px', objectFit: 'cover' }} />
            </div>
        });
    };

    function removeArray(i) {
        console.log('index clicked', i)
        // setMultipleImageFiles({
        //     files:
        // });

        const filterRemoveFileImgs = multipleImageFiles.files.filter((item, index) => {
            console.log('kosuy', item)
            return index !== i
        })

        const filterRemovePreviewImgs = multipleImages.filter((item, index) => {
            console.log('kosuy', item)
            return index !== i
        })
        // console.log('checking333333',filterRemoveImgs)

        setMultipleImageFiles({
            files: filterRemoveFileImgs
        })
        setMultipleImages(filterRemovePreviewImgs)



    }

    const[renderImageData,setRenderImageData]=useState('')


    useEffect(()=>{
        axios.get(`/api/edit-notice-news/${editId}`).then(res => {
            if (res.data.status == 200) {
           
                setAllImagesfromDatabase(res.data.notice_news_images)

            }
        })
    },[renderImageData])


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
                                <div className='card-header d-flex align-items-center justify-content-between'>
                                    <h5>Edit a Notice/News</h5>
                                    <Link to="/view-notice-news"> <button className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={updateBlogArticle}>

                                        <div className='row '>

                                            <div class="px-4" style={{ width: '100%' }}>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Select Category</label>

                                                    <select class="form-select" aria-label="Default select example" value={category_id} name="category_id" onChange={(e) => setcategory_id(e.target.value)}>
                                                        <option value="">Choose</option>

                                                        {
                                                            allCategory.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id}>{item.category_name}</option>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Select SubCategory</label>

                                                    <select class="form-select" aria-label="Default select example" value={subcategory_id} name="subcategory_id" onChange={(e) => setsubcategory_id(e.target.value)}>
                                                        <option value="">Choose</option>

                                                        {
                                                            allSubCategory.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.id}>{item.subcategory_name}</option>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>


                                                <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Title</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setnotice_news_title(e.target.value)} name="notice_news_title" value={notice_news_title} />

                                                </div>

                                                <div class="mt-3">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Description</label>
                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>

                                                {/* <div class="mt-1">
                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Redirection Link</label>

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setredirect_link(e.target.value)} name="redirect_link" value={redirect_link} />

                                                </div> */}

                                                {/* <div class="mt-4">
                                                    <div class="">
                                                        <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                        <input class="form-control" type="file" id="formFileImage" multiple onChange={changeMultipleFiles}
                                                        />

                                                        <div className='d-flex mt-2 ' >
                                                            {render(multipleImages)}

                                                        </div>




                                                    </div>


                                                </div> */}

                                                <div class="row mt-2">
                                                    <div class="mb-3 col-md-6 ">
                                                        <label for="formFile" class="form-label fs-6">Image</label>
                                                        {/* <input class="form-control" type="file" id="notice_news_image" name="notice_news_image" onChange={onChangePicture} /> */}
                                                        <input class="form-control" type="file" id="formFile" multiple onChange={changeMultipleFiles}
                                                        />
                                                    </div>


                                                </div>

                                                <div className='mb-2 mt-1 d-flex'>



                                                    {
                                                        render(multipleImages)

                                                    }
                                                    {

                                                        allImagesFromDatabase.map((item, i) => {
                                                            return (
                                                                <>
                                                                    {/* <img className="rounded mx-2" src={`${global.img_url}/images/${item.trim()}`} style={{ width: '100px', height: '90px' }}></img> */}
                                                                    <div class="" style={{ position: 'relative' }} >
                                                                        <div style={{ position: 'absoulute', right: '-10px', top: '0px' }} onClick={(e) => {
                                                                            {
                                                                                axios.post(`/api/delete-notice-news-multiple-image/${item.id}`).then(res => {
                                                                                    if (res.data.status == 200) {
                                                                                        setRenderImageData(res.data)
                                                                                    }
                                                                                })
                                                                            }

                                                                        }}>
                                                                            <i class="fa fa-close text-danger"></i>

                                                                        </div>

                                                                        <img className="rounded mx-2" src={`${global.img_url}/images/${item.image}`} style={{ width: '100px', height: '90px' }}></img>

                                                                    </div>



                                                                </>
                                                            )
                                                        })

                                                    }



                                                </div>
                                                <div class="text mt-2">
                                                    <button type="submit" className='btn btn-success rounded-3' onSubmit={updateBlogArticle}> Update</button>
                                                </div>

                                            </div>


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
export default EditNoticeNews;