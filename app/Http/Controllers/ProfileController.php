<?php

namespace App\Http\Controllers;

use App\Ubigeos;
use App\User;
use App\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function viewProfile(Request $request){
        if ($request->isMethod('post')) {
            $resultado = User::Select()
                ->with('usersInformation')
                ->where('id', Auth::id())
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewUbigeo(Request $request){
        if ($request->isMethod('post')) {
            $resultado = Ubigeos::Select()
                ->where('ubigeo', $request->idUbigeo)
                ->groupBy('departamento')
                ->orderby('departamento','asc')
                ->get()
                ->toArray();
        }

        return $resultado;
    }

    public function getUbigeo($departamento = '',$provincia = '',$distrito = ''){
        $resultado = Ubigeos::Select('ubigeo')
            ->where('departamento','=',$departamento)
            ->where('provincia','=',$provincia)
            ->where('distrito','=',$distrito)
            ->get()
            ->toArray();

        return $resultado;
    }

    public function viewDepartamento(Request $request){
        if ($request->isMethod('post')) {
            $resultado = Ubigeos::Select('departamento')
                ->groupBy('departamento')
                ->orderby('departamento','asc')
                ->get()
                ->toArray();
        }

        return $resultado;
    }

    public function viewProvincia(Request $request){
        if ($request->isMethod('post')) {
            $resultado = Ubigeos::Select('provincia')
                ->where('departamento', $request->Departamento)
                ->groupBy('provincia')
                ->orderby('provincia','asc')
                ->get()
                ->toArray();
        }

        return $resultado;
    }

    public function viewDistrito(Request $request){
        if ($request->isMethod('post')) {
            $resultado = Ubigeos::Select('distrito')
                ->where('provincia', $request->Provincia)
                ->groupBy('distrito')
                ->orderby('distrito','asc')
                ->get()
                ->toArray();
        }

        return $resultado;
    }

    public function saveDatos(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'Names' => 'required',
                'lastName' => 'required'
            ]);

            $idUbigeo = $this->getUbigeo($request->Departamento,$request->Provincia,$request->Distrito);

            if($idUbigeo){
                $ubigeo = $idUbigeo[0]['ubigeo'];
            }else{
                $ubigeo = '10000';
            }

            User::where('id', Auth::id())
                ->update([
                    'name'          => $request->Names,
                    'last_name'     => $request->lastName,
                    'email'         => $request->Email
                ]);

            UserInformation::updateOrInsert([
                'user_id' => Auth::id()
            ], [
                'phone_home'        => $request->numberTelephone,
                'phone_mobile'      => $request->numberMobile,
                'email'             => $request->Email,
                'ubigeo_id'         => $ubigeo,
                'address'           => $request->nameAddress,
                'identity'          => $request->Document,
                'identity_number'   => $request->numberDocument,
                'license'           => $request->License,
                'license_number'    => $request->numberLicense,
                'marital_status'    => $request->Marital,
                'children_number'   => $request->numberChildren,
                'datebirthday'      => $request->dateBirthday
            ]);

            return ['message' => 'Success'];
        }
        return ['message' => 'Error'];
    }
}
