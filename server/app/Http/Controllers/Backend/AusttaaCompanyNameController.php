<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaCompanyName;
use Illuminate\Support\Facades\Validator;
class AusttaaCompanyNameController extends Controller
{
     public function index()
    {
        $total_company_name = AusttaaCompanyName::orderBy('id', 'desc')->get()->count();

        $company_name = AusttaaCompanyName::orderBy('company_name', 'asc')->get();
        $company_name_asc = AusttaaCompanyName::orderBy('company_name', 'asc')->get();


        return response()->json([
            'status' => 200,
            'total_company_name' => $total_company_name,

            'company_name' => $company_name,
            'company_name_asc'=>$company_name_asc
        
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'company_name' => 'required|unique:austtaa_company_names',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $company_name = new AusttaaCompanyName();


        $company_name->company_name = $request->company_name;
        $company_name->created_by = auth('sanctum')->user()->id;
        $company_name->save();

        $total_company_name = AusttaaCompanyName::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_company_name' => $total_company_name,
            'message' => 'company_name Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $company_name = AusttaaCompanyName::find($id);

        if ($company_name) {
            return response()->json([
                'status' => 200,
                'company_name' => $company_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No company_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_company_name = AusttaaCompanyName::find($id);




        $update_company_name->company_name = $request->company_name;
        $update_company_name->updated_by = $request->updated_by;

        $update_company_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'company_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $company_name = AusttaaCompanyName::find($id);


        $company_name->delete();
            $company_name = AusttaaCompanyName::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'company_name'=>$company_name,
            'message' => 'company_name deleted successfully',
        ]);
    }
}
