<?php

use App\Http\Controllers\Admin\BarangServiceController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\HelperController;
use App\Http\Controllers\Admin\UserBarangServiceController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\CustomerEmailInfoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Umum\HomeController;
use App\Models\UserBarangService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\Mailer\Messenger\SendEmailMessage;

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
    return redirect()->to(route('login'));
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::get('send-info/{barangService}',[CustomerEmailInfoController::class,'index']);

Route::get('dashboard', function () {
    if (auth()->user()->role_id <= 0) {
        return redirect()->to(route('profile.edit'));
    }
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.updateAvatar');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'CheckRole:all_staff'])->prefix("/admin")->group(function () {
    Route::resource('customer', CustomerController::class)->middleware('CheckRole:admin__data_entry');
    Route::resource('barangservice', BarangServiceController::class);
    Route::resource('userbarangservice', UserBarangServiceController::class);
    Route::put('askhelp/{userBarangService}', [HelperController::class, 'askHelp'])->name('askHelp');
    Route::post('addhelper/{userBarangService}', [HelperController::class, 'addHelper'])->name('addHelper');
    Route::put('givepekerjaanutama/{userBarangService}', [HelperController::class, 'givePekerjaanUtama'])->name('givePekerjaanUtama');
    Route::post('leavejob/{userBarangService}', [HelperController::class, 'leaveJob'])->name('leaveJob');
});


Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback']);

Route::get('home', [HomeController::class, 'index']);

require __DIR__ . '/auth.php';
