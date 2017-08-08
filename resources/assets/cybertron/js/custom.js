/* Write here your custom javascript codes */
$(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    })
})
/*Login y Logout */
    const loginSistema = () => {
        let username = $('.username').val()
        let password = $('.password').val()
        if(username === '' && password === '') return alertaSimple('','Favor de llenar todos los campos','error')
        if(username === '') return alertaSimple('','Favor de llenar el campo de Username','error')
        if(password === '') return alertaSimple('','Favor de llenar el campo de Password','error')
        $.ajax({
            url:'ajax/Controller/Login/login.php',
            type:'post',
            data: 'username=' + username + '&password=' + password,
            beforeSend: function(){
                $('.btnLogin').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            },
            success: (function(data) {
                $('.btnLogin').html('<i class="fa fa-sign-in"></i> Conectarse')
                if(data === 'no_existe') return alertaSimple('','El usuario y/o contraseña son incorrectos','warning')
                if(data === 'existe') {
                    alertaSimple('','Acceso Correcto','success',3000)
                    setTimeout(function () {
                        window.location.href = 'sistema'
                    }, 3000)
                }
            })
        })
    }

    const logoutSistema = () => {
        $.ajax({
            url:'ajax/Controller/Login/logout.php',
            type:'post',
            data: '',
            beforeSend: function(){
                alertaSimple('','Te desconectaste con exito','success')
            },
            success: (function(data) {
                setTimeout(function () {
                    window.location.href = 'login'
                }, 2000)
            })
        })
    }
/* End Login y Logout */

/* Resources */
    const alertaSimple = (titleAlerta = '',textoAlerta,tipoAalerta,tiempoAlerta = 2000) => {
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
        }).then(
            function () {},
            function (dismiss) { }
        )
    }

    const alertaSuccess = (titleAlerta = '',textoAlerta,tipoAalerta,tiempoAlerta = 2000) => {
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
        }).then(
            function () {},
            function (dismiss) { $('.modal').modal('toggle') }
        )
    }

    const loadingAjax = (textoAlerta,tipoAalerta) => {
        swal({
            html: textoAlerta,
            type: tipoAalerta,
            showConfirmButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        }).then(
            function () {},
            function (dismiss) { }
        )
    }

    const loadingCss = () => {
        $('div.loading').html('<div class="sk-fading-circle">' +
            '<div class="sk-circle1 sk-circle"></div>' +
            '<div class="sk-circle2 sk-circle"></div>' +
            '<div class="sk-circle3 sk-circle"></div>' +
            '<div class="sk-circle4 sk-circle"></div>' +
            '<div class="sk-circle5 sk-circle"></div>' +
            '<div class="sk-circle6 sk-circle"></div>' +
            '<div class="sk-circle7 sk-circle"></div>' +
            '<div class="sk-circle8 sk-circle"></div>' +
            '<div class="sk-circle9 sk-circle"></div>' +
            '<div class="sk-circle10 sk-circle"></div>' +
            '<div class="sk-circle11 sk-circle"></div>' +
            '<div class="sk-circle12 sk-circle"></div>' +
            '</div>')
    }

    const dataTable = (nameTable) => {
        console.log(nameTable)
        $('#'+ nameTable).DataTable()
    }
/* End Resources */

/* Load Plataform */
    const loadingSystem = (routeLoad) => {
        $('div.bodySystem').fadeOut(function() {
            $('div.loading').fadeIn(function() {
                $('.bodySystem').load(routeLoad, function() {
                    $('div.loading').fadeOut(function() {
                        $('.bodySystem').fadeIn()
                    })
                })
            })
        })
    }
/* End Load Plataform */

/* Function Modal */
    const bodyModal = (nameRoute, routeLoad) => {
        $(nameRoute).html('<h1 class="text-center text-primary"><i class="fa fa-gear fa-spin"></i> Cargando</h1>').promise().done(function() {
            $(nameRoute).load(routeLoad, function() { })
        })
    }
/* End Function Modal */

/* Routes System */
    $('.viewCP').click(function() {
        loadingSystem('ajax/Views/tableCP.php')
    })

    $('.changeTC').click(function() {
        bodyModal('div.bodychangeTC','ajax/Views/changeTC.php')
    })
/* End Routes System */