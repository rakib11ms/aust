<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;
class RoleNameController extends Controller
{
    public function index(){

           $role=Role::all();

              return response()->json([
           'status' => 200,
        
            'role' => $role,
         ]);
    }
          public function store(Request $request){

            $role = new Role();
         
           $role->name = $request->name;   
            $role->save();


 return response()->json([
                'status' => 200,
                 'role'=>$role,
           
            ]);   
     }


            public function edit($id)
    {
        $vlog = Vlog::find($id);

        if ($vlog)
        {
            return response()->json([
                'status' => 200,
                'vlog' => $vlog,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No vlogs Found',
            ]);
        }

    }

      public function update(Request $request,$id){

             $role=Role::find($id);
                $role->name = $request->name;

            $role->update();

 return response()->json([
                'status' => 200,
                'message' => 'Role Updated Successfully',
            ]);   
    }




       public function destroy($id)
    {
        $role = Role::find($id);
        $role->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Role deleted successfully',
            ]);

    
    }
}
