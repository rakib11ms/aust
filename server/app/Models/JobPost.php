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
    public function user()
    {
        return $this->belongsTo(User::class, 'posted_by');
    }
    public function JobType()
    {
        return $this->belongsTo(JobType::class, 'job_type');
    }
    public function JobSector()
    {
        return $this->belongsTo(AusttaaJobSector::class, 'job_sector');
    }
    public function JobSubSector()
    {
        return $this->belongsTo(AusttaaJobSubSector::class, 'job_sub_sector');
    }


}
