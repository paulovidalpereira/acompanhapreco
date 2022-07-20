<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Store::factory()->count(50)->create();
        
        \App\Models\Store::create([
            'id' => 1,
            'name' => 'Kabum',
            'domain' => 'kabum.com.br',
            'class' => 'KabumComBrScraper',
            'status' => 1,
        ]);

        \App\Models\Store::create([
            'id' => 2,
            'name' => 'Terabyte',
            'domain' => 'terabyte.com.br',
            'class' => 'TerabyteComBrScraper',
            'status' => 1,
        ]);

        \App\Models\Store::create([
            'id' => 3,
            'name' => 'Pichau',
            'domain' => 'pichau.com.br',
            'class' => 'PichauComBrScraper',
            'status' => 1,
        ]);

        \App\Models\Store::create([
            'id' => 4,
            'name' => 'Americanas',
            'domain' => 'americanas.com.br',
            'class' => 'AmericanasComBrScraper',
            'status' => 1,
        ]);

        \App\Models\Store::create([
            'id' => 5,
            'name' => 'Amazon',
            'domain' => 'amazon.com.br',
            'class' => 'AmazonComBrScraper',
            'status' => 1,
        ]);
    }
}
