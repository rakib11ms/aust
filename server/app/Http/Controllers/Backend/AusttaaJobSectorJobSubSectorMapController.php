<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaJobSectorJobSubSectorMap;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class AusttaaJobSectorJobSubSectorMapController extends Controller
{
     public function index(){
          $all_mapping_job_sectors = DB::table('austtaa_job_sector_job_sub_sector_maps')->leftJoin('austtaa_job_sectors', 'austtaa_job_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sector_id',)->
          leftJoin('austtaa_job_sub_sectors', 'austtaa_job_sub_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sub_sector_id',)->select('austtaa_job_sector_job_sub_sector_maps.*', 'austtaa_job_sectors.job_sector_name','austtaa_job_sub_sectors.job_sub_sector_name')->orderBy('austtaa_job_sector_job_sub_sector_maps.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_job_sub_sectors' => $total_job_sub_sectors,

            'all_mapping_job_sectors' => $all_mapping_job_sectors
        ]);
       }

    




       public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            // 'job_sub_sector_name' => 'required|unique:austtaa_job_sub_sectors',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $job_sector = new AusttaaJobSectorJobSubSectorMap();


        $job_sector->job_sector_id = $request->job_sector_id;
        $job_sector->job_sub_sector_id = $request->job_sub_sector_id;
        $job_sector->created_by = 1;
        $job_sector->save();

        $total_job_sub_sector = AusttaaJobSectorJobSubSectorMap::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_job_sub_sector' => $total_job_sub_sector,
            'message' => 'Job Sector Map Added Successfully',
        ]);
    }
}



public function edit($id){
        $edit_job_sec_map = AusttaaJobSectorJobSubSectorMap::find($id);
      return response()->json([
            'status' => 200,
            'edit_job_sec_map' => $edit_job_sec_map,
        ]);
}


    public function update(Request $request, $id)
    {

        $job_sector = AusttaaJobSectorJobSubSectorMap::find($id);


       $job_sector->job_sector_id = $request->job_sector_id;
        $job_sector->job_sub_sector_id = $request->job_sub_sector_id;
        $job_sector->updated_by = 2;
        $job_sector->save();

        $job_sector->update();

        return response()->json([
            'status' => 200,
            'message' => 'Job Sector Map Updated Successfully',
        ]);
    }
    public function destroy($id)
    {
        $job_sec_map = AusttaaJobSectorJobSubSectorMap::find($id);


        $job_sec_map->delete();
        $all_mapping_job_sectors = DB::table('austtaa_job_sector_job_sub_sector_maps')->leftJoin('austtaa_job_sectors', 'austtaa_job_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sector_id',)->
          leftJoin('austtaa_job_sub_sectors', 'austtaa_job_sub_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sub_sector_id',)->select('austtaa_job_sector_job_sub_sector_maps.*', 'austtaa_job_sectors.job_sector_name','austtaa_job_sub_sectors.job_sub_sector_name')->orderBy('austtaa_job_sector_job_sub_sector_maps.id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'all_mapping_job_sectors' => $all_mapping_job_sectors,

            'message' => 'Job Sector Map deleted successfully',
        ]);
    }


//dependent sub categories based on category id dropdown web

       public function getAllSubByJobSectorId($id){
          $job_sub_sectors = DB::table('austtaa_job_sector_job_sub_sector_maps')->leftJoin('austtaa_job_sectors', 'austtaa_job_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sector_id',)->
          leftJoin('austtaa_job_sub_sectors', 'austtaa_job_sub_sectors.id', '=', 'austtaa_job_sector_job_sub_sector_maps.job_sub_sector_id',)->select('austtaa_job_sector_job_sub_sector_maps.*', 'austtaa_job_sectors.*','austtaa_job_sub_sectors.*')->
          where('austtaa_job_sector_job_sub_sector_maps.job_sector_id',$id)->orderBy('austtaa_job_sector_job_sub_sector_maps.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_job_sub_sectors' => $total_job_sub_sectors,

            'job_sub_sectors' => $job_sub_sectors
        ]);
       }

}
