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
}
