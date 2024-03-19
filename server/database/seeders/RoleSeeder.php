<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;


class RoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


        $roles = [
            'Admin',
            'Moderator',
            'Alumni',            
         
        ];

        foreach ($roles as $role) {
            Role::create(["name" => $role]);
        }
    }
}
