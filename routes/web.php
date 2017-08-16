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

// Rutas del Perfil
Route::get('profile/myProfile',         'ProfileController@myProfile')->name('myprofile');
Route::get('profile/Settings',          'ProfileController@Settings')->name('settingsprofile');
Route::post('viewProfile',              'ProfileController@viewProfile');
Route::post('viewUbigeo',               'ProfileController@viewUbigeo');
Route::post('viewDepartamento',         'ProfileController@viewDepartamento');
Route::post('viewProvincia',            'ProfileController@viewProvincia');
Route::post('viewDistrito',             'ProfileController@viewDistrito');
Route::post('viewDatosAcademicos',      'ProfileController@viewDatosAcademicos');
Route::post('viewCertificaciones',      'ProfileController@viewCertificaciones');

// Rutas de Formularios Modal
Route::get('formDatosAcademicos',       'ProfileController@formDatosAcademicos');
Route::get('formCertificaciones',       'ProfileController@formCertificaciones');

// Rutas Acciones
Route::post('profile/saveDatos',                'ProfileController@saveDatos')->name('savedatos');
Route::post('profile/saveAcademico',            'ProfileController@saveAcademico')->name('saveacademico');
Route::post('profile/saveCertificacion',        'ProfileController@saveCertificacion')->name('savecertificacion');