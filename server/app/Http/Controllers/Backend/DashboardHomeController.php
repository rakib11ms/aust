<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\JobPost;
use App\Models\Post;
use App\Models\NoticeNews;
use App\Models\Advertisement;
use App\Models\AusstaEvent;
use DB;
class DashboardHomeController extends Controller
{
    public function totalStatus(){
            $total_users=User::get()->count();
            $total_advertisements=Advertisement::get()->count();
            $total_Jobs=JobPost::get()->count();
            $total_posts=Post::get()->count();



            $total_news=NoticeNews::get()->count();
            $total_news_archived=NoticeNews::where('isPublished',0)->where('isArchived',1)->get()->count();
            $total_news_pending=NoticeNews::where('isPublished',0)->get()->count();

            $total_events=AusstaEvent::get()->count();
            $total_events_archived=AusstaEvent::where('isArchived',1)->get()->count();
            $total_events_pending=0;


    $total_articles=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Article')->get()->count();

            $total_articles_archived=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Article')->where('isArchived',0)->get()->count();

            $total_articles_pending=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Article')->where('isPublished',0)->get()->count();


   $total_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Blog')->get()->count();

            $total_blogs_archived=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Blog')->where('isArchived',1)->get()->count();

            $total_blogs_pending=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','Blog')->where('isPublished',0)->get()->count();


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


                   'total_news'=>$total_news,
                   'total_news_archived'=>$total_news_archived,
                   'total_news_pending'=>$total_news_pending,


                   'total_events'=>$total_events,
                   'total_events_archived'=>$total_events_archived,
                   'total_events_pending'=>$total_events_pending,

   '                total_articles'=>$total_articles,
                   'total_articles_archived'=>$total_articles_archived,
                   'total_articles_pending'=>$total_articles_pending,


                   'total_blogs'=>$total_blogs,
                   'total_blogs_archived'=>$total_blogs_archived,
                   'total_blogs_pending'=>$total_events_pending,






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
       $data=DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->leftJoin('users', 'users.id', '=', 'job_posts.posted_by')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name','users.full_name')->where('job_posts.isPublished',0)->orderBy('job_posts.id','desc')->limit(5)->get();
                 return response()->json([
           'status' => 200,
      
            'data'=>$data
         ]);
    }   

   }

//notificaion icon topbar (web) //
  public function allNotificationThroughPosts(){
    // dd(auth('sanctum')->user());


    // $all_unread=  auth('sanctum')->user()->unreadNotifications->get();
    $all_unread= 'App\Models\Notification'::with('users')->where('notifiable_id',auth('sanctum')->user()->id)->whereNull('read_at')->get();
    // $a=[];
    // foreach($all_unread as $key=>$check){
    //     echo $check->data['posted_by'];
    //     array_push($a,$check->data['posted_by']);


    // }
    //     dd($a);

    $total_unread= count('App\Models\Notification'::with('users')->where('notifiable_id',auth('sanctum')->user()->id)->whereNull('read_at')->get());
    // echo $all_unread;

          return response()->json([
           'status' => 200,
      
            'all_unread'=>$all_unread,
            'total_unread'=>$total_unread
         ]);

   }

     public function allReadNotificationThroughPosts(){
   $notification = 'App\Models\Notification'::where('notifiable_id',auth('sanctum')->user->id)->get();

        if ($notification) {
            $notification->markAsRead();
           
   }
   return response()->json(
    [
           'status' => 200,
           'all_read'=>'all notification has been read'

    ]);
}

   public function check(){

  // $check=User::where('id',1)->with('role')->first();
    // $check = User::where('id',25)->with('role')->get();

    $check =User::with('role')->get();

    return response()->json([
        'check'=>$check
    ]);


//   if(auth()->user()->role('Moderator')){
// return response()->json([
//          'paisi'=>"ache shane watson"

//     ]);
// } 
// else{
//   return response()->json([
//          'check'=>'nai kew'

//     ]);  
// }
}
}