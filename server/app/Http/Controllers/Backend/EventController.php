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
class EventController extends Controller
{
    

    public function index(){

        // $contact=DB::table('aussta_events')->pluck('contact_person');

        //             $total_contacts=explode (",",$contact);             

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

           $event->posted_by = $request->posted_by;
           $event->event_time = $request->event_time;
           // $event->isPublished = $request->isPublished;
           // $event->isArchived = $request->isArchived;
           $event->priority = $request->priority;

            $user_ids=explode (",",$request->contact_person);

            // dd($user_ids);         
            $users = User::whereIn("id",$user_ids)->pluck('id');

                    // dd($users);

                    // foreach($users as $key => $user) {
                    //     dd($user);

                    // }

//             $age = array(1=>"35", 2=>"38", 3=>"43");

// foreach($age as $x => $val) {
//   dd($val);
// }

            // $emails=['rakibtech9@gmail.com','rakib10ms@gmail.com'];

            // foreach($emails as $val){
            //     dd($val);
            // }
            // Mail::to($user->email)->send(new EventMail($event));
            Mail::to('rakib10ms@gmail.com')->send(new EventMail($event));
            Mail::to('rakibtech9@gmail.com')->send(new EventMail($event));
            $event->save();

  



 return response()->json([
                'status' => 200,
                 'event'=>$event ,
                  'users_id'=>$user_ids,
                'message' => 'Event Created Successfully',
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
}