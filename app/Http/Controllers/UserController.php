<?php

namespace App\Http\Controllers;

use App\User;
use App\Ubigeos;
use App\UserInformation;
use App\UsersStudies;
use App\UsersCertificate;
use App\UsersExperience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function ViewUsers(Request $request){
        $response = $request->user()->authorizeRoles(['admin']);
        if($response) return view('elements/Users/listUser');
        return view('errors/permission');
    }

    public function listUsers(Request $request){
        if ($request->isMethod('post')) {
            User::select()
                ->with('roles')
                ->with('usersStudies')
                ->with('usersInformation');
        }
    }
}
