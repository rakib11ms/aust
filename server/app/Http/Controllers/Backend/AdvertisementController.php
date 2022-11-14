<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Advertisement;
use App\Models\User;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class AdvertisementController extends Controller
{
    public function index(){
             

   $all_advertisements=DB::table('advertisements')->leftJoin('users','users.id','=','advertisements.posted_by')->select('advertisements.*')->orderBy('advertisements.id','desc')->get();






            $total_active_advertisements=Advertisement::where('isArchived',0)->get()->count();
            $total_archive_advertisements=Advertisement::where('isArchived',1)->get()->count();
        return response()->json([
           'status' => 200,
            'all_advertisements' => $all_advertisements,
            'total_active_advertisements' => $total_active_advertisements,
            'total_archive_advertisements' => $total_archive_advertisements,
         ]);
    }





      public function store(Request $request){
        // dd($request->all());

            $advertisement = new Advertisement();
        

 foreach( $request->file('image') as $image)
   {

     $upload_image_name = time().$image->getClientOriginalName();
     $image->move('images/', $upload_image_name);    
     $name[] = $upload_image_name;       

      $advertisement->image =  implode(', ',$name);       
      // $event->save();   
}


           $advertisement->advertisement_title = $request->advertisement_title;
           $advertisement->advertisement_description = $request->advertisement_description;
           $advertisement->posted_by =auth('sanctum')->user()->id;
           $advertisement->show_time = $request->show_time;
           $advertisement->show_days = $request->show_days;
           $advertisement->showMobile = $request->showMobile;
           $advertisement->showDesktop = $request->showDesktop;
           $advertisement->view_page = $request->view_page;
           $advertisement->position = $request->position;
           $advertisement->redirect_link = $request->redirect_link;
            $advertisement->save();



 return response()->json([
                'status' => 200,
                 'advertisement'=>$advertisement ,
                  // 'users_id'=>$user_ids,
                'message' => 'Advertisement Created Successfully',
            ]);   
     
}



    public function edit($id)
    {
        $advertisement = Advertisement::find($id);

        // dd($advertisement->contact_person);

       $view_pages=explode (",",$advertisement->view_page);
    // $view_pages = Advertisement::whereIn("view_page",$view_page)->get();

       // dd ($lol);

        if ($advertisement) {
            return response()->json([
                'status' => 200,
                'advertisement' => $advertisement,
                'view_pages'=>$view_pages
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No advertisement Found',
            ]);
        }
    }




    public function update(Request $request,$id){

             $event=Advertisement::find($id);

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
             $event=Advertisement::find($id);
           $event->isArchived = $request->isArchived;

            $event->update();

 return response()->json([
                'status' => 200,
                'message' => 'Archived Updated Successfully',
            ]);  

    }











       public function destroy($id){

        $advertisement = Advertisement::find($id);
        // $file=$event->image;
        // $filename = public_path().'/images/'.$file;
        // File::delete($filename);

        $advertisement->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Advertisement deleted successfully',
            ]);

    
    }



//web upcoming event,archive post (tab)filtering


     public function archiveAllEventsByUpdate(Request $request,$ids){
    $array=explode (",", $ids); 


Advertisement::whereIn('id', $array)
    ->update([
        'isArchived' => '1',
        'updated_by'=>2
        // 'size' => 'XL', 

        // 'price' => 10000 // Add as many as you need
    ]);

      $all_events=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id','desc')->get();
        return response()->json([
                'status' => 200,
                'all_events'=>$all_events,
                'message' => 'All Events Archived successfully',
            ]);

     }

    public function activeAllEventByUpdate(Request $request,$ids){
    $array=explode (",", $ids); 


Advertisement::whereIn('id', $array)
    ->update([
        'isArchived' => '0',
        'updated_by'=>1
        // 'size' => 'XL', 

        // 'price' => 10000 // Add as many as you need
    ]);

      $all_events=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id','desc')->get();
        return response()->json([
                'status' => 200,
                'all_events'=>$all_events,
                'message' => 'All Events Activated successfully',
            ]);
    }



    public function deleteMultipleEventPosts($ids){
 $array=explode (",", $ids); 

  $deletes=Advertisement::whereIn('id',$array)->delete();
      return response()->json([
                'status' => 200,
                // 'deletes'=>  $deletes,
                'message' => 'All Events deleted successfully',
            ]);
     }

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


// $originalDate = "Tue, 08 Nov 2022 18:00:00 GMT";
// $newDate = date("d-m-Y", strtotime($originalDate));

// echo $newDate;

    $currentDate=date('d-m-Y');
    $currentDate_15=date('d-m-Y', strtotime("+15 day"));

    // dd($currentDate_15);





// $filterDatePosts=Post::whereBetween(DB::raw('DATE(created_at)'), [$fromDate, $toDate])->get();


        $event_posts=DB::table('aussta_events')->leftJoin('austta_event_types','austta_event_types.id','=','aussta_events.event_type_id',)->select('aussta_events.*','austta_event_types.event_type_name as event_type_name')->whereBetween('aussta_events.event_date',[$currentDate, $currentDate_15])->orderBy('aussta_events.id','desc')->get();  


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
