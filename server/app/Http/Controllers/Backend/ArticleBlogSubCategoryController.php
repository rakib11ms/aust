<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ArticleBlogSubCategory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class ArticleBlogSubCategoryController extends Controller
{
    public function index()
    {
        // $total_category = ArticleBlogSubCategory::orderBy('id', 'desc')->get()->count();

        $category = DB::table('article_blog_sub_categories')->leftJoin('article_blog_categories', 'article_blog_categories.id', '=', 'article_blog_sub_categories.category_id',)->select('article_blog_sub_categories.*', 'article_blog_categories.category_name')->orderBy('article_blog_sub_categories.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_category' => $total_category,

            'category' => $category
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'subcategory_name' => 'required|unique:article_blog_sub_categories',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $category = new ArticleBlogSubCategory();


        $category->subcategory_name = $request->subcategory_name;
        $category->category_id = $request->category_id;
        $category->created_by = auth('sanctum')->user()->id;
        $category->save();

        // $total_category = ArticleBlogSubCategory::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            // 'total_category' => $total_category,
            'message' => 'SubCategory Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $category = ArticleBlogSubCategory::find($id);

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

        $update_category = ArticleBlogSubCategory::find($id);




        $update_category->subcategory_name = $request->subcategory_name;
        $update_category->category_id = $request->category_id;

        $update_category->updated_by = $request->updated_by;

        $update_category->update();

        return response()->json([
            'status' => 200,
            'message' => 'SubCategory Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $category = ArticleBlogSubCategory::find($id);


        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'SubCategory deleted successfully',
        ]);
    }
}
