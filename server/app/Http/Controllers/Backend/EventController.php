<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusstaEvent;
use App\Models\User;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\EventMail;
use Carbon\Carbon;

class EventController extends Controller
{
    

    public function index(){
             

   $all_events=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id','desc')->get();
        return response()->json([
           'status' => 200,
            'all_events' => $all_events,
            // 'total_contacts'=>$total_contacts
         ]);
    }





      public function store(Request $request){
        // dd($request->all());

            $event = new AusstaEvent();
         //       if($request->hasFile('image')){
         //    $file=$request->file('image');
         //    $extension=$file->getClientOriginalExtension();
         //    $filename=time().'.'.$extension;
         //    $file->move('images/',$filename);
         //    $event->image =$filename ;
         // } 

 foreach( $request->file('image') as $image)
   {

     $upload_image_name = time().$image->getClientOriginalName();
     $image->move('images/', $upload_image_name);    
     $name[] = $upload_image_name;       

      $event->image =  implode(', ',$name);       
      // $event->save();   
}


           $event->event_type_id = $request->event_type_id;
           $event->event_title = $request->event_title;
           $event->event_fee = $request->event_fee;
           $event->updated_by = $request->updated_by;
           $event->event_description = $request->event_description;
           $event->contact_person = $request->contact_person;
           $event->event_date = $request->event_date;
           $event->payment_type = $request->payment_type;

           $event->posted_by = $request->posted_by;
           $event->event_time = $request->event_time;
           // $event->isPublished = $request->isPublished;
           // $event->isArchived = $request->isArchived;
           $event->priority = $request->priority;

            $user_ids=explode (",",$request->contact_person);

            // dd($user_ids);         
            $users = User::whereIn("id",$user_ids)->get();

                    // dd($users);

                    foreach($users as $key => $user) {
                        // echo ($user->email);
                        Mail::to($user->email)->send(new EventMail($event));


                    }

           
            $event->save();

  


 return response()->json([
                'status' => 200,
                 'event'=>$event ,
                  'users_id'=>$user_ids,
                'message' => 'Event Created Successfully',
            ]);   
     
}



    public function edit($id)
    {
        $event = AusstaEvent::find($id);

        // dd($event->contact_person);

       $user_ids=explode (",",$event->contact_person);
    $users = User::whereIn("id",$user_ids)->get();

       // dd ($lol);

        if ($event) {
            return response()->json([
                'status' => 200,
                'event' => $event,
                'users'=>$users
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No event Found',
            ]);
        }
    }




    public function update(Request $request,$id){

             $event=AusstaEvent::find($id);

          if($request->file('image')){
 foreach( $request->file('image') as $image)
   {

     $upload_image_name = time().$image->getClientOriginalName();
     $image->move('images/', $upload_image_name);    
     $name[] = $upload_image_name;       

      $event->image =  implode(', ',$name);       
      // $event->save();   
}
          }



           $event->event_type_id = $request->event_type_id;
           $event->event_title = $request->event_title;
           $event->event_fee = $request->event_fee;
           $event->updated_by = $request->updated_by;
           $event->event_description = $request->event_description;
           $event->contact_person = $request->contact_person;
           $event->event_date = $request->event_date;

           $event->posted_by = $request->posted_by;
           $event->event_time = $request->event_time;
           // $event->isPublished = $request->isPublished;
           // $event->isArchived = $request->isArchived;
           $event->priority = $request->priority;

            $user_ids=explode (",",$request->contact_person);

            // dd($user_ids);         
            $users = User::whereIn("id",$user_ids)->get();

                    // dd($users);

                    foreach($users as $key => $user) {
                        // echo ($user->email);
                        Mail::to($user->email)->send(new EventMail($event));


                    }

           
            $event->update();

 return response()->json([
                'status' => 200,
                'message' => 'Event Updated Successfully',
            ]);   
    }



    public function updateArchiveStatus(Request $request,$id){
             $event=AusstaEvent::find($id);
           $event->isArchived = $request->isArchived;

            $event->update();

 return response()->json([
                'status' => 200,
                'message' => 'Archived Updated Successfully',
            ]);  

    }











       public function destroy($id){

        $event = AusstaEvent::find($id);
        // $file=$event->image;
        // $filename = public_path().'/images/'.$file;
        // File::delete($filename);

        $event->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Event deleted successfully',
            ]);

    
    }



//web upcoming event,archive post (tab)filtering

     public function filterEventPostsByName($name){

        // $check=Carbon::now()->subDays(15);
        // dd($check);

        if($name=='all'){
        $event_posts=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id','desc')->get();
        return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        }
           else if($name=='upcoming_filter'){
        $event_posts=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->where('\Carbon::parse($event_date)<=', Carbon::now()->subDays(15))->orderBy('aussta_events.id','desc')->get();  


        return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        }
   
            else if($name=='archive'){
                  $event_posts=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->where('aussta_events.isArchived',1)->orderBy('aussta_events.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        }
        else{
     $event_posts=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id','desc')->get();
        return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        }

          
    }
}