<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersJob extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_jobs';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'name_job',
    ];
}
