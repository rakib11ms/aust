<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaJobSubSector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class AusttaaJobSubSectorController extends Controller
{
      public function index()
    {
        $total_job_sub_sector = AusttaaJobSubSector::orderBy('id', 'asc')->get()->count();

        $job_sub_sector = AusttaaJobSubSector::orderBy('job_sub_sector_name', 'asc')->get();
 $job_sub_sector_asc = AusttaaJobSubSector::orderBy('job_sub_sector_name', 'asc')->get();
        return response()->json([
            'status' => 200,
            'total_job_sub_sector' => $total_job_sub_sector,

            'job_sub_sector' => $job_sub_sector,
            'job_sub_sector_asc' => $job_sub_sector_asc

        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'job_sub_sector_name' => 'required|unique:austtaa_job_sub_sectors',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $job_sub_sector = new AusttaaJobSubSector();


        $job_sub_sector->job_sub_sector_name = $request->job_sub_sector_name;
        $job_sub_sector->created_by = auth('sanctum')->user()->id;
        $job_sub_sector->save();

        $total_job_sub_sector = AusttaaJobSubSector::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_job_sub_sector' => $total_job_sub_sector,
            'message' => 'job_sub_sector Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $job_sub_sector = AusttaaJobSubSector::find($id);

        if ($job_sub_sector) {
            return response()->json([
                'status' => 200,
                'job_sub_sector' => $job_sub_sector,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No job_sub_sector Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_job_sub_sector = AusttaaJobSubSector::find($id);




        $update_job_sub_sector->job_sub_sector_name = $request->job_sub_sector_name;
        $update_job_sub_sector->updated_by = $request->updated_by;

        $update_job_sub_sector->update();

        return response()->json([
            'status' => 200,
            'message' => 'job_sub_sector Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $job_sub_sector = AusttaaJobSubSector::find($id);


        $job_sub_sector->delete();
        return response()->json([
            'status' => 200,
            'message' => 'job_sub_sector deleted successfully',
        ]);
    }
}
