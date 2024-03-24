import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './imageUrl';
import EditUser from './BackendComponents/User/EditUser';
import CreateOrganization from './BackendComponents/Organization/CreateOrganization';
import ViewOrganization from './BackendComponents/Organization/ViewOrganization';
import EditOrganization from './BackendComponents/Organization/EditOrgnization';
import TermCondition from './PrivacyPolicy/TermCondition';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import PostConfiguration from './BackendComponents/PostType/PostConfiguration';

import AdminLogin from './Authentication/AdminLogin';

import ProtectedRoutes from './Authentication/ProtectedRoutes';
import Dashboard from './BackendComponents/Dashboard/Dashboard';
import PostType from './BackendComponents/PostType/PostType';
import JobConfiguration from './BackendComponents/Job Management/JobConfiguration/JobConfiguration';
import CreateJobPost from './BackendComponents/Job Management/JobPost/CreateJobPost';
import ViewAllJob from './BackendComponents/Job Management/JobPost/ViewAllJob';
import ViewAllUsers from './BackendComponents/User/ViewAllUsers';
import EditJobPost from './BackendComponents/Job Management/JobPost/EditJobPost';
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
import EditNoticeNews from './BackendComponents/NoticeNews/EditNoticeNews';
import ViewNotification from './BackendComponents/Notification/ViewNotification';
import CreateNotification from './BackendComponents/Notification/CreateNotification';
import PermissionUser from './BackendComponents/PermissionUser/PermissionUser';
import ViewThana from './BackendComponents/LocationSetup/Thana/ViewThana';
import CreateThana from './BackendComponents/LocationSetup/Thana/CreateThana';
import ViewPostalCode from './BackendComponents/LocationSetup/PostalCode/ViewPostalCode';
import CreatePostalCode from './BackendComponents/LocationSetup/PostalCode/CreatePostalCode';
import ViewBlogArticleWithComments from './BackendComponents/BlogArticle/ViewBlogArticleWithComments';








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




  const navigate = useNavigate();
  useEffect(() => {
    if (successStatus.status == 'yes') {
      localStorage.setItem('auth_token', successStatus.token);
      localStorage.setItem('full_name', successStatus.full_name);
      localStorage.setItem('image', successStatus.image);
      localStorage.setItem('email', successStatus.email);
      localStorage.setItem('user_type', successStatus.user_type);
      localStorage.setItem('user_id', successStatus.user_id);
      localStorage.setItem('roleId', successStatus.roleId);
      if (successStatus.user_type === 'admin') {

        navigate('/admin-dashboard')
        // setSuccessStatus('');
        // window.location.reload();
      }
      else if (successStatus.user_type === 'user') {
        navigate('/admin-login')

      }

    }

  }, [successStatus])

  // useEffect(() => {
  //   {
  //     localStorage.getItem("auth_token") && navigate('/admin-dashboard') 

  //   }

  // }, [])


  

// axios.defaults.baseURL = 'http://10.81.11.60:8000';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.baseURL = 'https://admin.austtaa.com/server/public/';
// axios.defaults.baseURL = 'https://dev.zaimahtech.com/ztl-server/public/api/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
},  function (error) {
  // Do something with request error
  return Promise.reject(error);
});

const [isAuthenticated, setIsAuthenticated] = useState("");

    const axiosInterceptor = axios.interceptors.response.use(
        function (response) {
            // setIsAuthenticated(true);
            return response;
        },
        function (error) {
            if (error.response && error.response.status === 401) {
                // alert("Unauthenticated");
                // setIsAuthenticated("401");
                window.location.href = '/admin-login';

            }
            return Promise.reject(error);
        }
    );

 


  return (
    <>



      {/* <Suspense fallback={<div class="spin1">
        <div class="spinner-border text-success" style={{ width: '2rem', "height": "2rem", "role": "status" }}>
          <span class="visually-hidden ">Loading...</span>
        </div>
      </div>}> */}
      {/* <Suspense fallback={
        <div class="spin1">
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

        </div>
      }> */}

      <Routes>


        <Route path="/" element={<Navigate to='/admin-login' />} />

        <Route exact path="admin-login" element={<AdminLogin handleSucessLogin={handleSucessLogin} />}>

        </Route>

        <Route path="admin-password-reset-form" element={<AdminPasswordResetForm />}></Route>
        <Route path="admin-password-reset/:id" element={<AdminPasswordReset />}></Route>



        <Route path="term-conditions" element={<TermCondition />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>




        {/* <Route element={<ProtectedRoutes />}> */}
          {/* {
            successStatus === 'yes' ?
              storage === 'admin' && <>
                <Route path="admin-dashboard" element={<Dashboard />}></Route>
              </>

              :
              <Route path="admin-login" element={<AdminLogin />}></Route>

          } */}


          <Route path="admin-dashboard" element={<Dashboard />}></Route>
          <Route path="post-type" element={<PostType />}></Route>
          <Route path="post-configuration" element={<PostConfiguration />}></Route>
          <Route path="job-configuration" element={<JobConfiguration />}></Route>
          <Route path="create-job-post" element={<CreateJobPost />}></Route>
          <Route path="view-all-jobs" element={<ViewAllJob />}></Route>

          <Route element={<ProtectedRoutes allowedPermission={['view-user','create-user','update-user','delete-user']}/>}  >
          <Route path="/view-all-users" exact element={<ViewAllUsers />}></Route>
          </Route>
          {/* <Route path="view-all-users" element={<ViewAllUsers />}></Route> */}
          <Route path="edit-user/:id" element={<EditUser />}></Route>
          <Route path="role-management" element={<PermissionUser />}></Route>

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
          <Route path="view-blog-article-with-comments/:id" element={<ViewBlogArticleWithComments />}></Route>


          <Route path="create-notice-news" element={<CreateNoticeNews />}></Route>
          <Route path="view-notice-news" element={<ViewNoticeNews />}></Route>
          <Route path="edit-notice-news/:id" element={<EditNoticeNews />}></Route>
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


          <Route path="create-organization" element={<CreateOrganization />}></Route>
          <Route path="view-organization" element={<ViewOrganization />}></Route>
          <Route path="edit-organization/:id" element={<EditOrganization />}></Route>



          <Route path="view-global-notification" element={< ViewNotification />}></Route>
          <Route path="create-global-notification" element={< CreateNotification />}></Route>



          <Route path="view-thana" element={< ViewThana />}></Route>
          <Route path="create-thana" element={< CreateThana />}></Route>
          <Route path="view-postal-code" element={< ViewPostalCode />}></Route>
          <Route path="create-postal-code" element={< CreatePostalCode />}></Route>


        {/* </Route> */}
        <Route path="*" element={<NotFound />}></Route>




      </Routes>
      {/* </Suspense > */}



    </>
  );
}

export default App;