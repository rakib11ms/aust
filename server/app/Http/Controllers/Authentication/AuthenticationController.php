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
class AuthenticationController extends Controller
{
    

   public function adminLogin(Request $request){

$user = User::where('email', $request->email)->first();
    if (!$user || !Hash::check($request->password, $user->password)) {
         return response()->json(
            ['message'=>'Login invalid',
                'status'=>401,
            ]);
      }

      $login_token=$user->createToken($request->email)->plainTextToken;

        return response()->json(
            ['message'=>'Login Successfull',
                'status'=>200,
                'token'=>$login_token,
                'username'=>$user->name,
                'user_type'=>'admin',
                'user_id'=>$user->id,
                'user_info'=>$user,
                'email'=>$user->email,
            ]);

   }

    public function  adminLogout(Request $request){
   auth()->user()->tokens()->delete();
           return response()->json([
                'status'=>200,
                'message'=>'Admin Logged Out Successfull'
            ]);
}

  public function allUsers(){
        $all_users=User::all();
   return response()->json([
                'status'=>200,
                'all_users'=>$all_users
            ]);
 }

}
