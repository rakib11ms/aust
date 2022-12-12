<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobPost;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class JobPostController extends Controller
{
    public function index()
    {
                $total_active_jobs = JobPost::where('isPublished',1)->where('isArchived',0)->get()->count();
                  $pending_jobs = JobPost::where('isPublished',0)->get()->count();
                $latest_jobs = DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->latest()->take(3)->get();

           $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();

                $active_jobs=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->where('isPublished',1)->where('isArchived',0)->orderBy('job_posts.id','desc')->limit(5)->get();

        return response()->json([
           'status' => 200,
             'active_jobs'=>$active_jobs,
             'total_active_jobs'=>$total_active_jobs,
             'pending_jobs'=>$pending_jobs,
'latest_jobs'=>$latest_jobs,
            'posts' => $posts,
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

          $job_unique_id = (date('md') . rand(1, 999));

          $post->job_unique_id=$job_unique_id;

           $post->company_name = $request->company_name;
           $post->job_title = $request->job_title;
           // $post->job_sub_title = $request->job_sub_title;
           $post->job_type = $request->job_type;
           $post->job_description = $request->job_description;
           $post->job_link = $request->job_link;
           $post->department_id = $request->department_id;

           $post->posted_by = $request->posted_by;
           $post->job_location = $request->job_location;
           // $post->isPublished = $request->isPublished;
           // $post->isArchived = $request->isArchived;
           $post->application_deadline = $request->application_deadline;
            $post->save();

                $count = JobPost::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'job_info'=>$post ,
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
           // $post->job_sub_title = $request->job_sub_title;

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
    //web upcoming event,archive post (tab)select dropdown start

public function deleteMultipleJobPosts($ids){
 
    $array=explode (",", $ids); 

  $deletes=JobPost::whereIn('id',$array)->delete();
      return response()->json([
                'status' => 200,
                // 'deletes'=>  $deletes,
                'message' => 'Job Posts deleted successfully',
            ]);
}

    


    public function archiveAllJobPostsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        JobPost::whereIn('id', $array)
            ->update([
                'isArchived' => '1',
                'isPublished' => '0',
                'updated_by' => 2
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

               $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Job posts Archived successfully',
        ]);
    }


 public function activeAllJobPostsByUpdate(Request $request, $ids)
    {
        $array = explode(",", $ids);


        JobPost::whereIn('id', $array)
            ->update([
                'isArchived' => '0',
                'isPublished' => '1',
                'updated_by' => 1
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

           $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Job posts Activated successfully',
        ]);
    }

    public function pendingAllJobPostsByUpdate(Request $request, $ids){
      $array = explode(",", $ids);


        JobPost::whereIn('id', $array)
            ->update([
                // 'isArchived' => '0',
                'isPublished' => '0',
                'updated_by' => 1
                // 'size' => 'XL', 

                // 'price' => 10000 // Add as many as you need
            ]);

           $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();
        return response()->json([
            'status' => 200,
            'posts' => $posts,
            'message' => 'Job posts Activated successfully',
        ]);
    }







        public function filterByJobPostStatus($name){
      

        if($name=='all'){
        $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();  
        return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==1){
      $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->where('isArchived',0)->where('isPublished',1)->orderBy('job_posts.id','desc')->get(); 
 return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else if($name==0){
                  $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->where('isArchived',0)->where('isPublished',0)->orderBy('job_posts.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
            else if($name=='archive'){
                  $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->where('isArchived',1)->where('isPublished',0)->orderBy('job_posts.id','desc')->get(); 

   return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }
        else{
     $posts=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->orderBy('job_posts.id','desc')->get();  
        return response()->json([
                'status' => 200,
                'posts' => $posts,
            ]);
        }

          
    }
}
