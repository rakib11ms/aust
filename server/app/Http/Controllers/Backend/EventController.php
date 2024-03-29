<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AusttaEventType;
use Illuminate\Http\Request;
use App\Models\AusstaEvent;
use App\Models\EventMultipleImage;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Collection;
use App\Mail\EventMail;
use Carbon\Carbon;
use App\Notifications\EventNotification;
use Illuminate\Support\Facades\Auth;
use Notification;
use App\Models\AdminNoticeNotification;
use Illuminate\Support\Facades\Validator;
use App\Jobs\SendQueueEventEmail;

class EventController extends Controller
{


    public function index()
    {

        $all_events = AusstaEvent::orderBy('id', 'desc')->with(['EventImage', 'userName', 'EventType'])->get();


        $all_active_events = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id', )->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->where('isArchived', 0)->orderBy('aussta_events.id', 'desc')->limit(5)->get();

        // $contact_person_information=$all_events['event_title'];

        // dd($contact_person_information);



        $total_events = AusstaEvent::where('isArchived', 0)->get()->count();
        $total_archive_events = AusstaEvent::where('isArchived', 1)->get()->count();
        return response()->json([
            'status' => 200,
            'all_events' => $all_events,
            'total_events' => $total_events,
            'total_archive_events' => $total_archive_events,
            'all_active_events' => $all_active_events,

        ]);
    }

    public function exportAllEventAsExcel(){
        $all_events = AusstaEvent::with(['EventType','UserName'])->get();
    
        foreach ($all_events as $event) {
            $contactPersons = User::whereIn("id", explode(",", $event['contact_person']))->select('id', 'full_name', 'email')->get();
            
            // Extract the 'full_name' property from each object in the 'contact' array
            $fullNames = $contactPersons->pluck('full_name')->toArray();
    
            // Convert the collection to an array and then implode
            $event['contact'] = implode(', ', $fullNames);
        }

        $result=$all_events->map(function ($item){
            return[
                "Id"=>$item->id,
                "Event Id "=>$item->event_unique_id,
                "Event Type"=>$item->EventType?$item->EventType->event_type_name:"",
                "Event Title"=>$item->event_title,
                "Event Time"=>$item->event_time,
                "Event Description"=>$item->event_description,
                "Event Fee"=>$item->event_fee,
                "Payment Type"=>$item->payment_type,
                "Contact Persons"=>$item->contact,
                "Posted By"=>$item->UserName?$item->UserName->full_name: "",
                "Created At"=>$item->created_at,
                "Updated At"=>$item->updated_at
            ];
        });
        return response()->json([
            "status"=>200,
            "all_posts"=>$result
        ]);    
 
    }
    




    //     public function store(Request $request)
//     {

    //         $validator = Validator::make($request->all(),[
//             'event_title' => 'unique:aussta_events',
//             'contact_person'=>'required'
//         ]);


    //         if ($validator->fails())
//         {
//             return response()->json([
//                 'status' => 400,
//                 'errors' => $validator->messages(),
//             ]);

    //         }else{

    //         $event = new AusstaEvent();
//        $event_unique_id = (date('md') . rand(1, 99999));

    //           $event->event_unique_id=$event_unique_id;
//         $event->event_type_id = $request->event_type_id;
//         $event->event_title = $request->event_title;
//         $event->event_fee = $request->event_fee;
//         $event->updated_by = $request->updated_by;
//         $event->event_description = $request->event_description;
//         $event->contact_person = $request->contact_person;
//         // $event->event_date = date('d-m-Y', strtotime($request->event_date));
//         $event->event_date = $request->event_date;
//         $event->showBanner = $request->showBanner;

    //         $event->payment_type = $request->payment_type;

    //         $event->posted_by = $request->posted_by;
//         $event->event_time = $request->event_time;
//         // $event->isPublished = $request->isPublished;
//         // $event->isArchived = $request->isArchived;
//         $event->priority = $request->priority;
//         $event->notification_type = 'event_type';
//         $event->save();




    //    foreach ($request->file('image') as $image) {

    //             $upload_image_name = time() . $image->getClientOriginalName();
//             $image->move('images/', $upload_image_name);

    //             $event_multiple_image=new EventMultipleImage();
//             $event_multiple_image->event_id=$event->id;
//             $event_multiple_image->image=$upload_image_name;
//             $event_multiple_image->save();
//             // $name[] = $upload_image_name;

    //             // $advertisement->image =  implode(', ', $name);
//         // $advertisement->save();
//         }
//            // $advertisement->save();




    //         $user_ids = explode(",", $request->contact_person);

    //         $job = (new SendQueueEventEmail($event,$user_ids)); 

    //         dispatch($job);
//         // $event->save();



    // }


    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'event_title' => 'unique:aussta_events',
            'contact_person' => 'required'
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        } else {

            $event = new AusstaEvent();
            $event_unique_id = (date('md') . rand(1, 99999));

            $event->event_unique_id = $event_unique_id;
            $event->event_type_id = $request->event_type_id;
            $event->event_title = $request->event_title;
            $event->event_fee = $request->event_fee;
            $event->updated_by = $request->updated_by;
            $event->event_description = $request->event_description;
            $event->contact_person = $request->contact_person;
            // $event->event_date = date('d-m-Y', strtotime($request->event_date));
            $event->event_date = $request->event_date;
            $event->showBanner = $request->showBanner;

            $event->payment_type = $request->payment_type;

            $event->posted_by = $request->posted_by;
            $event->event_time = $request->event_time;
            // $event->isPublished = $request->isPublished;
            // $event->isArchived = $request->isArchived;
            $event->priority = $request->priority;
            $event->notification_type = 'event_type';
            $event->save();




            foreach ($request->file('image') as $image) {

                $upload_image_name = time() . $image->getClientOriginalName();
                $image->move('images/', $upload_image_name);

                $event_multiple_image = new EventMultipleImage();
                $event_multiple_image->event_id = $event->id;
                $event_multiple_image->image = $upload_image_name;
                $event_multiple_image->save();
                // $name[] = $upload_image_name;

                // $advertisement->image =  implode(', ', $name);
                // $advertisement->save();
            }
            // $advertisement->save();




            $user_ids = explode(",", $request->contact_person);
            // $users = User::whereIn("id", $user_ids)->get();

            // foreach ($users as $key => $user) {
            //     // echo ($user->email);
            //     Mail::to($user->email)->send(new EventMail($event));
            // }

            // foreach($users as $key=>$user1){
            // Notification::send($user1, new EventNotification($event));

            // }


            $job = (new SendQueueEventEmail($event, $user_ids));

            dispatch($job);
            // $event->save();


            $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

            $SERVER_API_KEY = "AAAAlxMWmLE:APA91bGE4xTGl3u7MOzRH4gOKSVM00Cp46ILE3Dn9YywzM-Jip-dFBzdtQaMd4eOTmKGEnRT9AAENpCaxYx9g51JdG0i7btNE53DmYj2-tA5vEPkKKaPRP-ETxTx9JpaNXO0IMzxIA29";

            $data = [
                "registration_ids" => $firebaseToken,
                "notification" => [
                    "title" => $request->event_title,
                    "body" => date('Y-m-d'),
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





            return response()->json([
                'status' => 200,
                'event' => $event,
                'users_id' => $user_ids,
                'message' => 'Event Created Successfully',
            ]);
        }
    }



    public function edit($id)
    {
        $event = AusstaEvent::find($id);

        // dd($event->contact_person);

        $user_ids = explode(",", $event->contact_person);
        $users = User::whereIn("id", $user_ids)->get();

        // dd ($lol);

        $event_images = EventMultipleImage::where('event_id', $id)->get();


        if ($event) {
            return response()->json([
                'status' => 200,
                'event' => $event,
                'users' => $users,
                'event_images' => $event_images

            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No event Found',
            ]);
        }
    }




    public function update(Request $request, $id)
    {

        $event = AusstaEvent::find($id);
        $event->event_unique_id = $request->event_unique_id;

        $event->event_type_id = $request->event_type_id;
        $event->event_title = $request->event_title;
        $event->event_fee = $request->event_fee;
        $event->updated_by = $request->updated_by;
        $event->event_description = $request->event_description;
        $event->contact_person = $request->contact_person;
        $event->event_date = $request->event_date;
        $event->showBanner = $request->showBanner;

        $event->posted_by = $request->posted_by;
        $event->event_time = $request->event_time;
        // $event->isPublished = $request->isPublished;
        // $event->isArchived = $request->isArchived;
        $event->priority = $request->priority;
        $event->update();

        if ($request->file('image')) {
            foreach ($request->file('image') as $image) {

                $upload_image_name = time() . $image->getClientOriginalName();
                $image->move('images/', $upload_image_name);

                $event_multiple_image = new EventMultipleImage();
                $event_multiple_image->event_id = $event->id;
                $event_multiple_image->image = $upload_image_name;
                $event_multiple_image->save();
                // $name[] = $upload_image_name;

                // $advertisement->image =  implode(', ', $name);
                // $advertisement->save();
            }
        }
        // $advertisement->save();


        $user_ids = explode(",", $request->contact_person);

        // dd($user_ids);         
        $users = User::whereIn("id", $user_ids)->get();

        // dd($users);

        foreach ($users as $key => $user) {
            // echo ($user->email);
            Mail::to($user->email)->send(new EventMail($event));
        }



        return response()->json([
            'status' => 200,
            'message' => 'Event Updated Successfully',
        ]);
    }



    public function updateArchiveStatus(Request $request, $id)
    {
        $event = AusstaEvent::find($id);
        $event->isArchived = $request->isArchived;

        $event->update();

        return response()->json([
            'status' => 200,
            'message' => 'Archived Updated Successfully',
        ]);
    }











    public function destroy($id)
    {

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



    //web upcoming event,archive post (tab)filtering start


    public function archiveAllEventsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        AusstaEvent::whereIn('id', $array)
            ->update([
                    'isArchived' => '1',
                    'updated_by' => 2
                    // 'size' => 'XL', 

                    // 'price' => 10000 // Add as many as you need
                ]);

        $all_events = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id', )->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'all_events' => $all_events,
            'message' => 'All Events Archived successfully',
        ]);
    }


    public function deleteEventMultipleImage($id)
    {
        $event = EventMultipleImage::find($id);

        $file = $event->image;
        $filename = public_path() . '/images/' . $file;
        File::delete($filename);
        $event->delete();

        return response()->json([
            'status' => 200,
            'message' => 'event Image deleted successfully',
        ]);
    }




    public function activeAllEventByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        AusstaEvent::whereIn('id', $array)
            ->update([
                'isArchived' => '0',
                'updated_by' => 1
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

        $all_events = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id', )->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'all_events' => $all_events,
            'message' => 'All Events Activated successfully',
        ]);
    }



    public function deleteMultipleEventPosts($ids)
    {
        $array = explode(",", $ids);

        $deletes = AusstaEvent::whereIn('id', $array)->delete();
        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'All Events deleted successfully',
        ]);
    }

    public function filterEventPostsByName($name)
    {

        // $check=Carbon::now()->subDays(15);
        // dd($check);

        if ($name == 'all') {
            $event_posts = AusstaEvent::orderBy('id', 'desc')->with(['EventImage', 'userName', 'EventType'])->get();
            return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,

            ]);
        } else if ($name == 'upcoming_filter') {


            // $originalDate = "Tue, 08 Nov 2022 18:00:00 GMT";
            // $newDate = date("d-m-Y", strtotime($originalDate));

            // echo $newDate;

            $currentDate = date('Y-m-d');
            $currentDate_15 = date('Y-m-d', strtotime("+15 day"));

            // dd($currentDate_15);


            // $filterDatePosts=Post::whereBetween(DB::raw('DATE(created_at)'), [$fromDate, $toDate])->get();

            $event_posts = AusstaEvent::orderBy('id', 'desc')->whereBetween('event_date', [$currentDate, $currentDate_15])->with(['EventImage', 'userName', 'EventType'])->get();



            return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        } else if ($name == 'archive') {

            $event_posts = AusstaEvent::orderBy('id', 'desc')->where('isArchived', 1)->with(['EventImage', 'userName', 'EventType'])->get();


            return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        } else {
            $event_posts = AusstaEvent::orderBy('id', 'desc')->with(['EventImage', 'userName', 'EventType'])->get();

            return response()->json([
                'status' => 200,
                'event_posts' => $event_posts,
            ]);
        }
    }


    //event gloabl all search (web) searchbar field
    public function getAllEventRelatedDataByName($name)
    {
        // $event_posts = DB::table('aussta_events')->where('event_title','Like','%'.$name .'%')->where('event_description','Like','%'.$name .'%')->where('event_fee','Like','%'.$name .'%')->orderBy('aussta_events.id', 'desc')->get();
        //       return response()->json([
        //           'status' => 200,
        //           'event_posts' => $event_posts,
        //       ]);

        $event_posts = AusstaEvent::where('event_title', 'Like', '%' . $name . '%')->orWhere('event_description', 'Like', '%' . $name . '%')->orWhere('event_fee', 'Like', '%' . $name . '%')->with(['EventImage', 'UserName', 'EventType'])->orWhereHas('EventType', function ($q) use ($name) {
            $q->where('event_type_name', 'Like', '%' . $name . '%');
        })->orWhereHas('userName', function ($q) use ($name) {
            $q->where('full_name', 'Like', '%' . $name . '%');
        })->get();


        return response()->json([
            'status' => 200,
            'event_posts' => $event_posts,
        ]);
    }


    public function eventQrCodePassOrFail($eventId)
    {

        $event = AusstaEvent::where('id', $eventId)->first();
        $qr_code = $event->event_unique_id;
        if ($event->event_fee == 0) {
            return response()->json([
                'status' => 200,
                'qr_code' => $qr_code,
                'message' => 'success',
            ]);
        } else if ($event->event_fee !== 0) {
            return response()->json([
                'status' => 400,
                // 'qr_code'=>$qr_code,

                'message' => 'Failed',
            ]);
        }

    }

    //web event persons name

    public function eventContactPersonName($eventId)
    {
        $event_id = AusstaEvent::where('id', $eventId)->pluck('contact_person')->implode(',');
        $explode = explode(',', $event_id);
        // dd($explode);



        $contact_persons = User::whereIn('id', $explode)->get();
        return response()->json([
            'status' => 200,
            'contact_persons' => $contact_persons,
        ]);
    }
}