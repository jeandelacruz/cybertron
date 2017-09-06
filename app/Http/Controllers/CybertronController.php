<?php

namespace Cybertron\Http\Controllers;

use Illuminate\Support\Facades\File;
use Yajra\Datatables\Datatables;

class CybertronController extends Controller
{
    /**
     * [FormatDatatable Función que retorna en formato Datatable]
     * @param [Collection] $collection [Collection con los datos a mostrar en los reportes]
     */
    protected function FormatDatatable($collection){
        return Datatables::of($collection)
            ->make(true);
    }

    /**
     * [makeDirectory Función que crea una carpeta]
     * @param $ubicacion [Ubicación de la carpeta a crear]
     */
    protected function makeDirectory($ubicacion){
        return File::makeDirectory($ubicacion, 0777, true);
    }

    /**
     * [renameDirectory Función que renombra una carpeta (la mueve)]
     * @param $ubicacion [Ubicación de la carpeta a crear]
     */
    protected function renameDirectory($ubicacionAnterior, $ubicacionNueva){
        return File::move($ubicacionAnterior,$ubicacionNueva);
    }

    /**
     * [deleteFile Función que elimina un archivo]
     * @param $fileName [Ubicación y archivo a borrar]
     * @param $extensionFile [Extension del archivo a borrar]
     */
    protected function deleteFile($fileName,$extensionFile){
        $extension = ($extensionFile == 'pdf') ?  '.jpg' : '.pdf';
        return File::delete($fileName.$extension);
    }
}
