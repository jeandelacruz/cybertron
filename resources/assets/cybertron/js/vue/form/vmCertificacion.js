/**
 * Created by jdelacruz on 15/08/2017.
 */
var vmFormCertificaciones = new Vue({
    el: '#formCertificacion',
    data: {
        form: new Form({
            nameInstitution: '',
            nameCertification: '',
            dateBegin: '',
            dateFinish: ''
        })
    },
    methods: {
        onSubmit() {
            $('.btnCertificacion').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveCertificacion')
            .then(response => {
                $('.btnCertificacion').html('<i class="fa fa-plus"></i> Agregar')
                vmCertificaciones.loadData()
                alertaSimple('','Certificaciones Guardados correctamente','success')
            })
            .catch(error => {
                    $('.btnCertificacion').html('<i class="fa fa-plus"></i> Agregar')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
            })
        }
    }
})

singleDate('dateBegin')
$('.dateBegin').on('apply.daterangepicker', function (ev, picker) {
    vmFormCertificaciones.form.dateBegin = picker.startDate.format('YYYY-MM-DD')
})

singleDate('dateFinish')
$('.dateFinish').on('apply.daterangepicker', function (ev, picker) {
    vmFormCertificaciones.form.dateFinish = picker.startDate.format('YYYY-MM-DD')
})