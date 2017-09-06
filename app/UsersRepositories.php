<?php

namespace Cybertron;

use Illuminate\Database\Eloquent\Model;

class UsersRepositories extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_repositories';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'user_id', 'name_folder' ,'name_file',
    ];
}
