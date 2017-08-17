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
            $user = User::Select()
                        ->with('roles')
                        ->with('usersStudies')
                        ->with('usersInformation');

            return Datatables::of($user)
                ->addColumn('roles', function ($user) {
                    return $user->roles[0]->name;
                })
                ->addColumn('action', function ($user) {
                    return '<div class="btn-group">
                                <a class="btn btn-xs btnFix btn-success" href="#edit-' . $user->id . '"><i class="fa fa-eye"></i> Visualizar</a>
                                <a class="btn btn-xs btnFix btn-primary" href="#edit-' . $user->id . '"><i class="fa fa-edit"></i> Editar</a>
                                <a class="btn btn-xs btnFix btn-danger" href="#edit-' . $user->id . '"><i class="fa fa-warning"></i> Cesar</a>
                            </div>';
                })
                ->make(true);
        }
    }
}
