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
use App\Http\Controllers\Backend\AdvertisementController;
use App\Http\Controllers\Backend\EventTypeController;
use App\Http\Controllers\Backend\ArticleBlogCategoryController;
use App\Http\Controllers\Backend\ArticleBlogSubCategoryController;

use App\Http\Controllers\Backend\ArticleBlogController;
use App\Http\Controllers\Backend\AusttaaJobSectorController;
use App\Http\Controllers\Backend\AusttaaJobSubSectorController;

use App\Http\Controllers\Backend\NoticeNewsCategoryController;
use App\Http\Controllers\Backend\NoticeNewsSubCategoryController;
use App\Http\Controllers\Backend\NoticeNewsController;
use App\Http\Controllers\Backend\BannerController;
use App\Http\Controllers\SslCommerzPaymentController;

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

Route::group(['middleware' => 'auth:sanctum'], function () {
    // Route::post('/check',[MobileAuthenticationController::class,'check']);
    Route::post('/admin-logout', [AuthenticationController::class, 'adminLogout']);

    Route::get('/user-logout', [MobileAuthenticationController::class, 'UserLogout']);


    // Route::get('/post-type',[PostTypeController::class,'index']);


});



//mobile api authentication 
Route::post('/register', [MobileAuthenticationController::class, 'register']);
Route::post('/login-otp-verification', [MobileAuthenticationController::class, 'loginValideOtp']);
Route::post('/user-login', [MobileAuthenticationController::class, 'userLogin']);
Route::post('/user-forgot-password', [MobileAuthenticationController::class, 'userForgotPassword']);
Route::post('/user-forgot-password-otp-verification', [MobileAuthenticationController::class, 'forgotPasswordOtpVerification']);
Route::post('/change-user-forgot-password', [MobileAuthenticationController::class, 'changeUserforgotPassword']);

// Route::post('/user-logout',[MobileAuthenticationController::class,'UserLogout']);


//web authentication

Route::post('/admin-login', [AuthenticationController::class, 'adminLogin']);
Route::post('/admin-forget-password', [AuthenticationController::class, 'submitForgetPasswordForm']); 
Route::post('/reset-admin-password', [AuthenticationController::class, 'submitResetPasswordForm'])->name('reset.password.post');

Route::get('/specific-user/{id}', [AuthenticationController::class, 'specificUser']);


//all users 
Route::get('/all-users', [AuthenticationController::class, 'allUsers']);



//ausstta job sector (user configuration) Master Setup


Route::get('/job-sector', [AusttaaJobSectorController::class, 'index']);
Route::post('/add-job-sector', [AusttaaJobSectorController::class, 'store']);
Route::get('/edit-job-sector/{id}', [AusttaaJobSectorController::class, 'edit']);
Route::post('/update-job-sector/{id}', [AusttaaJobSectorController::class, 'update']);
Route::delete('/delete-job-sector/{id}', [AusttaaJobSectorController::class, 'destroy']);


//ausstta job sub sector

Route::get('/job-sub-sector', [AusttaaJobSubSectorController::class, 'index']);
Route::post('/add-job-sub-sector', [AusttaaJobSubSectorController::class, 'store']);
Route::get('/edit-job-sub-sector/{id}', [AusttaaJobSubSectorController::class, 'edit']);
Route::post('/update-job-sub-sector/{id}', [AusttaaJobSubSectorController::class, 'update']);
Route::delete('/delete-job-sub-sector/{id}', [AusttaaJobSubSectorController::class, 'destroy']);





//post type routes

Route::get('/post-type', [PostTypeController::class, 'index']);
Route::post('/add-post-type', [PostTypeController::class, 'store']);
Route::get('/edit-post-type/{id}', [PostTypeController::class, 'edit']);
Route::post('/update-post-type/{id}', [PostTypeController::class, 'update']);
Route::delete('/delete-post-type/{id}', [PostTypeController::class, 'destroy']);


//post routes
Route::post('/save-post', [PostController::class, 'store']);
Route::get('/all-posts', [PostController::class, 'index']);
Route::get('/edit-post/{id}', [PostController::class, 'edit']);
Route::post('/update-post/{id}', [PostController::class, 'update']);
Route::post('/delete-post/{id}', [PostController::class, 'destroy']);

Route::post('/delete-multiple-posts/{id}', [PostController::class, 'deleteMultiplePosts']);
Route::put('/archive-all-posts-by-update/{id}', [PostController::class, 'archiveAllPostsByUpdate']);
Route::put('/active-all-posts-by-update/{id}', [PostController::class, 'activeAllPostsByUpdate']);
Route::put('/pending-all-posts-by-update/{id}', [PostController::class, 'pendingAllPostsByUpdate']);


//web posts(table)
Route::post('/delete-multiple-posts/{id}', [PostController::class, 'deleteMultiplePosts']);

Route::get('/filter-post/{filterByStatus}', [PostController::class, 'filterByStatus']);
Route::get('/filter-post-by-search-input-radio/{searchInputValue}/{searchRadioButtonValue}', [PostController::class, 'filterBySearchInputValandRadioButtonValue']);



//mobile users all-posts filtering
Route::get('/user-posts-filtering/{name}', [PostController::class, 'userPostsFiltering']);
//mobile date range job-post filtering 
Route::post('/post-filtering-by-two-dates', [PostController::class, 'postFilteringByTwoDates']);







//job types
Route::get('/job-type', [JobTypeController::class, 'index']);
Route::post('/add-job-type', [JobTypeController::class, 'store']);
Route::get('/edit-job-type/{id}', [JobTypeController::class, 'edit']);
Route::post('/update-job-type/{id}', [JobTypeController::class, 'update']);
Route::delete('/delete-job-type/{id}', [JobTypeController::class, 'destroy']);


//job post routes
Route::post('/save-job-post', [JobPostController::class, 'store']);
Route::get('/all-job-post', [JobPostController::class, 'index']);
Route::get('/edit-job-post/{id}', [JobPostController::class, 'edit']);
Route::post('/update-job-post/{id}', [JobPostController::class, 'update']);
Route::post('/delete-job-post/{id}', [JobPostController::class, 'destroy']);
Route::post('/delete-multiple-job-posts/{id}', [JobPostController::class, 'deleteMultipleJobPosts']);
Route::put('/archive-all-job-posts-by-update/{id}', [JobPostController::class, 'archiveAllJobPostsByUpdate']);
Route::put('/active-all-job-posts-by-update/{id}', [JobPostController::class, 'activeAllJobPostsByUpdate']);
Route::put('/pending-all-job-posts-by-update/{id}', [JobPostController::class, 'pendingAllJobPostsByUpdate']);

Route::get('/filter-job-post-status/{filterByJobPostStatus}', [JobPostController::class, 'filterByJobPostStatus']);



//departments
Route::get('/department', [DepartmentController::class, 'index']);
Route::post('/add-department', [DepartmentController::class, 'store']);
Route::get('/edit-department/{id}', [DepartmentController::class, 'edit']);
Route::post('/update-department/{id}', [DepartmentController::class, 'update']);
Route::delete('/delete-department/{id}', [DepartmentController::class, 'destroy']);






//event types
Route::get('/event-type', [EventTypeController::class, 'index']);
Route::post('/add-event-type', [EventTypeController::class, 'store']);
Route::get('/edit-event-type/{id}', [EventTypeController::class, 'edit']);
Route::post('/update-event-type/{id}', [EventTypeController::class, 'update']);
Route::delete('/delete-event-type/{id}', [EventTypeController::class, 'destroy']);








//events

Route::get('/all-event-posts', [EventController::class, 'index']);
Route::post('/add-event', [EventController::class, 'store']);
Route::get('/edit-event/{id}', [EventController::class, 'edit']);
Route::post('/delete-event/{id}', [EventController::class, 'destroy']);
Route::post('/update-event/{id}', [EventController::class, 'update']);
Route::put('/update-archive-status/{id}', [EventController::class, 'updateArchiveStatus']);

Route::put('/archive-all-events-by-update/{id}', [EventController::class, 'archiveAllEventsByUpdate']);
Route::delete('/delete-multiple-event-posts/{id}', [EventController::class, 'deleteMultipleEventPosts']);
Route::put('/active-all-events-by-update/{id}', [EventController::class, 'activeAllEventByUpdate']);



/////banner mobile /////////////////

Route::get('/all-banner', [BannerController::class, 'index']);
Route::post('/add-banner', [BannerController::class, 'store']);
Route::get('/edit-banner/{id}', [BannerController::class, 'edit']);
Route::post('/delete-banner/{id}', [BannerController::class, 'destroy']);
Route::post('/update-banner/{id}', [BannerController::class, 'update']);
Route::delete('/delete-multiple-banner/{id}', [BannerController::class, 'deleteMultipleBanner']);

/////mobile banner event latest one/////////////

Route::get('/latest-event-mobile-banner', [BannerController::class, 'latestEventMobileBanner']);


//web upcoming event,archive post (tab)filtering
Route::get('/filter-event-posts/{filterByName}', [EventController::class, 'filterEventPostsByName']);


//advertisement

Route::get('/all-advertisements', [AdvertisementController::class, 'index']);
Route::post('/add-advertisement', [AdvertisementController::class, 'store']);
Route::get('/edit-advertisement/{id}', [AdvertisementController::class, 'edit']);
Route::post('/delete-advertisement/{id}', [AdvertisementController::class, 'destroy']);
Route::post('/delete-advertisement-multiple-image/{id}', [AdvertisementController::class, 'deleteMultipleImage']);
Route::post('/update-advertisement/{id}', [AdvertisementController::class, 'update']);

// /web upcoming advertisement,archive post (tab)filtering
Route::get('/filter-advertisement-posts/{filterByName}', [AdvertisementController::class, 'filterAdvertisementsByName']);
  //web filtering between days (advertisement finishing)
Route::get('/filter-advertisement-finishing-days/{filterByDays}', [AdvertisementController::class, 'filterAdvertisementsByDays']);






Route::delete('/delete-multiple-advertisements/{id}', [AdvertisementController::class, 'deleteMultipleAdvertisement']);
Route::put('/active-all-advertisements-by-update/{id}', [AdvertisementController::class, 'activeAllAdvertisementByUpdate']);


//article & blogs category


Route::get('/article-blogs-category', [ArticleBlogCategoryController::class, 'index']);
Route::post('/add-article-blogs-category', [ArticleBlogCategoryController::class, 'store']);
Route::get('/edit-article-blogs-category/{id}', [ArticleBlogCategoryController::class, 'edit']);
Route::post('/update-article-blogs-category/{id}', [ArticleBlogCategoryController::class, 'update']);
Route::delete('/delete-article-blogs-category/{id}', [ArticleBlogCategoryController::class, 'destroy']);


//article & blogs subcategory

Route::get('/article-blogs-subcategory', [ArticleBlogSubCategoryController::class, 'index']);
Route::post('/add-article-blogs-subcategory', [ArticleBlogSubCategoryController::class, 'store']);
Route::get('/edit-article-blogs-subcategory/{id}', [ArticleBlogSubCategoryController::class, 'edit']);
Route::post('/update-article-blogs-subcategory/{id}', [ArticleBlogSubCategoryController::class, 'update']);
Route::delete('/delete-article-blogs-subcategory/{id}', [ArticleBlogSubCategoryController::class, 'destroy']);

//dependent sub categories based on category id dropdown web
Route::get('/get-article-blogs-subcategories-by-category-id/{id}', [ArticleBlogSubCategoryController::class, 'getAllSubCatByCatId']);



Route::get('/all-article-blogs', [ArticleBlogController::class, 'index']);
Route::post('/add-article-blogs', [ArticleBlogController::class, 'store']);
Route::get('/edit-article-blogs/{id}', [ArticleBlogController::class, 'edit']);
Route::post('/delete-article-blogs/{id}', [ArticleBlogController::class, 'destroy']);
Route::post('/update-article-blogs/{id}', [ArticleBlogController::class, 'update']);

//web article blogs(table) filtering
Route::get('/filtering-article-blogs-by-status/{name}', [ArticleBlogController::class, 'articleBlogfilterByStatus']);

Route::get('/filter-article-blogs-by-search-input-radio/{searchInputValue}/{searchRadioButtonValue}', [ArticleBlogController::class, 'articleBlogfilterBySearchInputRadioButton']);

Route::post('/delete-multiple-article-blogs/{id}', [ArticleBlogController::class, 'deleteMultipleArticleBlogs']);



//notice news category


Route::get('/notice-news-category', [NoticeNewsCategoryController::class, 'index']);
Route::post('/add-notice-news-category', [NoticeNewsCategoryController::class, 'store']);
Route::get('/edit-notice-news-category/{id}', [NoticeNewsCategoryController::class, 'edit']);
Route::post('/update-notice-news-category/{id}', [NoticeNewsCategoryController::class, 'update']);
Route::delete('/delete-notice-news-category/{id}', [NoticeNewsCategoryController::class, 'destroy']);

//notice news subcategory

Route::get('/notice-news-subcategory', [NoticeNewsSubCategoryController::class, 'index']);
Route::post('/add-notice-news-subcategory', [NoticeNewsSubCategoryController::class, 'store']);
Route::get('/edit-notice-news-subcategory/{id}', [NoticeNewsSubCategoryController::class, 'edit']);
Route::post('/update-notice-news-subcategory/{id}', [NoticeNewsSubCategoryController::class, 'update']);
Route::delete('/delete-article-blogs-subcategory/{id}', [NoticeNewsSubCategoryController::class, 'destroy']);

//dependent sub categories based on category id dropdown web (notice news cat,subcat)
Route::get('/get-notice-news-subcategories-by-category-id/{id}', [NoticeNewsSubCategoryController::class, 'getAllSubCatByCategoryId']);

Route::get('/all-notice-news', [NoticeNewsController::class, 'index']);
Route::post('/add-notice-news', [NoticeNewsController::class, 'store']);
Route::get('/edit-notice-news/{id}', [NoticeNewsController::class, 'edit']);
Route::post('/delete-notice-news/{id}', [NoticeNewsController::class, 'destroy']);
Route::post('/update-notice-news/{id}', [NoticeNewsController::class, 'update']);





// SSLCOMMERZ Start
Route::get('/example1', [SslCommerzPaymentController::class, 'exampleEasyCheckout']);
Route::get('/example2', [SslCommerzPaymentController::class, 'exampleHostedCheckout']);

// Route::post('/pay', [SslCommerzPaymentController::class, 'index']);
Route::post('/pay-via-ajax', [SslCommerzPaymentController::class, 'payViaAjax']);

Route::post('/success', [SslCommerzPaymentController::class, 'success']);
Route::post('/fail', [SslCommerzPaymentController::class, 'fail']);
Route::post('/cancel', [SslCommerzPaymentController::class, 'cancel']);

Route::post('/ipn', [SslCommerzPaymentController::class, 'ipn']);
//SSLCOMMERZ END
