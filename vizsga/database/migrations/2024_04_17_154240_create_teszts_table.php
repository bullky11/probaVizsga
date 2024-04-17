<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Teszt; // Importáld a Teszt modellt

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->string('helyes')->default('v1'); // Alapértelmezett érték beállítása
            $table->foreignId('kategoriaId')->references('id')->on('kategorias');
            $table->timestamps();
        });

        Teszt::create([
            'kerdes' => 'Mi a hulladékgazdálkodás fő célja?',
            'v1' => 'A hulladéktermelés minimalizálása',
            'v2' => 'A hulladéktermelés maximalizálása',
            'v3' => 'A hulladék korlátlan tárolása',
            'v4' => 'A hulladékkezelés teljes figyelmen kívül hagyása',
            'helyes' => 'v1',
            'kategoriaId' => 1,
        ]);

        Teszt::create([
            'kerdes' => 'Melyik anyagot szokás leggyakrabban újrahasznosítani?',
            'v1' => 'Műanyag',
            'v2' => 'Üveg',
            'v3' => 'Papír',
            'v4' => 'Fém',
            'helyes' => 'v3',
            'kategoriaId' => 1,
        ]);

        Teszt::create([
            'kerdes' => 'Hogyan kell a veszélyes hulladékot megsemmisíteni?',
            'v1' => 'A szokásos hulladékgyűjtés során',
            'v2' => 'Nyílt tűzben elégetve',
            'v3' => 'Kertbe temetve',
            'v4' => 'Különleges létesítményekbe szállítva',
            'helyes' => 'v4',
            'kategoriaId' => 1,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszts');
    }
};

