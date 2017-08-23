<?php

use Illuminate\Database\Seeder;
use Cybertron\User;
use Cybertron\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin  = Role::where('name', 'admin')->first();
        $user = new User();
        $user->name = 'Jeancarlos';
        $user->first_last_name = 'De La Cruz';
        $user->second_last_name = 'Criollo';
        $user->username = 'jdelacruz';
        $user->email = 'jdelacruz@sapia.com.pe';
        $user->password = bcrypt('jdelacruz');
        $user->status_id = '1';
        $user->id_job = '13';
        $user->save();
        $user->roles()->attach($role_admin);
        $user2 = new User();
        $user2->name = 'Katherine';
        $user2->first_last_name = 'Carrasco';
        $user2->second_last_name = 'La Rosa';
        $user2->username = 'kcarrasco';
        $user2->email = 'kcarrasco@sapia.com.pe';
        $user2->password = bcrypt('kcarrasco');
        $user2->status_id = '1';
        $user2->id_job = '3';
        $user2->save();
        $user2->roles()->attach($role_admin);
        $user3 = new User();
        $user3->name = 'Edward';
        $user3->first_last_name = 'Calle';
        $user3->second_last_name = 'Jarez';
        $user3->username = 'ecalle';
        $user3->email = 'ecalle@sapia.com.pe';
        $user3->password = bcrypt('ecalle');
        $user3->status_id = '1';
        $user3->id_job = '11';
        $user3->save();
        $user3->roles()->attach($role_admin);
    }
}
