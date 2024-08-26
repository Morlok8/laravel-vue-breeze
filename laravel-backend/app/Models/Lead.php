<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = ["name", "surname", "phone", "email", "text", "status"];

    /*public function status(){
        return $this->hasOne(Status::class);
    }*/
}
