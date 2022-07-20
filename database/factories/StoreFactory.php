<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $domain = $this->faker->domainName();

        return [
            'name' => $this->faker->company(),
            'domain' => $domain,
            'class' => ucfirst(Str::camel(str_replace('.', '_', $domain))) . 'Scraper',
            'status' => 1,
        ];
    }
}
