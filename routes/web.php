<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.session'])->group(function () {
    Route::resources([
        '/dashboard' => DashboardController::class,
        '/users' => UserController::class,
    ]);
});



Route::get('/', function () {
    return redirect()->route('dashboard.index');
})->name('dashboard');

require_once('auth.php');
