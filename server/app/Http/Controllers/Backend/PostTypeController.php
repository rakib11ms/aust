<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PostType;
use Illuminate\Support\Facades\Validator;

class PostTypeController extends Controller
{
    public function index()
    {
        $count = PostType::orderBy('id', 'desc')->get()->count();

        $post_type = PostType::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'count' => $count,

            'post_type' => $post_type
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type_name' => 'required|unique:post_types',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $post_type = new PostType();


        $post_type->type_name = $request->type_name;
        $post_type->created_by = $request->created_by;
        $post_type->mapping_user =implode(",",$request->mapping_user);


        $post_type->save();

        $count = PostType::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'count' => $count,
            'message' => 'Post Type Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $post_type = PostType::find($id);

        if ($post_type) {
            return response()->json([
                'status' => 200,
                'post_type' => $post_type,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No post_type Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_post_type = PostType::find($id);




        $update_post_type->type_name = $request->type_name;

        $update_post_type->update();

        return response()->json([
            'status' => 200,
            'message' => 'Post Type Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $post_type = PostType::find($id);


        $post_type->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Post Type deleted successfully',
        ]);
    }
}
