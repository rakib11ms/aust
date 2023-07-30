<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
// use Spatie\Permission\Models\Role;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     public function userPost() {
        return $this->hasMany('App\Models\Post','posted_by')->where('isPublished','=', 1)->where('isArchived','=',0)->orderBy('id','DESC');
    }
     public function jobPost() {
        return $this->hasMany('App\Models\JobPost','posted_by')->where('isPublished','=', 1)->where('isArchived','=',0)->orderBy('id','DESC');
    }
     public function professionalInfo() {
        return $this->hasMany('App\Models\UserProfessionalInfo','user_id')->with('companyName');
    }
     public function educationalInfo()
    {
        return $this->hasOne('App\Models\UserEducationalInfo','user_id');
    }
       public function bloodGroup()
    {
        return $this->belongsTo('App\Models\AusttaaBloodGroup','blood_group');
    }
      public function streamName()
    {
        return $this->belongsTo('App\Models\AusttaaStream','stream');
    }
      public function batchName()
    {
        return $this->belongsTo('App\Models\AusttaaBatch','batch');
    }
   public function jobSectorName()
    {
        return $this->belongsTo('App\Models\AusttaaJobSector','job_sector');
    }
      public function jobSubSectorName()
    {
        return $this->belongsTo('App\Models\AusttaaJobSubSector','job_sub_sector');
    }


   // public function roles()
   //  {
   //      return $this->belongsToMany(Role::class, 'name');
   //  }

}
