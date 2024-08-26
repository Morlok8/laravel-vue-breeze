<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Create Status
        DB::table('statuses')->insert([
            'title' => 'Новый',
            'created_at'=> now()
        ]);
        DB::table('statuses')->insert([
            'title' => 'В работе',
            'created_at'=> now()
        ]);
        DB::table('statuses')->insert([
            'title' => 'Завершен',
            'created_at'=> now()
        ]);
    }
}
