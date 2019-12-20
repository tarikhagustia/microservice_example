<?php


$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/token', 'AuthController@login');
$router->get('/me', 'AuthController@me');
