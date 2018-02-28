<?php

namespace App\Services;

use \App\User;
use \App\UserProfileField;


class UserService
{

    public function create($data) {
        $user = User::create([
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'username' => $data['username'],
            'auth' => $data['auth'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        UserProfileField::create([
            'userid' => $user->id,
            'address' => $data['address'],
            'state' => $data['state'],
            'zipcode' => $data['zipcode']
        ]);

        return $user;
    }

}