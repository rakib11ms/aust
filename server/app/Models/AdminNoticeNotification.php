<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\DatabaseNotification;
use App\Models\User;

class AdminNoticeNotification extends DatabaseNotification
{
    use HasFactory;
            public function users(){

return $this->belongsTo(User::class, 'notifiable_id');

}
}