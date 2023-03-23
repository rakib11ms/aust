<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoticeNews extends Model
{
    use HasFactory;
         public function NoticeNewsImage() {
        return $this->hasMany('App\Models\NoticeNewsMultipleImage','notice_news_id');
    }

           public function UserName()
    {
        return $this->belongsTo('App\Models\User','posted_by')->select('id','full_name');
    }

   public function NoticeNewsCategory()
    {
        return $this->belongsTo('App\Models\NoticeNewsCategory','category_id');
    }
     public function NoticeNewsSubCategory()
    {
        return $this->belongsTo('App\Models\NoticeNewsSubCategory','subcategory_id');
    }
}
