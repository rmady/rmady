<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserProfileField extends Model
{
    protected $fillable = [
        'userid',
        'address',
        'state',
        'zipcode',
    ];
}
