<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_erros' => $validator->messages(),
            ]);
        } else {
            $user = User::where('username', $request->username)->first();
 
            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response([
                    'message' => 'The provided credentials are incorrect.'
                ], 401);
            } else {

                $token = $user->createToken($user->name . '_AdminToken', ['server:admin'])->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->username,
                    'token' => $token,
                    'message' => 'Admin User login successfully!'
                ], 200);
            }
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        $response = [
            'status' => 200,
            'message' => 'Admin User logout successfully!'
        ];

        return response()->json($response, 200);
    }
}
