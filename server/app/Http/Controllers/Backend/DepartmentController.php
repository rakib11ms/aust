<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;
use Illuminate\Support\Facades\Validator;

class DepartmentController extends Controller
{
    public function index()
    {
        $total_departments = Department::orderBy('id', 'desc')->get()->count();

        $department = Department::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'total_departments' => $total_departments,

            'department' => $department
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'department_name' => 'required|unique:departments',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $department = new Department();


        $department->department_name = $request->department_name;
        $department->save();

        $total_departments = Department::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_departments' => $total_departments,
            'message' => 'Department Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $department = Department::find($id);

        if ($department) {
            return response()->json([
                'status' => 200,
                'department' => $department,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No department Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_department = Department::find($id);




        $update_department->department_name = $request->department_name;

        $update_department->update();

        return response()->json([
            'status' => 200,
            'message' => 'Department Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $department = Department::find($id);


        $department->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Department deleted successfully',
        ]);
    }
}
