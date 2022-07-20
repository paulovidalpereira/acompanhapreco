<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Product::insert([
            'store_id' => 1,
            'name' => 'Produto 1',
            'sku' => 'produto1',
            'status' => 1,
        ]);
    }
}
