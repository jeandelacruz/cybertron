/* Write here your custom javascript codes */
/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [ajaxSetup description]
 * @return Seguridad para todas las peticiones ajax se pasen con token
 */
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [logoutSistema description]
 * @return Valida los campos necesario y ejecuta el login
 */
var loginSistema = function loginSistema() {
    var username = $('.username').val();
    var password = $('.password').val();
    if (username === '' && password === '') return alertaSimple('', 'Favor de llenar todos los campos', 'error');
    if (username === '') return alertaSimple('', 'Favor de llenar el campo de Username', 'error');
    if (password === '') return alertaSimple('', 'Favor de llenar el campo de Password', 'error');
    $.ajax({
        beforeSend: function beforeSend() {
            $('.btnLogin').html('<i class="fa fa-spin fa-spinner"></i> Cargando');
        },
        success: function success() {
            $('#login-form').submit();
        }
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [logoutSistema description]
 * @return Deslogea al usuario del sistema
 */
var logoutSistema = function logoutSistema() {
    $.ajax({
        beforeSend: function beforeSend() {
            alertaSimple('', 'Te desconectaste con exito', 'success');
            setTimeout(function () {
                $('#logout-form').submit();
            }, 2000);
        }
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [alertaSimple description]
 * @textoAlerta Texto que mostrara la alerta
 * @tipoAalerta Tipo de alerta (succes,info,error,warning)
 * @return Retorna una alerta con sweetlalert2
 */
var alertaSimple = function alertaSimple() {
    var titleAlerta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var textoAlerta = arguments[1];
    var tipoAalerta = arguments[2];
    var tiempoAlerta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;

    swal({
        title: titleAlerta,
        html: textoAlerta,
        type: tipoAalerta,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: tiempoAlerta
    }).then(function () {}, function (dismiss) {});
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [loadingCss description]
 * @return Crea el loading interactivo en el cuero del contenido
 */
var loadingCss = function loadingCss() {
    $('div.loading').html('<div class="sk-fading-circle">' + '<div class="sk-circle1 sk-circle"></div>' + '<div class="sk-circle2 sk-circle"></div>' + '<div class="sk-circle3 sk-circle"></div>' + '<div class="sk-circle4 sk-circle"></div>' + '<div class="sk-circle5 sk-circle"></div>' + '<div class="sk-circle6 sk-circle"></div>' + '<div class="sk-circle7 sk-circle"></div>' + '<div class="sk-circle8 sk-circle"></div>' + '<div class="sk-circle9 sk-circle"></div>' + '<div class="sk-circle10 sk-circle"></div>' + '<div class="sk-circle11 sk-circle"></div>' + '<div class="sk-circle12 sk-circle"></div>' + '</div>');
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [loadingSystem description]
 * @routeLoad Ruta de donde se obtendra la informacion
 * @return Retorna lo que sera cargado en el cuerpo del sistema
 */
var loadingSystem = function loadingSystem(routeLoad) {
    $('div.bodySystem').fadeOut(function () {
        $('div.loading').fadeIn(function () {
            $('.bodySystem').load(routeLoad, function () {
                $('div.loading').fadeOut(function () {
                    $('.bodySystem').fadeIn();
                });
            });
        });
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [bodyModal description]
 * @nameRoute Nombre del cuerpo del modal a donde se cargara la informacion
 * @routeLoad La ruta que se cargara en el modal
 * @return Retorna lo que toma de la ruta al modal
 */
var bodyModal = function bodyModal(nameRoute, routeLoad) {
    $(nameRoute).html('' + '<div class="modal-content">' + '<div class="modal-body">' + '<div class="progress">' + '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="1000" aria-valuemin="0" aria-valuemax="100" style="width:100%">' + 'Cargando...' + '</div>' + '</div>' + '</div>' + '</div>').promise().done(function () {
        $(nameRoute).load(routeLoad, function () {});
    });
};

/**
 * Created by jdealcruz2712 on 20/08/2017.
 *
 * [updateModal description]
 * @nameRoute Nombre del cuerpo del modal a donde se cargara la informacion
 * @routeLoad La ruta que se cargara en el modal
 * @return Retorna lo que toma de la ruta al modal
 */
var updateModal = function updateModal(nameRoute, routeLoad, valID) {
    $(nameRoute).html('' + '<div class="modal-content">' + '<div class="modal-body">' + '<div class="progress">' + '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="1000" aria-valuemin="0" aria-valuemax="100" style="width:100%">' + 'Cargando...' + '</div>' + '</div>' + '</div>' + '</div>').promise().done(function () {
        $(nameRoute).load(routeLoad, { valueId: valID }, function () {});
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [activeDiv description]
 * @nameContainer Nombre del contenedor o item que se quitara el estilo active
 * @nameClass Nombre del contenedor o item que se agregara el estilo active
 * @return Agregara el estilo active al item deseado
 */
var activeDiv = function activeDiv(nameContainer, nameClass) {
    $(nameContainer).removeClass('active');
    $(nameClass).addClass('active');
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [singleDate description]
 * @nameInput Nombre del input a convertir en calendario
 * @return Retorna el calendario en el input ingresado con el formato 2017-08-18
 */
var singleDate = function singleDate(nameInput) {
    var drops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'down';

    $('input[name=' + nameInput).daterangepicker({
        locale: {
            format: 'YYYY-MM-DD'
        },
        singleDatePicker: true,
        showDropdowns: true,
        opens: "left",
        drops: drops,
        autoApply: false
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [objectToArray description]
 * @object Nombre declarado del objeto
 * @array Nombre declarado del array
 * @value Dato del objeto para guardar en el array
 * @return Convierte un objeto a un array
 */
function objectToArray(object, array, value) {
    object.forEach(function (item, index) {
        return array.push(item[value]);
    });
}

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [CharUpper description]
 * @string Texto a cambiar
 * @return Retorna el primer caracter en mayuscula y lo demas en minuscula
 */
var CharUpper = function CharUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [formEnter description]
 * @return Al darle con la tecla enter se logea en el sistema
 */
var formEnter = function formEnter(idForm) {
    var functionForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    $('#' + idForm).keypress(function (e) {
        if (e.which == 13) {
            if (functionForm) loginSistema();
            return false;
        }
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [dataTables_lang_spanish description]
 * @return Retorna el idioma para el datatable
 */
var dataTables_lang_spanish = function dataTables_lang_spanish() {
    var lang = {
        'sProcessing': 'Procesando...',
        'sLengthMenu': 'Mostrar _MENU_ registros',
        'sZeroRecords': 'No se encontraron resultados',
        'sEmptyTable': 'Ningún dato disponible en esta tabla',
        'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix': '',
        'sSearch': 'Buscar:',
        'sUrl': '',
        'sInfoThousands': ',',
        'sLoadingRecords': 'Cargando...',
        'oPaginate': {
            'sFirst': 'Primero',
            'sLast': 'Último',
            'sNext': 'Siguiente',
            'sPrevious': 'Anterior'
        },
        'oAria': {
            'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
            'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
    };

    return lang;
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [columnsDatatable description]
 * @routes El ID de la tabla
 * @return Devuelve las columnas a tomarse
 */
var columnsDatatable = function columnsDatatable(route) {
    var columns = '';
    if (route === 'listUsers') {
        columns = [{ data: 'id', name: 'id' }, { data: 'name', name: 'name' }, { data: 'last_name', name: 'last_name' }, { data: 'username', name: 'username' }, { data: 'roles', name: 'roles' }, { data: 'status', name: 'status', className: "text-center" }, { data: 'action', name: 'action', orderable: false, searchable: false, className: "text-center" }];
    }
    return columns;
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [dataTables description]
 * @nombreDIV ID de la tabla
 * @routes Ruta de donde se tomara los datos
 * @return Estructura el Datatable ah tomarse
 */
var dataTables = function dataTables(nombreDIV, routes) {
    //Eliminación del DataTable en caso de que exista
    $('#' + nombreDIV).dataTable().fnDestroy();
    //Creacion del DataTable
    $('#' + nombreDIV).DataTable({
        'deferRender': true,
        'processing': true,
        'serverSide': true,
        'ajax': routes,
        'paging': true,
        'pageLength': 50,
        'lengthMenu': [50, 100, 200, 300, 400, 500],
        'language': dataTables_lang_spanish(),
        'columns': columnsDatatable(nombreDIV)
    });
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [filterLetter description]
 * @return Solo permite letras y letras con acentos en los inputs
 */
var filterLetter = function filterLetter(e) {
    var key = e.keyCode || e.which;
    var board = String.fromCharCode(key).toLowerCase();
    var letter = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    var specials = "8-37-39-46";
    var specialskey = false;
    for (var i in specials) {
        if (key === specials[i]) {
            specialskey = true;
            break;
        }
    }
    if (letter.indexOf(board) === -1 && !specialskey) {
        return false;
    }
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [BlockCopyPaste description]
 * @return Bloquea el Ctrl C y Ctrl V
 */
var BlockCopyPaste = function BlockCopyPaste(e) {
    if (e.ctrlKey === true && (e.which === 118 || e.which === 86)) return false;
};

/**
 * Created by jdealcruz2712 on 18/08/2017.
 *
 * [filterNumber description]
 * @return Solo permite ingresar numeros
 */
var filterNumber = function filterNumber(e) {
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57 || key === 8 || key === 9;
};

/**
 * Created by jdealcruz2712 on 22/08/2017.
 *
 * [changeStatus description]
 * @return Cambia el estado del usuario [Activo | Cesador]
 */
var changeStatus = function changeStatus(idUser, statusUser) {
    axios.post('/user/changeStatus', {
        idUser: idUser,
        statusUser: statusUser
    }).then(function (response) {
        alertaSimple('', 'Se cambio el estado del Usuario Correctamente', 'success');
        $('#listUsers').DataTable().ajax.reload(null, false);
    }).catch(function (error) {
        alertaSimple('', 'No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas', 'error', '4000');
    });
};