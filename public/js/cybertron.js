/* Write here your custom javascript codes */
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

/*Login y Logout */
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
/* End Login y Logout */

/* Resources */
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

var alertaSuccess = function alertaSuccess() {
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
    }).then(function () {}, function (dismiss) {
        $('.modal').modal('toggle');
    });
};

var loadingAjax = function loadingAjax(textoAlerta, tipoAalerta) {
    swal({
        html: textoAlerta,
        type: tipoAalerta,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    }).then(function () {}, function (dismiss) {});
};

var loadingCss = function loadingCss() {
    $('div.loading').html('<div class="sk-fading-circle">' + '<div class="sk-circle1 sk-circle"></div>' + '<div class="sk-circle2 sk-circle"></div>' + '<div class="sk-circle3 sk-circle"></div>' + '<div class="sk-circle4 sk-circle"></div>' + '<div class="sk-circle5 sk-circle"></div>' + '<div class="sk-circle6 sk-circle"></div>' + '<div class="sk-circle7 sk-circle"></div>' + '<div class="sk-circle8 sk-circle"></div>' + '<div class="sk-circle9 sk-circle"></div>' + '<div class="sk-circle10 sk-circle"></div>' + '<div class="sk-circle11 sk-circle"></div>' + '<div class="sk-circle12 sk-circle"></div>' + '</div>');
};

var dataTable = function dataTable(nameTable) {
    console.log(nameTable);
    $('#' + nameTable).DataTable();
};
/* End Resources */

/* Load Plataform */
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
/* End Load Plataform */

/* Function Modal */
var bodyModal = function bodyModal(nameRoute, routeLoad) {
    $(nameRoute).html('' + '<div class="modal-content">' + '<div class="modal-body">' + '<div class="progress">' + '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="1000" aria-valuemin="0" aria-valuemax="100" style="width:100%">' + 'Cargando...' + '</div>' + '</div>' + '</div>' + '</div>').promise().done(function () {
        $(nameRoute).load(routeLoad, function () {});
    });
};
/* End Function Modal */

/* Add Active Div */
var activeDiv = function activeDiv(nameContainer, nameClass) {
    $(nameContainer).removeClass('active');
    $(nameClass).addClass('active');
};
/* End Add Active Div */

/* Date Picker Single */
var singleDate = function singleDate(nameInput) {
    $('input[name=' + nameInput).daterangepicker({
        locale: {
            format: 'YYYY-MM-DD'
        },
        singleDatePicker: true,
        showDropdowns: true,
        autoApply: false
    });
};

var eventsingleDate = function eventsingleDate(nameInput, loadValue) {
    $('input[name=' + +']').on('apply.daterangepicker', function (ev, picker) {
        loadValue = picker.startDate.format('YYYY-MM-DD');
    });
};
/* End Date Picker Single */

/* For Each Ubigeos */
function objectToArray(object, array, value) {
    object.forEach(function (item, index) {
        return array.push(item[value]);
    });
}
/* End For Each Ubigeos */

/* First Char UpperCase */
var CharUpper = function CharUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
/* End First Char UpperCase */

/* Capture Event Enter Form Login */
$('#login-form').keypress(function (e) {
    if (e.which == 13) {
        loginSistema();
    }
});
/* End Capture Event Enter Form Login */

/* Datatables */
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

var columnsDatatable = function columnsDatatable(route) {
    var columns = '';
    if (route === 'listUsers') {
        columns = [{ data: 'id', name: 'id' }, { data: 'name', name: 'name' }, { data: 'last_name', name: 'last_name' }, { data: 'username', name: 'username' }, { data: 'roles', name: 'roles' }, { data: 'action', name: 'action', orderable: false, searchable: false, className: "text-center" }];
    }
    return columns;
};

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
/* End Datatables */