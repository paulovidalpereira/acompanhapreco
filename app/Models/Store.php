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
    ];

    protected function products()
    {
        return $this->hasMany(Product::class);
    }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $newDate = Carbon::parse($value)->format('d/m/Y H:i:s');
                return $newDate;
            },
        );
    }
}
