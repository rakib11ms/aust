<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\File;    
use Illuminate\Support\Facades\DB;
class PostController extends Controller
{

   public function index()
    {
                $total_posts = Post::orderBy('id','desc')->get()->count();
                $total_active_posts = Post::where('isPublished',1)->orderBy('id','desc')->get()->count();
                $total_pending_posts = Post::where('isPublished',0)->orderBy('id','desc')->get()->count();

         $posts=DB::table('posts')->leftJoin('post_types','posts.post_type','post_types.id')->select('posts.*','post_types.*')->orderBy('posts.id','desc')->get();


              //  $pending_posts=Post::where('isPublished',0)->get();
              // $active_posts=Post::where('isPublished',1)->get();


        return response()->json([
           'status' => 200,
             'total_posts'=>$total_posts,
             'total_active_posts'=>$total_active_posts,
             'total_pending_posts'=>$total_pending_posts,
             // 'pending_posts'=>$pending_posts,
             // 'active_posts'=>$active_posts,

            'posts' => $posts
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
           $post->isPublished =1;
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

    public function filterByStatus($name){
      
      // $active_posts=Post::where('isPublished',$name)->get();
      // $pending_posts=Post::where('isPublished',$name)->get();
      // $active_posts=Post::where('isPublished',$name)->get();

        if($name=='all'){
        $posts=Post::orderBy('id','DESC')->get();
  return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==1){
      $posts=Post::where('isPublished',1)->get();
 return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==0){
                  $posts=Post::where('isPublished',0)->get();

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else{
     $posts=Post::orderBy('id','DESC')->get();
  return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }

          
    }
}
