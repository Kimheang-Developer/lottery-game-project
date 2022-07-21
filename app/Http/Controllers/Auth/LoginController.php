<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout', 'checkAuth');
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }

        $credentials = $request->only('username', 'password');

        if(auth()->attempt($credentials, $request->filled('remember'))) {
            return response()->json(['status' => true, 'user' => auth()->user()]);
        }

        return response()->json(['status' => false, 'message' => 'invalid username or password'], 500);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['status' => true, 'message' => 'logged out']);
    }

    public function profile()
    {
        return response()->json(['status' => true, 'user' => auth()->user()]);
    }
}
