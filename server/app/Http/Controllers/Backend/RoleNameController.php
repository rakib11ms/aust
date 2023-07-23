<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
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

    public function getAllRoles(){
        $all_roles=Role::all();
          return response()->json(
        [
            'status'=>200,
            'all_roles'=>$all_roles
        ]);
      }

      // Assign permissions to the role

public function assignPermissionViaRole(Request $request,$id){
    $role=Role::where('id',$id)->first();
    $permissions=$request->all();
    $result = [];

// Loop through the object and extract keys with value true
foreach ($permissions as $key => $value) {
    if ($value === true) {
        $result[] = $key;
    }
}

$permissions = Permission::whereIn('name', $result)->get();
$role->syncPermissions($permissions);

  return response()->json(
    [
        'status'=>200,
        'message'=>'Assigned Permission via role successfully',
        'permissions'=>$permissions
    ]);
}
public function getPermissionViaRole($id){
    $role=Role::where('id',$id)->first();
$permissions=$role->permissions->pluck('name');

  return response()->json(
    [
        'status'=>200,
        'permissions'=>$permissions,
        'role'=>$role
    ]);
}
    
}
