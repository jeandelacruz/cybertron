<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_information';
    protected $primaryKey   = 'id';
}
