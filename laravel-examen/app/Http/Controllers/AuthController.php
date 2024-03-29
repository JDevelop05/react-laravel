<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegistroRequest;


class AuthController extends Controller
{
  
    public function register(RegistroRequest $request) {
        // // // Validar el registro
         $data = $request->validated();

        // Crear el usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);


        // Retornar una respuesta y crea un token
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function login(LoginRequest $request) {

        $data = $request->validated();

        // Revisar el password
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['The email or the password are incorrect']
            ], 422);
        }

        // Autenticar al usuario y asignar token
        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    // cerrar sesion y eliminar token

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
}
