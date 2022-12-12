<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\JobPost;
use App\Models\Post;
use App\Models\Advertisement;
use DB;
class DashboardHomeController extends Controller
{
    public function totalStatus(){
            $total_users=User::get()->count();
            $total_advertisements=Advertisement::get()->count();
            $total_Jobs=JobPost::get()->count();
            $total_posts=Post::get()->count();

            //job management card section//

            $total_new_jobs=JobPost::get()->count();
            $total_pending_jobs=JobPost::where('isPublished',0)->get()->count();
            $total_archived_jobs=JobPost::where('isPublished',0)->where('isArchived',1)->get()->count();

                return response()->json([
                    'status' => 200,
                    'total_users' => $total_users,
                    'total_advertisements' => $total_advertisements,
                    'total_Jobs' => $total_Jobs,
                    'total_posts' => $total_posts,
                    'total_new_jobs' => $total_new_jobs,
                    'total_archived_jobs' => $total_archived_jobs,
                   'total_pending_jobs'=>$total_pending_jobs,
                ]);
   }

     public function jobFilteringAdminHomePage($name){
        if($name=='All'){
                 $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('isPublished',1)->where('isArchived',0)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);
    } 
    else if($name=='Full Time'){
            $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('type_name',$name)->where('isArchived',0)->where('isPublished',1)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);

    }  

     else if($name=='Part Time'){
       $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('type_name',$name)->where('isArchived',0)->where('isPublished',1)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);
    }  

 else if($name=='Contractual'){
       $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('type_name',$name)->where('isArchived',0)->where('isPublished',1)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);
    } 


     else if($name=='Pending'){
       $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('type_name',$name)->where('isPublished',0)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);
    }   

   }
}
