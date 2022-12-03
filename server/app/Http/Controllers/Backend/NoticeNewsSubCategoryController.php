<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NoticeNewsSubCategory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class NoticeNewsSubCategoryController extends Controller
{
     public function index()
    {
        // $total_category = NoticeNewsSubCategory::orderBy('id', 'desc')->get()->count();

        $category = DB::table('notice_news_sub_categories')->leftJoin('notice_news_categories', 'notice_news_categories.id', '=', 'notice_news_sub_categories.category_id',)->select('notice_news_sub_categories.*', 'notice_news_categories.category_name')->orderBy('notice_news_sub_categories.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_category' => $total_category,

            'category' => $category
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'subcategory_name' => 'required|unique:notice_news_sub_categories',
        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{

        $category = new NoticeNewsSubCategory();


        $category->subcategory_name = $request->subcategory_name;
        $category->category_id = $request->category_id;
        $category->created_by = auth('sanctum')->user()->id;
        $category->save();

        // $total_category = NoticeNewsSubCategory::orderBy('id', 'desc')->get()->count();

        return response()->json([
            'status' => 200,
            // 'total_category' => $total_category,
            'message' => 'SubCategory Added Successfully',
        ]);
    }
}


    public function edit($id)
    {
        $category = NoticeNewsSubCategory::find($id);

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

        $update_category = NoticeNewsSubCategory::find($id);




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
        $category = NoticeNewsSubCategory::find($id);


        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'SubCategory deleted successfully',
        ]);
    }
//dependent sub categories based on category id dropdown web

       public function getAllSubCatByCategoryId($id){
          $category = DB::table('notice_news_sub_categories')->leftJoin('notice_news_categories', 'notice_news_categories.id', '=', 'notice_news_sub_categories.category_id',)->select('notice_news_sub_categories.*', 'notice_news_categories.category_name')->
          where('category_id',$id)->orderBy('notice_news_sub_categories.id', 'desc')->get();

        return response()->json([
            'status' => 200,
            // 'total_category' => $total_category,

            'sub_categories' => $category
        ]);
       }
}
