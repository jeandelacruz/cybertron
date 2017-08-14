<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_user = Role::where('name', 'user')->first();
        $role_admin  = Role::where('name', 'admin')->first();
        $user = new User();
        $user->name = 'User';
        $user->last_name = 'Name';
        $user->username = 'usertest';
        $user->email = 'User@example.com';
        $user->password = bcrypt('usertest');
        $user->save();
        $user->roles()->attach($role_user);
        $admin = new User();
        $admin->name = 'Admin';
        $admin->last_name = 'Name';
        $admin->username = 'sapiatest';
        $admin->email = 'Admin@example.com';
        $admin->password = bcrypt('sapiatest');
        $admin->save();
        $admin->roles()->attach($role_admin);
    }
}
