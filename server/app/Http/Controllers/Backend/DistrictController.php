<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\District;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class DistrictController extends Controller
{
            public function index()
        {
            $district_name = District::orderBy('district_name', 'asc')
                ->get();
    
            $total_district = $district_name->count();
    
            return response()->json([
                'status' => 200,
                'total_district' => $total_district,
                'district_name' => $district_name,
            ]);
        }
    
        public function store(Request $request)
        {
            $validator = Validator::make($request->all(), [
                'district_name' => [
                    'required',
                    'unique:districts',
                    // 'regex:/^[A-Z][a-z]+$/',
                ],
            ]);
        
            if ($validator->fails()) {
                return response()->json([
                    'status' => 400,
                    'errors' => $validator->messages(),
                ]);
            } else {
                $district_name = new District();
                $district_name->district_name = Str::ucfirst($request->district_name); // Capitalize the first letter
                // $district_name->created_by = auth('sanctum')->user()->id;
                $district_name->save();
        
                $total_district = District::orderBy('id', 'desc')->get()->count();
        
                return response()->json([
                    'status' => 200,
                    'total_district' => $total_district,
                    'message' => 'district_name Added Successfully',
                ]);
            }
        }
    
        public function edit($id)
        {
            $district_name = District::find($id);
    
            if ($district_name) {
                return response()->json([
                    'status' => 200,
                    'district_name' => $district_name,
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No district_name Found',
                ]);
            }
        }
    
        public function update(Request $request, $id)
        {
    
            $update_district_name = District::find($id);
    
    
    
    
            $update_district_name->district_name = $request->district_name;
            $update_district_name->updated_by = $request->updated_by;
    
            $update_district_name->update();
    
            return response()->json([
                'status' => 200,
                'message' => 'district_name Updated Successfully',
            ]);
        }
    
        public function destroy($id)
        {
            $district_name = District::find($id);
    
    
            $district_name->delete();
            $district_name = District::orderBy('id', 'desc')->get();
    
            return response()->json([
                'status' => 200,
                'district_name' => $district_name,
                'message' => 'district_name deleted successfully',
            ]);
        }
    }

