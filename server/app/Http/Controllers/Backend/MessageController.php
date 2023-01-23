<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Collection;
class MessageController extends Controller
{
    public function sendMessage(Request $request){

   
            $post = new Message();
            $post->sender_id = $request->sender_id;
            $post->receiver_id = $request->receiver_id;
            $post->message = $request->message;
            // $post->direction = $request->direction;
            // $post->save();

            $first_message_check=Message::where('sender_id',$request->sender_id)->where('receiver_id',$request->receiver_id)->orWhere('sender_id',$request->receiver_id)->orWhere('receiver_id',$request->sender_id)->orderBy('id','asc')->first();

            // dd($first_message_check);

            if($first_message_check==null){
      $post->direction = 'sender';
            $post->save(); 
            }
            else if($first_message_check !==null){

                // dd("ai khane duke jaowar kotha,czz se reply dibe");



            // dd($first_message_check);

            // dd(count($first_message_check));

            $check_previous=Message::where('sender_id',$request->sender_id)->where('receiver_id',$request->receiver_id)->orderBy('id','desc')->first();

            // dd($check_previous);

            if($check_previous==null){
   $post->direction = 'receiver';
            $post->save();
            }
            else{
                  $post->direction = 'sender';
            $post->save();  
            }
        }


return response()->json([
                'status' => 200,
                 // 'count'=>$count,
                 // 'job_info'=>$post ,
                'message' => 'sent',
                'data'=>$post
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


  public function allMessagesBetweenTwo(Request $request){

    $all_message_between_twos1=Message::with(['senderName'=>function ($query){
    $query->select('full_name','id');
},'receiverName'=>function ($query){
    $query->select('full_name','id');
}])->where('sender_id',$request->sender_id)->where('receiver_id',$request->receiver_id)->get()->toArray();

    // dd($all_message_between_twos1);

        $all_message_between_twos2=Message::with(['senderName'=>function ($query){
    $query->select('full_name','id');
},'receiverName'=>function ($query){
    $query->select('full_name','id');
}])->where('sender_id',$request->receiver_id)->where('receiver_id',$request->sender_id)->get()->toArray();


    // dd($all_message_between_twos2);


        $result = array_merge($all_message_between_twos1, $all_message_between_twos2);


        // dd($result->created_at);

        


$final_result=collect($result)->sortBy('created_at')->values();

        // dd($final_result);

    return response()->json([
                'status' => 200,
         
                'all_message_between_twos' => $final_result,
            ]); 

              }
}
