<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder{
    public function run() {
        DB::table('users')->insert(
            [
                'id' => 0,
                'firstname' => 'Guest',
                'lastname' => 'User',
                'username' => 'guest',
                'auth' => 'local',
                'email' => 'guest@rmady.com',
                'password' => bcrypt('guest'),
                'created_at' => new \DateTime()
            ]
        );

        DB::table('users')->insert(
            [
                'id' => 1,
                'firstname' => 'Admin',
                'lastname' => 'User',
                'username' => 'admin',
                'auth' => 'local',
                'email' => 'admin@rmady.com',
                'password' => bcrypt('admin'),
                'created_at' => new \DateTime()
            ]
        );

        DB::table('users')->insert(
            [
                'id' => 2,
                'firstname' => 'Student',
                'lastname' => 'User',
                'username' => 'student',
                'auth' => 'local',
                'email' => 'student@rmady.com',
                'password' => bcrypt('student'),
                'created_at' => new \DateTime()
            ]
        );


        DB::table('users')->insert(
            [
                'id' => 3,
                'firstname' => 'Rodrigo',
                'lastname' => 'Mady',
                'username' => 'rmady',
                'auth' => 'local',
                'email' => 'rmady@rmady.com',
                'password' => bcrypt('rmady'),
                'created_at' => new \DateTime()
            ]
        );

    }
}