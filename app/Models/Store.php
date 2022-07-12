<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Models\Product;
use Carbon\Carbon;

class Store extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'domain',
        'class',
        'status',
    ];

    protected function products()
    {
        return $this->hasMany(Product::class);
    }
}
