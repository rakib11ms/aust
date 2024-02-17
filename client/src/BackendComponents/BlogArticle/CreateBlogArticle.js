import React, { useState, useEffect, useRef } from 'react';
// import './Post.css';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import JoditEditor from "jodit-react";

import Swal from 'sweetalert2';
import axios from 'axios';

// import Modal from 'react-modal';

// import MaterialTable from "material-table";
// import moment from 'moment';

// import Chip from '@mui/material/Chip';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Box, ThemeProvider, createTheme } from '@mui/system';



function CreateBlogArticle() {


    const navigate = useNavigate();

    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
        height: "300",

    };
    const [allUsers, setAllUsers] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [allSubCategory, setAllSubCategory] = useState([]);

    const [category_id, setcategory_id] = useState([]);
    const [subcategory_id, setsubcategory_id] = useState([]);



    useEffect(() => {
        axios.get(`/api/article-blogs-category`).then(res => {
            if (res.data.status == 200) {
                setAllCategory(res.data.category);
                // setLoading(false);
            }
        })



        axios.get(`/api/article-blogs-subcategory`).then(res => {
            if (res.data.status == 200) {
                setAllSubCategory(res.data.category);
            }
        })

        axios.get(`/api/get-article-blogs-subcategories-by-category-id/${category_id}`).then(res => {
            if (res.data.status == 200) {
                setAllSubCategory(res.data.sub_categories);
            }
        })




    }, [category_id])




    // console.log('all users check', allUsers)





    ///add advertisement functionality start//



    const [article_blog_title, setarticle_blog_title] = useState("");



    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const submitBlogArticle = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_id', category_id);
        formData.append('subcategory_id', subcategory_id);
        formData.append('article_blog_title', article_blog_title);
        formData.append('article_blog_description', content1);
        formData.append('article_blog_image', image);
        // formData.append('posted_by', 1);
        formData.append('isDraft', 0);
        formData.append('isPublished', 1);

        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });


        console.log('check all data', formData);




        axios.post(`/api/add-article-blogs`, formData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                // localStorage.removeItem("draftData");

                navigate('/view-blog-article')
                setcategory_id('');
                setsubcategory_id('');
                setarticle_blog_title('')

                setContent1('');

                setImage('');
                setPicture('');
                document.getElementById('article_blog_image').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

    }

    //////////images code ///////////

    const [multipleImages, setMultipleImages] = useState([]);
    const [multipleImageFiles, setMultipleImageFiles] = useState({
        files: []
    });



    useEffect(() => {
        if (multipleImages.length == 0) {
            document.getElementById('formFileImage').value = "";
        }
    }, [multipleImages])



    console.log('image files', multipleImageFiles.files)
    console.log('image url', multipleImages)



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
    // Functions to preview multiple images
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
            return <div className='image-main mt-2' onClick={() => {
                removeArray(i);
            }}>
                <i class="fa fa-close image-close text-danger" ></i>
                <img className="image mx-3 my-2 " src={image} alt="" key={i} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
            </div>
        });
    };


    const [isDraft, setIsDraft] = useState(0)

    const draftArticleBlog = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_id', category_id);
        formData.append('subcategory_id', subcategory_id);
        formData.append('article_blog_title', article_blog_title);
        formData.append('article_blog_description', content1);
        formData.append('article_blog_image', image);
        formData.append('posted_by', 1);
        formData.append('isDraft', 1);
        formData.append('isPublished', 0);
        multipleImageFiles.files.forEach(file => {
            console.log('files check', file)

            formData.append("image[]", file);

        });


        console.log('check all data', formData);




        axios.post(`/api/add-article-blogs`, formData).then(res => {
            if (res.data.status == 200) {
                // Swal.fire(res.data.message, '', 'success')
                // localStorage.removeItem("draftData");

                navigate('/view-blog-article')
                setcategory_id('');
                setsubcategory_id('');
                setarticle_blog_title('')

                setContent1('');

                setImage('');
                setPicture('');
                document.getElementById('article_blog_image').value = "";
            }
            // else if (res.data.status == 400) {
            //     setjobDesc({ ...jobDesc, error_list: res.data.errors });
            //     Swal.fire(jobDesc.error_list.job_id[0], '', 'error')

            // }
        })

        Swal.fire('Draft Saved Successfully', '', 'success')



    }

    // useEffect(()=>{

    //     let savedDraftData = window.localStorage.getItem("draftData");
    //     if(savedDraftData ){


    //     const final=JSON.parse(savedDraftData);
    //     setContent1(final.article_blog_description)
    //     setcategory_id(final.category_id)
    //     setsubcategory_id(final.subcategory_id)
    //     setarticle_blog_title(final.article_blog_title)
    //     }
    // },[])



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
                                    <h5>Create a Blog/Article</h5>
                                    <Link to="/view-blog-article"> <button data-aos="fade-left" className='btn btn-sm btn-success float-end'>Back</button></Link>

                                </div>
                                <div className='card-body '>
                                    <form onSubmit={submitBlogArticle}>

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

                                                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setarticle_blog_title(e.target.value)} name="article_blog_title" value={article_blog_title} />

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


                                                    <div class="mt-4">
                                                        <div class="">
                                                            <label for="exampleFormControlInput1" class="form-label fs-6">Add Media (Png,Jpg) are allowed</label>

                                                            <input class="form-control" type="file" id="formFileImage"  onChange={changeMultipleFiles} 
                                                            />

                                                            <div className='d-flex mt-2 ' >
                                                                {render(multipleImages)}

                                                            </div>




                                                        </div>


                                                    </div>

                                                    {/* <div class="mb-3 col-md-6">
                                          <label for="formFile" class="form-label fs-6">Default file input example</label>
                                          <input class="form-control" type="file" id="formFile" />
                                      </div> */}
                                                </div>

                                                <div class="text-center mt-1" >
                                                    {/* <button type="button" className='btn btn-secondary rounded-3 mx-2' onClick={draftArticleBlog}> DRAFT</button> */}
                                                    <button type="submit" className='btn btn-success rounded-3' onSubmit={submitBlogArticle}> PUBLISH NOW</button>

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
export default CreateBlogArticle;