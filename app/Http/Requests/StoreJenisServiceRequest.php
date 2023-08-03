<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJenisServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'judul' => ['required', 'string', 'max:255'],
            'sub_judul' => ['required', 'string', 'max:255'],
            'background_foto' => ['required', 'mimes:png,jpg,webp,jpeg'],
            'keterangan' => ['required', 'string'],
            'icon' => ['required', 'mimes:png,jpg,webp,jpeg,svg'],
        ];
    }
}
