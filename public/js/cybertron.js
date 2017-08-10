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
        url: 'ajax/Controller/Login/login.php',
        type: 'post',
        data: 'username=' + username + '&password=' + password,
        beforeSend: function beforeSend() {
            $('.btnLogin').html('<i class="fa fa-spin fa-spinner"></i> Cargando');
        },
        success: function success(data) {
            $('.btnLogin').html('<i class="fa fa-sign-in"></i> Conectarse');
            if (data === 'no_existe') return alertaSimple('', 'El usuario y/o contraseña son incorrectos', 'warning');
            if (data === 'existe') {
                alertaSimple('', 'Acceso Correcto', 'success', 3000);
                setTimeout(function () {
                    window.location.href = 'sistema';
                }, 3000);
            }
        }
    });
};

var logoutSistema = function logoutSistema() {
    $.ajax({
        url: 'ajax/Controller/Login/logout.php',
        type: 'post',
        data: '',
        beforeSend: function beforeSend() {
            alertaSimple('', 'Te desconectaste con exito', 'success');
        },
        success: function success(data) {
            setTimeout(function () {
                window.location.href = 'login';
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
    $(nameRoute).html('<h1 class="text-center text-primary"><i class="fa fa-gear fa-spin"></i> Cargando</h1>').promise().done(function () {
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
        showDropdowns: true
    });
};
/* End Date Picker Single */