<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Models\User;
use App\Models\GlobalNotification;
use App\Mail\GlobalMail;
use Illuminate\Support\Facades\Mail;

class GlobalNotificationController extends Controller
{

      public function index(){

            $all_global=GlobalNotification::all();



    return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);


   }




   public function filteringNotification($name){

    // dd(GlobalNotification::where('for_moderator',1)->get());
        if($name=='all'){
        $all_global=GlobalNotification::where('for_all_users',1)->get();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);
    
        }
        else if($name=='alumni'){
     $all_global=GlobalNotification::where('for_alumni',1)->get();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);
        }
           else if($name=='admin'){
     $all_global=GlobalNotification::where('for_admin',1)->get();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);
        }
        else if($name=='moderator'){
  $all_global=GlobalNotification::where('for_moderator',1)->get();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);
        }
    else if($name=='staff'){
  $all_global=GlobalNotification::where('for_staff',1)->get();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global,
    
    ]);
        }
        else{
  $all_global=GlobalNotification::all();
           return response()->json([
        'status'=>200,
        'all_global'=>$all_global
    ]);
        }
}







    public function store(Request $request){

// $change_role= User::where('id',30)->first(); 

// $change_role->syncRoles([]);

    // $roles = $user->getRoleNames();

$moderators = User::role('moderator')->get(); 
$admins = User::role('admin')->get(); 
$staffs = User::role('staff')->get(); 
$alumni = User::role('alumni')->get(); 


     $global_notification = new GlobalNotification();

          $global_notification->notification_title=$request->notification_title;
        $global_notification->notification_body = $request->notification_body;
        $global_notification->priority = $request->priority;
        $global_notification->for_all_users = $request->for_all_users;
        $global_notification->for_admin = $request->for_admin;
        $global_notification->for_alumni = $request->for_alumni;
        $global_notification->for_staff = $request->for_staff;
        $global_notification->for_moderator = $request->for_moderator;
        $global_notification->notification_both = $request->notification_both;
        $global_notification->mail_notification = $request->mail_notification;
        $global_notification->push_notification = $request->push_notification;
        $global_notification->posted_by = $request->posted_by;
        $global_notification->updated_by = $request->updated_by;
        // $global_notification->save();

        if($request->for_admin==1){
            if($request->notification_both==1){

         foreach ($admins as $key => $user) {
            Mail::to($user->email)->send(new GlobalMail($global_notification));
        }

          $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

        $SERVER_API_KEY = "AAAAlxMWmLE:APA91bGE4xTGl3u7MOzRH4gOKSVM00Cp46ILE3Dn9YywzM-Jip-dFBzdtQaMd4eOTmKGEnRT9AAENpCaxYx9g51JdG0i7btNE53DmYj2-tA5vEPkKKaPRP-ETxTx9JpaNXO0IMzxIA29";

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $request->notification_title,
                "body" => $request->notification_body,
            ]
        ];
        $dataString = json_encode($data);

        $headers = [
            'Authorization:key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);
        }
        }


        if($request->for_moderator==1){
            if($request->notification_both==1){

         foreach ($moderators as $key => $user) {
            Mail::to($user->email)->send(new GlobalMail($global_notification));
        }

          $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

        $SERVER_API_KEY = "AAAAlxMWmLE:APA91bGE4xTGl3u7MOzRH4gOKSVM00Cp46ILE3Dn9YywzM-Jip-dFBzdtQaMd4eOTmKGEnRT9AAENpCaxYx9g51JdG0i7btNE53DmYj2-tA5vEPkKKaPRP-ETxTx9JpaNXO0IMzxIA29";

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $request->notification_title,
                "body" => $request->notification_body,
            ]
        ];
        $dataString = json_encode($data);

        $headers = [
            'Authorization:key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);
        }
        }
    
            $global_notification->save();



    return response()->json([
        'status'=>200,
        'message'=>'Global notification Published successfully',
        'moderators'=>$moderators,
        'admins'=>$admins,
        'staffs'=>$staffs,
        'alumni'=>$alumni,
    ]);

}
}
