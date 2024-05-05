<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123456')
        ])->assignRole('Admin');

        User::create([
            'name' => 'Project Manager',
            'email' => 'projectmanager@gmail.com',
            'password' => Hash::make('123456')
        ])->assignRole('Project Manager');
    }
}
