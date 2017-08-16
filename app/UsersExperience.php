<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersExperience extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_experiences';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'user_id', 'name_job', 'name_business', 'review_business','date_begin', 'date_finish',
    ];
}
