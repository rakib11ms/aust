<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NoticeNewsCategory;
use Illuminate\Support\Facades\Validator;
class NoticeNewsCategoryController extends Controller
{
     public function index()
    {
        $total_category = NoticeNewsCategory::orderBy('id', 'desc')->get()->count();

        $category = NoticeNewsCategory::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'total_category' => $total_category,

            'category' => $category
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'category_name' => 'required|unique:article_blog_categories',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $category = new NoticeNewsCategory();


        $category->category_name = $request->category_name;
        $category->created_by = auth('sanctum')->user()->id;
        $category->save();

        $total_category = NoticeNewsCategory::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            'total_category' => $total_category,
            'message' => 'Category Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $category = NoticeNewsCategory::find($id);

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

        $update_category = NoticeNewsCategory::find($id);




        $update_category->category_name = $request->category_name;
        $update_category->updated_by = $request->updated_by;

        $update_category->update();

        return response()->json([
            'status' => 200,
            'message' => 'Category Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $category = NoticeNewsCategory::find($id);


        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Category deleted successfully',
        ]);
    }
}
