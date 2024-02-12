<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleBlogComment extends Model
{
    use HasFactory;
    public function commentuser()
    {
        return $this->belongsTo(User::class, 'comment_person_id');
    }
}
