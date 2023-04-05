<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrganizationSetUp;
use Illuminate\Support\Facades\File;   
use Illuminate\Support\Facades\DB;
class OrganizationController extends Controller
{


    public function index(){

        $organization=OrganizationSetUp::all();
        return response()->json([
                'status' => 200,
                'organization'=>$organization,
                'message' => 'Orgnaization Added Successfully',
            ]); 
    }
      public function store(Request $request){
        // dd ($request->all());

            $post = new OrganizationSetUp();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $post->image =$filename ;
         } 


           $post->organization_name = $request->organization_name;
           $post->organization_address = $request->organization_address;
           // $post->job_sub_title = $request->job_sub_title;
           $post->district = $request->district;
           $post->thana = $request->thana;
           $post->post_code = $request->post_code;
           $post->est_date = $request->est_date;
           $post->founder_name = $request->founder_name;

           $post->current_chairman_name = $request->current_chairman_name;
           $post->current_director_name = $request->current_director_name;
           // $post->isPublished = $request->isPublished;
           // $post->isArchived = $request->isArchived;
           $post->support_person_name = $request->support_person_name;
           $post->support_person_no = $request->support_person_no;
           $post->website = $request->website;
            $post->save();


 return response()->json([
                'status' => 200,
                'message' => 'Orgnaization Added Successfully',
            ]);   
     }


            public function edit($id)
    {
    $post = OrganizationSetUp::find($id);

        if ($post)
        {
            return response()->json([
                'status' => 200,
                'post' => $post,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Posts Found',
            ]);
        }

    }
    public function update(Request $request,$id){

             $post=OrganizationSetUp::find($id);

          

  if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $post->image =$filename ;
         } 


           $post->organization_name = $request->organization_name;
           $post->organization_address = $request->organization_address;
           // $post->job_sub_title = $request->job_sub_title;
           $post->district = $request->district;
           $post->thana = $request->thana;
           $post->post_code = $request->post_code;
           $post->est_date = $request->est_date;
           $post->founder_name = $request->founder_name;

           $post->current_chairman_name = $request->current_chairman_name;
           $post->current_director_name = $request->current_director_name;
           // $post->isPublished = $request->isPublished;
           // $post->isArchived = $request->isArchived;
           $post->support_person_name = $request->support_person_name;
           $post->support_person_no = $request->support_person_no;
           $post->website = $request->website;
            $post->update();
 return response()->json([
                'status' => 200,
                'message' => 'Orgnaization Updated Successfully',
            ]);   
    }




            public function destroy($id)
    {
        $post = OrganizationSetUp::find($id);
        $file=$post->image;
        $filename = public_path().'/images/'.$file;
        File::delete($filename);

        $post->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Orgnaization deleted successfully',
            ]);

    
    }

}
