<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'username' => 'required|string',
            'password' => 'required|confirmed|min:6',
            'phone_number' => 'required'
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 400);
        }

        $role = 4;
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);
        $user->roles()->attach($role);

        $success['token'] = $user->createToken($user->name . '_ClientToken', [''])->plainTextToken;
        $success['name'] = $user->name;

        $response = [
            'success' => true,
            'data' => $success,
            'message' => 'User register successfully!'
        ];

        return response()->json($response, 200);
    }

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

            if ($user->hasRole('admin')) {
                $token = $user->createToken($user->name . '_AdminToken', ['server:admin'])->plainTextToken;
            } else {
                $token = $user->createToken($user->name . '_ClientToken', [''])->plainTextToken;
            }

            $response = [
                'user' => $user,
                'token' => $token,
                'message' => 'User login successfully!'
            ];

            return response()->json($response, 200);
        }
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        $response = [
            'success' => true,
            'message' => 'User logout successfully!'
        ];

        return response()->json($response, 200);
    }

    public function uploadImage()
    {

    }

    public function profile()
    {
        return response()->json(['data' => User::all()], 200);
    }
}
