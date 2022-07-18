<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Paulo',
            'email' => 'paulo@recurse.com.br',
            'password' => bcrypt('123456'),
        ]);

        \App\Models\Stores::factory()->create([
            'id' => 1,
            'name' => 'Kabum',
            'domain' => 'kabum.com.br',
            'class' => 'KabumScraper',
            'status' => 1,
        ]);

        \App\Models\Products::factory()->create([
            'store_id' => 1,
            'name' => 'Teste',
            'sku' => 'teste123',
            'status' => 1,
        ]);
    }
}
