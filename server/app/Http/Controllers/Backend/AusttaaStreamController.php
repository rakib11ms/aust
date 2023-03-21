<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaaStream;
use Illuminate\Support\Facades\Validator;
class AusttaaStreamController extends Controller
{
    public function index()
    {
        $total_stream_name = AusttaaStream::orderBy('id', 'asc')->get()->count();

        $stream_name = AusttaaStream::orderBy('stream_name', 'asc')->get();

        return response()->json([
            'status' => 200,
            'total_stream_name' => $total_stream_name,

            'stream_name' => $stream_name,
        
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'stream_name' => 'required|unique:austtaa_streams',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $stream_name = new AusttaaStream();


        $stream_name->stream_name = $request->stream_name;
        $stream_name->created_by = auth('sanctum')->user()->id;
        $stream_name->save();

        $total_stream_name = AusttaaStream::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_stream_name' => $total_stream_name,
            'message' => 'stream_name Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $stream_name = AusttaaStream::find($id);

        if ($stream_name) {
            return response()->json([
                'status' => 200,
                'stream_name' => $stream_name,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No stream_name Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_stream_name = AusttaaStream::find($id);




        $update_stream_name->stream_name = $request->stream_name;
        $update_stream_name->updated_by = $request->updated_by;

        $update_stream_name->update();

        return response()->json([
            'status' => 200,
            'message' => 'stream_name Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $stream_name = AusttaaStream::find($id);


        $stream_name->delete();
            $stream_name = AusttaaStream::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => 200,
            'stream_name'=>$stream_name,
            'message' => 'stream_name deleted successfully',
        ]);
    }
}
