<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('front');
    }

    public function myProfile(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('elements/profile');
        return view('errors/permission');
    }

    public function Settings(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('elements/settings');
    }

    public function saveDatos(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'Names' => 'required',
                'lastName' => 'required'
            ]);
            return ['message' => 'Success'];
        }
        return ['message' => 'Error'];
    }
}
