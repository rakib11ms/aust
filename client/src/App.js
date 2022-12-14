import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import AdminLogin from './Authentication/AdminLogin';
import ProtectedRoutes from './Authentication/ProtectedRoutes';
import Dashboard from './BackendComponents/Dashboard/Dashboard';
import PostType from './BackendComponents/PostType/PostType';
import axios from 'axios';
import JobConfiguration from './BackendComponents/Job Management/JobConfiguration/JobConfiguration';
import CreateJobPost from './BackendComponents/Job Management/JobPost/CreateJobPost';
import ViewAllJob from './BackendComponents/Job Management/JobPost/ViewAllJob';
import ViewAllUsers from './BackendComponents/User/ViewAllUsers';
import RoleManagement from './BackendComponents/User/RoleManagement/RoleManagement';
import EditJobPost from './BackendComponents/Job Management/JobPost/EditJobPost';
import './imageUrl';
import CreateEvent from './BackendComponents/Event/CreateEvent';
import EventConfiguration from './BackendComponents/Event/Event Configuration/EventConfiguration';
import ViewAllEvent from './BackendComponents/Event/ViewAllEvent';
import ViewEventPayment from './BackendComponents/ViewEventPayment/ViewEventPayment';
import EditEvent from './BackendComponents/Event/EditEvent';
import CreateAdvertisement from './BackendComponents/Advertisement/CreateAdvertisement';
import ViewAllAdvertisement from './BackendComponents/Advertisement/ViewAdvertisement';
import Settings from '../src/BackendComponents/Settings/Settings';
import EditAdvertisement from './BackendComponents/Advertisement/EditAdvertisement';
import AdminPasswordReset from './Authentication/AdminPasswordReset';
import AdminPasswordResetForm from './Authentication/AdminPasswordResetForm';


import BlogArticleConfiguration from './BackendComponents/BlogArticle/BlogArticleConfiguration';
import CreateBlogArticle from './BackendComponents/BlogArticle/CreateBlogArticle';
import ViewBlogArticle from './BackendComponents/BlogArticle/ViewArticleBlog';
import CreateBanner from './BackendComponents/Banner/CreateBanner';
import ViewAllBanner from './BackendComponents/Banner/ViewBanner';
import EditBlogArticle from './BackendComponents/BlogArticle/EditBlogArticle';
import NoticeNewsConfiguration from './BackendComponents/NoticeNews/NoticeNewsConfiguration';
import CreateNoticeNews from './BackendComponents/NoticeNews/CreateNoticeNews';
import ViewNoticeNews from './BackendComponents/NoticeNews/ViewNoticeNews';
import EditBanner from './BackendComponents/Banner/EditBanner';
import NotFound from './BackendComponents/NotFound/NotFound';
import UserConfiguration from './BackendComponents/User/configuration/UserConfiguration';
import VlogConfiguration from './BackendComponents/Vlog/VlogConfiguration';
import CreateVlog from './BackendComponents/Vlog/CreateVlog';
import ViewVlog from './BackendComponents/Vlog/ViewVlog';
import EditVlog from './BackendComponents/Vlog/EditVlog';
function App() {

  const [storage, setStorage] = useState('');
  useEffect(() => {
    setStorage(localStorage.getItem('user_type') === 'admin');
  }, [])

  const [successStatus, setSuccessStatus] = useState('')
  console.log('susccess status', successStatus);

  const handleSucessLogin = (val) => {
    setSuccessStatus(val)
  }



  const [trigger, setTrigger] = useState('');
  // console.log('hel',trigger);

  useEffect(() => {
    if (trigger) {
      <Navigate to="/admin-login" />

    }

  }, [trigger]);

  axios.interceptors.response.use(response => {
    return response;

  }, error => {
    if (error.response.status === 401) {
      // setTrigger(error.response.status);
      // console.log('use effect triggered');
      // alert('trii')
      // Swal.fire("Unauthorized", '', 'error')
      // navigate('admin-login')
      { <Navigate to="/admin-login" /> }

    }
    return error;

  });













  const navigate = useNavigate();
  useEffect(() => {
    if (successStatus.status == 'yes') {
      localStorage.setItem('auth_token', successStatus.token);
      localStorage.setItem('username', successStatus.username);
      localStorage.setItem('email', successStatus.email);
      localStorage.setItem('user_type', successStatus.user_type);
      if (successStatus.user_type === 'admin') {

        navigate('/admin-dashboard')
        // setSuccessStatus('');
      }
      else if (successStatus.user_type === 'user') {
        navigate('/admin-login')

      }

    }

  }, [successStatus])

  return (
    <>
      <Routes>


        <Route path="admin-login" element={<AdminLogin handleSucessLogin={handleSucessLogin} />}></Route>

        <Route path="admin-password-reset-form" element={<AdminPasswordResetForm />}></Route>
        <Route path="admin-password-reset/:id" element={<AdminPasswordReset />}></Route>




        <Route element={<ProtectedRoutes />}>
          {
            successStatus == 'yes' ?
              storage === 'admin' && <>
                <Route path="admin-dashboard" element={<Dashboard />}></Route>
              </>

              :
              <Route path="admin-login" element={<AdminLogin />}></Route>

          }


          <Route path="admin-dashboard" element={<Dashboard />}></Route>
          <Route path="post-type" element={<PostType />}></Route>
          <Route path="job-configuration" element={<JobConfiguration />}></Route>
          <Route path="create-job-post" element={<CreateJobPost />}></Route>
          <Route path="view-all-jobs" element={<ViewAllJob />}></Route>

          <Route path="view-all-users" element={<ViewAllUsers />}></Route>
          <Route path="role-management" element={<RoleManagement />}></Route>

          <Route path="user-configuration" element={<UserConfiguration />}></Route>




          <Route path="edit-jobs/:id" element={<EditJobPost />}></Route>

          <Route path="create-event" element={<CreateEvent />}></Route>
          <Route path="edit-events/:id" element={<EditEvent />}></Route>
          <Route path="event-configuration" element={<EventConfiguration />}></Route>
          <Route path="view-all-events" element={<ViewAllEvent />}></Route>


          <Route path="admin-dashboard" element={<Dashboard />}></Route>
          <Route path="post-type" element={<PostType />}></Route>
          <Route path="job-configuration" element={<JobConfiguration />}></Route>
          <Route path="create-job-post" element={<CreateJobPost />}></Route>
          <Route path="view-all-jobs" element={<ViewAllJob />}></Route>
          <Route path="edit-jobs/:id" element={<EditJobPost />}></Route>

          <Route path="create-event" element={<CreateEvent />}></Route>
          <Route path="edit-events/:id" element={<EditEvent />}></Route>
          <Route path="event-configuration" element={<EventConfiguration />}></Route>
          <Route path="view-all-events" element={<ViewAllEvent />}></Route>
          <Route path="view-event-payment" element={<ViewEventPayment />}></Route>

          <Route path="view-blog-article" element={<ViewBlogArticle />}></Route>
          <Route path="create-blog-article" element={<CreateBlogArticle />}></Route>
          <Route path="edit-blog-article/:id" element={<EditBlogArticle />}></Route>
          <Route path="blog-article-configuration" element={<BlogArticleConfiguration />}></Route>


          <Route path="create-notice-news" element={<CreateNoticeNews />}></Route>
          <Route path="view-notice-news" element={<ViewNoticeNews />}></Route>
          <Route path="notice-news-configuration" element={<NoticeNewsConfiguration />}></Route>




          <Route path="create-banner" element={<CreateBanner />}></Route>
          <Route path="view-all-banner" element={<ViewAllBanner />}></Route>
          <Route path="edit-banner/:id" element={<EditBanner />}></Route>



          <Route path="create-advertisement" element={<CreateAdvertisement />}></Route>
          <Route path="view-all-advertisement" element={<ViewAllAdvertisement />}></Route>
          <Route path="edit-advertisement/:id" element={<EditAdvertisement />}></Route>

          <Route path="create-vlog" element={<CreateVlog />}></Route>
          <Route path="view-vlog" element={<ViewVlog />}></Route>
          <Route path="edit-vlog/:id" element={<EditVlog />}></Route>
          <Route path="vlog-configuration" element={<VlogConfiguration />}></Route>

          <Route path="settings" element={<Settings />}></Route>



        </Route>
        <Route path="*" element={<NotFound />}></Route>


      </Routes>


    </>
  );
}

export default App;