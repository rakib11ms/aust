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
    public function index()
    {


        $all_advertisements = DB::table('advertisements')->leftJoin('users', 'users.id', '=', 'advertisements.posted_by')->select('advertisements.*')->orderBy('advertisements.id', 'desc')->get();


           $today = date("Y-m-d");
           // dd($today);

              $over_advertisements = DB::table('advertisements')->where('last_show_days', "<" ,$today)->orderBy('advertisements.id', 'desc')->get();

              $check=$over_advertisements->pluck('id')->toArray();

              $array = array_values($check);

              // return $array;

            Advertisement::whereIn('id', $array)
            ->update([
                'isPublished' => '0',
       
            ]);


        $total_active_advertisements = Advertisement::where('isPublished', 1)->get()->count();
        $total_pause_advertisements = Advertisement::where('isPublished', 0)->get()->count();
        return response()->json([
            'status' => 200,
            'all_advertisements' => $all_advertisements,
            'total_active_advertisements' => $total_active_advertisements,
            'total_pause_advertisements' => $total_pause_advertisements,
        ]);
    }





    public function store(Request $request)
    {
        // dd($request->all());

        $advertisement = new Advertisement();


        foreach ($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);
            $name[] = $upload_image_name;

            $advertisement->image =  implode(', ', $name);
            // $event->save();   
        }


        $advertisement->advertisement_title = $request->advertisement_title;
        $advertisement->advertisement_description = $request->advertisement_description;
        $advertisement->posted_by = auth('sanctum')->user()->id;
        $advertisement->show_time = $request->show_time;
        $advertisement->show_days = $request->show_days;
// strtotime($ticket_created_on_date_time . '+ ' . $in_between_days . ' days')

        $add_show_days = date('Y-m-d', strtotime('+'.$advertisement->show_days.'day'));
                $advertisement->last_show_days = $add_show_days;


        $advertisement->showMobile = $request->showMobile;
        $advertisement->showDesktop = $request->showDesktop;
        $advertisement->advertisement_fee = $request->advertisement_fee;
        $advertisement->home_page = $request->home_page;
        $advertisement->view_job_page = $request->view_job_page;
        $advertisement->view_advment_page = $request->view_advment_page;
        $advertisement->create_advment_page = $request->create_advment_page;
        $advertisement->add_general_post_page = $request->add_general_post_page;
        $advertisement->add_event_page = $request->add_event_page;
        $advertisement->position = $request->position;
        $advertisement->redirect_link = $request->redirect_link;
        $advertisement->save();



        return response()->json([
            'status' => 200,
            'advertisement' => $advertisement,
            // 'users_id'=>$user_ids,
            'message' => 'Advertisement Created Successfully',
        ]);
    }



    public function edit($id)
    {
        $advertisement = Advertisement::find($id);

        if ($advertisement) {
            return response()->json([
                'status' => 200,
                'advertisement' => $advertisement,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No advertisement Found',
            ]);
        }
    }




    public function update(Request $request, $id)
    {

        // dd($request->all());

        $advertisement = Advertisement::find($id);

        if ($request->file('image')) {
            foreach ($request->file('image') as $image) {

                $upload_image_name = time() . $image->getClientOriginalName();
                $image->move('images/', $upload_image_name);
                $name[] = $upload_image_name;

                $advertisement->image =  implode(', ', $name);
                // $event->save();   
            }
        }



        $advertisement->advertisement_title = $request->advertisement_title;
        $advertisement->advertisement_description = $request->advertisement_description;
        $advertisement->posted_by = auth('sanctum')->user()->id;
        $advertisement->show_time = $request->show_time;
        $advertisement->show_days = $request->show_days;
         $add_show_days = date('Y-m-d', strtotime('+'.$advertisement->show_days.'day'));
        $advertisement->last_show_days = $add_show_days;

        $advertisement->showMobile = $request->showMobile;
        $advertisement->showDesktop = $request->showDesktop;
        $advertisement->home_page = $request->home_page;
        $advertisement->advertisement_fee = $request->advertisement_fee;

        $advertisement->view_job_page = $request->view_job_page;
        $advertisement->view_advment_page = $request->view_advment_page;
        $advertisement->create_advment_page = $request->create_advment_page;
        $advertisement->add_general_post_page = $request->add_general_post_page;
        $advertisement->add_event_page = $request->add_event_page;
        $advertisement->position = $request->position;
        $advertisement->redirect_link = $request->redirect_link;
        $advertisement->update();

        return response()->json([
            'status' => 200,
            'message' => 'Advertisement Updated Successfully',
        ]);
    }



    public function updateArchiveStatus(Request $request, $id)
    {
        $event = Advertisement::find($id);
        $event->isArchived = $request->isArchived;

        $event->update();

        return response()->json([
            'status' => 200,
            'message' => 'Archived Updated Successfully',
        ]);
    }






    public function destroy($id)
    {

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


    public function archiveAllAsvertisementByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        Advertisement::whereIn('id', $array)
            ->update([
                'isArchived' => '1',
                'isPublished' => '0',
                'updated_by' => 2
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

        // $all_events = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id',)->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id', 'desc')->get();
        return response()->json([
            'status' => 200,
            // 'all_events' => $all_events,
            'message' => 'Advertisement Archived successfully',
        ]);
    }

    public function activeAllAdvertisementByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        Advertisement::whereIn('id', $array)
            ->update([
                'isArchived' => '0',
                'isPublished'=>'1',
                'updated_by' => 1
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

        // $all_events = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id',)->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id', 'desc')->get();
        return response()->json([
            'status' => 200,
            // 'all_events' => $all_events,
            'message' => 'Advertisement Activated successfully',
        ]);
    }



    public function deleteMultipleAdvertisement($ids)
    {
        $array = explode(",", $ids);

        $deletes = Advertisement::whereIn('id', $array)->delete();
        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'Advertisement deleted successfully',
        ]);
    }

    public function filterAdvertisementsByName($name)
    {

        // $check=Carbon::now()->subDays(15);
        // dd($check);

        if ($name == 'all') {
            $all_advertisements = DB::table('advertisements')->leftJoin('users', 'users.id', '=', 'advertisements.posted_by')->select('advertisements.*')->orderBy('advertisements.id', 'desc')->get();
            return response()->json([
                'status' => 200,
                'all_advertisements' => $all_advertisements,
            ]);
        } else if ($name == 1) {



     $all_advertisements = DB::table('advertisements')->leftJoin('users', 'users.id', '=', 'advertisements.posted_by')->select('advertisements.*')->where('isPublished',1)->orderBy('advertisements.id', 'desc')->get();

            return response()->json([
                'status' => 200,
                'all_advertisements' => $all_advertisements,
            ]);
        }
        else if($name == 0){
    $all_advertisements = DB::table('advertisements')->leftJoin('users', 'users.id', '=', 'advertisements.posted_by')->select('advertisements.*')->where('isPublished',0)->orderBy('advertisements.id', 'desc')->get();
            return response()->json([
                'status' => 200,
                'all_advertisements' => $all_advertisements,
            ]);
        }

        //  else {
        //     $event_posts = DB::table('aussta_events')->leftJoin('austta_event_types', 'austta_event_types.id', '=', 'aussta_events.event_type_id',)->select('aussta_events.*', 'austta_event_types.event_type_name as event_type_name')->orderBy('aussta_events.id', 'desc')->get();
        //     return response()->json([
        //         'status' => 200,
        //         'event_posts' => $event_posts,
        //     ]);
        // }
    }

    public function filterAdvertisementsByDays($days){

        if($days=='all'){
        $all_advertisements = DB::table('advertisements')->leftJoin('users', 'users.id', '=', 'advertisements.posted_by')->select('advertisements.*')->orderBy('advertisements.id', 'desc')->get();
              return response()->json([
                'status' => 200,
                'all_advertisements' => $all_advertisements,
            ]);
        }


        $todays_date=date('Y-m-d');
        // dd($todays_date);
        $add_days = date('Y-m-d', strtotime('+'.$days.'day'));
        // dd($add_show_days);

        $query_days=Advertisement::whereBetween('last_show_days', [$todays_date, $add_days])->orderBy('.id', 'desc')->get();
              return response()->json([
                'status' => 200,
                'all_advertisements' => $query_days,
            ]);


    }
}
