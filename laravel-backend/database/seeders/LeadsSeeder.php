<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LeadsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Create Lead
        DB::table('leads')->insert([
            'name' => 'Игорь',
            'surname' => 'Петров',
            'phone' => "+7 800 500 22 22",
            'email' => "email1@example.com",
            'text' => "loren ipsum loren ipsum loren ipsum",
            'status' => 1,
            'created_at'=> now()
        ]);
        DB::table('leads')->insert([
            'name' => 'Джон',
            'surname' => 'Смит',
            'phone' => "+7 800 500 33 44",
            'email' => "email2@example.com",
            'text' => "loren ipsum loren ipsum loren ipsum",
            'status' => 1,
            'created_at'=> now()
        ]);
        DB::table('leads')->insert([
            'name' => 'Иван',
            'surname' => 'Тест',
            'phone' => "+7 800 500 55 66",
            'email' => "email3@example.com",
            'text' => "loren ipsum loren ipsum loren ipsum",
            'status' => 1,
            'created_at'=> now()
        ]);
    }
}
