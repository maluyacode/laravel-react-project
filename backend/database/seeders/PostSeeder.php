<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Fake;
use App\Models\User;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Fake::create();

        $user = User::pluck('id')->toArray();

        for ($i = 0; $i < 10; $i++) {
            DB::table('posts')->insert([
                "title" => $faker->word,
                "content" => $faker->text,
                "slug" => "/$faker->word/$faker->word",
                "user_id" => array_rand($user, 1)
            ]);
        }
    }
}
