<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\JobPost;
use App\Models\Post;
use App\Models\Advertisement;
use DB;
class DashboardHomeController extends Controller
{
    public function totalStatus(){
            $total_users=User::get()->count();
            $total_advertisements=Advertisement::get()->count();
            $total_Jobs=JobPost::get()->count();
            $total_posts=Post::get()->count();

                return response()->json([
                    'status' => 200,
                    'total_users' => $total_users,
                    'total_advertisements' => $total_advertisements,
                    'total_Jobs' => $total_Jobs,
                    'total_posts' => $total_posts,
                   
                ]);
   }
}
