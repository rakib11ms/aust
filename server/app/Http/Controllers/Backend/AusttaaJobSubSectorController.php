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
        // $total_job_sub_sector = AusttaaJobSubSector::orderBy('id', 'desc')->get()->count();

        $job_sub_sector = DB::table('austtaa_job_sub_sectors')->leftJoin('austtaa_job_sectors', 'austtaa_job_sectors.id', '=', 'austtaa_job_sub_sectors.job_sector_id',)->select('austtaa_job_sub_sectors.*', 'austtaa_job_sub_sectors.job_sub_sector_name')->orderBy('austtaa_job_sub_sectors.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_job_sub_sector' => $total_job_sub_sector,

            'job_sub_sector' => $job_sub_sector
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
        $job_sub_sector->job_sector_id = $request->job_sector_id;
        $job_sub_sector->created_by = auth('sanctum')->user()->id;
        $job_sub_sector->save();

        // $total_job_sub_sector = AusttaaJobSubSector::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            // 'total_job_sub_sector' => $total_job_sub_sector,
            'message' => 'Subjob_sub_sector Added Successfully',
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
        $update_job_sub_sector->job_sector_id = $request->job_sector_id;

        $update_job_sub_sector->updated_by = $request->updated_by;

        $update_job_sub_sector->update();

        return response()->json([
            'status' => 200,
            'message' => 'Subjob_sub_sector Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $job_sub_sector = AusttaaJobSubSector::find($id);


        $job_sub_sector->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Subjob_sub_sector deleted successfully',
        ]);
    }
//dependent sub categories based on job_sub_sector id dropdown web

       public function getAllSubCatByCatId($id){
          $job_sub_sector = DB::table('austtaa_job_sub_sectors')->leftJoin('austtaa_job_sectors', 'austtaa_job_sectors.id', '=', 'austtaa_job_sub_sectors.job_sector_id',)->select('austtaa_job_sub_sectors.*', 'austtaa_job_sectors.job_sub_sector_name')->
          where('job_sector_id',$id)->orderBy('austtaa_job_sub_sectors.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_job_sub_sector' => $total_job_sub_sector,

            'sub_categories' => $job_sub_sector
        ]);
       }
}
