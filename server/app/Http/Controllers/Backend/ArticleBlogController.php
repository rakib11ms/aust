<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ArticleBlog;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class ArticleBlogController extends Controller
{
    public function index()
    {
                // $active_jobs = ArticleBlog::where('isPublished',1)->where('isArchived',0)->get()->count();
                //   $pending_jobs = ArticleBlog::where('isPublished',0)->get()->count();
                // $latest_jobs = DB::table('job_posts')->leftJoin('departments','departments.id','=','job_posts.department_id',)->leftJoin('job_types','job_types.id','=','job_posts.job_type')->select('job_posts.*','departments.id as department_id','departments.department_name as dept_name','job_types.id as job_type_id','job_types.type_name')->latest()->take(3)->get();

           $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->orderBy('article_blogs.id','desc')->get();
        return response()->json([
           'status' => 200,
             // 'active_jobs'=>$active_jobs,
             // 'pending_jobs'=>$pending_jobs,
// 'latest_jobs'=>$latest_jobs,
            'article_blogs' => $article_blogs
         ]);
    }





      public function store(Request $request){
        // dd ($request->all());

            $article_blog = new ArticleBlog();
               if($request->hasFile('article_blog_image')){
            $file=$request->file('article_blog_image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $article_blog->article_blog_image =$filename ;
         } 



           $article_blog->category_id = $request->category_id;
           $article_blog->subcategory_id = $request->subcategory_id;
           $article_blog->article_blog_title = $request->article_blog_title;
           $article_blog->posted_by = $request->posted_by;
           $article_blog->updated_by = $request->updated_by;
           $article_blog->article_blog_description = $request->article_blog_description;

            $article_blog->save();

                $count = ArticleBlog::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'article_blog'=>$article_blog ,
                'message' => 'Article Blog Added Successfully',
            ]);   
     }

       public function edit($id)
    {
        $article_blog = ArticleBlog::find($id);

        if ($article_blog)
        {
            return response()->json([
                'status' => 200,
                'article_blog' => $article_blog,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Posts Found',
            ]);
        }

    }

    public function update(Request $request,$id){

             $post=ArticleBlog::find($id);

          

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
        $article_blog = ArticleBlog::find($id);
        $file=$article_blog->article_blog_image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $article_blog->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Blog Article deleted successfully',
            ]);

    
    }
}
