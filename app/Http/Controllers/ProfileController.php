<?php

namespace Cybertron\Http\Controllers;

use Carbon\Carbon;
use Cybertron\Ubigeos;
use Cybertron\User;
use Cybertron\UserInformation;
use Cybertron\UsersStudies;
use Cybertron\UsersCertificate;
use Cybertron\UsersExperience;
use Cybertron\UsersRepositories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

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
        if ($request->isMethod('get')) {
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
        if ($request->isMethod('get')) {
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
        if ($request->isMethod('get')) {
            $resultado = UsersStudies::Select()
                ->where('user_id', Auth::id())
                ->orderby('date_begin','desc')
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewCertificaciones(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersCertificate::Select()
                ->where('user_id', Auth::id())
                ->orderby('date_begin','desc')
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function viewExperiencias(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersExperience::Select()
                ->where('user_id', Auth::id())
                ->orderby('date_begin','desc')
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

    public function getNameInstitutesAcademy(Request $request){
        if ($request->isMethod('get')) {
            if($request->typeInstitute == null){
                $resultado = UsersStudies::Select('name_institute')
                    ->groupBy('name_institute')
                    ->orderby('name_institute','asc')
                    ->get()
                    ->toArray();
            }else{
                $resultado = UsersStudies::Select('name_institute')
                    ->where('type_institute', $request->typeInstitute)
                    ->groupBy('name_institute')
                    ->orderby('name_institute','asc')
                    ->get()
                    ->toArray();
            }
        }
        return $resultado;
    }

    public function getNameCareers(Request $request){
        if ($request->isMethod('get')) {
            if($request->typeInstitute == null){
                $resultado = UsersStudies::Select('name_career')
                    ->groupBy('name_career')
                    ->orderby('name_career','asc')
                    ->get()
                    ->toArray();
            }else{
                $resultado = UsersStudies::Select('name_career')
                    ->where('type_institute', $request->typeInstitute)
                    ->groupBy('name_career')
                    ->orderby('name_career','asc')
                    ->get()
                    ->toArray();
            }
        }
        return $resultado;
    }

    public function getNameInstitutesCertificate(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersCertificate::Select('name_institute')
                ->groupBy('name_institute')
                ->orderby('name_institute','asc')
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function getNameCertificate(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersCertificate::Select('name_certificate')
                ->groupBy('name_certificate')
                ->orderby('name_certificate','asc')
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function getNamePuesto(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersExperience::Select('name_job')
                ->groupBy('name_job')
                ->orderby('name_job','asc')
                ->get()
                ->toArray();
        }
        return $resultado;
    }

    public function getNameEmpresa(Request $request){
        if ($request->isMethod('get')) {
            $resultado = UsersExperience::Select('name_business')
                ->groupBy('name_business')
                ->orderby('name_business','asc')
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
                'Names'             => 'required',
                'FirstlastName'     => 'required',
                'SecondlastName'    => 'required',
                'Document'          => 'required',
                'numberDocument'    => 'required'
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

    // Funciones de Upload
    public function getNumberDocument(){
        $user = UserInformation::Select()
                ->where('user_id', Auth::id())
                ->get()
                ->toArray();

        return $user[0]['identity_number'];
    }

    public function uploadFile(Request $request){
        if(!$request->hasFile('file'))
            return response()->json([
                'error' => 'No File Uploaded'
            ]);

        $file = $request->file('file');

        if(!$file->isValid())
            return response()->json([
                'error' => 'File is not valid!'
            ]);

        $actionUpload = false;
        $extensionFile = $file->getClientOriginalExtension();

        switch($file->getClientMimeType()){
            case 'application/pdf':
                $actionUpload = true;
                break;
            case ('image/jpeg' && $request->nameUpload == 'avatar'):
            case ('image/png' && $request->nameUpload == 'avatar'):
            case ('image/bmp' && $request->nameUpload == 'avatar'):
                $file = Image::make($file)->fit(450, 450)->encode('jpg');
                $extensionFile = 'jpg';
                break;
            case 'image/jpeg':
            case 'image/png':
            case 'image/bmp':
                $file = Image::make($file)->encode('jpg');
                $extensionFile = 'jpg';
                break;
        }

        $nameFile = $request->nameUpload.'.'.$extensionFile;
        $nameFolder = $this->getNumberDocument();
        $nameDirectory = 'storage/'.$this->getNumberDocument();

        UsersRepositories::updateOrInsert([
            'user_id'       => Auth::id(),
            'name_file'     => $request->nameUpload
        ], [
            'user_id'           => Auth::id(),
            'name_folder'       => $nameFolder,
            'file_extension'    => '.'.$extensionFile,
            'name_file'         => $request->nameUpload
        ]);

        if(!File::exists($nameDirectory)){
            $this->makeDirectory($nameDirectory);
        }

        $this->deleteFile($nameDirectory.'/'.$request->nameUpload,$extensionFile);
        if($actionUpload){
            $file->move($nameDirectory, $nameFile);
        }else{
            $file->save($nameDirectory.'/'.$nameFile);
        }

        return response(json_encode([
            'code'          => '200',
            'message'       => 'success',
            'success'       => 'File Uploaded',
            'rootPath'      => $nameDirectory.'/'.$nameFile.'?version='.Carbon::now(),
            'nameUpload'    => $request->nameUpload
        ], JSON_UNESCAPED_SLASHES))->header('Content-Type', "application/json");

    }

    public function getRepositories(Request $request){
        if($request->idUser){
            $idUser = $request->idUser;
        }else{
            $idUser = Auth::id();
        }
        $searchRepositories = UsersRepositories::Select()
                                ->where('user_id', $idUser)
                                ->where('name_file', $request->nameFile)
                                ->get()
                                ->toJson();

        return $searchRepositories;
    }
}