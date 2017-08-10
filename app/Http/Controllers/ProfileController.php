<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function myProfile(){
        return view('elements/profile');
    }

    public function Settings(){
        return view('elements/settings');
    }

    public function saveDatos(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'Names' => 'required',
                'lastName' => 'required'
            ]);
            return ['message' => request('Names')];
        }
        return ['message' => 'Error'];
    }
}
