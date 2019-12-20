<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = "Fulan";
        $user->email = 'email@email.com';
        $user->password = Hash::make('email@email.com');
        $user->save();
    }
}
