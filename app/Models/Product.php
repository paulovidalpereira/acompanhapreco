<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Store;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'url',
        'store_id',
        'status',
    ];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
