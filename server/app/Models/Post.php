<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

      protected $fillable = [
        'post_title',
        'post_type',
        'post_description',
        'posted_by',
        'date',
        'isPublished',
        'image',
        'tag'
    ];

       public function userPost() {
        return $this->belongsTo('App\Models\User','posted_by')->select('*');
    }
}
