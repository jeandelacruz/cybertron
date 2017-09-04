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
            dateFinish: '',
            idCertificado: ''
        }),
        showdateFinish: true,
        completeInstitute: [],
        completeCertification: []
    },
    methods: {
        onSubmit() {
            $('.btnCertificacion').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveCertificacion')
            .then(response => {
                $('.btnCertificacion').html('<i class="fa fa-save"></i> Guardar Cambios')
                vmCertificaciones.refreshData()
                alertaSimple('','Certificaciones Editados correctamente','success')
            })
            .catch(error => {
                    $('.btnCertificacion').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
            })
        },
        loadCertificate() {
            alertaAjax('<i class="fa fa-gears fa-spin"></i> Cargando datos...')
            axios.get('/updateCertificado', {
                params: {
                    idCertificado: this.form.idCertificado
                }
            })
            .then(response => {
                this.form.nameInstitution = response.data[0].name_institute
                this.form.nameCertification = response.data[0].name_certificate
                this.form.dateBegin = response.data[0].date_begin
                this.form.dateFinish = response.data[0].date_finish
                swal.close()
            })
            .catch(error => console.log(error))
        },
        nameInstitute() {
            axios.get('/getNameInstitutesCertificate')
                .then(response => {
                    let arraynameInstitute = []
                    let objectSearch = 'name_institute'
                    objectToArray(response.data, arraynameInstitute, objectSearch)
                    this.completeInstitute = arraynameInstitute
                })
                .catch(error => console.log(error))
        },
        nameCertification() {
            axios.get('/getNameCertificate')
                .then(response => {
                    let arraynameCertification = []
                    let objectSearch = 'name_certificate'
                    objectToArray(response.data, arraynameCertification, objectSearch)
                    this.completeCertification = arraynameCertification
                })
                .catch(error => console.log(error))
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