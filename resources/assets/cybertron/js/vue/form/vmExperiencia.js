/**
 * Created by jdelacruz on 16/08/2017.
 */
var vmFormExperiencia = new Vue({
    el: '#formExperiencia',
    data: {
        form: new Form({
            namePuesto: '',
            nameEmpresa: '',
            reviewPuesto: '',
            dateBegin: '',
            dateFinish: '',
            idExperience: ''
        }),
        completeJob: [],
        completeBusiness: []
    },
    methods: {
        onSubmit() {
            $('.btnExperiencia').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveExperiencia')
                .then(response => {
                    $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios')
                    vmExperiencia.refreshData()
                    alertaSimple('','Tú Experiencia laboral se edito correctamente','success')
                })
                .catch(error => {
                    $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
                })
        },
        loadExperience() {
            alertaAjax('<i class="fa fa-gears fa-spin"></i> Cargando datos...')
            axios.get('/updateExperience', {
                params: {
                    idExperience: this.form.idExperience
                }
            })
            .then(response => {
                this.form.namePuesto = response.data[0].name_job
                this.form.nameEmpresa = response.data[0].name_business
                this.form.reviewPuesto = response.data[0].review_business
                this.form.dateBegin = response.data[0].date_begin
                this.form.dateFinish = response.data[0].date_finish
                swal.close()
            })
            .catch(error => console.log(error))
        },
        nameInstitute() {
            axios.get('/getNamePuesto')
                .then(response => {
                    let arraynameJob = []
                    let objectSearch = 'name_job'
                    objectToArray(response.data, arraynameJob, objectSearch)
                    this.completeJob = arraynameJob
                })
                .catch(error => console.log(error))
        },
        nameBusiness() {
            axios.get('/getNameEmpresa')
                .then(response => {
                    let arraynameBusiness = []
                    let objectSearch = 'name_business'
                    objectToArray(response.data, arraynameBusiness, objectSearch)
                    this.completeBusiness = arraynameBusiness
                })
                .catch(error => console.log(error))
        }
    }
})

singleDate('dateBegin')
$('.dateBegin').on('apply.daterangepicker', function (ev, picker) {
    vmFormExperiencia.form.dateBegin = picker.startDate.format('YYYY-MM-DD')
})

singleDate('dateFinish')
$('.dateFinish').on('apply.daterangepicker', function (ev, picker) {
    vmFormExperiencia.form.dateFinish = picker.startDate.format('YYYY-MM-DD')
})