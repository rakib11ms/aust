<?php

namespace App\Http\Controllers\Backend;

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
class ViewAllUserController extends Controller
{
       public function allUsers()
    {


         $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName'])->get();


        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }

}
