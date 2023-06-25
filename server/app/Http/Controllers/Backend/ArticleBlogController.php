<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ArticleBlog;
use App\Models\BlogArticleMultipleImage;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class ArticleBlogController extends Controller
{
    public function index()
    {
                $blog='blog';
                $article='article';

                $total_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->where('article_blog_categories.category_name','like','%' .$blog.'%')->count();

     $total_articles=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->where('article_blog_categories.category_name','like','%' .$article.'%')->count();


             $active_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('isPublished',1)->where('isArchived',0)->where('article_blog_categories.category_name','Blog')->orderBy('article_blogs.id','desc')->get();

              $active_articles=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('isPublished',1)->where('isArchived',0)->where('article_blog_categories.category_name','Article')->orderBy('article_blogs.id','desc')->get();

           $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->orderBy('article_blogs.id','desc')->get();
        return response()->json([
           'status' => 200,
             'active_blogs'=>$active_blogs,
             'active_articles'=>$active_articles,
'total_blogs'=>$total_blogs,
'total_articles'=>$total_articles,
            'article_blogs' => $article_blogs
         ]);
    }





      public function store(Request $request){
        // dd ($request->all());

            $article_blog = new ArticleBlog();
         //       if($request->hasFile('article_blog_image')){
         //    $file=$request->file('article_blog_image');
         //    $extension=$file->getClientOriginalExtension();
         //    $filename=time().'.'.$extension;
         //    $file->move('images/',$filename);
         //    $article_blog->article_blog_image =$filename ;
         // } 



           $article_blog->category_id = $request->category_id;
           $article_blog->subcategory_id = $request->subcategory_id;
           $article_blog->isPublished = $request->isPublished;
           $article_blog->article_blog_title = $request->article_blog_title;
           $article_blog->isDraft = $request->isDraft;
           $article_blog->posted_by =auth('sanctum')->user()->id;
           $article_blog->updated_by = auth('sanctum')->user()->id;
           $article_blog->article_blog_description = $request->article_blog_description;

            $article_blog->save();

            foreach ($request->file('image') as $image) {

            $upload_image_name = time() . $image->getClientOriginalName();
            $image->move('images/', $upload_image_name);

            $article_blog_multiple_image=new BlogArticleMultipleImage();
            $article_blog_multiple_image->blog_article_id=$article_blog->id;
            $article_blog_multiple_image->image=$upload_image_name;
            $article_blog_multiple_image->save();
       
        }

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
        $article_blog_images=BlogArticleMultipleImage::where('blog_article_id',$id)->get();


        if ($article_blog)
        {
            return response()->json([
                'status' => 200,
                'article_blog' => $article_blog,
                'article_blog_images'=>$article_blog_images
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Posts Found',
            ]);
        }

    }

    public function update(Request $request,$id){

             $article_blog=ArticleBlog::find($id);

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
           $article_blog->posted_by = auth('sanctum')->user()->id;
           $article_blog->updated_by =auth('sanctum')->user()->id;
            $article_blog->isDraft = $request->isDraft;

           $article_blog->article_blog_description = $request->article_blog_description;
           $article_blog->isArchived = $request->isArchived;
           $article_blog->isPublished = $request->isPublished;

            $article_blog->update();

                $count = ArticleBlog::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'article_blog'=>$article_blog ,
                'message' => 'Article Blog Updated Successfully',
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


//filtering web tab  (article blogs table)////



    public function articleBlogfilterByStatus($name){
      

                if($name=='all'){
         $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.isDraft',0)->orderBy('article_blogs.id','desc')->get();
        return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
        else if($name==1){
        $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.isPublished',1)->where('article_blogs.isDraft',0)->where('article_blogs.isArchived',0)->orderBy('article_blogs.id','desc')->get();
       return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,

            ]);
        }
        else if($name==0){
              $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.isPublished',0)->where('article_blogs.isDraft',0)->orderBy('article_blogs.id','desc')->get();

   return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
            else if($name=='archive'){
               $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.isPublished',0)->where('article_blogs.isArchived',1)->orderBy('article_blogs.id','desc')->get();


   return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
      

                else if($name=='draft'){
               $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.isDraft',1)->where('article_blogs.isPublished',0)->where('posted_by',auth('sanctum')->user()->id)->orderBy('article_blogs.id','desc')->get();


   return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
    }

  function articleBlogfilterBySearchInputRadioButton($searchInputValue,$searchRadioButtonValue){

           if($searchRadioButtonValue=='categoryType'){
    
        $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blog_categories.category_name','like','%' .$searchInputValue . '%')->orderBy('article_blogs.id','desc')->get();

        return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
        else if($searchRadioButtonValue=='postTitle'){
     


           $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('article_blogs.article_blog_title','like','%' .$searchInputValue . '%')->orderBy('article_blogs.id','desc')->get();


       return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,

            ]);
        }
        else if($searchRadioButtonValue=='userName'){
                  $posts=DB::table('posts')->leftJoin('post_types','post_types.id','=','posts.post_type')->select('posts.*','post_types.id as post_type_id','post_types.type_name as post_type_name')->where('isArchived',0)->where('isPublished',0)->orderBy('posts.id','desc')->get(); 

                  $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->where('users.full_name','like','%' .$searchInputValue . '%')->orderBy('article_blogs.id','desc')->get();

   return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
        else{
                      $article_blogs=DB::table('article_blogs')->leftJoin('article_blog_categories','article_blog_categories.id','=','article_blogs.category_id',)->leftJoin('article_blog_sub_categories','article_blog_sub_categories.id','=','article_blogs.subcategory_id')->leftJoin('users','users.id','=','article_blogs.posted_by')->select('article_blogs.*','article_blog_categories.category_name','article_blog_sub_categories.subcategory_name','users.full_name')->orderBy('article_blogs.id','desc')->get(); 
        return response()->json([
                'status' => 200,
                'article_blogs' => $article_blogs,
            ]);
        }
     }











    public function deleteMultipleArticleBlogs($ids){
 
    $array=explode (",", $ids); 


    $article_blogs=ArticleBlog::whereIn('id',$array)->get();


        foreach($article_blogs as $image){
            if(File::exists('images/'.$image->article_blog_image)){
                File::delete('images/'.$image->article_blog_image);
            }
        }
  $deletes=ArticleBlog::whereIn('id',$array)->delete();

      return response()->json([
                'status' => 200,
                // 'deletes'=>  $deletes,
                'message' => ' Article Blogs deleted successfully',
            ]);
}

public function deleteArticleBlogsMultipleImage($id){
 $article_blogs = BlogArticleMultipleImage::find($id);

        $file=$article_blogs->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);
        $article_blogs->delete();

              return response()->json([
            'status' => 200,
            'message' => 'article_blogs Image deleted successfully',
        ]);
}

          

}
