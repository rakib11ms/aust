<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaBloodGroup;
use Illuminate\Support\Facades\Validator;
class AusttaaBloodGroupController extends Controller
{
    public function index()
    {
        $total_blood_group = AusttaaBloodGroup::orderBy('id', 'desc')->get()->count();

        $blood_group_name = AusttaaBloodGroup::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'total_blood_group' => $total_blood_group,

            'blood_group_name' => $blood_group_name,
        
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'blood_group_name' => 'required|unique:austtaa_blood_groups',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $blood_group_name = new AusttaaBloodGroup();


        $blood_group_name->blood_group_name = $request->blood_group_name;
        $blood_group_name->created_by = auth('sanctum')->user()->id;
        $blood_group_name->save();

        $total_blood_group = AusttaaBloodGroup::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_blood_group' => $total_blood_group,
            'message' => 'blood_group_name Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $blood_group_name = AusttaaBloodGroup::find($id);

        if ($blood_group_name) {
            return response()->json([
                'status' => 200,
                'blood_group_name' => $blood_group_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No blood_group_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_blood_group_name = AusttaaBloodGroup::find($id);




        $update_blood_group_name->blood_group_name = $request->blood_group_name;
        $update_blood_group_name->updated_by = $request->updated_by;

        $update_blood_group_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'blood_group_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $blood_group_name = AusttaaBloodGroup::find($id);


        $blood_group_name->delete();
            $blood_group_name = AusttaaBloodGroup::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'blood_group_name'=>$blood_group_name,
            'message' => 'blood_group_name deleted successfully',
        ]);
    }
}
