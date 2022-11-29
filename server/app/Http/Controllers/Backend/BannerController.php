<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\AusstaEvent;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class BannerController extends Controller
{
     public function index()
    {
        
        $banner=Banner::where('isArchived',0)->orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'banner' => $banner
         ]);
    }





      public function store(Request $request){
            $banner = new Banner();
             if ($request->file('image')) {
            foreach ($request->file('image') as $image) {

                $upload_image_name = time() . $image->getClientOriginalName();
                $image->move('images/', $upload_image_name);
                $name[] = $upload_image_name;

                $banner->image =  implode(', ', $name);
                // $event->save();   
            }
        }



           $banner->banner_title = $request->banner_title;
           $banner->posted_by = auth('sanctum')->user()->id;
           $banner->updated_by = auth('sanctum')->user()->id;
           $banner->banner_description = $request->banner_description;

            $banner->save();

            $count = Banner::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'banner'=>$banner ,
                'message' => 'Banner Added Successfully',
            ]);   
     }

       public function edit($id)
    {
        $post = Banner::find($id);

        if ($post)
        {
            return response()->json([
                'status' => 200,
                'post' => $post,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Posts Found',
            ]);
        }

    }

    public function update(Request $request,$id){

             $post=Banner::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/', $name);
        }
           
            if($files!=null){
             $post->image=$name;

            }

            $post->job_title = $request->job_title;
           $post->job_type = $request->job_type;
           $post->job_description = $request->job_description;
           $post->job_link = $request->job_link;
           // $post->image = $request->image;

           $post->posted_by = $request->posted_by;
           // $post->date = $request->date;
           $post->isPublished = $request->isPublished;
           $post->isArchived = $request->isArchived;
           $post->application_deadline = $request->application_deadline;
            $post->update();

 return response()->json([
                'status' => 200,
                'message' => 'Job Post Updated Successfully',
            ]);   
    }




       public function destroy($id)
    {
        $banner = Banner::find($id);
        $file=$banner->banner_image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $banner->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Banner deleted successfully',
            ]);

    
    }
       public function deleteMultipleBanner($ids)
    {
        $array = explode(",", $ids);

        $deletes = Banner::whereIn('id', $array)->delete();
        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'All Events deleted successfully',
        ]);
    }

    /////mobile banner event latest one/////////////
    public function latestEventMobileBanner(){

                $first = DB::table('aussta_events')->where('isArchived',0)->where('showBanner',1)->latest()->get();
                $second = DB::table('banners')->where('isArchived',0)->get();
                $merged = $first->merge($second);

               return response()->json([
                'status' => 200,
                'banner'=>$merged
            ]);
    }
}
