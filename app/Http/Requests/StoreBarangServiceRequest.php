<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBarangServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->role_id == 2 || auth()->user()->role_id == 3;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nama_barang' => ['sometimes', 'required', 'string', 'max:255'],
            'gambar_barang' => ['sometimes', 'required', 'mimes:png,jpg,webp,jpeg'],
            'keluhan_barang' => ['sometimes', 'required', 'string'],
            'customer_id' => ['required'],
        ];
    }
}
