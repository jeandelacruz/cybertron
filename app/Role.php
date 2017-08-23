<?php

namespace Cybertron;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $connection   = 'laravel';
    protected $table        = 'roles';

    public function users(){
        return $this
            ->belongsToMany('Cybertron\User')
            ->withTimestamps();
    }
}
