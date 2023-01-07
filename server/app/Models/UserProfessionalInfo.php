<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfessionalInfo extends Model
{
    use HasFactory;
    public function companyName() {
        return $this->belongsTo('App\Models\AusttaaCompanyName','name_of_company');
    }
}
