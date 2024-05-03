<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::resources([
    '/dashboard' => DashboardController::class
]);

Route::get('/', function(){
    return redirect()->route('dashboard.index');
})->name('dashboard');
