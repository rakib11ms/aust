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
use Spatie\Permission\Models\Role;

class ViewAllUserController extends Controller
{
       public function allUsers()
    {


         $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->get();


        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }

    public function multipleFilterSearchAllUsers($company,$blood,$batch,$stream,$gender){

        // dd($gender);
  $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->where('gender',$gender)->orWhereHas('bloodGroup',function($q) use($blood){
        $q->where('blood_group_name','=',$blood);
  })->orWhereHas('streamName',function($q) use($stream){
        $q->where('stream_name','=',$stream);
    })->orWhereHas('professionalInfo',function($q) use($company){
        $q->where('name_of_company','=',$company);
    })->get();



  // $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName'])->get();


// $value = 'someName';
// $all_users=User::where('gender','=',$gender)->with(['bloodGroup', 'streamName', 'batchName'])
//        ->doesntHave('bloodGroup')->orWhereHas('bloodGroup', function($q) use($blood) {
//        $q->where('blood_group_name', '=', $blood);
// })->doesntHave('streamName')->orWhereHas('streamName', function($q) use($stream) {
//        $q->where('stream_name', '=', $stream);
// })->doesntHave('batchName')->orWhereHas('batchName', function($q) use($batch) {
//        $q->where('batch_name', '=', $batch);
// })
// ->with(['professionalInfo','educationalInfo'])
// ->get();

// $all_users=User::where('gender','=',$gender)->with(['bloodGroup', 'streamName', 'batchName'])
//        ->whereHas('bloodGroup', function($q) use($blood) {
//        $q->where('blood_group_name', '=', $blood);
// })->whereHas('streamName', function($q) use($stream) {
//        $q->where('stream_name', '=', $stream);
// })->whereHas('batchName', function($q) use($batch) {
//        $q->where('batch_name', '=', $batch);
// })
// ->with(['professionalInfo','educationalInfo'])
// ->get();

        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]); 
    }

    public function userGlobalSearch($name){
 $all_users=User::with('roles')->where('full_name','Like','%'.$name.'%')->orWhere('nick_name','Like','%'.$name.'%')->orWhere('phone_no','Like','%'.$name.'%')->orWhere('gender','Like','%'.$name.'%')->with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName'])->orWhereHas('bloodGroup',function($q) use($name){
        $q->where('blood_group_name','Like','%'.$name.'%');
  })->orWhereHas('streamName',function($q) use($name){
        $q->where('stream_name','Like','%'.$name.'%');
    })->orWhereHas('professionalInfo',function($q) use($name){
        $q->where('name_of_company','Like','%'.$name.'%');
    })->get();
    return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]); 
    }

    public function userRoleFiltering($name){
     if($name=='Admin'){
        $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->whereHas('roles',function($q) use($name){
        $q->where('name','Like','%'.$name.'%');
    })->get();
           return response()->json([
        'status'=>200,
        'all_users'=>$all_users,
    
    ]);
    
        }
        else if($name=='Alumni'){
      $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->whereHas('roles',function($q) use($name){
        $q->where('name','Like','%'.$name.'%');
    })->get();
           return response()->json([
        'status'=>200,
        'all_users'=>$all_users,
    
    ]);
        }

           else if($name=='Moderator'){
      $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->whereHas('roles',function($q) use($name){
        $q->where('name','Like','%'.$name.'%');
    })->get();
           return response()->json([
        'status'=>200,
        'all_users'=>$all_users,
    
    ]);
        }

           else if($name=='Staff'){
     $all_users=User::with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->whereHas('roles',function($q) use($name){
        $q->where('name','Like','%'.$name.'%');
    })->get();
           return response()->json([
        'status'=>200,
        'all_users'=>$all_users,
    
    ]);
        }
    }


    //role change with password revoke


    public function roleChangeUserRequest(Request $request){
            $admin_change=User::where('id',$request->user_id)->first();

            if(Hash::check($request->password, $admin_change->password)){
                $role_change=User::where('id',$request->change_user_id)->first();
                $role_change->roles()->detach();


                $role_change->assignRole($request->change_role_name);


   return response()->json([
                    'message' => "Role Changed Successfully",
                    'status' => 200,
                ]);
            }


        else if(!$admin_change || !Hash::check($request->password, $admin_change->password)){
            return response()->json(
                [
                    'message' => "User Password doesn't match ! Denied",
                    'status' => 401,
                ]
            );
        }
    }

}
