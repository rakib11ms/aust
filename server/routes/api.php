<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\AdminNoticeNotification;
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
use App\Http\Controllers\Backend\MessageController;

use App\Http\Controllers\Backend\ArticleBlogController;
use App\Http\Controllers\Backend\AusttaaJobSectorController;
use App\Http\Controllers\Backend\AusttaaJobSubSectorController;
use App\Http\Controllers\Backend\AusttaaCompanyNameController;

use App\Http\Controllers\Backend\AusttaaBatchController;
use App\Http\Controllers\Backend\AusttaaBloodGroupController;
use App\Http\Controllers\Backend\AusttaaStreamController;
use App\Http\Controllers\Backend\ViewAllUserController;
use App\Http\Controllers\Backend\GlobalNotificationController;
use App\Http\Controllers\Backend\OrganizationController;

use App\Http\Controllers\Backend\AusttaaJobSectorJobSubSectorMapController;
use App\Http\Controllers\Backend\NoticeNewsCategoryController;
use App\Http\Controllers\Backend\NoticeNewsSubCategoryController;
use App\Http\Controllers\Backend\NoticeNewsController;
use App\Http\Controllers\Backend\VlogCategoryController;
use App\Http\Controllers\Backend\VlogController;
use App\Http\Controllers\Backend\DashboardHomeController;
use App\Http\Controllers\Backend\BannerController;
use App\Http\Controllers\SslCommerzPaymentController;

use App\Http\Controllers\Backend\RoleNameController;

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
Route::get('/all-read-notification-through-posts', [DashboardHomeController::class, 'allReadNotificationThroughPosts']);

});



//mobile api authentication and user profile
Route::post('/register', [MobileAuthenticationController::class, 'register']);
Route::post('/login-otp-verification', [MobileAuthenticationController::class, 'loginValideOtp']);
Route::post('/user-login', [MobileAuthenticationController::class, 'userLogin']);
Route::post('/user-forgot-password', [MobileAuthenticationController::class, 'userForgotPassword']);
Route::post('/user-forgot-password-otp-verification', [MobileAuthenticationController::class, 'forgotPasswordOtpVerification']);
Route::post('/change-user-forgot-password', [MobileAuthenticationController::class, 'changeUserforgotPassword']);

Route::post('/user-professional-add-more', [MobileAuthenticationController::class, 'userProfessionalAddMore']);
Route::post('/update-user-professional/{id}', [MobileAuthenticationController::class, 'userProfessionalUpdate']);
Route::post('/update-user-bio/{id}', [MobileAuthenticationController::class, 'updateUserBio']);
Route::post('/update-contact-social-information/{id}', [MobileAuthenticationController::class, 'updateUserContactSocialInformation']);

Route::post('/update-user-educational-info/{userId}', [MobileAuthenticationController::class, 'editUserEducationalInfo']);

Route::post('/update-user-name/{userId}', [MobileAuthenticationController::class, 'updateUserName']);
Route::post('/update-user-image/{userId}', [MobileAuthenticationController::class, 'updateUserImage']);



Route::post('/user-cv-upload/{userId}', [MobileAuthenticationController::class, 'userCvUpload']);

Route::get('/specific-user/{id}', [MobileAuthenticationController::class, 'specificUser']);

// Route::post('/user-logout',[MobileAuthenticationController::class,'UserLogout']);


//web authentication

Route::post('/admin-login', [AuthenticationController::class, 'adminLogin']);
Route::post('/admin-forget-password', [AuthenticationController::class, 'submitForgetPasswordForm']); 
Route::post('/reset-admin-password', [AuthenticationController::class, 'submitResetPasswordForm'])->name('reset.password.post');



// //all users 
// Route::get('/all-users', [AuthenticationController::class, 'allUsers']);


///view all users (web) view section ///

Route::get('/all-users', [ViewAllUserController::class, 'allUsers']);
Route::get('/edit-user/{id}', [ViewAllUserController::class, 'editUser']);

// update users personal info (column based web)
Route::post('/update-user-personal-info-web/{id}', [ViewAllUserController::class, 'updateUserPersonalInfo']);

// edit users professional infos by professional id (web)
Route::get('/edit-user-professional-web/{id}', [ViewAllUserController::class, 'editUserProfessionalData']);


//total pending or active users count (web)
Route::get('/total-pending-or-active-users', [ViewAllUserController::class, 'totalPendingActiveUsers']);


Route::post('/change-user-status-active-or-pending/{id}', [ViewAllUserController::class, 'activeUserByPending']);

//delete user

Route::delete('/delete-user-by-admin/{id}', [ViewAllUserController::class, 'deleteUserByAdmin']);


//delete multiple users
Route::post('/delete-multiple-users/{id}', [ViewAllUserController::class, 'deleteMultileUsers']);
//role change with password revoke

Route::post('/role-change-request', [ViewAllUserController::class, 'roleChangeUserRequest']);

Route::get('/user-role-filtering/{name}', [ViewAllUserController::class, 'userRoleFiltering']);


//export users as a excel data (web)

Route::get('/export-users-as-excel/{name}', [ViewAllUserController::class, 'exportUserExcel']);

// Route::get('/multiple-filter-search-all-users/{company}/{blood}/{batch}/{stream}/{gender}/{job-sector}/{job-sub-sector}/{thana}', [ViewAllUserController::class, 'multipleFilterSearchAllUsers']);

Route::get('/multiple-filter-search-all-users/{gender}/{stream}/{blood}/{company}/{batch}/{jobsector}/{subsector}/{thana}', [ViewAllUserController::class, 'multipleFilterSearchAllUsers']);

//global user search web
Route::get('/user-global-search/{name}', [ViewAllUserController::class, 'userGlobalSearch']);

//current location based search (mobile)
Route::get('/user-location-based-search-mobile/{name}', [ViewAllUserController::class, 'userLocationSearch']);



//all location (thana) from users table thana field dropdown
Route::get('/all-thana', [ViewAllUserController::class, 'LocationThana']);

//austtaa batch 

Route::get('/batch-name', [AusttaaBatchController::class, 'index']);
Route::post('/add-batch-name', [AusttaaBatchController::class, 'store']);
Route::get('/edit-batch-name/{id}', [AusttaaBatchController::class, 'edit']);
Route::post('/update-batch-name/{id}', [AusttaaBatchController::class, 'update']);
Route::delete('/delete-batch-name/{id}', [AusttaaBatchController::class, 'destroy']);


//austtaa blood group 

Route::get('/blood-group-name', [AusttaaBloodGroupController::class, 'index']);
Route::post('/add-blood-group-name', [AusttaaBloodGroupController::class, 'store']);
Route::get('/edit-blood-group-name/{id}', [AusttaaBloodGroupController::class, 'edit']);
Route::post('/update-blood-group-name/{id}', [AusttaaBloodGroupController::class, 'update']);
Route::delete('/delete-blood-group-name/{id}', [AusttaaBloodGroupController::class, 'destroy']);

//austtaa stream

Route::get('/stream-name', [AusttaaStreamController::class, 'index']);
Route::post('/add-stream-name', [AusttaaStreamController::class, 'store']);
Route::get('/edit-stream-name/{id}', [AusttaaStreamController::class, 'edit']);
Route::post('/update-stream-name/{id}', [AusttaaStreamController::class, 'update']);
Route::delete('/delete-stream-name/{id}', [AusttaaStreamController::class, 'destroy']);

//organization setup

Route::get('/organization-setup', [OrganizationController::class, 'index']);
Route::post('/add-organization-setup', [OrganizationController::class, 'store']);
Route::get('/edit-organization-setup/{id}', [OrganizationController::class, 'edit']);
Route::post('/update-organization-setup/{id}', [OrganizationController::class, 'update']);
Route::post('/delete-organization-setup/{id}', [OrganizationController::class, 'destroy']);


//ausstta company name (user configuration) Master Setup

Route::get('/company-name', [AusttaaCompanyNameController::class, 'index']);
Route::post('/add-company-name', [AusttaaCompanyNameController::class, 'store']);
Route::get('/edit-company-name/{id}', [AusttaaCompanyNameController::class, 'edit']);
Route::post('/update-company-name/{id}', [AusttaaCompanyNameController::class, 'update']);
Route::delete('/delete-company-name/{id}', [AusttaaCompanyNameController::class, 'destroy']);

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

//austtaa job sector job sub sector mapping 

Route::get('/job-sector-job-sub-sector-map', [AusttaaJobSectorJobSubSectorMapController::class, 'index']);
Route::post('/add-job-sector-job-sub-sector-map', [AusttaaJobSectorJobSubSectorMapController::class, 'store']);
Route::get('/edit-job-sector-job-sub-sector-map/{id}', [AusttaaJobSectorJobSubSectorMapController::class, 'edit']);
Route::post('/update-job-sector-job-sub-sector-map/{id}', [AusttaaJobSectorJobSubSectorMapController::class, 'update']);
Route::delete('/delete-job-sector-job-sub-sector-map/{id}', [AusttaaJobSectorJobSubSectorMapController::class, 'destroy']);


//dependent sub job sector based on job sector id dropdown web
Route::get('/get-all-job-sub-sectors-by-job-sector-id/{id}', [AusttaaJobSectorJobSubSectorMapController::class, 'getAllSubByJobSectorId']);



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

//my posts filtering global search

Route::get('/user-my-posts-global-filtering/{name}', [PostController::class, 'userMyPostsFiltering']);


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
Route::post('/delete-event-multiple-image/{id}', [EventController::class, 'deleteEventMultipleImage']);
Route::put('/archive-all-events-by-update/{id}', [EventController::class, 'archiveAllEventsByUpdate']);
Route::delete('/delete-multiple-event-posts/{id}', [EventController::class, 'deleteMultipleEventPosts']);
Route::put('/active-all-events-by-update/{id}', [EventController::class, 'activeAllEventByUpdate']);

//event gloabl all search (web) searchbar field
Route::get('/get-all-event-related-data/{name}', [EventController::class, 'getAllEventRelatedDataByName']);

//event qr code scanner (pass or fail)
Route::get('/event-qr-code-pass-or-fail/{eventId}', [EventController::class, 'eventQrCodePassOrFail']);


//web event persons name

Route::get('/event-contact-persons-name/{eventId}', [EventController::class, 'eventContactPersonName']);

/////banner mobile /////////////////

Route::get('/all-banner', [BannerController::class, 'index']);
Route::post('/add-banner', [BannerController::class, 'store']);
Route::get('/edit-banner/{id}', [BannerController::class, 'edit']);
Route::post('/delete-banner/{id}', [BannerController::class, 'destroy']);
Route::post('/update-banner/{id}', [BannerController::class, 'update']);
Route::delete('/delete-multiple-banner/{id}', [BannerController::class, 'deleteMultipleBanner']);





Route::get('/noti-check', [DashboardHomeController::class, 'check']);



Route::post('/delete-banner-multiple-image/{id}', [BannerController::class, 'deleteBannerMultipleImage']);

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
//global search web
Route::get('/advertisement-global-search/{name}', [AdvertisementController::class, 'advertisementGlobalSearch']);




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


Route::post('/delete-article-blogs-multiple-image/{id}', [ArticleBlogController::class, 'deleteArticleBlogsMultipleImage']);

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

Route::post('/delete-notice-news-multiple-image/{id}', [NoticeNewsController::class, 'deleteNoticeNewsMultipleImage']);

Route::get('/filter-notice-news-by-search-input-radio/{searchInputValue}/{searchRadioButtonValue}', [NoticeNewsController::class, 'NoticeNewsfilterBySearchInputRadioButton']);
//web notice new status (table) filtering
Route::get('/filtering-notice-news-by-status/{name}', [NoticeNewsController::class, 'NoticeNewsfilterByStatus']);

Route::get('/notice-news-multiple-images-by-id/{id}', [NoticeNewsController::class, 'NoticeNewsMultipleImageById']);




//vlog category
Route::get('/vlog-category', [VlogCategoryController::class, 'index']);
Route::post('/add-vlog-category', [VlogCategoryController::class, 'store']);
Route::get('/edit-vlog-category/{id}', [VlogCategoryController::class, 'edit']);
Route::post('/update-vlog-category/{id}', [VlogCategoryController::class, 'update']);
Route::delete('/delete-vlog-category/{id}', [VlogCategoryController::class, 'destroy']);

//vlog 
Route::get('/vlog', [VlogController::class, 'index']);
Route::post('/add-vlog', [VlogController::class, 'store']);
Route::get('/edit-vlog/{id}', [VlogController::class, 'edit']);
Route::post('/update-vlog/{id}', [VlogController::class, 'update']);
Route::delete('/delete-vlog/{id}', [VlogController::class, 'destroy']);

//web admin global notification create view start

Route::get('/all-global-notification', [GlobalNotificationController::class, 'index']);
Route::post('/create-global-notification', [GlobalNotificationController::class, 'store']);
Route::get('/filtering-global-notification/{name}', [GlobalNotificationController::class, 'filteringNotification']);

//web admin global notification create view end




///////admin home admin dashboard start////

Route::get('/total-users-jobs-posts-announce-advertisements', [DashboardHomeController::class, 'totalStatus']);
Route::get('/job-filtering-admin-homepage/{name}', [DashboardHomeController::class, 'jobFilteringAdminHomePage']);

///////admin home admin dashboard end////

//notificaion icon topbar (web) //

Route::get('/all-notification-through-posts', [DashboardHomeController::class, 'allNotificationThroughPosts']);
// Route::get('/all-read-notification-through-posts', [DashboardHomeController::class, 'allReadNotificationThroughPosts']);



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



//Role Permission start //
//role
Route::get('/role-name', [RoleNameController::class, 'index']);
Route::post('/add-role-name', [RoleNameController::class, 'store']);
Route::get('/edit-role-name/{id}', [RoleNameController::class, 'edit']);
Route::post('/update-role-name/{id}', [RoleNameController::class, 'update']);
Route::delete('/delete-role-name/{id}', [RoleNameController::class, 'destroy']);



//get all users pdf


Route::get('/get-all-users-pdf', [ViewAllUserController::class, 'getAllUsersPdf']);

Route::get('/download-zip', [ViewAllUserController::class, 'downloadZip']);


//messaging

Route::post('/send-message', [MessageController::class, 'sendMessage']);
Route::get('/user-individual-send-messages/{id}', [MessageController::class, 'sendIndividualMessage']);
Route::get('/user-receive-messages/{id}', [MessageController::class, 'receiveMessage']);
Route::post('/user-all-messages-between-two', [MessageController::class, 'allMessagesBetweenTwo']);






//Role Permission end //



// Route::get('/check-mai-design',function(){
//     return view('emails.eventmail');
// });

