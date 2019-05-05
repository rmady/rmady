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

Route::get('/', function () {
    return view('frontpage');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/energy', function () {
    return view('energy');
});

Route::get('/work', function () {
    return view('work');
});

Route::get('/contact', function () {
    return view('inc.contact.index');
});

Route::get('/contact/view', function () {
    return view('MessageController@view');
});

Auth::routes();
Route::get('/auth/logout', 'Auth\LoginController@logout');
