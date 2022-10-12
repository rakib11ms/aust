<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobPost;
use Illuminate\Support\Facades\File;   
class JobPostController extends Controller
{
    public function index()
    {
                $count = JobPost::orderBy('id','desc')->get()->count();

        $posts = JobPost::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'posts' => $posts
         ]);
    }





      public function store(Request $request){
        // dd ($request->all());

            $post = new JobPost();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $post->image =$filename ;
         } 

           $post->job_title = $request->job_title;
           $post->job_type = $request->job_type;
           $post->job_description = $request->job_description;
           $post->job_link = $request->job_link;
           // $post->image = $request->image;

           $post->posted_by = $request->posted_by;
           $post->date = $request->date;
           $post->isPublished = $request->isPublished;
           $post->isArchived = $request->isArchived;
           $post->application_deadline = $request->application_deadline;
            $post->save();

                $count = JobPost::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'Job Post Added Successfully',
            ]);   
     }

       public function edit($id)
    {
        $post = JobPost::find($id);

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

             $post=JobPost::find($id);

          

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
           $post->date = $request->date;
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
        $post = JobPost::find($id);
        $file=$post->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $post->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Job Post deleted successfully',
            ]);

    
    }
}
