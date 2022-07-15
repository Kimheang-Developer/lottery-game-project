<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'number',
        'branch',
        'status'
    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
