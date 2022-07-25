<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Role;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = Role::where('name', 'admin')->first();
        $superAdminRole = Role::where('name', 'superAdmin')->first();
        $memberRole = Role::where('name', 'member')->first();

        User::truncate();

        $admin = User::create([
            'name' => 'Kimheang Sim',
            'username' => 'admin',
            'phone_number' => '011263262',
            'password' => Hash::make('password'),
        ]);

        $admin->createToken('Kimheang Sim_AdminToken', ['server:admin'])->plainTextToken;

        $joe = User::create([
            'name' => 'Joe',
            'username' => 'joe',
            'phone_number' => '011263262',
            'password' => Hash::make('password'),
        ]);

        $jame = User::create([
            'name' => 'Jame',
            'username' => 'jame',
            'phone_number' => '011263262',
            'password' => Hash::make('password'),
        ]);

        $admin->roles()->attach($adminRole);
        $joe->roles()->attach($superAdminRole);
        $jame->roles()->attach($memberRole);
    }
}
