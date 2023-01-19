<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendMessage(Request $request){
            $post = new Message();
            $post->sender_id = $request->sender_id;
            $post->receiver_id = $request->receiver_id;
            $post->message = $request->message;
            $post->save();

return response()->json([
                'status' => 200,
                 // 'count'=>$count,
                 // 'job_info'=>$post ,
                'message' => 'sent',
            ]);   

    }

    public function sendIndividualMessage($userId){
$all_sent=Message::with(['receiverName'=>function ($query){
    $query->select('full_name','id');
}])->where('sender_id',$userId)->get();


return response()->json([
                'status' => 200,
                 // 'count'=>$count,
                 // 'job_info'=>$post ,
                'all_sent' => $all_sent,
            ]);     
              }

public function receiveMessage($userId){
$all_received=Message::with(['senderName'=>function ($query){
    $query->select('full_name','id');
}])->where('receiver_id',$userId)->get();
return response()->json([
                'status' => 200,
                 // 'count'=>$count,
                 // 'job_info'=>$post ,
                'all_received' => $all_received,
            ]);     
              }
}
