<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payer extends Model
{
    use HasFactory;

    // PostgreSQL
    protected $primaryKey = 'IdNguoiThanhToan';

    protected $fillable = [
        'HoTen',
        'GioiTinh',
        'Email',
        'SDT',
        'DiaChi',
        'QuocGia',
        'ThanhPho',
    ];
}
