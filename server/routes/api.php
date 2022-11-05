<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication\MobileAuthenticationController;
use App\Http\Controllers\Backend\PostTypeController;
use App\Http\Controllers\Backend\JobTypeController;
use App\Http\Controllers\Authentication\AuthenticationController;
use App\Http\Controllers\Backend\PostController;
use App\Http\Controllers\Backend\JobPostController;
use App\Http\Controllers\Backend\DepartmentController;
use App\Http\Controllers\Backend\EventController;
use App\Http\Controllers\Backend\EventTypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();

// });

Route::group(['middleware' => 'auth:sanctum'], function()
{
    // Route::post('/check',[MobileAuthenticationController::class,'check']);
    Route::post('/admin-logout',[AuthenticationController::class,'adminLogout']);

    Route::get('/user-logout',[MobileAuthenticationController::class,'UserLogout']);


// Route::get('/post-type',[PostTypeController::class,'index']);


});



//mobile api authentication 
Route::post('/register',[MobileAuthenticationController::class,'register']);
Route::post('/login-otp-verification',[MobileAuthenticationController::class,'loginValideOtp']);
Route::post('/user-login',[MobileAuthenticationController::class,'userLogin']);
Route::post('/user-forgot-password',[MobileAuthenticationController::class,'userForgotPassword']);
Route::post('/user-forgot-password-otp-verification',[MobileAuthenticationController::class,'forgotPasswordOtpVerification']);
Route::post('/change-user-forgot-password',[MobileAuthenticationController::class,'changeUserforgotPassword']);

// Route::post('/user-logout',[MobileAuthenticationController::class,'UserLogout']);


//web authentication

Route::post('/admin-login',[AuthenticationController::class,'adminLogin']);

//all users 
Route::get('/all-users',[AuthenticationController::class,'allUsers']);






//post type routes

Route::get('/post-type',[PostTypeController::class,'index']);
Route::post('/add-post-type',[PostTypeController::class,'store']);
Route::get('/edit-post-type/{id}',[PostTypeController::class,'edit']);
Route::post('/update-post-type/{id}',[PostTypeController::class,'update']);
Route::delete('/delete-post-type/{id}',[PostTypeController::class,'destroy']);


//post routes
Route::post('/save-post',[PostController::class,'store']);
Route::get('/all-posts',[PostController::class,'index']);
Route::get('/edit-post/{id}',[PostController::class,'edit']);
Route::post('/update-post/{id}',[PostController::class,'update']);
Route::post('/delete-post/{id}',[PostController::class,'destroy']);

Route::post('/delete-all-posts',[PostController::class,'deleteAllPosts']);
Route::get('/filter-post/{filterByStatus}',[PostController::class,'filterByStatus']);
Route::get('/filter-post-by-search-input-radio/{searchInputValue}/{searchRadioButtonValue}',[PostController::class,'filterBySearchInputValandRadioButtonValue']);



//mobile users all-posts filtering
Route::get('/user-posts-filtering/{name}',[PostController::class,'userPostsFiltering']);
//mobile date range job-post filtering 
Route::post('/post-filtering-by-two-dates',[PostController::class,'postFilteringByTwoDates']);







//job types
Route::get('/job-type',[JobTypeController::class,'index']);
Route::post('/add-job-type',[JobTypeController::class,'store']);
Route::get('/edit-job-type/{id}',[JobTypeController::class,'edit']);
Route::post('/update-job-type/{id}',[JobTypeController::class,'update']);
Route::delete('/delete-job-type/{id}',[JobTypeController::class,'destroy']);


//job post routes
Route::post('/save-job-post',[JobPostController::class,'store']);
Route::get('/all-job-post',[JobPostController::class,'index']);
Route::get('/edit-job-post/{id}',[JobPostController::class,'edit']);
Route::post('/update-job-post/{id}',[JobPostController::class,'update']);
Route::post('/delete-job-post/{id}',[JobPostController::class,'destroy']);
Route::post('/delete-multiple-job-posts/{id}',[JobPostController::class,'deleteMultipleJobPosts']);

Route::get('/filter-job-post-status/{filterByJobPostStatus}',[JobPostController::class,'filterByJobPostStatus']);



//departments
Route::get('/department',[DepartmentController::class,'index']);
Route::post('/add-department',[DepartmentController::class,'store']);
Route::get('/edit-department/{id}',[DepartmentController::class,'edit']);
Route::post('/update-department/{id}',[DepartmentController::class,'update']);
Route::delete('/delete-department/{id}',[DepartmentController::class,'destroy']);






//event types
Route::get('/event-type',[EventTypeController::class,'index']);
Route::post('/add-event-type',[EventTypeController::class,'store']);
Route::get('/edit-event-type/{id}',[EventTypeController::class,'edit']);
Route::post('/update-event-type/{id}',[EventTypeController::class,'update']);
Route::delete('/delete-event-type/{id}',[EventTypeController::class,'destroy']);








//events

Route::get('/all-event-posts',[EventController::class,'index']);
Route::post('/add-event',[EventController::class,'store']);
Route::get('/edit-event/{id}',[EventController::class,'edit']);
Route::post('/delete-event/{id}',[EventController::class,'destroy']);
Route::post('/update-event/{id}',[EventController::class,'update']);
Route::put('/update-archive-status/{id}',[EventController::class,'updateArchiveStatus']);

Route::put('/archive-all-events-by-update/{id}',[EventController::class,'archiveAllEventsByUpdate']);
Route::delete('/delete-multiple-event-posts/{id}',[EventController::class,'deleteMultipleEventPosts']);
Route::put('/active-all-events-by-update/{id}',[EventController::class,'activeAllEventByUpdate']);


//web upcoming event,archive post (tab)filtering
Route::get('/filter-event-posts/{filterByName}',[EventController::class,'filterEventPostsByName']);

