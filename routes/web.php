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


Route::get('/', 'PagesController@getFrontpage');
Route::get('/about', 'PagesController@getAbout');
Route::get('/energy', 'PagesController@getEnergy');
//Route::get('/work', 'PagesController@getWork');
Route::resource('work', 'WorkController');

Route::get('/contact', 'PagesController@getContact');
Route::get('/contact/view', 'MessageController@view');
Route::post('/contact/submit', 'MessageController@save');

Auth::routes();
Route::get('/auth/logout', 'Auth\LoginController@logout');

Route::get('/home', 'HomeController@index')->name('frontpage');
