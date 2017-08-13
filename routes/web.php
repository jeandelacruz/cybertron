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

Route::get('login', function () {
    return view('layouts/login');
});

Route::get('/', 'ProfileController@index')->name('profile');

Route::get('profile/myProfile'      , ['uses'=>'ProfileController@myProfile'])->name('myprofile');

Route::get('profile/Settings'       , ['uses'=>'ProfileController@Settings'])->name('settingsprofile');

Route::post('profile/saveDatos'     , ['uses'=>'ProfileController@saveDatos'])->name('savedatos');

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();