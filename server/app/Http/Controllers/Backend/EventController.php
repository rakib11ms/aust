<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusstaEvent;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class EventController extends Controller
{
    
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

     $upload_image_name = time().'_'.$image->getClientOriginalName();
     $image->move('images/', $upload_image_name);    
     $name[] = $upload_image_name;       

      $event->image =  implode(', ',$name);       
      // $event->save();   



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
            $event->save();


 return response()->json([
                'status' => 200,
                 'event'=>$event ,
                'message' => 'Event Created Successfully',
            ]);   
     }
}
}
