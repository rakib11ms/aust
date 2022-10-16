<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\File;    
class PostController extends Controller
{

   public function index()
    {
                $count = Post::orderBy('id','desc')->get()->count();

        $posts = Post::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

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
           $post->isPublished = $request->isPublished;
           $post->tag = $request->tag;
            $post->save();

                $count = Post::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 // 'count'=>$count,
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

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 999999).$names;
            $files->move('images/', $name);
        }
           
            if($files!=null){
             $post->image=$name;

            }
            // if($request->post_title !=null ||$request->post_type !=null || $request->post_description !=null ||  $request->posted_by !=null ||){

            // }

           $post->post_title = $request->input('post_title');
           $post->post_type = $request->input('post_type');
           $post->post_description = $request->input('post_description');
           $post->posted_by = $request->input('posted_by');
           $post->date = $request->input('date');
           $post->isPublished = $request->input('isPublished');

            $post->update();

 return response()->json([
                'status' => 200,
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
      $posts=Post::where('isPublished',$name)->get();
             return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
    }
}
