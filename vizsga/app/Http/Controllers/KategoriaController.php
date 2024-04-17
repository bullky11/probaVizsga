<?php

namespace App\Http\Controllers;

use App\Models\Kategoria;
use Illuminate\Http\Request;

class KategoriaController extends Controller
{
    public function index(){
        $categories = Kategoria::all();
        return response()->json($categories);
    }
 
}
