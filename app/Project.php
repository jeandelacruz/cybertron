<?php

namespace Cybertron;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'projects';
    protected $primaryKey   = 'id';
    public    $timestamps   = false;

    protected $fillable = [
        'name_project','manager_project',
    ];
}
