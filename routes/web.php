<?php

use App\Http\Controllers\Admin\BarangServiceController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HelperController;
use App\Http\Controllers\Admin\JenisServiceController;
use App\Http\Controllers\Admin\UserBarangServiceController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Umum\BantuanController;
use App\Http\Controllers\Umum\CaraPemesananController;
use App\Http\Controllers\Umum\HomeController;
use App\Http\Controllers\Umum\JenisServiceUmumController;
use App\Http\Controllers\Umum\LokasiController;
use App\Http\Controllers\Umum\PartsUmumController;
use App\Http\Controllers\Umum\PesanServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return redirect()->to(route('home'));
});

Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback']);

Route::get('dashboard',[DashboardController::class,'index'])->middleware(['auth', 'verified','CheckRole:all_staff'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.updateAvatar');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'CheckRole:all_staff'])->prefix("/admin")->group(function () {
    Route::resource('customer', CustomerController::class)->middleware('CheckRole:admin__data_entry')->except('create', 'edit');
    // Route::post('send-info/{barangService}', [CustomerEmailInfoController::class, 'index'])->middleware('CheckRole:all_staff');
    // ------------------------------------------------------------------------
    Route::resource('barangservice', BarangServiceController::class)->only('index', 'store', 'update', 'destroy');
    // ------------------------------------------------------------------------
    Route::resource('userbarangservice', UserBarangServiceController::class)->except('create');
    Route::post('selesaipekerjaan/{userBarangService}', [UserBarangServiceController::class, 'selesai'])->name('selesaipekerjaan');
    // ------------------------------------------------------------------------
    Route::put('askhelp/{userBarangService}', [HelperController::class, 'askHelp'])->name('askHelp');
    Route::post('addhelper/{userBarangService}', [HelperController::class, 'addHelper'])->name('addHelper');
    Route::put('givepekerjaanutama/{userBarangService}', [HelperController::class, 'givePekerjaanUtama'])->name('givePekerjaanUtama');
    Route::post('leavejob/{userBarangService}', [HelperController::class, 'leaveJob'])->name('leaveJob');
    // ------------------------------------------------------------------------
    Route::resource('JenisService', JenisServiceController::class)->middleware(['CheckRole:admin']);
    Route::post('imageblog', [JenisServiceController::class, 'imageblog'])->middleware(['CheckRole:admin'])->name('imageblog');
    // ------------------------------------------------------------------------
});



Route::prefix('')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/jenisservice', [JenisServiceUmumController::class, 'index'])->name('jenisServiceUmum.index');
    Route::get('/jenisservice/{JenisService}', [JenisServiceUmumController::class, 'show'])->name('jenisServiceUmum.show');
    Route::get('/pemesanan', [CaraPemesananController::class, 'index'])->name('caraPemesanan');
    Route::get('/partsShop', [PartsUmumController::class, 'index'])->name('parts');
    Route::get('/lokasi', [LokasiController::class, 'index'])->name('lokasi');
    Route::resource('/bantuan', BantuanController::class)->only('index', 'store');
    Route::get('/pesan', [PesanServiceController::class, 'index'])->name('pesanService.index');
});

// Route::get('coba', [CobaController::class, 'coba'])->name('coba');

require __DIR__ . '/auth.php';
