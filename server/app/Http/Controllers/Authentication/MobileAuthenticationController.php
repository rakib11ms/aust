<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\LoginEmailOtp;
use Illuminate\Support\Facades\Hash;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Mail;
use App\Mail\Welcome;
use App\Mail\ForgotPassword;
use Illuminate\Support\Facades\Auth;

class MobileAuthenticationController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [

                'full_name' => 'required|max:191',
                'email' => 'required|email|max:191|unique:users,email',
                // 'phone' => 'required|unique:users',
                'confirm_password' => 'required|same:password|min:6',
            ]

        );

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
                'status' => 400
            ]);
        } else {
            $duplicateUser = User::where(['email' => $request->email])->first();

            if ($duplicateUser < 1) {
                $user = new User();

             if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $user->image =$filename ;
         } 
                $user->full_name = $request->full_name;
                $user->nick_name = $request->nick_name;
                $user->email = $request->email;
                $user->user_role = 1;
                $user->address_id = $request->address_id;
                $user->batch = $request->batch;
                $user->phone_no = $request->phone_no;
                $user->blood_group = $request->blood_group;
                $user->stream = $request->stream;
                $user->job_sector = $request->job_sector;
                $user->job_sub_sector = $request->job_sub_sector;
                $user->office_email = $request->office_email;
                $user->office_address = $request->office_address;

                $user->name_of_company = $request->name_of_company;
                $user->present_address = $request->present_address;
                $user->permanent_address = $request->permanent_address;
                // $user->otp_verify = 0;
                $user->password = Hash::make($request->password);
                $user->confirm_password = Hash::make($request->confirm_password);

                $user->save();

                $token = $user->createToken($user->email . '_Token')->plainTextToken;

                $otp = rand(0, 99999);

                $emailOtp = new LoginEmailOtp();
                $emailOtp->user_id = $user->id;
                $emailOtp->otp = $otp;
                $emailOtp->save();


                Mail::to($user->email)->send(new Welcome($otp));


                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'user' => $user,
                    'emailotp' => $emailOtp,
                    'message' => 'Registration Successfull'
                ]);
            } else {
                return response()->json([
                    'status' => 400,

                    'message' => 'we Have already send email in your gmail'
                ]);
            }
        }
    }


    public function loginValideOtp(Request $request)
    {


        $otp = LoginEmailOtp::where(['user_id' => $request->user_id, 'otp' => $request->otp])->first();


        if ($otp != null) {
            if ($otp) {
                $user = User::find($otp->user_id);
                $login_token = $user->createToken($user->email)->plainTextToken;
            }



            return response()->json([
                'status' => 200,
                'emailotp' => $otp,
                'token' => $login_token,
                'message2' => 'Login Successfull',
                'message' => 'Email Verify Successful'
            ]);
        } else {
            return response()->json([
                'status' => 401,

                // 'login Status'=>false,
                'emailotp' => $otp,
                'message' => 'Error ! Otp does not match',
            ]);
        }
    }

    public function userLogin(Request $request)
    {

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(
                [
                    'message' => 'Login invalid',
                    'status' => 401,
                ]
            );
        }

        $login_token = $user->createToken($request->email)->plainTextToken;

        return response()->json(
            [
                'message' => 'Login Successfull',
                'status' => 200,
                'mess_status' => true,
                'token' => $login_token,
                'user_id'=>$user->id
            ]
        );
    }


    // public function check(){
    //     dd(auth('sanctum')->user()->id);

    // }


    public function userForgotPassword(Request $request)
    {
        // dd($request->all());
        $user = User::where('email', $request->email)->first();

        if ($user) {
            // dd($user->email);
            $otp = mt_rand(00000, 99999);

            $emailOtp = new LoginEmailOtp();
            $emailOtp->user_id = $user->id;
            $emailOtp->otp = $otp;
            $emailOtp->save();


            Mail::to($user->email)->send(new ForgotPassword($otp));


            return response()->json([
                'status' => 200,
                'emailotp' => $emailOtp,
                'message' => 'Otp has sent to ' . $user->email,
            ]);
        } else {

            return response()->json([
                'status' => 400,
                'message' => 'Email not found'
            ]);
        }
    }


    public function forgotPasswordOtpVerification(Request $request)
    {
        $otp = LoginEmailOtp::where(['user_id' => $request->user_id, 'otp' => $request->otp])->first();


        if ($otp != null) {
            return response()->json([
                'status' => 200,
                // 'login Status'=>true,
                'emailotp' => $otp,
                'message' => 'Forgot password verification Successful'
            ]);
        } else {
            return response()->json([
                'status' => 401,

                // 'login Status'=>false,
                'emailotp' => $otp,
                'message' => 'Forgot password verification Error',
            ]);
        }
    }


    public function changeUserforgotPassword(Request $request)
    {

        $user_id = $request->user_id;
        $user = User::find($user_id);

        if ($user) {

            $validator = Validator::make(
                $request->all(),
                [

                    'new_password' => 'required|min:6',
                    're_type_password' => 'required|same:new_password|min:6',
                ]

            );

            if ($validator->fails()) {
                return response()->json([
                    'validation_errors' => $validator->messages(),
                    'status' => 400
                ]);
            } else {


                $user->password = Hash::make($request->new_password);
                $user->confirm_password = Hash::make($request->re_type_password);
                $user->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Password set successful',
                ]);
            }
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'User not found..error',
            ]);
        }
    }

        public function  UserLogout(){
              auth()->user()->tokens()->delete();
           return response()->json([
                'status'=>200,
                'message'=>'User Logged Out Successfull'
            ]);
}
}
