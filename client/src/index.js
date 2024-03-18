import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './imageUrl'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// axios.defaults.baseURL = 'http://10.81.11.60:8000';
// // axios.defaults.baseURL = 'http://127.0.0.1:8000';
// // axios.defaults.baseURL = 'https://admin.austtaa.com/server/public/';
// // axios.defaults.baseURL = 'https://dev.zaimahtech.com/ztl-server/public/api/';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('auth_token');
//   config.headers.Authorization = token ? `Bearer ${token}` : '';

//   return config;
// },  function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor to handle unauthorized access errors
// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     // console.log("hu",error)

 

//     if (error.response && error.response.status === 401) {
//       // alert("Aunauthenticated")
//       // Unauthorized access error
//       // Redirect the user to the login page or show an error message
//       // const navigate = useNavigate(); 
//       // navigate('/admin-login'); // Redirect to the login page
//       window.location.href = '/admin-login';

//     }
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();