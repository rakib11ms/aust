<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaJobSector;
use Illuminate\Support\Facades\Validator;
class AusttaaJobSectorController extends Controller
{
    public function index()
    {
        $total_job_sector = AusttaaJobSector::orderBy('id', 'desc')->get()->count();

        $job_sector = AusttaaJobSector::orderBy('id', 'desc')->get();
        $job_sector_asc = AusttaaJobSector::orderBy('job_sector_name', 'asc')->get();

        return response()->json([
            'status' => 200,
            'total_job_sector' => $total_job_sector,

            'job_sector' => $job_sector,
            'job_sector_asc' => $job_sector_asc

        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'job_sector_name' => 'required|unique:austtaa_job_sectors',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $job_sector = new AusttaaJobSector();


        $job_sector->job_sector_name = $request->job_sector_name;
        $job_sector->created_by = auth('sanctum')->user()->id;
        $job_sector->save();

        $total_job_sector = AusttaaJobSector::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_job_sector' => $total_job_sector,
            'message' => 'job_sector Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $job_sector = AusttaaJobSector::find($id);

        if ($job_sector) {
            return response()->json([
                'status' => 200,
                'job_sector' => $job_sector,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No job_sector Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_job_sector = AusttaaJobSector::find($id);




        $update_job_sector->job_sector_name = $request->job_sector_name;
        $update_job_sector->updated_by = $request->updated_by;

        $update_job_sector->update();

        return response()->json([
            'status' => 200,
            'message' => 'job_sector Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $job_sector = AusttaaJobSector::find($id);


        $job_sector->delete();
        return response()->json([
            'status' => 200,
            'message' => 'job_sector deleted successfully',
        ]);
    }
}
