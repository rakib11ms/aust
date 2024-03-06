<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AusstaEvent extends Model
{
    use HasFactory;
         public function EventImage() {
        return $this->hasMany('App\Models\EventMultipleImage','event_id');
    }
       public function UserName()
    {
        return $this->belongsTo('App\Models\User','posted_by')->select('id','full_name');
    }

   public function EventType()
    {
        return $this->belongsTo('App\Models\AusttaEventType','event_type_id');
    }
 // AusstaEvent.php



    
}
