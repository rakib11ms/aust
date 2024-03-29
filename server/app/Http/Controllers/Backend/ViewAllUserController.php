<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use DateTime;
use App\Mail\EventMail;
use App\Models\AusstaEvent;
use App\Mail\ResetPassword;
use App\Models\UserEducationalInfo;
use App\Models\UserProfessionalInfo;
use Spatie\Permission\Models\Role;
use File;
use ZipArchive;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;



class ViewAllUserController extends Controller
{

    public function allUsers()
    {
        $all_users = [];

        User::orderBy('created_at', 'desc')
            ->chunk(200, function ($users) use (&$all_users) {
                foreach ($users as $user) {
                    $user->load(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles', 'jobSectorName', 'jobSubSectorName']);
                    $all_users[] = $user;
                }
            });

        // Reverse the order of $all_users array
        // $all_users = array_reverse($all_users);

        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }


    public function editUser($id)
    {
        $edit_user = User::with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->where('id', $id)->first();


        return response()->json([
            'status' => 200,
            'edit_user' => $edit_user
        ]);
    }


    public function multipleFilterSearchAllUsers(Request $request)
    {
        $query = User::with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles', 'jobSectorName', 'jobSubSectorName']);

        // dd($company);

        if ($request->gender !== null) {
            $query->where('gender', $request->gender);
        }
        if ($request->batch !== null) {
            $batch = $request->batch;
            $query->orWhereHas('batchName', function ($q) use ($batch) {
                $q->where('batch_name', $batch);
            });
        }

        if ($request->stream !== null) {
            $stream = $request->stream;
            $query->orWhereHas('streamName', function ($q) use ($stream) {
                $q->where('stream_name', $stream);
            });
        }

        if ($request->blood !== null) {
            $blood = $request->blood;
            $query->orWhereHas('bloodGroup', function ($q) use ($blood) {
                $q->where('blood_group_name', $blood);
            });
        }


        if ($request->company !== null) {
            $company = $request->company;
            // dd($company);

            $query->orWhereHas('professionalInfo', function ($q) use ($company) {
                $q->whereHas('companyName', function ($qs) use ($company) {
                    $qs->where('company_name', $company);
                });
            });
        }

        if ($request->jobsector !== null) {
            $jobsector = $request->jobsector;

            $query->orWhereHas('jobSectorName', function ($q) use ($jobsector) {
                $q->where('job_sector_name', $jobsector);
            });
        }



        if ($request->subsector !== null) {
            $subsector = $request->subsector;
            $query->orWhereHas('jobSubSectorName', function ($q) use ($subsector) {
                $q->where('job_sub_sector_name', $subsector);
            });
        }

        if ($request->thana !== null) {
            $query->where('thana', $request->thana);
        }

        $all_users = $query->get();

        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }


    //multiple advance search from mobile (advance filtering for users data)

    public function multipleFilterAdvanceSearchAllUsers(Request $request)
    {
        $query = User::with(['professionalInfo', 'bloodGroup', 'streamName', 'educationalInfo', 'batchName', 'jobSectorName', 'jobSubSectorName']);

        if ($request->option == "office") {

            if ($request->full_name !== null) {
                $full_name = $request->full_name;
                $query->where("full_name", 'like', '%' . $full_name . '%')->orWhere("nick_name", 'like', '%' . $full_name . '%');

            }
            if ($request->university_id !== null) {
                $university_id = $request->university_id;
                $query->where("university_id", $university_id);
            }
            if ($request->batch !== null) {
                $batch = $request->batch;
                $query->whereHas('batchName', function ($q) use ($batch) {
                    $q->where('batch_name', $batch);
                });
            }
            if ($request->stream !== null) {
                $stream = $request->stream;
                $query->whereHas('streamName', function ($q) use ($stream) {
                    $q->where('stream_name', $stream);
                });
            }
            if ($request->blood !== null) {
                $blood = $request->blood;
                $query->orWhereHas('bloodGroup', function ($q) use ($blood) {
                    $q->where('blood_group_name', $blood);
                });
            }
            if ($request->jobsector !== null) {
                $jobsector = $request->jobsector;

                $query->whereHas('jobSectorName', function ($q) use ($jobsector) {
                    $q->where('job_sector_name', $jobsector);
                });
            }
            if ($request->company !== null) {
                $company = $request->company;
                // dd($company);

                $query->wereHas('professionalInfo', function ($q) use ($company) {
                    $q->whereHas('companyName', function ($qs) use ($company) {
                        $qs->where('company_name', $company);
                    });
                });
            }


            if ($request->subsector !== null) {
                $subsectors = explode(",", $request->subsector);
                $query->whereHas('jobSubSectorName', function ($q) use ($subsectors) {
                    $q->whereIn('job_sub_sector_name', $subsectors);
                });
            }
            if ($request->thana !== null) {
                $thana = $request->thana;

                $query->whereHas('professionalInfo', function ($q) use ($thana) {
                    $q->where('office_address', 'like', '%' . $thana . '%');
                });
            }
            if ($request->district !== null) {
                $district = $request->district;

                $query->whereHas('professionalInfo', function ($q) use ($district) {
                    $q->where('office_address', 'like', '%' . $district . '%');
                });
            }
            if ($request->postal_code !== null) {
                $postal_code = $request->postal_code;

                $query->whereHas('professionalInfo', function ($q) use ($postal_code) {
                    $q->where('office_address', 'like', '%' . $postal_code . '%');
                });
            }

            $all_users = $query->get();

            return response()->json([
                'status' => 200,
                'all_users' => $all_users
            ]);

        } else if ($request->option == "present") {
            if ($request->full_name !== null) {
                $full_name = $request->full_name;
                $query->where("full_name", 'like', '%' . $full_name . '%')->orWhere("nick_name", 'like', '%' . $full_name . '%');
            }
            if ($request->university_id !== null) {
                $university_id = $request->university_id;
                $query->where("university_id", $university_id);
            }
            if ($request->batch !== null) {
                $batch = $request->batch;
                $query->whereHas('batchName', function ($q) use ($batch) {
                    $q->where('batch_name', $batch);
                });
            }
            if ($request->stream !== null) {
                $stream = $request->stream;
                $query->whereHas('streamName', function ($q) use ($stream) {
                    $q->where('stream_name', $stream);
                });
            }
            if ($request->blood !== null) {
                $blood = $request->blood;
                $query->orWhereHas('bloodGroup', function ($q) use ($blood) {
                    $q->where('blood_group_name', $blood);
                });
            }
            if ($request->jobsector !== null) {
                $jobsector = $request->jobsector;

                $query->whereHas('jobSectorName', function ($q) use ($jobsector) {
                    $q->where('job_sector_name', $jobsector);
                });
            }
            if ($request->company !== null) {
                $company = $request->company;
                // dd($company);

                $query->wereHas('professionalInfo', function ($q) use ($company) {
                    $q->whereHas('companyName', function ($qs) use ($company) {
                        $qs->where('company_name', $company);
                    });
                });
            }

            if ($request->subsector !== null) {
                $subsectors = explode(",", $request->subsector);
                $query->whereHas('jobSubSectorName', function ($q) use ($subsectors) {
                    $q->whereIn('job_sub_sector_name', $subsectors);
                });
            }

            if ($request->thana !== null) {
                $query->where('present_address', 'like', '%' . $request->thana);
            }
            if ($request->district !== null) {
                $query->where('present_address', 'like', '%' . $request->district);
            }
            if ($request->postal_code !== null) {
                $query->where('present_address', 'like', '%' . $request->postal_code);
            }
            $all_users = $query->get();

            return response()->json([
                'status' => 200,
                'all_users' => $all_users
            ]);

        } else if ($request->option == "permanent") {
            if ($request->full_name !== null) {
                $full_name = $request->full_name;
                $query->where("full_name", 'like', '%' . $full_name . '%')->orWhere("nick_name", 'like', '%' . $full_name . '%');
            }
            if ($request->university_id !== null) {
                $university_id = $request->university_id;
                $query->where("university_id", $university_id);
            }
            if ($request->batch !== null) {
                $batch = $request->batch;
                $query->whereHas('batchName', function ($q) use ($batch) {
                    $q->where('batch_name', $batch);
                });
            }
            if ($request->stream !== null) {
                $stream = $request->stream;
                $query->whereHas('streamName', function ($q) use ($stream) {
                    $q->where('stream_name', $stream);
                });
            }
            if ($request->blood !== null) {
                $blood = $request->blood;
                $query->orWhereHas('bloodGroup', function ($q) use ($blood) {
                    $q->where('blood_group_name', $blood);
                });
            }
            if ($request->jobsector !== null) {
                $jobsector = $request->jobsector;

                $query->whereHas('jobSectorName', function ($q) use ($jobsector) {
                    $q->where('job_sector_name', $jobsector);
                });
            }
            if ($request->company !== null) {
                $company = $request->company;
                // dd($company);

                $query->wereHas('professionalInfo', function ($q) use ($company) {
                    $q->whereHas('companyName', function ($qs) use ($company) {
                        $qs->where('company_name', $company);
                    });
                });
            }

            if ($request->subsector !== null) {
                $subsectors = explode(",", $request->subsector);
                $query->whereHas('jobSubSectorName', function ($q) use ($subsectors) {
                    $q->whereIn('job_sub_sector_name', $subsectors);
                });
            }
            if ($request->thana !== null) {
                $query->where('permanent_address', 'like', '%' . $request->thana);
            }
            if ($request->district !== null) {
                $query->where('permanent_address', 'like', '%' . $request->district);
            }
            if ($request->postal_code !== null) {
                $query->where('permanent_address', 'like', '%' . $request->postal_code);
            }
            $all_users = $query->get();

            return response()->json([
                'status' => 200,
                'all_users' => $all_users
            ]);
        }

    }



    public function userGlobalSearch($name)
    {
        $all_users = User::with('roles')
            ->where('full_name', 'LIKE', '%' . $name . '%')
            ->orWhere('email', 'LIKE', '%' . $name . '%')
            ->orWhere('nick_name', 'LIKE', '%' . $name . '%')
            ->orWhere('phone_no', 'LIKE', '%' . $name . '%')
            ->orWhere('gender', 'LIKE', '%' . $name . '%')
            ->orWhere('present_address', 'LIKE', '%' . $name . '%')
            ->orWhere('permanent_address', 'LIKE', '%' . $name . '%')
            ->with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName'])
            ->orWhereHas('bloodGroup', function ($q) use ($name) {
                $q->where('blood_group_name', 'LIKE', '%' . $name . '%');
            })
            ->orWhereHas('streamName', function ($q) use ($name) {
                $q->where('stream_name', 'LIKE', '%' . $name . '%');
            })
            ->orWhereHas('professionalInfo', function ($q) use ($name) {
                $q->whereHas('companyName', function ($qs) use ($name) {
                    $qs->where('company_name', 'LIKE', '%' . $name . '%');
                })->orWhere('office_address', 'LIKE', '%' . $name . '%');

            })->get();

        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }



    //current location based search (mobile)

    public function userLocationSearch($name)
    {
        $all_users = User::where('present_address', 'Like', '%' . $name . '%')->orWhere('permanent_address', 'Like', '%' . $name . '%')->orWhere('thana', 'Like', '%' . $name . '%')->with(['roles', 'professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName'])->orWhereHas('professionalInfo', function ($q) use ($name) {
            $q->where('office_address', $name);
        })->get();
        return response()->json([
            'status' => 200,
            'all_users' => $all_users
        ]);
    }
    public function userRoleFiltering($name)
    {

        if ($name == "All") {
            $all_users = User::with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->where('status', 'active')->orderBy('created_at', 'desc')->get();
            return response()->json([
                'status' => 200,
                'all_users' => $all_users,

            ]);
        } else if ($name == 'Admin') {
            $all_users = User::where('status', 'active')->orderBy('created_at', 'desc')->with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->whereHas('roles', function ($q) use ($name) {
                $q->where('name', $name);
            })->get();

            return response()->json([
                'status' => 200,
                'all_users' => $all_users,

            ]);

        } else if ($name == 'Alumni') {
            $all_users = User::where('status', 'active')->orderBy('created_at', 'desc')->with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->whereHas('roles', function ($q) use ($name) {
                $q->where('name', $name);
            })->get();
            return response()->json([
                'status' => 200,
                'all_users' => $all_users,

            ]);
        } else if ($name == 'Moderator') {
            $all_users = User::where('status', 'active')->orderBy('created_at', 'desc')->with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->whereHas('roles', function ($q) use ($name) {
                $q->where('name', $name);
            })->get();
            return response()->json([
                'status' => 200,
                'all_users' => $all_users,

            ]);
        }

        //        else if($name=='Staff'){
        //  $all_users=User::where('status','active')->orderBy('created_at','desc')->with(['professionalInfo','educationalInfo','bloodGroup','streamName','batchName','roles'])->whereHas('roles',function($q) use($name){
        //     $q->where('name','Like','%'.$name.'%');
        // })->get();
        //        return response()->json([
        //     'status'=>200,
        //     'all_users'=>$all_users,

        // ]);
        //     }
        else if ($name == 'Pending') {
            $all_users = User::with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles'])->where('status', 'pending')->orderBy('created_at', 'desc')->get();
            return response()->json([
                'status' => 200,
                'all_users' => $all_users,

            ]);
        }
    }


    // public function exportUserExcel($name)
    // {
    //     if ($name == "All") {
    //         $all_users = DB::table('users')->leftJoin('austtaa_batches', 'users.batch', '=', 'austtaa_batches.id')->leftJoin('austtaa_blood_groups', 'users.blood_group', '=', 'austtaa_blood_groups.id')->leftJoin('austtaa_streams', 'users.stream', '=', 'austtaa_streams.id')->leftJoin('austtaa_job_sectors', 'users.job_sector', '=', 'austtaa_job_sectors.id')->leftJoin('austtaa_job_sub_sectors', 'users.job_sub_sector', '=', 'austtaa_job_sub_sectors.id')->select('users.id', 'users.full_name', 'users.bio', 'users.nick_name', 'users.email', 'users.office_email', 'users.phone_no', 'users.user_role', 'users.gender', 'austtaa_blood_groups.blood_group_name', 'austtaa_batches.batch_name', 'austtaa_streams.stream_name', 'austtaa_job_sectors.job_sector_name', 'austtaa_job_sub_sectors.job_sub_sector_name', 'users.thana', 'users.present_address', 'users.permanent_address', 'users.user_role', 'users.thana')->get();
    //         return response()->json([
    //             'status' => 200,
    //             'all_users' => $all_users,

    //         ]);
    //     } else if ($name == 'Alumni') {
    //         $all_users = DB::table('users')->leftJoin('austtaa_batches', 'users.batch', '=', 'austtaa_batches.id')->leftJoin('austtaa_blood_groups', 'users.blood_group', '=', 'austtaa_blood_groups.id')->leftJoin('austtaa_streams', 'users.stream', '=', 'austtaa_streams.id')->leftJoin('austtaa_job_sectors', 'users.job_sector', '=', 'austtaa_job_sectors.id')->leftJoin('austtaa_job_sub_sectors', 'users.job_sub_sector', '=', 'austtaa_job_sub_sectors.id')->where('users.user_role', 'Alumni')->select('users.id', 'users.full_name', 'users.bio', 'users.nick_name', 'users.email', 'users.office_email', 'users.phone_no', 'users.user_role', 'users.gender', 'austtaa_blood_groups.blood_group_name', 'austtaa_batches.batch_name', 'austtaa_streams.stream_name', 'austtaa_job_sectors.job_sector_name', 'austtaa_job_sub_sectors.job_sub_sector_name', 'users.thana', 'users.present_address', 'users.permanent_address', 'users.user_role', 'users.thana')->get();
    //         return response()->json([
    //             'status' => 200,
    //             'all_users' => $all_users,

    //         ]);
    //     } else if ($name == 'Admin') {
    //         $all_users = DB::table('users')->leftJoin('austtaa_batches', 'users.batch', '=', 'austtaa_batches.id')->leftJoin('austtaa_blood_groups', 'users.blood_group', '=', 'austtaa_blood_groups.id')->leftJoin('austtaa_streams', 'users.stream', '=', 'austtaa_streams.id')->leftJoin('austtaa_job_sectors', 'users.job_sector', '=', 'austtaa_job_sectors.id')->leftJoin('austtaa_job_sub_sectors', 'users.job_sub_sector', '=', 'austtaa_job_sub_sectors.id')->where('users.user_role', 'Admin')->select('users.id', 'users.full_name', 'users.bio', 'users.nick_name', 'users.email', 'users.office_email', 'users.phone_no', 'users.user_role', 'users.gender', 'austtaa_blood_groups.blood_group_name', 'austtaa_batches.batch_name', 'austtaa_streams.stream_name', 'austtaa_job_sectors.job_sector_name', 'austtaa_job_sub_sectors.job_sub_sector_name', 'users.thana', 'users.present_address', 'users.permanent_address', 'users.user_role', 'users.thana')->get();
    //         return response()->json([
    //             'status' => 200,
    //             'all_users' => $all_users,

    //         ]);
    //     } else if ($name == 'Staff') {
    //         $all_users = DB::table('users')->leftJoin('austtaa_batches', 'users.batch', '=', 'austtaa_batches.id')->leftJoin('austtaa_blood_groups', 'users.blood_group', '=', 'austtaa_blood_groups.id')->leftJoin('austtaa_streams', 'users.stream', '=', 'austtaa_streams.id')->leftJoin('austtaa_job_sectors', 'users.job_sector', '=', 'austtaa_job_sectors.id')->leftJoin('austtaa_job_sub_sectors', 'users.job_sub_sector', '=', 'austtaa_job_sub_sectors.id')->where('users.user_role', 'Staff')->select('users.id', 'users.full_name', 'users.bio', 'users.nick_name', 'users.email', 'users.office_email', 'users.phone_no', 'users.user_role', 'users.gender', 'austtaa_blood_groups.blood_group_name', 'austtaa_batches.batch_name', 'austtaa_streams.stream_name', 'austtaa_job_sectors.job_sector_name', 'austtaa_job_sub_sectors.job_sub_sector_name', 'users.thana', 'users.present_address', 'users.permanent_address', 'users.user_role', 'users.thana')->get();
    //         return response()->json([
    //             'status' => 200,
    //             'all_users' => $all_users,

    //         ]);
    //     } else if ($name == 'Moderator') {
    //         $all_users = DB::table('users')->leftJoin('austtaa_batches', 'users.batch', '=', 'austtaa_batches.id')->leftJoin('austtaa_blood_groups', 'users.blood_group', '=', 'austtaa_blood_groups.id')->leftJoin('austtaa_streams', 'users.stream', '=', 'austtaa_streams.id')->leftJoin('austtaa_job_sectors', 'users.job_sector', '=', 'austtaa_job_sectors.id')->leftJoin('austtaa_job_sub_sectors', 'users.job_sub_sector', '=', 'austtaa_job_sub_sectors.id')->where('users.user_role', 'Moderator')->select('users.id', 'users.full_name', 'users.bio', 'users.nick_name', 'users.email', 'users.office_email', 'users.phone_no', 'users.user_role', 'users.gender', 'austtaa_blood_groups.blood_group_name', 'austtaa_batches.batch_name', 'austtaa_streams.stream_name', 'austtaa_job_sectors.job_sector_name', 'austtaa_job_sub_sectors.job_sub_sector_name', 'users.thana', 'users.present_address', 'users.permanent_address', 'users.user_role', 'users.thana')->get();
    //         return response()->json([
    //             'status' => 200,
    //             'all_users' => $all_users,

    //         ]);
    //     }


    // }



    public function exportUserExcel()
    {
        // $all_users = [];

        // User::orderBy('created_at', 'desc')
        //     ->chunk(200, function ($users) use (&$all_users) {
        //         foreach ($users as $user) {
        //             $user->load(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles', 'jobSectorName', 'jobSubSectorName', 'Thana', 'District', 'Postcode']);

        //             // Map professional info dynamically for multiple companies
        //             $professional_info = $user->professionalInfo->map(function ($info) {
        //                 return [
        //                     'Company' => optional($info->company_name)->company_name ?? "",
        //                     'Designation' => optional($info)->designation ?? "",
        //                     'Year' => optional($info)->year ?? "",
        //                 ];
        //             })->toArray();

        //             // Flatten the professional info and include in the user details array
        //             $user_details = [
        //                 'Id' => $user->id,
        //                 'Full Name' => $user->full_name,
        //                 'Nick Name' => $user->nick_name,
        //                 'Email' => $user->email,
        //                 'Office Email' => $user->office_email,
        //                 'Phone No' => $user->phone_no,
        //                 'Batch' => optional($user->batchName)->batch_name ?? "",
        //                 'University Id' => $user->university_id,
        //                 'Blood Group' => optional($user->bloodGroup)->blood_group_name ?? "",
        //                 'Stream' => optional($user->streamName)->stream_name ?? "",
        //                 'Job Sector' => optional($user->jobSectorName)->job_sector_name ?? "",
        //                 'Job Sub Sector' => optional($user->jobSubSectorName)->job_sub_sector_name ?? "",
        //                 'Role' => $user->user_role,
        //                 'Present Address' => $user->present_address,
        //                 'Permanent Address' => $user->permanent_address,
        //                 'Thana' => optional($user->Thana)->thana_name ?? "",
        //                 'District' => optional($user->District)->district_name ?? "",
        //                 'Postal Code' => optional($user->Postcode)->postal_code_name ?? "",
        //                 "SSC Grade" => optional($user->educationalInfo)->ssc_grade ?? "",
        //                 "SSC Division" => optional($user->educationalInfo)->ssc_division ?? "",
        //                 "SSC Passing Year" => optional($user->educationalInfo)->ssc_passing_year ?? "",
        //                 "SSC Institution" => optional($user->educationalInfo)->ssc_institution ?? "",


        //                 // Include flattened professional info directly in the user details array
        //                 ...collect($professional_info)->flatMap(function ($info, $index) {
        //                     return [
        //                         "Company" . ($index + 1) => $info['Company'],
        //                         "Designation" . ($index + 1) => $info['Designation'],
        //                         "Year" . ($index + 1) => $info['Year'],
        //                     ];
        //                 })->toArray(),
        //                 'Created At'=>$user->created_at,
        //                 'Updated At'=>$user->updated_at,

        //                 // Add other fields as needed
        //             ];

        //             // Add the user details to the all_users array
        //             $all_users[] = $user_details;
        //         }
        //     });


        $allUsers = User::with(['professionalInfo', 'educationalInfo', 'bloodGroup', 'streamName', 'batchName', 'roles', 'jobSectorName', 'jobSubSectorName', 'Thana', 'District', 'Postcode'])->orderBy('created_at', 'desc')->get();

        // Prepare data for export
        $exportData = $allUsers->map(function ($user) {
            $professionalInfo = $user->professionalInfo->map(function ($info) {
                return [
                    'Company' => optional($info->company_name)->company_name ?? "",
                    'Designation' => optional($info)->designation ?? "",
                    'Year' => optional($info)->year ?? "",
                ];
            });

            return [
                'Id' => $user->id,
                'Full Name' => $user->full_name,
                'Nick Name' => $user->nick_name,
                'Email' => $user->email,
                'Office Email' => $user->office_email,
                'Phone No' => $user->phone_no,
                'Batch' => optional($user->batchName)->batch_name ?? "",
                'University Id' => $user->university_id,
                'Blood Group' => optional($user->bloodGroup)->blood_group_name ?? "",
                'Stream' => optional($user->streamName)->stream_name ?? "",
                'Job Sector' => optional($user->jobSectorName)->job_sector_name ?? "",
                'Job Sub Sector' => optional($user->jobSubSectorName)->job_sub_sector_name ?? "",
                'Role' => $user->user_role,
                'Present Address' => $user->present_address,
                'Permanent Address' => $user->permanent_address,
                'Thana' => optional($user->Thana)->thana_name ?? "",
                'District' => optional($user->District)->district_name ?? "",
                'Postal Code' => optional($user->Postcode)->postal_code_name ?? "",
                "SSC Grade" => optional($user->educationalInfo)->ssc_grade ?? "",
                "SSC Division" => optional($user->educationalInfo)->ssc_division ?? "",
                "SSC Passing Year" => optional($user->educationalInfo)->ssc_passing_year ?? "",
                "SSC Institution" => optional($user->educationalInfo)->ssc_institution ?? "",

                // Include flattened professional info directly in the user details array
                ...$professionalInfo->flatMap(function ($info, $index) {
                    return [
                        "Company" . ($index + 1) => $info['Company'],
                        "Designation" . ($index + 1) => $info['Designation'],
                        "Year" . ($index + 1) => $info['Year'],
                    ];
                })->toArray(),
                'Created At' => $user->created_at,
                'Updated At' => $user->updated_at,
            ];
        });


        // Add more fields to the response as needed
        return response()->json([
            'status' => 200,
            'all_users' => $exportData,
            // Additional response data if necessary
        ]);



    }

    //role change with password revoke


    public function roleChangeUserRequest(Request $request)
    {
        $admin_change = User::where('id', $request->user_id)->first();

        if (Hash::check($request->password, $admin_change->password)) {
            $role_change = User::where('id', $request->change_user_id)->first();
            $role_change->roles()->detach();


            $role_change->assignRole($request->change_role_name);


            return response()->json([
                'message' => "Role Changed Successfully",
                'status' => 200,
            ]);
        } else if (!$admin_change || !Hash::check($request->password, $admin_change->password)) {
            return response()->json(
                [
                    'message' => "User Password doesn't match ! Denied",
                    'status' => 401,
                ]
            );
        }
    }

    // public function LocationThana(){
    //         $all_thana=User::orderBy('thana','asc')->whereNotNull('thana')->pluck('thana');
    //          return response()->json(
    //             [
    //                 'status' => 200,
    //                 'all_thana' =>$all_thana,
    //             ]
    //         );
    // }

    public function totalPendingActiveUsers()
    {
        $active_users = User::where('status', 'active')->get()->count();
        $pending_users = User::where('status', 'pending')->get()->count();

        return response()->json(
            [
                'status' => 200,
                'active_users' => $active_users,
                'pending_users' => $pending_users,
            ]
        );
    }



    public function deleteMultileUsers(Request $request, $ids)
    {
        $array = explode(",", $ids);

        $users = User::whereIn('id', $array)->get();

        foreach ($users as $key => $user) {
            $filename = public_path() . '/images/' . $user->image;
            File::delete($filename);
            $user->delete();
        }


        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'Users deleted successfully',
        ]);
    }

    public function getAllUsersPdf()
    {
        $pdfs = User::all();
        return response()->json([
            'status' => 200,
            'pdfs' => $pdfs,
        ]);
    }
    public function downloadZip()
    {
        $zip = new ZipArchive;

        $fileName = 'myNewFile.zip';

        if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE) {
            $files = File::files(public_path('cv'));

            foreach ($files as $key => $value) {
                $relativeNameInZipFile = basename($value);
                $zip->addFile($value, $relativeNameInZipFile);
            }

            $zip->close();
        }

        return response()->download(public_path($fileName));
    }


    public function generateAndZip()
    {
        // Fetch users with non-null cv_file
        $all_users = User::whereNotNull('cv_file')->get();
        // dd($all_users);

        // Define the ZIP file name and path
        $zipFileName = 'cv_documents.zip';
        $zipFilePath = public_path('cv/' . $zipFileName);

        // Create a new ZIP archive
        $zip = new ZipArchive();
        $zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE);

        foreach ($all_users as $user) {
            // dd($user);

            $cvFilePath = public_path('cv/' . $user->cv_file);

            // Check if the CV file exists before proceeding
            if (file_exists($cvFilePath)) {
                // dd($user);
                // Add the CV file to the ZIP archive
                $zip->addFile($cvFilePath, $user->cv_file);
            } else {
                // Handle the case where the file doesn't exist
                // Log or handle the error accordingly
                Log::error("CV file not found for user with ID {$user->id}");
            }
        }

        // Close the ZIP archive
        $zip->close();
        // Download the ZIP file and delete it after sending
        // Create a JSON response
        $jsonResponse = response()->json(["status" => 200, "message" => "Downloaded zip cv"]);

        // Send the JSON response and then initiate the file download
        return $jsonResponse->header('Content-Disposition', 'attachment; filename=' . $zipFileName)
            ->header('Content-Type', 'application/zip')
            ->header('Content-Length', filesize($zipFilePath))
            ->header('Connection', 'close')
            ->sendContent(file_get_contents($zipFilePath))
            ->deleteFileAfterSend(true);

    }


    public function activeUserByPending(Request $request, $ids)
    {


        $array = explode(",", $ids);


        User::whereIn('id', $array)
            ->update([
                'status' => $request->status,
                'created_at' => Carbon::now()->toDateTimeString(),

            ]);



        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'Users status changed successfully',
        ]);

    }

    public function updateUserPersonalInfo(Request $request, $id)
    {

        $user = User::find($id);

        //     if($request->hasFile('image')){
        //    $file=$request->file('image');
        //    $extension=$file->getClientOriginalExtension();
        //    $filename=time().'.'.$extension;
        //    $file->move('images/',$filename);
        //    $user->image =$filename ;
        // } 
        $user->full_name = $request->full_name;
        $user->nick_name = $request->nick_name;
        // $user->email = $request->email;
        // $user->user_role = $request->user_role;
        $user->batch = $request->batch;
        $user->phone_no = $request->phone_no;
        // $user->bio = $request->bio;
        // $user->blood_group = $request->blood_group;
        $user->gender = $request->gender;
        $user->stream = $request->stream;
        $user->job_sector = $request->job_sector;
        $user->job_sub_sector = $request->job_sub_sector;
        $user->office_email = $request->office_email;
        $user->thana = $request->thana;
        $user->district = $request->district;
        $user->postal_code = $request->postal_code;
        // $user->status = "pending";
        $user->university_id = $request->university_id;

        $user->present_address = $request->present_address;
        $user->permanent_address = $request->permanent_address;
        // $user->otp_verify = 0;
        // $user->password = Hash::make($request->password);
        // $user->confirm_password = Hash::make($request->confirm_password);
        // $user->assignRole($request->user_role);


        $user->facebook_link = $request->facebook_link;
        $user->twitter_link = $request->twitter_link;
        $user->linkedin_link = $request->linkedin_link;


        $user->update();


        $update_educational = UserEducationalInfo::where('user_id', $id)->first();
        $update_educational->user_id = $update_educational->user_id;
        $update_educational->ssc_passing_year = $request->ssc_passing_year;
        $update_educational->hsc_passing_year = $request->hsc_passing_year;
        $update_educational->bsc_passing_year = $request->bsc_passing_year;
        $update_educational->msc_passing_year = $request->msc_passing_year;
        $update_educational->ssc_grade = $request->ssc_grade;
        $update_educational->hsc_grade = $request->hsc_grade;
        $update_educational->bsc_grade = $request->bsc_grade;
        $update_educational->msc_grade = $request->msc_grade;
        $update_educational->ssc_institution = $request->ssc_institution;
        $update_educational->bsc_institution = $request->bsc_institution;
        $update_educational->hsc_institution = $request->hsc_institution;
        $update_educational->msc_institution = $request->msc_institution;
        $update_educational->update();


        return response()->json([
            'status' => 200,
            // 'deletes'=>  $deletes,
            'message' => 'User Info updated successfully',
        ]);

    }

    public function editUserProfessionalData($id)
    {
        $edit_user_professional = UserProfessionalInfo::with('companyName')->where('id', $id)->first();
        return response()->json([
            'status' => 200,
            'edit_user_professional' => $edit_user_professional,
        ]);
    }

    public function deleteUserByAdmin($id)
    {
        $user = User::findOrFail($id);
        $imagePath = public_path('images/' . $user->image);


        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $user->delete();

        return response()->json([
            'status' => 200,
            'message' => 'User Deleted successfully',
        ]);
    }
}