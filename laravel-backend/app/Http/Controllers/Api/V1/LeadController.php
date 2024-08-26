<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;
use App\Http\Requests\StoreLeadRequest;
use App\Http\Resources\V1\LeadResource;

class LeadController extends Controller
{
    public function index(){
        return LeadResource::collection(Lead::all());
    }

    public function show(Lead $lead){
        return new LeadResource($lead);
    }

    public function store(StoreLeadRequest $request){
        Lead::create($request->validated());
        return response()->json("Lead Created");
    }

    public function update(StoreLeadRequest $request, Lead $lead){
        $lead->update($request->validated());
        return response()->json("Lead Updated");
    }

    public function destroy(Lead $lead){
        $lead->delete();
        return response()->json("Lead Deleted");
    }
}
