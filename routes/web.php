<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LeaveController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.session'])->group(function () {
    Route::resources([
        '/dashboard' => DashboardController::class,
        '/employees' => EmployeeController::class,
        '/leaves' => LeaveController::class,
        '/attendance' => AttendanceController::class,
    ]);
});

Route::get('/', function () {
    return redirect()->route('dashboard.index');
})->name('dashboard');

require __DIR__.'/auth.php';
