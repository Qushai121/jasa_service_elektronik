<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    public $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];



    public function WhereMyCustomers()
    {
        return DB::table('customers')->where('user_id', '=', auth()->user()->id)->paginate(10);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }


    
    public function barangservices(): BelongsToMany
    {
        // Isian parameternya itu 
        // 1. masukin sibling table yang di gabungin sama kita di many to many table
        // 2. masukin nama table many to many nya
        // 3. masukin table pivot user yang tersimpan di many to many table, kalo lu bikin ini methodnya nya di barangservice Model
        // berarti masukin barang_service_id dan ganti parameter ke 1 jadi User::class [model]
        // 4. masukin pivot sibling table 
        return $this->belongsToMany(BarangService::class, 'user_barang_services','user_id','barang_service_id')
               ->withPivot('status','id','askhelp');
    }
}
