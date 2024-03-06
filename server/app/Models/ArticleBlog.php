<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleBlog extends Model
{
    public function comments()
    {
        return $this->hasMany(ArticleBlogComment::class)->with('commentuser:id,full_name,image,email'); // Include comment person's user fields in comments
    }
    
    public function category()
    {
        return $this->belongsTo(ArticleBlogCategory::class, 'category_id');
    }
    
    public function subcategory()
    {
        return $this->belongsTo(ArticleBlogSubCategory::class, 'subcategory_id');
    }
    
    public function user()
    {
        return $this->belongsTo(User::class, 'posted_by');
    }
    
    public function commentuser()
    {
        return $this->belongsTo(User::class, 'comment_person_id');
    }


    
}
