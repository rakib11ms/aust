import React, { useState, useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Topbar from '../Dashboard/Topbar'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ViewBlogArticleWithComments() {
    const { id } = useParams();
    const [viewArticleBlogInformation, setViewArticleBlogInformation] = useState('');
    console.log("thada", viewArticleBlogInformation)
    useEffect(() => {
        axios.get(`/api/view-single-article-blogs-with-comments/${id}`).then((res) => {
            setViewArticleBlogInformation(res.data.article_blog)
        })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2  sidebar-left1">
                    <Sidebar />
                </div>

                <div className="col-md-10 ">
                    <Topbar />

                    <div className='container-fluids'>
                        <div className='card p-2'>
                            <h6 className='px-3'>View Blog Article</h6>
                            <div className=''>
                                <div className='blog-article-image' class="w-50 mx-auto" style={{ height: "200px" }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" class="rounded-3" src={`${global.img_url}/images/${viewArticleBlogInformation.article_blog_image}`} />
                                </div>

                                <div className='d-flex align-items-center px-2'>
                                    <div className=''>
                                        <button type="button" class="btn btn-light border-0">
                                            {viewArticleBlogInformation.category?.category_name}
                                        </button>
                                    </div>

                                    <div className=''>
                                        <span class="badge bg-success text">{viewArticleBlogInformation.subcategory?.subcategory_name}</span>

                                    </div>

                                </div>
                                <div className='mx-3'>

                                    <p className='fs-5 mt-2'> {viewArticleBlogInformation.article_blog_title}</p>

                                    <div className=''>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: viewArticleBlogInformation.article_blog_description }}
                                        />

                                    </div>
                                </div>
                            </div>

                            {/* <hr />
                            <h6 className='text-danger px-2'>Comments</h6>

                            <div className='px-2'>

                                <input type='text' className='form-control form-control-lg' placeholder='Type your comment..' />
                            </div>

                            <div className='mt-3 border-bottom'>
                                <div className='d-flex'>
                                    <div className='mx-2' style={{ width: "30px", height: "30px" }}>
                                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                                    </div>
                                    <div className='mx-2 '>
                                        <p className='fs-6'>Md Rakib Hossain</p>
                                    </div>
                                </div>

                                <div className='mx-1'>
                                    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                                </div>


                            </div>

                            <div className='border-bottom'>
                                <div className='d-flex'>
                                    <div className='mx-2' style={{ width: "30px", height: "30px" }}>
                                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                                    </div>
                                    <div className='mx-2 '>
                                        <p className='fs-6'>Md Rakib Hossain</p>
                                    </div>
                                </div>

                                <div className='mx-1'>
                                    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                                </div>


                            </div> */}


                        </div>

                        {/* <div className='post-top-con  rounded mt-2'>
                            <h5> {viewArticleBlogInformation.article_blog_title}</h5>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewBlogArticleWithComments