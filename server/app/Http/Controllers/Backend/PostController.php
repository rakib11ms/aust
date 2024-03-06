<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Models\JobPost;
use Illuminate\Support\Facades\File;    
use Illuminate\Support\Facades\DB;
class PostController extends Controller
{

   public function index()
    {
                $total_posts = Post::orderBy('id','desc')->get()->count();
                $total_active_posts = Post::where('isPublished',1)->orderBy('id','desc')->get()->count();
                $total_pending_posts = Post::where('isPublished',0)->orderBy('id','desc')->get()->count();

         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get();

 


         // $posts=DB::table('posts')->orderBy('posts.id','desc')->get();



              //  $pending_posts=Post::where('isPublished',0)->get();
              // $active_posts=Post::where('isPublished',1)->get();


        return response()->json([
           'status' => 200,
             'total_posts'=>$total_posts,
             'total_active_posts'=>$total_active_posts,
             'total_pending_posts'=>$total_pending_posts,
             // 'pending_posts'=>$pending_posts,
             // 'active_posts'=>$active_posts,

            'posts' => $posts,

         ]);
    }

    public function exportPostAsExcel(){
        $all_posts=Post::with(["PostType","userPost"])->get();

        $result=$all_posts->map(function ($item){
            return[
                "Id"=>$item->id,
                "Post Type"=>$item->PostType? $item->PostType->type_name:"",
                "Post Title"=>$item->post_title,
                "Post Description"=>$item->post_description,
                "Posted By"=>$item->userPost?$item->userPost->full_name: "",
                "Created At"=>$item->created_at,
                "Updated At"=>$item->updated_at
            ];
        });
        return response()->json([
            "status"=>200,
            "all_posts"=>$result
        ]);

    }




      public function store(Request $request){
        // dd ($request->all());

            $post = new Post();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $post->image =$filename ;
         } 

           $post->post_title = $request->post_title;
           $post->post_type = $request->post_type;
           $post->post_description = $request->post_description;
           $post->posted_by = $request->posted_by;
           $post->date = $request->date;
           $post->isPublished =0;
           $post->tag = $request->tag;
            $post->save();

                $total_posts = Post::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
             'total_posts'=>$total_posts,
                'message' => 'Post Added Successfully',
            ]);   
     }

       public function edit($id)
    {
        $post = Post::find($id);

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

             $post=Post::find($id);

             // dd($request->all());

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 999999).$names;
            $files->move('images/', $name);
        }
           
            if($files!=null){
             $post->image=$name;

            }

           $post->post_title = $request->post_title;
           $post->post_type = $request->post_type;
           $post->post_description = $request->post_description;
           $post->posted_by = $request->posted_by;
           $post->date = $request->date;
           $post->isPublished = $request->isPublished;
           $post->isArchived = $request->isArchived;

            // $post->update();

            if($request->isPublished==1){
$firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

        $SERVER_API_KEY = "AAAAlxMWmLE:APA91bGE4xTGl3u7MOzRH4gOKSVM00Cp46ILE3Dn9YywzM-Jip-dFBzdtQaMd4eOTmKGEnRT9AAENpCaxYx9g51JdG0i7btNE53DmYj2-tA5vEPkKKaPRP-ETxTx9JpaNXO0IMzxIA29";

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => "Your Post has been approved",
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
    
     }

            $post->update();


 return response()->json([
                'status' => 200,
                'data'=>$post,
                'message' => 'Post Updated Successfully',
            ]);   
    }




       public function destroy($id)
    {
        $post = Post::find($id);
        $file=$post->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $post->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Post deleted successfully',
            ]);

    
    }

    public function deleteAllPosts(Request $request){
           Post::truncate();
              return response()->json([
                'status' => 200,
                'message' => 'All Posts deleted successfully',
            ]);

    }




    public function deleteMultiplePosts($ids){
 
    $array=explode (",", $ids); 

  $deletes=Post::whereIn('id',$array)->delete();
      return response()->json([
                'status' => 200,
                // 'deletes'=>  $deletes,
                'message' => ' Posts deleted successfully',
            ]);
}


    public function archiveAllPostsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        Post::whereIn('id', $array)
            ->update([
                'isArchived' => '1',
                'isPublished' => '0',
                'updated_by' => 2
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);


         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Posts Archived successfully',
        ]);
    }

    public function pendingAllPostsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        Post::whereIn('id', $array)
            ->update([
                // 'isArchived' => '0',
                'isPublished' => '0',
                'updated_by' => 2
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);


         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Posts Archived successfully',
        ]);
    }


        public function activeAllPostsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        Post::whereIn('id', $array)
            ->update([
                'isArchived' => '0',
                'isPublished' => '1',
                'updated_by' => 2
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);


         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get();

        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Posts Archived successfully',
        ]);
    }






//filtering web tab table (user post)////



    public function filterByStatus($name){
      

           if($name=='all'){
        $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get(); 


        return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==1){
      $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->where('isArchived',0)->where('isPublished',1)->orderBy('posts.id','desc')->get();

 return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==0){
                  $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->where('isArchived',0)->where('isPublished',0)->orderBy('posts.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
            else if($name=='archive'){
                  $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.id as post_type_id','post_types.type_name as type_name','users.full_name')->where('isArchived',1)->where('isPublished',0)->orderBy('posts.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else{
     $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get(); 
        return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }

          
    }

          
    function filterBySearchInputValandRadioButtonValue($searchInputValue,$searchRadioButtonValue){

           if($searchRadioButtonValue=='postType'){
        $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->select('posts.*','post_types.id as post_type_id','post_types.type_name as type_name')->where('post_types.type_name','like','%' .$searchInputValue . '%')->orderBy('posts.id','desc')->get();  
        return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($searchRadioButtonValue=='postTitle'){
      $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->select('posts.*','post_types.id as post_type_id','post_types.type_name as type_name')->where('posts.post_title','like', '%' .$searchInputValue. '%' )->orderBy('posts.id','desc')->get(); 
       return response()->json([
                'status' => 200,
                'posts' => $posts,

            ]);
        }
        else if($searchRadioButtonValue=='userName'){
                  $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.id as post_type_id','post_types.type_name as type_name','users.full_name')->where('users.full_name','like', '%' .$searchInputValue. '%' )->orderBy('posts.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else{
          
         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','=','post_types.id')->leftJoin('users', 'users.id', '=', 'posts.posted_by')->select('posts.*','post_types.type_name','users.full_name')->orderBy('posts.id','desc')->get();
            return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
     }
















//mobile side




    public function userPostsFiltering($name){

        // dd(auth('sanctum')->user()->id);

        if($name=='all'){


        $user_all_posts= User::where('id', auth('sanctum')->user()->id)
        ->with(['userPost', 'jobPost'])
        ->get();

  return response()->json([
                'status' => 200,
                'user_all_posts' => $user_all_posts,
            ]);
        }
        else if($name=='general_post'){
      $general_posts=Post::where('posted_by',auth('sanctum')->user()->id)->where('isPublished',1)->where('isArchived',0)->orderBy('id',"DESC")->get();
 return response()->json([
                'status' => 200,
                'general_posts' => $general_posts,
            ]);
        }
        else if($name=='job_post'){
                  $job_posts=JobPost::where('posted_by',auth('sanctum')->user()->id)->where('isPublished',1)->where('isArchived',0)->orderBy('id',"DESC")->get();

   return response()->json([
                'status' => 200,
                'job_posts' => $job_posts,
            ]);
        }
        else{


        // $user_all_posts= User::where('id', auth('sanctum')->user()->id)
        // ->with(['userPost', 'jobPost'])
        // ->get();

  return response()->json([
                'status' => 200,
                'message' => "No Posts",
            ]);
    }
}


public function userMyPostsFiltering($name){
     
      $filtered_posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->select('posts.*','post_types.id as post_type_id','post_types.type_name as type_name')->where('post_types.type_name','like','%' .$name. '%')->orWhere('posts.post_title','like','%' .$name. '%')->orWhere('posts.post_description','like','%'.$name.'%')->where('posted_by',auth('sanctum')->user()->id)->orderBy('posts.id','desc')->get(); 
        return response()->json([
                'status' => 200,
                'filtered_posts' => $filtered_posts,
            ]);

  
}



///////////////mobile two dates posts filtering ////////////

 public function postFilteringByTwoDates(Request $request){
    // $filterDatePosts=Post::whereBetween('created_at', [$fromDate1, $fromDate2])->get();
    $fromDate=$request->fromDate;
    $toDate=$request->toDate;



$filterDatePosts=Post::whereBetween(DB::raw('DATE(created_at)'), [$fromDate, $toDate])->get();

      return response()->json([
                'status' => 200,
                'filterDatePosts' => $filterDatePosts,
            ]);

}

}