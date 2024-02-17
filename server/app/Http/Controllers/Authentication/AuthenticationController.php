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
use Spatie\Permission\Models\Permission;

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
                'full_name' => $user->full_name,
                'image' => $user->image,
                'user_type' => 'admin',
                'user_id' => $user->id,
                'user_info' => $user,
                'email' => $user->email,
                // 'permissions' => $permissions,

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




    public function submitForgetPasswordForm(Request $request)
    {


        $phone_or_email_check=User::where('email',$request->email)->orWhere('phone_no',$request->phone_no)->first();
        if($phone_or_email_check){

            // dd($phone_or_email_check->email);
          // $token = Str::random(64);
            $token = mt_rand(00000, 99999);

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
