<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    use HasFactory;

       public function AdvertisementImage() {
        return $this->hasMany('App\Models\AdvertisementMultipleImage','advertisement_id');
    }
       public function UserName()
    {
        return $this->belongsTo('App\Models\User','posted_by')->select('id','full_name');
    }
}
