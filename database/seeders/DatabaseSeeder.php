<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
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
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Product::create([
            'title' => 'jersey oversize pro 2022',
            'price' => 199,
            'image' => "ppp",
            'description' => "asasfd",
            'discount' => 0,
            'status' => "best_seller",
            'tag' => "jersey",
            'new' => true
        ]);

        Product::create([
            'title' => 'terra hat',
            'price' => 20,
            'image' => "ppp",
            'description' => "asasfd",
            'discount' => 0,
            'status' => "best_seller",
            'tag' => "jersey",
            'new' => true
        ]);

        Product::create([
            'title' => 'tracktop seize',
            'price' => 49,
            'image' => "ppp",
            'description' => "asasfd",
            'discount' => 0,
            'status' => "best_seller",
            'tag' => "jersey",
            'new' => true
        ]);
    }
}
