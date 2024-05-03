<?php

use App\Http\Controllers\FakultasController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('about', function () {
    return view('Halaman About');
});

Route::get('profile', function () {
    return view('profile');
});

Route::resource('fakultas', FakultasController::class);