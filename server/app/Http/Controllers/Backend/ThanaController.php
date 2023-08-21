<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Thana;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ThanaController extends Controller
{

    public function index()
    {
        $thana_name = Thana::orderBy('thana_name', 'asc')
            ->get();

        $total_thana = $thana_name->count();

        return response()->json([
            'status' => 200,
            'total_thana' => $total_thana,
            'thana_name' => $thana_name,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'thana_name' => [
                'required',
                'unique:thanas',
                'regex:/^[A-Z][a-z]+$/',
            ],
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        } else {
            $thana_name = new Thana();
            $thana_name->thana_name = Str::ucfirst($request->thana_name); // Capitalize the first letter
            // $thana_name->created_by = auth('sanctum')->user()->id;
            $thana_name->save();
    
            $total_thana = Thana::orderBy('id', 'desc')->get()->count();
    
            return response()->json([
                'status' => 200,
                'total_thana' => $total_thana,
                'message' => 'thana_name Added Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $thana_name = Thana::find($id);

        if ($thana_name) {
            return response()->json([
                'status' => 200,
                'thana_name' => $thana_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No thana_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_thana_name = Thana::find($id);




        $update_thana_name->thana_name = $request->thana_name;
        $update_thana_name->updated_by = $request->updated_by;

        $update_thana_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'thana_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $thana_name = Thana::find($id);


        $thana_name->delete();
        $thana_name = Thana::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'thana_name' => $thana_name,
            'message' => 'thana_name deleted successfully',
        ]);
    }
}