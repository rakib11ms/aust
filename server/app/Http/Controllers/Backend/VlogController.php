<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vlog;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class VlogController extends Controller
{


    public function index(){

           $vlog=DB::table('vlogs')->leftJoin('vlog_categories','vlog_categories.id','=','vlogs.category_id',)->leftJoin('users','users.id','=','vlogs.created_by')->select('vlogs.*','vlog_categories.category_name','users.full_name')->orderBy('vlogs.id','desc')->get();

              return response()->json([
           'status' => 200,
        
            'vlog' => $vlog,
         ]);
    }
          public function store(Request $request){
        // dd ($request->all());

            $vlog = new Vlog();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $vlog->image =$filename ;
         } 



           $vlog->streaming_link = $request->streaming_link;
           $vlog->vlog_title = $request->vlog_title;
           $vlog->category_id = $request->category_id;
           $vlog->created_by = $request->created_by;
        
            $vlog->save();

                $count = Vlog::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                 'job_info'=>$vlog ,
                'message' => 'Vlog Added Successfully',
            ]);   
     }



       public function destroy($id)
    {
        $vlog = Vlog::find($id);
        $file=$vlog->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $vlog->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Vlog deleted successfully',
            ]);

    
    }
}
