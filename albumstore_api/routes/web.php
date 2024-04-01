<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

use App\Models\Artist;
use App\Models\Album;

$router->get('/artists', 'AlbumController@getAll');
$router->get('/artist/{id}', 'AlbumController@getOne');
$router->post('/artist/add', 'AlbumController@save');
$router->post('/artist/edit/{id}', 'AlbumController@update'); // Corrected route definition
$router->delete('/artist/delete/{id}', 'AlbumController@delete');

$router->get('/albums', 'AlbumController@getAll');
$router->get('/album/{id}', 'AlbumController@getOne');
$router->post('/album/add', 'AlbumController@save');
$router->post('/album/edit/{id}', 'AlbumController@update'); // Corrected route definition
$router->delete('/album/delete/{id}', 'AlbumController@delete');