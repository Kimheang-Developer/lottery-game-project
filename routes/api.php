<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BankController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegisterController;

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

Route::post('login', [LoginController::class, 'login'])->name('login');
Route::post('register', [RegisterController::class, 'register'])->name('register');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::group(['as' => 'api.', 'namespace' => 'App\Http\Controllers\Api'], function() {
        Route::apiResources([
            'bank' => BankController::class,
            'user' => UserController::class,
            'withdraw' => WithdrawController::class,
            'topup' => TopUpController::class,
        ]);
    });
    
    Route::get('logout', [LoginController::class, 'logout'])->name('logout');
    Route::post('profile', [LoginController::class, 'profile'])->name('profile');
});
