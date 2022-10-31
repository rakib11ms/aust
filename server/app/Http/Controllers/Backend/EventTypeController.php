<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AusttaEventType;
use Illuminate\Support\Facades\Validator;
class EventTypeController extends Controller
{
    public function index()
    {
        $total_event_types = AusttaEventType::orderBy('id', 'desc')->get()->count();

        $event_type = AusttaEventType::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'total_event_types' => $total_event_types,

            'event_type' => $event_type
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'event_type_name' => 'required|unique:austta_event_types',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $event_type = new AusttaEventType();


        $event_type->event_type_name = $request->event_type_name;
        $event_type->save();

        $total_event_types = AusttaEventType::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_event_types' => $total_event_types,
            'message' => 'Event Type Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $event_type = AusttaEventType::find($id);

        if ($event_type) {
            return response()->json([
                'status' => 200,
                'event_type' => $event_type,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No event_type Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_event_type = AusttaEventType::find($id);




        $update_event_type->event_type_name = $request->event_type_name;

        $update_event_type->update();

        return response()->json([
            'status' => 200,
            'message' => 'Event Type Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $event_type = AusttaEventType::find($id);


        $event_type->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Event Type deleted successfully',
        ]);
    }
}
