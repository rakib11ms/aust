import React from "react";
import axios from "axios";
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import "./PermissionUser.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const PermissionUser = () => {
  const [allRoles, setAllRoles] = useState([])
  useEffect(() => {
    axios.get("api/get-all-roles").then((res) => {
      setAllRoles(res.data.all_roles);
    });
  }, [])

  const [role_id, setRole_id] = useState(16);
  console.log('role check',role_id)
  // console.log('role id change', role_id)
  const [permissions, setPermissions] = useState({
    create_user: false,
    view_user: false,
    update_user: false,
    delete_user: false,
    user_configuration_create: false,
    user_configuration_view: false,
    user_configuration_update: false,
    user_configuration_delete: false,
    create_job: false,
    view_job: false,
    update_job: false,
    delete_job: false,
    job_configuration_create: false,
    job_configuration_view: false,
    job_configuration_update: false,
    job_configuration_delete: false,
    create_news_notice: false,
    view_news_notice: false,
    update_news_notice: false,
    delete_news_notice: false,
    news_notice_configuration_create: false,
    news_notice_configuration_view: false,
    news_notice_configuration_update: false,
    news_notice_configuration_delete: false,
    create_blog_article: false,
    view_blog_article: false,
    update_blog_article: false,
    delete_blog_article: false,
    blog_article_configuration_create: false,
    blog_article_configuration_view: false,
    blog_article_configuration_update: false,
    blog_article_configuration_delete: false,
  });

  // console.log('permission states check', permissions)

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };


  const [permissionfromDatabase, setPermissionFromDatabase] = useState([]);
  console.log('permission from db', permissionfromDatabase)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('data', permissions)
    axios.post(`api/assign-permission-via-role/${role_id}`, permissions).then((res) => {
      if (res.data.status == 200) {
        Swal.fire("সফলভাবে সম্পন্ন হয়েছে", "", "success");
        // localStorage.removeItem("permissions");
        // localStorage.setItem("permissions", JSON.stringify(permissionfromDatabase));
        window.location.reload();


      }

    });
  };


  useEffect(() => {
    axios.get(`api/get-permission-via-role/${role_id}`).then((res) => {
      setPermissionFromDatabase(res.data.permissions)
      setPermissions(res.data.permissions)
      // localStorage.removeItem("permissions");
      localStorage.setItem("permissions", JSON.stringify(res.data.permissions));
      // window.location.reload();

      if (res.data.permissions.includes('create_user')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          create_user: true,

        }))
      }
      if (res.data.permissions.includes('view_user')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          view_user: true,

        }))
      }
      if (res.data.permissions.includes('update_user')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          update_user: true,

        }))
      }
      if (res.data.permissions.includes('delete_user')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          delete_user: true,

        }))
      }
      if (res.data.permissions.includes('delete_user')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          delete_user: true,

        }))
      }
      if (res.data.permissions.includes('user_configuration_create')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          user_configuration_create: true,

        }))
      }
      if (res.data.permissions.includes('user_configuration_delete')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          user_configuration_delete: true,

        }))
      }
      if (res.data.permissions.includes('user_configuration_view')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          user_configuration_view: true,

        }))
      }
      if (res.data.permissions.includes('user_configuration_update')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          user_configuration_update: true,

        }))
      }
      if (res.data.permissions.includes('create_job')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          create_job: true,

        }))
      }

      if (res.data.permissions.includes('view_job')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          view_job: true,

        }))
      }
      if (res.data.permissions.includes('update_job')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          update_job: true,

        }))
      }
      if (res.data.permissions.includes('delete_job')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          delete_job: true,

        }))
      }
      if (res.data.permissions.includes('job_configuration_create')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          job_configuration_create: true,

        }))
      }
      if (res.data.permissions.includes('job_configuration_view')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          job_configuration_view: true,

        }))
      }
      if (res.data.permissions.includes('job_configuration_update')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          job_configuration_update: true,

        }))
      }
      if (res.data.permissions.includes('job_configuration_delete')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          job_configuration_delete: true,

        }))
      }
      if (res.data.permissions.includes('create_news_notice')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          create_news_notice: true,

        }))
      }
      if (res.data.permissions.includes('view_news_notice')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          view_news_notice: true,

        }))
      }
      if (res.data.permissions.includes('update_news_notice')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          update_news_notice: true,

        }))
      }
      if (res.data.permissions.includes('delete_news_notice')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          delete_news_notice: true,

        }))
      }
      if (res.data.permissions.includes('news_notice_configuration_create')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          news_notice_configuration_create: true,

        }))
      }
      if (res.data.permissions.includes('news_notice_configuration_view')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          news_notice_configuration_view: true,

        }))
      }
      if (res.data.permissions.includes('news_notice_configuration_update')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          news_notice_configuration_update: true,

        }))
      }
      if (res.data.permissions.includes('news_notice_configuration_delete')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          news_notice_configuration_delete: true,

        }))
      }
      if (res.data.permissions.includes('create_blog_article')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          create_blog_article: true,

        }))
      }
      if (res.data.permissions.includes('view_blog_article')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          view_blog_article: true,

        }))
      }
      if (res.data.permissions.includes('update_blog_article')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          update_blog_article: true,

        }))
      }
      if (res.data.permissions.includes('delete_blog_article')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          delete_blog_article: true,

        }))
      }
      if (res.data.permissions.includes('blog_article_configuration_create')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          blog_article_configuration_create: true,

        }))
      }
      if (res.data.permissions.includes('blog_article_configuration_view')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          blog_article_configuration_view: true,

        }))
      }
      if (res.data.permissions.includes('blog_article_configuration_update')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          blog_article_configuration_update: true,

        }))
      }
      if (res.data.permissions.includes('blog_article_configuration_delete')) {
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          blog_article_configuration_delete: true,

        }))
      }
    });



  }, [role_id])


  return (


    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2  sidebar-left1">
          <Sidebar />
        </div>

        <div className="col-md-10 ">
          <Topbar />
          <h5 className='ms-4 pt-3'>User Management</h5>

          <section>
            <div className="">
              <div className="permission-top-tag container-fluid">

              </div>
              <hr />


              <div className="mt-3 container w-50">
                <select class="form-select" aria-label="Default select example" value={role_id} onChange={(e) => setRole_id(e.target.value)}>
                  <option selected value="" disabled>Choose Role</option>
                  {
                    allRoles.map((item, i) => {
                      return (
                        <option value={item.id}>{item.name}</option>

                      )
                    })
                  }

                </select>
              </div>
              <div className="container">
                <div className="d-flex justify-content-end align-items-start" style={{ marginTop: '-50px' }}>
                  <button className="btn btn-success" type="button" onClick={handleSubmit}>Update</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-light mt-4">
            <div className="row col-12 d-flex border">
              <div className="col-4 px-4 py-2 ">
                <h5>User Management</h5>
                <hr />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="create_user"
                    checked={permissions.create_user}
                    onChange={handlePermissionChange}
                  />

                  <label class="form-check-label" for="flexCheckDefault">
                    Create User
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="view_user"
                    checked={permissions.view_user}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    View User
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="update_user"
                    checked={permissions.update_user}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault ">
                    Update User
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="delete_user"
                    checked={permissions.delete_user}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Inactive/Delete User
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="user_configuration_create"
                    checked={permissions.user_configuration_create}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    User Configuration Create
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="user_configuration_view"
                    checked={permissions.user_configuration_view}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    User Configuration View
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="user_configuration_update"
                    checked={permissions.user_configuration_update}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    User Configuration Update
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="user_configuration_delete"
                    checked={permissions.user_configuration_delete}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    User Configuration Delete
                  </label>
                </div>

              </div>
              <div className="col-4 px-4 py-2 ">
                <h5>Job Management</h5>
                <hr />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="create_job"
                    checked={permissions.create_job}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Create Job
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="view_job"
                    checked={permissions.view_job}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    View Job
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="update_job"
                    checked={permissions.update_job}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Update Job
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="delete_job"
                    checked={permissions.delete_job}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Delete/Inactive Job
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="job_configuration_create"
                    checked={permissions.job_configuration_create}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Job Configuration Create
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="job_configuration_view"
                    checked={permissions.job_configuration_view}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Job Configuration View
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="job_configuration_update"
                    checked={permissions.job_configuration_update}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Job Configuration Update
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="job_configuration_delete"
                    checked={permissions.job_configuration_delete}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Job Configuration Delete
                  </label>
                </div>






              </div>
              <div className="col-4 px-4 py-2 ">
                <h5>Blog/Article Management </h5>
                <hr />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="create_blog_article"
                    checked={permissions.create_blog_article}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Create Blog/Article
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="view_blog_article"
                    checked={permissions.view_blog_article}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    View  Blog/Article
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="update_blog_article"
                    checked={permissions.update_blog_article}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Update Blog/Article
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="delete_blog_article"
                    checked={permissions.delete_blog_article}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Delete/Inactive Blog/Article
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="blog_article_configuration_create"
                    checked={permissions.blog_article_configuration_create}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Blog/Article Configuration Create
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="blog_article_configuration_view"
                    checked={permissions.blog_article_configuration_view}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Blog/Article Configuration View
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="blog_article_configuration_update"
                    checked={permissions.blog_article_configuration_update}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Blog/Article Configuration Update
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="blog_article_configuration_delete"
                    checked={permissions.blog_article_configuration_delete}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Blog/Article Configuration Delete
                  </label>
                </div>


              </div>

              <div className="col-4 px-4 py-2 ">
                <h5>News Notice Management</h5>
                <hr />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="create_news_notice"
                    checked={permissions.create_news_notice}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Create News/Notice
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="view_news_notice"
                    checked={permissions.view_news_notice}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    View  News/Notice
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="update_news_notice"
                    checked={permissions.update_news_notice}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Update News/Notice
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="delete_news_notice"
                    checked={permissions.delete_news_notice}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Delete/Inactive News/Notice
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="news_notice_configuration_create"
                    checked={permissions.news_notice_configuration_create}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    News/Notice Configuration Create
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="news_notice_configuration_view"
                    checked={permissions.news_notice_configuration_view}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    News/Notice Configuration View
                  </label>
                </div>


                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="news_notice_configuration_update"
                    checked={permissions.news_notice_configuration_update}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    News/Notice Configuration Update
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault crud"
                    name="news_notice_configuration_delete"
                    checked={permissions.news_notice_configuration_delete}
                    onChange={handlePermissionChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    News/Notice Configuration Delete
                  </label>
                </div>


              </div>
              {/* <div className="w-25 align-self-end ">
            <button className="btn btn-success" type="button" onClick={handleSubmit}>আপডেট </button>

          </div> */}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PermissionUser;
