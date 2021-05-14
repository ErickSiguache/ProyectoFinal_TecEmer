<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

//Libros
Route::get('add','LibroController@create');
Route::post('add','LibroController@store');
Route::get('car','LibroController@index');
Route::get('edit/{id}','LibroController@edit');
Route::post('edit/{id}','LibroController@update');
Route::delete('{id}','LibroController@destroy');

//Usuario
Route::get('add','UsuarioController@create');
Route::post('add','UsuarioController@store');
Route::get('car','UsuarioController@index');
Route::get('edit/{id}','UsuarioController@edit');
Route::post('edit/{id}','UsuarioController@update');
Route::delete('{id}','UsuarioController@destroy');