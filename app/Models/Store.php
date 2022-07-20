<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
use Carbon\Carbon;

class Store extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'name',
        'domain',
        'class',
        'status',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
