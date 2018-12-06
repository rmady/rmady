<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller {

    public function getFrontpage() {
        return view('frontpage');
    }

    public function getAbout() {
        return view('about');
    }

    public function getContact() {
        return view('inc.contact.index');
    }

    public function getEnergy() {
        return view('energy');
    }

    public function getWork() {
        return Route::resource('nerds', 'NerdController');
    }
}
