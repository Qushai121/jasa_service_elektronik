<?php

use App\Http\Controllers\Admin\BarangServiceController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Umum\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','isadmin'])->name('dashboard');

Route::middleware('auth')->prefix("/admin")->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.updateAvatar');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('barangservice',BarangServiceController::class);
});

// Route::get('/auth/redirect', function () {
//     return Socialite::driver('github')->redirect();
// })->name('login.github');

// Route::get('/auth/callback', function () {
//     $user = Socialite::driver('github')->user();
//     dd($user);
// });

Route::get('/auth/{provider}/redirect',[SocialiteController::class,'redirect']);
Route::get('/auth/{provider}/callback',[SocialiteController::class,'callback']);

Route::get('home', [HomeController::class, 'index']);

require __DIR__ . '/auth.php';
