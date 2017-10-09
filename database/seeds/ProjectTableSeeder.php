<?php

use Illuminate\Database\Seeder;

class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $projects = [[
                'name_project' => 'CENTRO DE SERVICIOS COMPARTIDOS',
                'manager_project' => 'EDWARD CALLE'
            ],
            [
                'name_project' =>    'APM TERMINALS',
                'manager_project' => 'CHRISTIAN NUÑEZ'
            ],
            [
                'name_project' =>    'COLGATE',
                'manager_project' => 'CHRISTIAN NUÑEZ'
            ],
            [
                'name_project' =>    'LAP',
                'manager_project' => 'CHRISTIAN NUÑEZ'
            ],
            [
                'name_project' =>    'PESQUERA HAYDUK',
                'manager_project' => 'CHRISTIAN NUÑEZ'
            ],
            [
                'name_project' =>    'BANCO FINANCIERO',
                'manager_project' => 'DANIEL BRAVO'
            ],
            [
                'name_project' =>    'BANCO FINANCIERO - DINERS',
                'manager_project' => 'DANIEL BRAVO'
            ],
            [
                'name_project' =>    'AVIANCA - TACA',
                'manager_project' => 'ERIKA HUERTA'
            ],
            [
                'name_project' =>    'AFP INTEGRA / SURA',
                'manager_project' => 'GIANCARLO AQUINO'
            ],
            [
                'name_project' =>    'AUNA MESA APLICATIVOS',
                'manager_project' => 'GIANCARLO AQUINO'
            ],
            [
                'name_project' =>    'AUNA MONITOREO',
                'manager_project' => 'GIANCARLO AQUINO'
            ],
            [
                'name_project' =>    'MI BANCO',
                'manager_project' => 'GIANCARLO AQUINO'
            ],
            [
                'name_project' =>    'ACCENTURE',
                'manager_project' => 'GUSTAVO OREJUELA'
            ],
            [
                'name_project' =>    'BFU',
                'manager_project' => 'GUSTAVO OREJUELA'
            ],
            [
                'name_project' =>    'ECHECOPAR',
                'manager_project' => 'GUSTAVO OREJUELA'
            ],
            [
                'name_project' =>    'INTURSA',
                'manager_project' => 'GUSTAVO OREJUELA'
            ],
            [
                'name_project' =>    'LOREAL',
                'manager_project' => 'GUSTAVO OREJUELA'
            ],
            [
                'name_project' =>    'BANCO INTERBANK',
                'manager_project' => 'JOSE CARLOS SALDAÑA'
            ],
            [
                'name_project' =>    'COFIDE',
                'manager_project' => 'JOSE LUIS CALLUPE'
            ],
            [
                'name_project' =>    'ENTEL DEL PERU',
                'manager_project' => 'MARTIN CEDANO'
            ],
            [
                'name_project' =>    'CLARO NETWORKING (Corporativo, Empresas)',
                'manager_project' => 'RENATO MORANTE'
            ],
            [
                'name_project' =>    'AUSA',
                'manager_project' => 'RICARDO NEYRA'
            ],
            [
                'name_project' =>    'ENGIE',
                'manager_project' => 'RICARDO NEYRA'
            ],
            [
                'name_project' =>    'BUENAVENTURA',
                'manager_project' => 'YESMINA MALDONADO'
            ],
            [
                'name_project' =>    'DELOSI',
                'manager_project' => 'YESMINA MALDONADO'
            ],
            [
                'name_project' =>    'EQUIFAX',
                'manager_project' => 'YESMINA MALDONADO'
            ]];

        DB::table('projects')->insert($projects);
    }
}
