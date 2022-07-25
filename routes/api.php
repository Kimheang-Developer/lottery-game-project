<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminLoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::post('login', [AuthController::class, 'login'])->name('login');
// Route::post('register', [AuthController::class, 'register'])->name('register');

Route::post('admin/login', [AdminLoginController::class, 'login'])->name('api.admin.login');

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::group(['as' => 'api.admin.', 'prefix' => 'admin', 'namespace' => 'App\Http\Controllers\Api'], function() {
        Route::apiResources([
            'bank' => BankController::class,
            'user' => UserController::class,
            'withdraw' => WithdrawController::class,
            'topup' => TopUpController::class,
        ]);
    });

    Route::post('admin/login', [AdminLoginController::class, 'login'])->name('api.admin.login');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('profile', [AuthController::class, 'profile'])->name('profile');
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
});