<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations
     */
    public function up(): void
    {
        Schema::create('fakultas', function(Blueprint $table) {
            // $table->id(); // auto increment
            $table->uuid('id'); // UUID (Unique Identifier)
            $table->primary('id');
            $table->string('nama');
            $table->string('singkatan', 4);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropfExists('fakultas');
    }
};