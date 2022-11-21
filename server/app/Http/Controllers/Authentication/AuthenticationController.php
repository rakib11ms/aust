<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use DateTime;
use App\Mail\EventMail;
use App\Models\AusstaEvent;
use App\Mail\ResetPassword;

class AuthenticationController extends Controller
{


    public function adminLogin(Request $request)
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
                'token' => $login_token,
                'username' => $user->name,
                'user_type' => 'admin',
                'user_id' => $user->id,
                'user_info' => $user,
                'email' => $user->email,
            ]
        );
    }

    public function  adminLogout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Admin Logged Out Successfull'
        ]);
    }

    public function allUsers()
    {
        $all_users = User::all();
        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }

    public function specificUser($id)
    {

        // dd($formatChange);

        $user_info = User::find($id);
        $pay_date = $user_info->registration_pay_date;
        $end_date = $user_info->registration_pay_end_date;
        // // dd($end_date);
        // $formatChange= date('d-m-Y',strtotime($pay_date));
        // $formatChange2= date('d-m-Y',strtotime($end_date));

        // dd($end_date);

        // dd($formatChange);
        // $futureDate=date('d-m-Y', strtotime('+1 year'));
        // dd($futureDate);

        // $futureDate=date('d-m-Y', strtotime('+1 year', strtotime($pay_date)) );


        // dd($futureDate);

        $registration_pay_validity = Carbon::now()->diffInDays($end_date);

        // dd($registration_pay_validity);
            $check=true;
        if ($registration_pay_validity < 15 && $check) {
            $event = new AusstaEvent();

            $event->event_title = "Email for Subscription 15 days left";
            // dd($event);
            Mail::to("rakib10ms@gmail.com")->send(new EventMail($event));
        }



        return response()->json([
            'status' => 200,
            'pay_date' => $pay_date,
            'registration_pay_validity' => $registration_pay_validity,
            'user_info' => $user_info
        ]);
    }



    public function submitForgetPasswordForm(Request $request)
    {


        $phone_or_email_check=User::where('email',$request->email)->orWhere('phone_no',$request->phone_no)->first();
        if($phone_or_email_check){
          // $token = Str::random(64);
            $token = rand(0, 9999999);

      DB::table('password_resets')->insert([
              'email' => $phone_or_email_check->email, 
              'token' => $token, 
              'created_at' => Carbon::now()
            ]);

     
        Mail::to($phone_or_email_check->email)->send(new ResetPassword($token));
      return response()->json([
            'status' => 200,
            'message' =>"We have sent email for reset password",
           
        ]);
  

        }


        else{
           // dd($request->email."||" . $request->phone_no ."doest not exists");

            return response()->json([
            'status' => 400,
            'message' =>"Email or phone no doest not exists",
           
        ]);

        }
      
    
}
public function submitResetPasswordForm(Request $request){

   
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
            } 
            else {
       $updatePassword = DB::table('password_resets')->where(['email' => $request->email, 'token' => $request->token])->first();
          if($updatePassword){


            $user=User::where('email',$updatePassword->email)->first();
      
                $user->password = Hash::make($request->new_password);
                $user->confirm_password = Hash::make($request->re_type_password);
                $user->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Password set successful',
                ]);
          }
          else{
             return response()->json([
                    'status' => 401,
                    'message' => 'Token mismatch or invalid',
                ]);
          }

               
            }
       
}
}
