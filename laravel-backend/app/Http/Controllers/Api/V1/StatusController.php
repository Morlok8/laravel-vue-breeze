<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;
use App\Http\Resources\V1\StatusResource;

class StatusController extends Controller
{
    public function index(){
        return StatusResource::collection(Status::all());
    }
}
