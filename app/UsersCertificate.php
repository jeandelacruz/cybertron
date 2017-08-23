<?php

namespace Cybertron;

use Illuminate\Database\Eloquent\Model;

class UsersCertificate extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'users_certificates';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'user_id', 'name_institute', 'name_certificate', 'date_begin', 'date_finish',
    ];
}
