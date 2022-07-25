<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('username', $request->username)->first();
 
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'username' => ['The provided credentials are incorrect.'],
            ]);
        } else {

            $token = $user->createToken($user->name . '_AdminToken', ['server:admin'])->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token,
                'message' => 'User login successfully!'
            ];

            return response()->json($response, 200);
        }
    }
}
