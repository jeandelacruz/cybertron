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

Route::get('/',                                 'ProfileController@index')->name('profile');
Route::get('/home',                             'HomeController@index')->name('home');
Auth::routes();

// Rutas Gestion del Sistema
Route::get('system/viewUsers',                  'UserController@ViewUsers')->name('viewusers');

// Rutas del Perfil
Route::get('profile/myProfile',                 'ProfileController@myProfile')->name('myprofile');
Route::get('profile/Settings',                  'ProfileController@Settings')->name('settingsprofile');
Route::get('viewProfile',                       'ProfileController@viewProfile');
Route::post('viewUbigeo',                       'ProfileController@viewUbigeo');
Route::post('viewDepartamento',                 'ProfileController@viewDepartamento');
Route::post('viewProvincia',                    'ProfileController@viewProvincia');
Route::post('viewDistrito',                     'ProfileController@viewDistrito');
Route::get('viewDatosAcademicos',               'ProfileController@viewDatosAcademicos');
Route::get('viewCertificaciones',               'ProfileController@viewCertificaciones');
Route::get('viewExperiencias',                  'ProfileController@viewExperiencias');
Route::get('viewProfileJob',                    'ProfileController@viewProfileJob');
Route::get('viewJobs',                          'UserController@viewJobs');
Route::get('listUsers',                         'UserController@user_list_query');
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

// Rutas que extrae data para los componentes
Route::get('getNameInstitutesAcademy',          'ProfileController@getNameInstitutesAcademy');
Route::get('getNameCareers',                    'ProfileController@getNameCareers');
Route::get('getNameInstitutesCertificate',      'ProfileController@getNameInstitutesCertificate');
Route::get('getNameCertificate',                'ProfileController@getNameCertificate');
Route::get('getNamePuesto',                     'ProfileController@getNamePuesto');
Route::get('getNameEmpresa',                    'ProfileController@getNameEmpresa');

// Rutas que extrae data para editar el Usuario
Route::post('user/viewProjects',                 'UserController@viewProjects');
Route::get('user/getManagerProject',             'UserController@viewManagerProject');

// Rutas Acciones
Route::post('profile/saveDatos',                'ProfileController@saveDatos')->name('savedatos');
Route::post('profile/saveAcademico',            'ProfileController@saveAcademico')->name('saveacademico');
Route::post('profile/saveCertificacion',        'ProfileController@saveCertificacion')->name('savecertificacion');
Route::post('profile/saveExperiencia',          'ProfileController@saveExperiencia')->name('saveexperiencia');
Route::post('user/saveUser',                    'UserController@saveUser')->name('saveuser');
Route::post('user/changeStatus',                'UserController@changeStatus')->name('changestatus');

// Rutas Datatables
Route::post('tableUsers',                       'UserController@listUsers')->name('datatable.viewusers');

// Rutas para Ver Usuario
Route::get('user/viewProfile',                  'UserController@viewProfile')->name('viewprofileuser');
Route::get('user/viewJob',                      'UserController@viewUserJob')->name('viewjobuser');
Route::get('user/viewDatosAcademicos',          'UserController@viewDatosAcademicos')->name('viewdatosacademicosuser');
Route::get('user/viewCertificaciones',          'UserController@viewCertificaciones')->name('viewdatoscertificacionesuser');
Route::get('user/viewExperiencias',             'UserController@viewExperiencias')->name('viewdatosexperienceuser');

// Rutas Upload File
Route::get('getRepositories',                    'ProfileController@getRepositories');
Route::post('uploadFile',                        'ProfileController@uploadFile');
Route::post('formUpload',                        'UserController@formUpload');
Route::post('formUpload',                        'UserController@formUpload');