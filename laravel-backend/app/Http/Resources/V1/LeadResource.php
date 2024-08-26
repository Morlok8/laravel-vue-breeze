<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LeadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        
        return [
            "id" => $this->id,
            "name" => $this->name,
            "surname" => $this->surname,
            "phone" => $this->phone,
            "email" => $this->email,
            "text" => $this->text,
            "status" => $this->status,
            "created_at" => $this->created_at,
        ];
    }
}
