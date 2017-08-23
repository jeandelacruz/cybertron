<?php

namespace Cybertron\Http\Controllers;

use Cybertron\Ubigeos;
use Cybertron\User;
use Cybertron\UserInformation;
use Cybertron\UsersStudies;
use Cybertron\UsersCertificate;
use Cybertron\UsersExperience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProfileController extends CybertronController
{

    public function __construct(){
        $this->middleware('auth');
    }

    // Rutas por controlador
    public function index(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('front');
    }

    public function myProfile(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('elements/myProfile/profile');
        return view('errors/permission');
    }

    public function Settings(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) return view('elements/Settings/settings');
    }


    // Acciones en las rutas
    public function viewProfile(Request $request){
        if ($request->isMethod('post')) {
            $resultado = User::Select()
                ->with('usersInformation')
                ->with('roles')
                ->where('id', Auth::id())
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewProfileJob(Request $request){
        if ($request->isMethod('post')) {
            $resultado = User::Select()
                ->where('users.id', Auth::id())
                ->join('users_jobs', 'users.id_job', '=', 'users_jobs.id')
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

    public function viewDatosAcademicos(Request $request){
        if ($request->isMethod('post')) {
            $resultado = UsersStudies::Select()
                ->where('user_id', Auth::id())
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewCertificaciones(Request $request){
        if ($request->isMethod('post')) {
            $resultado = UsersCertificate::Select()
                ->where('user_id', Auth::id())
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewExperiencias(Request $request){
        if ($request->isMethod('post')) {
            $resultado = UsersExperience::Select()
                ->where('user_id', Auth::id())
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function updateAcademico(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersStudies::Select()
                ->where('id', $request->idAcademico)
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function updateCertificado(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersCertificate::Select()
                ->where('id', $request->idCertificado)
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function updateExperience(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersExperience::Select()
                ->where('id', $request->idExperience)
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    // Rutas de Formulario
    public function formDatosAcademicos(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) {
            if($request->valueId == null){
                return view('elements/formularios/formAcademico')->with(array(
                    'updateForm'    => false
                ));
            }else{
                return view('elements/formularios/formAcademico')->with(array(
                    'updateForm'    => true,
                    'id'            =>  $request->valueId
                ));
            }
        }
        return view('errors/permission');
    }

    public function formCertificaciones(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) {
            if($request->valueId == null){
                return view('elements/formularios/formCertificacion')->with(array(
                    'updateForm'    => false
                ));
            }else{
                return view('elements/formularios/formCertificacion')->with(array(
                    'updateForm'    => true,
                    'id'            =>  $request->valueId
                ));
            }
        }
        return view('errors/permission');
    }

    public function formExperiencia(Request $request){
        $response = $request->user()->authorizeRoles(['user', 'admin']);
        if($response) {
            if($request->valueId == null){
                return view('elements/formularios/formExperiencia')->with(array(
                    'updateForm'    => false
                ));
            }else{
                return view('elements/formularios/formExperiencia')->with(array(
                    'updateForm'    => true,
                    'id'            =>  $request->valueId
                ));
            }
        }
        return view('errors/permission');
    }

    // Acciones de Formulario
    public function saveDatos(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'Names'     => 'required',
                'FirstlastName'  => 'required',
                'SecondlastName'  => 'required'
            ]);

            $idUbigeo = $this->getUbigeo($request->Departamento,$request->Provincia,$request->Distrito);

            if($idUbigeo){
                $ubigeo = $idUbigeo[0]['ubigeo'];
            }else{
                $ubigeo = '10000';
            }

            User::where('id', Auth::id())
                ->update([
                    'name'                  => Str::upper($request->Names),
                    'first_last_name'       => Str::upper($request->FirstlastName),
                    'second_last_name'      => Str::upper($request->SecondlastName),
                    'email'                 => $request->Email
                ]);

            UserInformation::updateOrInsert([
                'user_id' => Auth::id()
            ], [
                'phone_home'        => $request->numberTelephone,
                'phone_mobile'      => $request->numberMobile,
                'ubigeo_id'         => $ubigeo,
                'address'           => Str::upper($request->nameAddress),
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

    public function saveAcademico(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'nameInstitution'   => 'required',
                'nameCareer'        => 'required',
                'dateBegin'         => 'required',
                'dateFinish'        => 'required'
            ]);

            UsersStudies::updateOrInsert([
                'id' => $request->idAcademico
            ], [
                'user_id'               => Auth::id(),
                'type_institute'        => Str::lower($request->typeInstitute),
                'situation_academy'     => Str::lower($request->situationAcademy),
                'name_institute'        => Str::upper($request->nameInstitution),
                'name_career'           => Str::upper($request->nameCareer),
                'date_begin'            => $request->dateBegin,
                'date_finish'           => $request->dateFinish
            ]);

            return ['message' => 'Success'];
        }
        return ['message' => 'Error'];
    }

    public function saveCertificacion(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'nameInstitution'       => 'required',
                'nameCertification'     => 'required',
                'dateBegin'             => 'required',
                'dateFinish'            => 'required'
            ]);

            UsersCertificate::updateOrInsert([
                'id' => $request->idCertificado
            ], [
                'user_id'                   => Auth::id(),
                'name_institute'            => Str::upper($request->nameInstitution),
                'name_certificate'          => Str::upper($request->nameCertification),
                'date_begin'                => $request->dateBegin,
                'date_finish'               => $request->dateFinish
            ]);

            return ['message' => 'Success'];
        }
        return ['message' => 'Error'];
    }

    public function saveExperiencia(Request $request){
        if ($request->isMethod('post')) {
            $this->validate(request(), [
                'namePuesto'        => 'required',
                'nameEmpresa'       => 'required',
                'reviewPuesto'      => 'required',
                'dateBegin'         => 'required',
                'dateFinish'        => 'required'
            ]);

            UsersExperience::updateOrInsert([
                'id' => $request->idExperience
            ], [
                'user_id'               => Auth::id(),
                'name_job'              => Str::upper($request->namePuesto),
                'name_business'         => Str::upper($request->nameEmpresa),
                'review_business'       => $request->reviewPuesto,
                'date_begin'            => $request->dateBegin,
                'date_finish'           => $request->dateFinish
            ]);

            return ['message' => 'Success'];
        }
        return ['message' => 'Error'];
    }
}
