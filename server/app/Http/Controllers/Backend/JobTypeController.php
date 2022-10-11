<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobType;
use Illuminate\Support\Facades\Validator;

class JobTypeController extends Controller
{
    public function index()
    {
        $count = JobType::orderBy('id', 'desc')->get()->count();

        $job_type = JobType::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'count' => $count,

            'job_type' => $job_type
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type_name' => 'required|unique:job_types',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $job_type = new JobType();


        $job_type->type_name = $request->type_name;
        $job_type->save();

        $count = JobType::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'count' => $count,
            'message' => 'Job Type Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $job_type = JobType::find($id);

        if ($job_type) {
            return response()->json([
                'status' => 200,
                'job_type' => $job_type,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No job_type Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_job_type = JobType::find($id);




        $update_job_type->type_name = $request->type_name;

        $update_job_type->update();

        return response()->json([
            'status' => 200,
            'message' => 'Job Type Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $job_type = JobType::find($id);


        $job_type->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Job Type deleted successfully',
        ]);
    }
}
