<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\LeadController;
use App\Http\Controllers\Api\V1\StatusController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//lead API
Route::group(['prefix' => "v1"], function(){
    Route::apiResource("leads", LeadController::class);
    
});

Route::group(['prefix' => "v1"],function(){
    //Route::get("statuses", "StatusController@index");
    Route::get('statuses', [StatusController::class, 'index']);
});