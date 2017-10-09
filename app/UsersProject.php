<?php

namespace Cybertron;

use Illuminate\Database\Eloquent\Model;

class UsersProject extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_projects';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'user_id','project_id',
    ];
}
