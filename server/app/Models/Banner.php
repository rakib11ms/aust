<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

       public function BannerImage() {
        return $this->hasMany('App\Models\BannerMultipleImage','banner_id');
    }
       public function UserName()
    {
        return $this->belongsTo('App\Models\User','posted_by')->select('id','full_name');
    }
}
