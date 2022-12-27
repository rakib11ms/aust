<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\AusstaEvent;
use App\Models\BannerMultipleImage;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class BannerController extends Controller
{
     public function index()
    {
        
        // $banner=Banner::where('isArchived',0)->orderBy('id','desc')->get();
         $banner =Banner::orderBy('id','desc')->with(['BannerImage','userName'])->get();
        return response()->json([
           'status' => 200,
            'banner' => $banner
         ]);
    }





      public function store(Request $request){
            $banner = new Banner();
   



           $banner->banner_title = $request->banner_title;
           $banner->posted_by = auth('sanctum')->user()->id;
           $banner->updated_by = auth('sanctum')->user()->id;
           $banner->banner_description = $request->banner_description;

            $banner->save();

               foreach ($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);

            $banner_multiple_image=new BannerMultipleImage();
            $banner_multiple_image->banner_id=$banner->id;
            $banner_multiple_image->image=$upload_image_name;
            $banner_multiple_image->save();
            // $name[] = $upload_image_name;

            // $advertisement->image =  implode(', ', $name);
        // $advertisement->save();
        }
           // $advertisement->save();

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
        $banner = Banner::find($id);
        $banner_images=BannerMultipleImage::where('banner_id',$id)->get();


        if ($banner)
        {
            return response()->json([
                'status' => 200,
                'banner_images'=>$banner_images,
                'banner' => $banner,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No banners Found',
            ]);
        }

    }

    public function update(Request $request,$id){


              $banner = Banner::find($id);

           $banner->banner_title = $request->banner_title;
           $banner->posted_by = auth('sanctum')->user()->id;
           $banner->updated_by = auth('sanctum')->user()->id;
           $banner->banner_description = $request->banner_description;
           // $banner->update();


           if($request->file('image')){

            foreach($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);

            $banner_multiple_image=new BannerMultipleImage();
            $banner_multiple_image->banner_id=$banner->id;
            $banner_multiple_image->image=$upload_image_name;
            $banner_multiple_image->save();
        }
     }


            $count = Banner::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'banner'=>$banner ,
                'message' => 'Banner Updated Successfully',
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

    public function deleteBannerMultipleImage($id){
    $banner = BannerMultipleImage::find($id);

        $file=$banner->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);
        $banner->delete();

              return response()->json([
            'status' => 200,
            'message' => 'Banner Image deleted successfully',
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

         $banner =Banner::orderBy('id','desc')->where('isArchived',0)->with(['BannerImage'])->get();
         $event =AusstaEvent::orderBy('id','desc')->where('isArchived',0)->with(['EventImage'])->get();
                // $second = DB::table('banners')->where('isArchived',0)->get();
                // $merged = $event->merge($banner);

               return response()->json([
                'status' => 200,
                'banner'=>$banner,
                'event'=>$event,
            ]);
    }
}
