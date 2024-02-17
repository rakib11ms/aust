<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ArticleBlogComment;

class ArticleBlogCommentController extends Controller
{
    public function saveArticleBlogComment(Request $request)
    {
        $article_blog_comments = new ArticleBlogComment();
        $article_blog_comments->article_blog_id = $request->article_blog_id;
        $article_blog_comments->comment_person_id = $request->comment_person_id;
        $article_blog_comments->comments = $request->comments;
        $article_blog_comments->save();

        return response()->json([
            'status' => 200,
            'data' => $article_blog_comments,
            'message' => 'Comment added successful',
        ]);
    }

    public function editArticleBlogComment($id)
    {
        $find_article_blog = ArticleBlogComment::find($id);

        return response()->json([
            "status" => 200,
            "article_blog_id" => $find_article_blog
        ]);
    }

    public function updateArticleBlogComment(Request $request, $id)
    {
        $articleBlogComment = ArticleBlogComment::findOrFail($id);
    
        $articleBlogComment->fill([
            'article_blog_id' => $request->input('article_blog_id', $articleBlogComment->article_blog_id),
            'comments' => $request->input('comments', $articleBlogComment->comments),
            'comment_person_id' => auth('sanctum')->user()->id,
        ]);
    
        $articleBlogComment->save();
    
        return response()->json(['status'=>200,'data'=>$articleBlogComment,'message' => 'Article blog comment updated successfully']);
    }
    
    public function deleteArticleBlogComment($id)
    {
        $articleBlogComment = ArticleBlogComment::findOrFail($id);
        $articleBlogComment->delete();
    
        return response()->json(['status'=>200,'message' => 'Article blog comment deleted successfully']);
    }
    

}
