<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    use HasFactory;

    public function fakultas() {
        return $this ->belongsTo(Fakultas:: class, 'fakultas_id'); //belongsTo satu ke satu, hasMany banyak ke banyak
    }
}
