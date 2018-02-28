<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class UserTest extends TestCase
{

    use DatabaseTransactions;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_create_user()
    {
        \App\User::create([
            'firstname' => 'Unit',
            'lastname' => 'User',
            'username' => 'unit',
            'auth' => 'local',
            'email' => 'unit@rmady.com',
            'password' => bcrypt(123456)
        ]);

        $this->assertDatabaseHas('users', ['firstname'=>'Unit', 'email' => 'unit@rmady.com']);
    }

    public function test_create_user_profile_fields()
    {
        $user = \App\User::create([
            'firstname' => 'Unit',
            'lastname' => 'User',
            'username' => 'unit',
            'auth' => 'local',
            'email' => 'unit@rmady.com',
            'password' => bcrypt(123456)
        ]);

        $user_profile_fields = \App\UserProfileField::create([
            'userid' => $user->id,
            'address' => 'Brasilia 705 Norte',
            'state' => 'DF',
            'zipcode' => '70730500'
        ]);

        $this->assertDatabaseHas('users', ['firstname'=>'Unit', 'email' => 'unit@rmady.com']);
        $this->assertDatabaseHas('user_profile_fields', [
            'userid'=> $user->id,
            'zipcode' => '70730500'
        ]);
    }

    public function test_get_profile_field_by_user()
    {
        $user = \App\User::create([
            'firstname' => 'Unit',
            'lastname' => 'User',
            'username' => 'unit',
            'auth' => 'local',
            'email' => 'unit@rmady.com',
            'password' => bcrypt(123456)
        ]);

        \App\UserProfileField::create([
            'userid' => $user->id,
            'address' => 'Brasilia 705 Norte',
            'state' => 'DF',
            'zipcode' => '70730500'
        ]);

        $user_profile_fields = \App\UserProfileField::find(1);
        $result = $user->profile_field;

        $this->assertEquals($user_profile_fields, $result);
    }

    public function test_create_user_and_profile_field_with_service() {
        $data = [
            'firstname' => 'Unit',
            'lastname' => 'User',
            'username' => 'unit',
            'auth' => 'local',
            'email' => 'unit@rmady.com',
            'password' => 123456,
            'address' => 'Brasilia 705 Norte',
            'state' => 'DF',
            'zipcode' => '70730500'
        ];

        $user_service = new \App\Services\UserService();
        $user = $user_service->create($data);

        $expected = \App\UserProfileField::find(1);

        $this->assertEquals($expected, $user);
    }
}
