<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Product;

class Store extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'url',
        'class',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
