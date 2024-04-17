<?php

use App\Models\Kategoria;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kategorias', function (Blueprint $table) {
            $table->id();
            $table->string('kategorianev');
            $table->timestamps();
        });
        Kategoria::create(['kategorianev'=>'Természetvédelem']);
        Kategoria::create(['kategorianev'=>'Hulladékhasznosítás']);
        Kategoria::create(['kategorianev'=>'Szelektív hulladékgyűjtés']);
        Kategoria::create(['kategorianev'=>'Szemétfeldolgozás']);
        Kategoria::create(['kategorianev'=>'Újrahasznosítás']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategorias');
    }
};
