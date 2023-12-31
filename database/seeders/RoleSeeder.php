<?php

namespace Database\Seeders;

use App\Models\JenisService;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'role_name' => 'user biasa',
            ],
            [
                'role_name' => 'admin',
            ],
            [
                'role_name' => 'data entry',
            ],
            [
                'role_name' => 'pekerja',
            ],
        ];
        Role::insert($data);


        $jenis = [

            'judul' => '',
            'sub_judul' => 'halasdaso',
            'background_foto' => 'hasadsadsalo',
            'blog' => 'halodasdasd',
            'icon' => 'hasadasdasdsalo',
            'kategori' => json_encode([
                'asasdasdd',
                'aas',
            ])

        ];

        JenisService::insert($jenis);
    }
}
