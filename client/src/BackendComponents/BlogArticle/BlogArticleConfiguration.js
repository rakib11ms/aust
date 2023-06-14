import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";

import Swal from 'sweetalert2';
import axios from 'axios';

import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import './blogarticle.css';
import MaterialTable from "material-table";
import moment from 'moment';
// import '../JobManagement.css'
import '../Job Management/JobManagement.css';

import Modal from 'react-modal';
function BlogArticleConfiguration() {

    const [allCategory, setAllCategory] = useState([]);
    const [allSubCategory, setAllSubCategory] = useState([]);

    console.log('all sub categories', allSubCategory)

    const [totalDepartment, setTotalDepartment] = useState([])
    const [totalCategory, setTotalCategory] = useState([])
    const [totalSubCategory, setTotalSubCategory] = useState([])

    console.log('ass', totalDepartment)


    const [editCategoryId, setEditCategoryId] = useState('');

    const [editCategoryData, setEditCategoryData] = useState([]);
    console.log('editjobtype  ', editCategoryData)

    const [editDepartmentData, setEditDepartmentData] = useState([]);


    useEffect(() => {

        Modal.setAppElement('body');

    }, [])

    const [renderAllCategory, setRenderAllCategory] = useState('');
    const [addCategory, setAddCategory] = useState({
        category_name: "",
        created_by: '',
        error_list: []

    })

    console.log('job type data typing', addCategory)

    const handleInput = (e) => {
        setAddCategory({
            ...addCategory, [e.target.name]: e.target.value
        })


    }
    const handleEditJobTypeInput = (e) => {
        setEditCategoryData({
            ...editCategoryData, [e.target.name]: e.target.value
        })
    }


    const handleCategorySave = (e) => {
        e.preventDefault();

        axios.post(`/api/add-article-blogs-category`, addCategory).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllCategory(res.data);
                closeAddCategoryModal();
                setAddCategory({
                    category_name: "",
                    created_by: '',
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddCategory({ ...addCategory, error_list: res.data.errors });
                // Swal.fire(addCategory.error_list.category_name[0], '', 'error')

            }
        })


    }


    const handleCategoryUpdate = (e) => {
        e.preventDefault();
        const editJob = {
            category_name: editCategoryData.category_name,
            created_by: '',
        }
        axios.post(`/api/update-article-blogs-category/${editCategoryId}`, editJob).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllCategory(res.data);
                closeEditCategoryModal();
                setEditCategoryData({
                    category_name: "",
                    created_by: '',
                    error_list: []

                });
                setEditCategoryId('')

            }
            // else if (res.data.status == 400) {
            //     setEditJobType({ ...editJobType, error_list: res.data.errors });
            //     Swal.fire(addCategory.error_list.category_name[0], '', 'error')

            // }
        })


    }



    const [addCategoryModalIsOpen, setaddCategoryModalIsOpen] = useState(false);

    function closeAddCategoryModal(e) {
        setaddCategoryModalIsOpen(false);

    }
    const openAddCategoryModal = (e) => {
        e.preventDefault();
        setaddCategoryModalIsOpen(true)

    }


    const [editCategoryModalIsOpen, seteditCategoryModalIsOpen] = useState(false);
    function openEditCategoryeModal(e, editId) {
        e.preventDefault();
        seteditCategoryModalIsOpen(true)
        setEditCategoryId(editId);
    }
    function closeEditCategoryModal(e) {
        seteditCategoryModalIsOpen(false);

    }




    const deleteCategory = (e, id) => {
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
                axios.delete(`/api/delete-article-blogs-category/${id}`).then(res => {
                    if (res.data.status === 200) {
                        setRenderAllCategory(res.data);
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

    const [renderAllSubCategory, setRenderAllSubCategory] = useState('');
    const [editSubCategoryId, setEditSubCategoryId] = useState('');
    const [editSubCategoryData, setEditSubCategoryData] = useState('');
    // console.log('edit sub category',editSubCategoryData)



    useEffect(() => {
        axios.get(`/api/article-blogs-category`).then(res => {
            if (res.data.status == 200) {
                setAllCategory(res.data.category);
                // setLoading(false);
                setTotalCategory(res.data.total_category)
            }
        })

        axios.get(`/api/edit-article-blogs-category/${editCategoryId}`).then(res => {
            if (res.data.status == 200) {
                setEditCategoryData(res.data.category);
                // setLoading(false);
            }
        })


        axios.get(`/api/article-blogs-subcategory`).then(res => {
            if (res.data.status == 200) {
                setAllSubCategory(res.data.category);
                setTotalSubCategory(res.data.total_sub_category)

                setLoading(false);
            }
        })

        axios.get(`/api/edit-article-blogs-subcategory/${editSubCategoryId}`).then(res => {
            if (res.data.status == 200) {
                setEditSubCategoryData(res.data.category);
                setLoading(false);
            }
        })



    }, [renderAllCategory, editCategoryId, renderAllSubCategory, editSubCategoryId])
    const customStyles1 = {
        content: {
            // marginTop: '70px',
            top: '35vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: 300,
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };

    const customStyles2 = {
        content: {
            // marginTop: '70px',
            top: '35vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: 300,
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };
    const addSubCategoryStateModalStyle = {
        content: {
            // marginTop: '70px',
            top: '35vh',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            // marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "40vw",
            height: 300,
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };



    //department functionality






    const [addSubCategoryModalIsOpen, setaddSubCategoryModalIsOpen] = useState(false);

    function closeAddSubCategoryModal(e) {
        setaddSubCategoryModalIsOpen(false);

    }
    const openAddSubCategoryModal = (e) => {
        e.preventDefault();
        setaddSubCategoryModalIsOpen(true)

    }

    const [addSubCategoryState, setAddSubCategoryState] = useState({
        subcategory_name: "",
        category_id: "",
        created_by: '',
        error_list: []

    })

    const handleAddSubCategory = (e) => {
        setAddSubCategoryState({
            ...addSubCategoryState, [e.target.name]: e.target.value
        })


    }




    const handleSubCategorySave = (e) => {
        e.preventDefault();
        // const addDept = {
        //     subcategory_name: addSubCategoryState.subcategory_name,
        //     created_by: '',
        // }
        axios.post(`/api/add-article-blogs-subcategory`, addSubCategoryState).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllSubCategory(res.data);
                closeAddSubCategoryModal();
                setAddSubCategoryState({
                    subcategory_name: "",
                    created_by: '',
                    category_id: "",
                    error_list: []

                });

            }
            else if (res.data.status == 400) {
                setAddSubCategoryState({ ...addSubCategoryState, error_list: res.data.errors });
                // Swal.fire(addSubCategoryState.error_list.subcategory_name[0], '', 'error')

            }
        })


    }

    const [editSubCategoryModalIsOpen, seteditSubCategoryModalIsOpen] = useState(false);
    function openEditSubCategoryModal(e, editId) {
        e.preventDefault();
        seteditSubCategoryModalIsOpen(true)
        setEditSubCategoryId(editId);
        console.log('kire vhai')
    }
    function closeEditSubCategoryModal(e) {
        seteditSubCategoryModalIsOpen(false);

    }


    const [loading, setLoading] = useState(true);

    const handleEditSubCategory = (e) => {

        setEditSubCategoryData({
            ...editSubCategoryData, [e.target.name]: e.target.value
        })
    }

    const handleEditSubCategoryUpdate = (e) => {
        e.preventDefault();

        axios.post(`/api/update-article-blogs-subcategory/${editSubCategoryId}`, editSubCategoryData).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')
                setRenderAllSubCategory(res.data);
                closeEditSubCategoryModal();
                setEditSubCategoryData({
                    subcategory_name: "",
                    created_by: '',
                    category_id: '',
                    category_id: "",
                    error_list: []

                });
                setEditSubCategoryId('');

            }
            else if (res.data.status == 400) {
                setAddSubCategoryState({ ...addSubCategoryState, error_list: res.data.errors });
                // Swal.fire(addSubCategoryState.error_list.subcategory_name[0], '', 'error')

            }
        })
    }


    const deleteSubCategory = (e, id) => {


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
                axios.delete(`/api/delete-article-blogs-subcategory/${id}`).then(res => {
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
            title: "Category", field: ``, render: (row) =>
                <div className=''>

                    {row.category_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                // textAlign: 'left',
                width: 10,
            },
        },

        {
            title: 'SubCategory', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div>
                            {row.subcategory_name}

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>


                                <div className='text-secondary' onClick={(e) => openEditSubCategoryModal(e, row.id)}>
                                    <i className='fa fa-edit mx-2 icon-table-archive'></i>

                                </div>


                                <div className='mx-2 ' onClick={(e) => deleteSubCategory(e, row.id)}>
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />

                        <section class="job-config m-3 border  rounded-3">
                            {/* <div class="row"> */}
                            <div class="job-config-header text-light rounded-top " data-aos="flip-down">
                                <div class="inside ">
                                    <div class="item1">
                                        <h2 className=' mb-0'>{totalCategory}</h2>
                                        <p className=''>Category</p>
                                    </div>
                                    <div class="item2">
                                        <h2 className=' mb-0'>{totalSubCategory}</h2>
                                        <p className=''>Sub Category</p>
                                    </div>
                                    {/* <div class="item2">
                                        <h2 className=' mb-0'>03</h2>
                                        <p className=''>Job Types</p>
                                    </div> */}


                                </div>
                                <div class=" ">

                                    <Link to="/create-blog-article"><button type='button' className='btn border btn-sm text-light'> +  <span className='mx-1 ' style={{ textDecoration: 'none' }}>  Create A Blog/Article </span></button> </Link>

                                </div>


                            </div>

                            <div className='job-department-tag-section py-3 px-2'>
                                <div class="job-type-sec">
                                    <div className='job-type-nav'>
                                        <div>

                                            <h5 className='job-type-text'>Category</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-2' onClick={openAddCategoryModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>


                                            <Modal
                                                isOpen={addCategoryModalIsOpen}
                                                onRequestClose={closeAddCategoryModal}
                                                style={customStyles1}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddCategoryModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Create Category</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addCategory.category_name} name="category_name" onChange={handleInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    <span className='text-danger'> {addCategory.error_list.category_name}</span>
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleCategorySave}>Save</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>

                                            {/* edit job type modal */}

                                            <Modal
                                                isOpen={editCategoryModalIsOpen}
                                                onRequestClose={closeEditCategoryModal}
                                                style={customStyles2}
                                                contentLabel="Example Modal"
                                            >

                                                <div className='card-body '>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditCategoryModal}><i class="fa fa-times"></i></span>

                                                    <h5 className=""> Edit Category</h5>
                                                    <hr />


                                                    <div className="row">

                                                        <div className="col-12">

                                                            <div className='d-flex align-items-center'>
                                                                <div class="mb-3" style={{ width: '60%' }}>
                                                                    <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>
                                                                    <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editCategoryData.category_name} name="category_name" onChange={handleEditJobTypeInput} />
                                                                </div>

                                                                <div>
                                                                </div>


                                                                <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                    {/* <span className='text-danger'> {editCategoryData.error_list.category_name !=undefined && editCategoryData.error_list.category_name  }</span> */}
                                                                </div>
                                                            </div>







                                                            <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleCategoryUpdate}>Update</button>





                                                        </div>



                                                    </div>
                                                </div>

                                            </Modal>

                                        </div>

                                    </div>

                                    <div className='job-type-secs'>
                                        {
                                            allCategory.map((item, i) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <button type='button' className='btn border  mb-4'
                                                                value={item.id}> <span> {item.category_name}</span>

                                                                <span onClick={(e) => {
                                                                    deleteCategory(e, item.id)

                                                                }}>
                                                                    <i class="fa fa-times mx-3 " aria-hidden="true" ></i>
                                                                </span>

                                                                <span onClick={(e) => {
                                                                    openEditCategoryeModal(e, item.id)

                                                                }
                                                                }>
                                                                    <i class="fa fa-edit  " aria-hidden="true" ></i>
                                                                </span>


                                                            </button>

                                                            {/* edit job type modal */}

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }





                                    </div>



                                </div>

                                <div class="job-type-sec">
                                    <div className='job-type-nav  '>
                                        <div className=''>

                                            <h5 className='job-type-text mb-2 '>Sub Category</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='btn border btn-success btn-sm p-1 rounded-3 text-light mb-3' onClick={openAddSubCategoryModal}> <span className='mx-1 '> Add New</span> <i class="fa-solid fa-plus "></i></button>

                                        </div>


                                        <Modal
                                            isOpen={addSubCategoryModalIsOpen}
                                            onRequestClose={closeAddSubCategoryModal}
                                            style={addSubCategoryStateModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeAddSubCategoryModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Create SubCategory</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-3" style={{ width: '60%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>

                                                                <select class="form-select" aria-label="Default select example" value={addSubCategoryState.category_id} name="category_id" onChange={handleAddSubCategory}>
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

                                                            <div class="" style={{ width: '60%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">SubCategory Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={addSubCategoryState.subcategory_name} name="subcategory_name" onChange={handleAddSubCategory} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                <span className='text-danger'> {addSubCategoryState.error_list.subcategory_name}</span>
                                                            </div>
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleSubCategorySave}>Save</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>



                                        {/* edit subcategory modal */}

                                        <Modal
                                            isOpen={editSubCategoryModalIsOpen}
                                            onRequestClose={closeEditSubCategoryModal}
                                            style={addSubCategoryStateModalStyle}
                                            contentLabel="Example Modal"
                                        >

                                            <div className='card-body '>
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeEditSubCategoryModal}><i class="fa fa-times"></i></span>

                                                <h5 className=""> Edit SubCategory</h5>
                                                <hr />


                                                <div className="row">

                                                    <div className="col-12">

                                                        <div className=''>
                                                            <div class="mb-3" style={{ width: '60%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">Category Name</label>

                                                                <select class="form-select" aria-label="Default select example" value={editSubCategoryData.category_id} name="category_id" onChange={handleEditSubCategory}>
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

                                                            <div class="" style={{ width: '60%' }}>
                                                                <label for="exampleFormControlInput1" class="form-label fs-6">SubCategory Name</label>
                                                                <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="" value={editSubCategoryData.subcategory_name} name="subcategory_name" onChange={handleEditSubCategory} />
                                                            </div>

                                                            <div>
                                                            </div>


                                                            {/* <div style={{ width: '40%' }} className="mx-2 mt-1">
                                                                <span className='text-danger'> {editSubCategoryData.error_list.subcategory_name}</span>
                                                            </div> */}
                                                        </div>







                                                        <button className='btn btn-success btn-sm rounded-3 px-3 py-1 mt-1' onClick={handleEditSubCategoryUpdate}>Update</button>





                                                    </div>



                                                </div>
                                            </div>

                                        </Modal>





                                    </div>

                                    <div className=''>




                                        <MaterialTable
                                            //        components={{
                                            //         Container: props => <Paper {...props} />
                                            //    }}
                                            columns={columns}
                                            data={allSubCategory}
                                            isLoading={loading === true ? true : false}


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





                            {/* </div> */}

                        </section>


                    </div>

                </div>

            </div>


        </>
    )

}

export default BlogArticleConfiguration