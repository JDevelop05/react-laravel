<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

     //cambiar return false por true
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */

    //  aqui se valida los datos
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                'string',
                'min:8',
            ],
            
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'name' => 'El Nombre es obligatorio',
    //         'email.required' => 'El Email es obligatorio',
    //         'email.email' => 'El email no es válido',
    //         'email.unique' => 'El usuario ya esta registrado',
    //         'password' => 'El password debe contener al menos 8 caracteres, un simbolo y un número'
    //     ];
    // }
}