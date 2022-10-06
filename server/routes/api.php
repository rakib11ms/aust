<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication\MobileAuthenticationController;
use App\Http\Controllers\Backend\PostTypeController;
use App\Http\Controllers\Authentication\AuthenticationController;
use App\Http\Controllers\Backend\PostController;

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

Route::get('/post-type',[PostTypeController::class,'index']);


});



//mobile api authentication 
Route::post('/register',[MobileAuthenticationController::class,'register']);
Route::post('/login-otp-verification',[MobileAuthenticationController::class,'loginValideOtp']);
Route::post('/user-login',[MobileAuthenticationController::class,'userLogin']);
Route::post('/user-forgot-password',[MobileAuthenticationController::class,'userForgotPassword']);
Route::post('/user-forgot-password-otp-verification',[MobileAuthenticationController::class,'forgotPasswordOtpVerification']);
Route::post('/change-user-forgot-password',[MobileAuthenticationController::class,'changeUserforgotPassword']);


//web authentication

Route::post('/admin-login',[AuthenticationController::class,'adminLogin']);





//post type routes

// Route::get('/post-type',[PostTypeController::class,'index']);
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

