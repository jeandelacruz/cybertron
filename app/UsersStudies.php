<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersStudies extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_studies';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'user_id', 'type_institute', 'situation_academy', 'name_institute', 'name_career', 'date_begin', 'date_finish',
    ];
}
