<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaBatch;
use Illuminate\Support\Facades\Validator;
class AusttaaBatchController extends Controller
{
   public function index()
    {
        $total_batch = AusttaaBatch::orderBy('id', 'desc')->get()->count();

        $batch_name = AusttaaBatch::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'total_batch' => $total_batch,

            'batch_name' => $batch_name,
        
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'batch_name' => 'required|unique:austtaa_batches',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $batch_name = new AusttaaBatch();


        $batch_name->batch_name = $request->batch_name;
        $batch_name->created_by = auth('sanctum')->user()->id;
        $batch_name->save();

        $total_batch = AusttaaBatch::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_batch' => $total_batch,
            'message' => 'batch_name Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $batch_name = AusttaaBatch::find($id);

        if ($batch_name) {
            return response()->json([
                'status' => 200,
                'batch_name' => $batch_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No batch_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_batch_name = AusttaaBatch::find($id);




        $update_batch_name->batch_name = $request->batch_name;
        $update_batch_name->updated_by = $request->updated_by;

        $update_batch_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'batch_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $batch_name = AusttaaBatch::find($id);


        $batch_name->delete();
            $batch_name = AusttaaBatch::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'batch_name'=>$batch_name,
            'message' => 'batch_name deleted successfully',
        ]);
    }
}
