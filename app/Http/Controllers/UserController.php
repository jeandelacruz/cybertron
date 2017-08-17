<?php

namespace App\Http\Controllers;

use App\User;
use App\Ubigeos;
use App\UserInformation;
use App\UsersStudies;
use App\UsersCertificate;
use App\UsersExperience;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\Datatables\Datatables;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function ViewUsers(Request $request){
        $response = $request->user()->authorizeRoles(['admin']);
        if($response) return view('elements/Users/listUsers');
        return view('errors/permission');
    }

    public function listUsers(Request $request){
        if ($request->isMethod('get')) {
            $user = User::with('roles')
                        ->with('usersStudies')
                        ->with('usersInformation')
                        ->select('users.*');

            return Datatables::of($user)
                ->addColumn('action', function ($user) {
                    return '<a href="#edit-' . $user->id . '" class="btn btn-primary"><i class="glyphicon glyphicon-edit"></i> Edit</a>';
                })
                ->make(true);
        }
    }
}
