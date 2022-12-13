<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VlogCategory;
use Illuminate\Support\Facades\Validator;
class VlogCategoryController extends Controller
{
     public function index()
    {
        $total_categories = VlogCategory::orderBy('id', 'desc')->get()->count();

        $category = VlogCategory::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'total_categories' => $total_categories,

            'category' => $category
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'category_name' => 'required|unique:vlog_categories',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $category = new VlogCategory();


        $category->category_name = $request->category_name;
        $category->save();

        $total_categories = VlogCategory::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_categories' => $total_categories,
            'message' => 'Vlog Category Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $category = VlogCategory::find($id);

        if ($category) {
            return response()->json([
                'status' => 200,
                'category' => $category,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No category Found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $update_category = VlogCategory::find($id);




        $update_category->category_name = $request->category_name;

        $update_category->update();

        return response()->json([
            'status' => 200,
            'message' => 'Vlog Category Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $category = VlogCategory::find($id);


        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Vlog Category deleted successfully',
        ]);
    }
}
