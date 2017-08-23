<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',                     'ProfileController@index')->name('profile');

Route::get('/home',                 'HomeController@index')->name('home');

Auth::routes();

// Rutas Gestion del Sistema
Route::get('system/viewUsers',                 'UserController@ViewUsers')->name('viewusers');

// Rutas del Perfil
Route::get('profile/myProfile',                 'ProfileController@myProfile')->name('myprofile');
Route::get('profile/Settings',                  'ProfileController@Settings')->name('settingsprofile');
Route::post('viewProfile',                      'ProfileController@viewProfile');
Route::post('viewUbigeo',                       'ProfileController@viewUbigeo');
Route::post('viewDepartamento',                 'ProfileController@viewDepartamento');
Route::post('viewProvincia',                    'ProfileController@viewProvincia');
Route::post('viewDistrito',                     'ProfileController@viewDistrito');
Route::post('viewDatosAcademicos',              'ProfileController@viewDatosAcademicos');
Route::post('viewCertificaciones',              'ProfileController@viewCertificaciones');
Route::post('viewExperiencias',                 'ProfileController@viewExperiencias');
Route::post('viewProfileJob',                   'ProfileController@viewProfileJob');
Route::post('viewJobs',                         'UserController@viewJobs');
Route::post('listUsers',                        'UserController@user_list_query');
Route::post('bioUser',                          'UserController@bioUser');

// Rutas de Formularios Modal
Route::get('formDatosAcademicos',               'ProfileController@formDatosAcademicos');
Route::get('formCertificaciones',               'ProfileController@formCertificaciones');
Route::get('formExperiencia',                   'ProfileController@formExperiencia');
Route::get('formUser',                          'UserController@formUser');

// Rutas para editar Formularios Modal
Route::post('formDatosAcademicosUpdate',        'ProfileController@formDatosAcademicos');
Route::post('formCertificacionesUpdate',        'ProfileController@formCertificaciones');
Route::post('formExperienceUpdate',             'ProfileController@formExperiencia');
Route::post('formUserUpdate',                   'UserController@formUser');
Route::post('formPassUpdate',                   'UserController@formUserPass');

// Rutas que extrae la data a actualizar
Route::get('updateAcademico',                   'ProfileController@updateAcademico');
Route::get('updateCertificado',                 'ProfileController@updateCertificado');
Route::get('updateExperience',                  'ProfileController@updateExperience');
Route::get('updateUser',                        'UserController@updateUser');

// Rutas Acciones
Route::post('profile/saveDatos',                'ProfileController@saveDatos')->name('savedatos');
Route::post('profile/saveAcademico',            'ProfileController@saveAcademico')->name('saveacademico');
Route::post('profile/saveCertificacion',        'ProfileController@saveCertificacion')->name('savecertificacion');
Route::post('profile/saveExperiencia',          'ProfileController@saveExperiencia')->name('saveexperiencia');
Route::post('user/saveUser',                    'UserController@saveUser')->name('saveuser');
Route::post('user/changeStatus',                'UserController@changeStatus')->name('changestatus');

// Rutas Datatables
Route::post('tableUsers',                        'UserController@listUsers')->name('datatable.viewusers');

// Rutas para Ver Usuario
Route::post('user/viewProfile',                'UserController@viewProfile')->name('viewprofileuser');
Route::post('user/viewJob',                    'UserController@viewUserJob')->name('viewjobuser');
Route::post('user/viewDatosAcademicos',        'UserController@viewDatosAcademicos')->name('viewdatosacademicosuser');
Route::post('user/viewCertificaciones',        'UserController@viewCertificaciones')->name('viewdatoscertificacionesuser');
Route::post('user/viewExperiencias',           'UserController@viewExperiencias')->name('viewdatosexperienceuser');