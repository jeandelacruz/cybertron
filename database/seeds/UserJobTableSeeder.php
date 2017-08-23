<?php

use Illuminate\Database\Seeder;
use Cybertron\UsersJob;

class UserJobTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name_jobs = [
            ['name_job' => 'ADMINISTRADOR DE REDES Y SERVIDORES'],
            ['name_job' => 'ANALISTA DE MESA DE AYUDA'],
            ['name_job' => 'ANALISTA DE RECURSOS HUMANOS'],
            ['name_job' => 'ANALISTA DE SOPORTE DE PRIMER NIVEL'],
            ['name_job' => 'COORDINADOR DE SERVICIOS INFORMATICOS'],
            ['name_job' => 'ESPECIALISTA DE SOPORTE DE TERCER NIVEL'],
            ['name_job' => 'GERENTE DE PRE VENTA'],
            ['name_job' => 'GESTOR DE CENTRO DE SERVICIOS'],
            ['name_job' => 'INGENIERO POST VENTA'],
            ['name_job' => 'JEFE DE CENTRO DE SERVICIO'],
            ['name_job' => 'JEFE DE PROYECTO'],
            ['name_job' => 'PRACTICANTE TI'],
            ['name_job' => 'PROGRAMADOR'],
            ['name_job' => 'SOPORTE TECNICO DE SEGUNDO NIVEL'],
            ['name_job' => 'SUPERVISOR DE SOPORTE TECNICO DE PRIMER NIVEL'],
            ['name_job' => 'SUPERVISOR DE SOPORTE TECNICO DE SEGUNDO NIVEL'],
            ['name_job' => 'TECNICO SENIOR']
        ];

        DB::table('users_jobs')->insert($name_jobs);
    }
}
