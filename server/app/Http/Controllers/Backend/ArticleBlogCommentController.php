<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ArticleBlogComment;
class ArticleBlogCommentController extends Controller
{
     public function saveArticleBlogComment(Request $request){
        $article_blog_comments = new ArticleBlogComment();
        $article_blog_comments->article_blog_id=$request->article_blog_id;
        $article_blog_comments->comment_person_id=$request->comment_person_id;
        $article_blog_comments->comments=$request->comments;
        $article_blog_comments->save();

        return response()->json([
            'status' => 200,
            'data'=>$article_blog_comments,
            'message' => 'Comment added successful',
        ]);
     }
}
