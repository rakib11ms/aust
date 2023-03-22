<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NoticeNews;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
use App\Models\NoticeNewsMultipleImage;
class NoticeNewsController extends Controller
{
    public function index()
    {

           $active_notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('isPublished',1)->where('isArchived',0)->where('notice_news_categories.category_name','News')->orderBy('notice_news.id','desc')->get();

           $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->orderBy('notice_news.id','desc')->get();


           $total_news=NoticeNews::get()->count();
           $total_active=NoticeNews::where('isPublished',1)->where('isArchived',0)->get()->count();
           $total_pending=NoticeNews::where('isPublished',0)->get()->count();
        return response()->json([
           'status' => 200,

'active_notice_news'=>$active_notice_news,
            'notice_news' => $notice_news,
            'total_active' => $total_active,
            'total_pending' => $total_pending,
            'total_news' => $total_news
         ]);
    }





      public function store(Request $request){
  
          $notice_news = new NoticeNews();

           $notice_news->category_id = $request->category_id;
           $notice_news->subcategory_id = $request->subcategory_id;
           $notice_news->notice_news_title = $request->notice_news_title;
           $notice_news->posted_by =auth('sanctum')->user()->id;
           $notice_news->updated_by = auth('sanctum')->user()->id;
           $notice_news->notice_news_description = $request->notice_news_description;

            $notice_news->save();


   foreach ($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);

            $notice_news_multiple_image=new NoticeNewsMultipleImage();
            $notice_news_multiple_image->notice_news_id=$notice_news->id;
            $notice_news_multiple_image->image=$upload_image_name;
            $notice_news_multiple_image->save();
       
        }

                $count = NoticeNews::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'notice_news'=>$notice_news ,
                'message' => 'Notice News Added Successfully',
            ]);   
     }

       public function edit($id)
    {
        $notice_news = NoticeNews::find($id);


        $notice_news_images=NoticeNewsMultipleImage::where('notice_news_id',$id)->get();


        if ($notice_news)
        {
            return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
                'notice_news_images'=>$notice_news_images

            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Posts Found',
            ]);
        }

    }

    public function update(Request $request,$id){

             $notice_news=NoticeNews::find($id);



           $notice_news->category_id = $request->category_id;
           $notice_news->subcategory_id = $request->subcategory_id;
           $notice_news->notice_news_title = $request->notice_news_title;
           $notice_news->posted_by = auth('sanctum')->user()->id;
           $notice_news->updated_by =auth('sanctum')->user()->id;
           $notice_news->notice_news_description = $request->notice_news_description;
           $notice_news->isArchived = $request->isArchived;
           $notice_news->isPublished = $request->isPublished;

            $notice_news->update();





   foreach ($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);

            $notice_news_multiple_image=new NoticeNewsMultipleImage();
            $notice_news_multiple_image->notice_news_id=$notice_news->id;
            $notice_news_multiple_image->image=$upload_image_name;
            $notice_news_multiple_image->save();
       
        }

                $count = NoticeNews::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'notice_news'=>$notice_news ,
                'message' => 'Notice News Updated Successfully',
            ]);  
    }




       public function destroy($id)
    {
        $notice_news = NoticeNews::find($id);
        $file=$notice_news->notice_news_image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $notice_news->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Notice News deleted successfully',
            ]);

    
    }


//filtering web tab  (Notice Newss table)////



    public function NoticeNewsfilterByStatus($name){
      

                if($name=='all'){
         $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->orderBy('notice_news.id','desc')->get();
        return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
        else if($name==1){
        $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('notice_news.isPublished',1)->where('notice_news.isArchived',0)->orderBy('notice_news.id','desc')->get();
       return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,

            ]);
        }
        else if($name==0){
              $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('notice_news.isPublished',0)->where('notice_news.isArchived',0)->orderBy('notice_news.id','desc')->get();

   return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
            else if($name=='archive'){
               $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('notice_news.isPublished',0)->where('notice_news.isArchived',1)->orderBy('notice_news.id','desc')->get();


   return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
      

          
    }

  function NoticeNewsfilterBySearchInputRadioButton($searchInputValue,$searchRadioButtonValue){

           if($searchRadioButtonValue=='categoryType'){
    
        $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('notice_news_categories.category_name','like','%' .$searchInputValue . '%')->orderBy('notice_news.id','desc')->get();

        return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
        else if($searchRadioButtonValue=='postTitle'){
     


           $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('notice_news.notice_news_title','like','%' .$searchInputValue . '%')->orderBy('notice_news.id','desc')->get();


       return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,

            ]);
        }
        else if($searchRadioButtonValue=='userName'){
                  $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->select('posts.*','post_types.id as post_type_id','post_types.type_name as post_type_name')->where('isArchived',0)->where('isPublished',0)->orderBy('posts.id','desc')->get(); 

                  $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->where('users.full_name','like','%' .$searchInputValue . '%')->orderBy('notice_news.id','desc')->get();

   return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
        else{
                      $notice_news=DB::table('notice_news')->leftJoin('notice_news_categories','notice_news_categories.id','=','notice_news.category_id',)->leftJoin('notice_news_sub_categories','notice_news_sub_categories.id','=','notice_news.subcategory_id')->leftJoin('users','users.id','=','notice_news.posted_by')->select('notice_news.*','notice_news_categories.category_name','notice_news_sub_categories.subcategory_name','users.full_name')->orderBy('notice_news.id','desc')->get(); 
        return response()->json([
                'status' => 200,
                'notice_news' => $notice_news,
            ]);
        }
     }


 public function NoticeNewsMultipleImageById($id){
        $notice_news_images=NoticeNewsMultipleImage::where('notice_news_id',$id)->get();

           return response()->json([
                'status' => 200,
                'notice_news_images'=>  $notice_news_images,
            ]);
 }





    public function deleteMultipleNoticeNewss($ids){
 
    $array=explode (",", $ids); 



    $notice_news=NoticeNews::whereIn('id',$array)->get();


        foreach($notice_news as $image){
            if(File::exists('images/'.$image->notice_news_image)){
                File::delete('images/'.$image->notice_news_image);
            }
        }
  $deletes=NoticeNews::whereIn('id',$array)->delete();




      return response()->json([
                'status' => 200,
                // 'deletes'=>  $deletes,
                'message' => ' Posts deleted successfully',
            ]);
}



public function deleteNoticeNewsMultipleImage($id){
    $notice_news = NoticeNewsMultipleImage::find($id);

        $file=$notice_news->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);
        $notice_news->delete();

              return response()->json([
            'status' => 200,
            'message' => 'notice_news Image deleted successfully',
        ]);
}

}
