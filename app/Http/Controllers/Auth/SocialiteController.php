<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect($provider) 
    {
      return Socialite::driver($provider)->redirect();  
    }

    public function callback($provider) 
    {
      $data = Socialite::driver($provider)->user();  
      $user = User::firstOrCreate(['email' => $data->getEmail()],[
        "name" => $data->getNickname(),
        "password" => 'password',
      ]);
      Auth::login($user);
      return redirect(route('dashboard'));
    }
}
