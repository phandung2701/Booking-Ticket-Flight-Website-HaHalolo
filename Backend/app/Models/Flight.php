<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    // PostgreSQL
    protected $primaryKey = 'IdChuyenBay';

    protected $fillable = [
        'HangHK',
        'SHMayBay',
        'ThoiGianKhoiHanh',
        'ThoiGianHaCanh',
        'DiaDiemKhoiHanh',
        'DiaDiemHaCanh',
        'LoaiHinhBay',
        'TongSoVe',
        'SLVeConLai'
    ];
}