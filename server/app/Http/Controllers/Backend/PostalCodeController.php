<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PostalCode;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class PostalCodeController extends Controller
{
    public function index()
    {
        $postal_code_name = PostalCode::orderBy('postal_code_name', 'asc')
            ->get();

        $total_postal_code = $postal_code_name->count();

        return response()->json([
            'status' => 200,
            'total_postal_code' => $total_postal_code,
            'postal_code_name' => $postal_code_name,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'postal_code_name' => [
                'required',
                'unique:postal_codes',
                'regex:/^[A-Z][a-z]+$/',
            ],
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        } else {
            $postal_code_name = new PostalCode();
            $postal_code_name->postal_code_name = Str::ucfirst($request->postal_code_name); // Capitalize the first letter
            // $postal_code_name->created_by = auth('sanctum')->user()->id;
            $postal_code_name->save();
    
            $total_postal_code = PostalCode::orderBy('id', 'desc')->get()->count();
    
            return response()->json([
                'status' => 200,
                'total_postal_code' => $total_postal_code,
                'message' => 'postal_code_name Added Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $postal_code_name = PostalCode::find($id);

        if ($postal_code_name) {
            return response()->json([
                'status' => 200,
                'postal_code_name' => $postal_code_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No postal_code_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_postal_code_name = PostalCode::find($id);




        $update_postal_code_name->postal_code_name = $request->postal_code_name;
        $update_postal_code_name->updated_by = $request->updated_by;

        $update_postal_code_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'postal_code_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $postal_code_name = PostalCode::find($id);


        $postal_code_name->delete();
        $postal_code_name = PostalCode::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'postal_code_name' => $postal_code_name,
            'message' => 'postal_code_name deleted successfully',
        ]);
    }
}
