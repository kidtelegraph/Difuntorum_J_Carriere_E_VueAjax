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
use App\Models\Artist;

$router->get('/artists', function () {
    $artists = Artist::all();
    return response()->json($artists);
});

use App\Models\Album;

$router->get('/albums', function () {
    $albums = Album::with('artist')->get();
    return response()->json($albums);
});

//matches localhost:8888/lumen/public/
$router->get('http://localhost/albumstore_api/public', function () use ($router) {
    return $router->app->version();
});

$router->get('/artists', 'AlbumController@getAll');
$router->get('/artist/{id}', 'AlbumController@getOne');
$router->post('/artist/add', 'AlbumController@save');
$router->post('/aritst/edit/{id}', 'AlbumController@update');
$router->delete('/artist/delete/{id}', 'AlbumController@delete');

$router->get('/albums', 'AlbumController@getAll');
$router->get('/album/{id}', 'AlbumController@getOne');
$router->post('/album/add', 'AlbumController@save');
$router->post('/album/edit/{id}', 'AlbumController@update');
$router->delete('/album/delete/{id}', 'AlbumController@delete');