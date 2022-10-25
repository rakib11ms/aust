<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPost extends Model
{
    use HasFactory;
         public function jobPost(){
        return $this->belongsTo('App\Models\User','posted_by')->select('*');
    }
}
