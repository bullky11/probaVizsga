<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TesztController;
use App\Http\Controllers\KategoriaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/tesztek',[TesztController::class,'index']);
Route::get('/tesztek/kategoria/{id}',[TesztController::class,'show']);
Route::get('/kategoria',[KategoriaController::class,'index']);
