/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmFormDatosAcademicos = new Vue({
    el: '#formAcademico',
    data: {
        selectedTypeinstitute: null,
        selectedSituationacademy: null,
        form: new Form({
            typeInstitute: '',
            nameInstitution: '',
            situationAcademy: '',
            nameCareer: '',
            dateBegin: '',
            dateFinish: '',
            idAcademico: ''
        }),
        showdateFinish: true,
        completeInstitute: [],
        completeCareer: []
    },
    methods: {
        getTypeInstitute: function(typeInstitute) {
            this.form.typeInstitute = typeInstitute
            this.nameInstitute()
            this.nameCareers()
        },
        getSituationAcademy: function(situationAcademy) {
            this.form.situationAcademy = situationAcademy
            if(situationAcademy === 'Cursando') {
                this.showdateFinish = false
                this.form.dateFinish = moment().format("DD-MM-YYYY")
            }else{
                this.showdateFinish = true
            }
        },
        onSubmit() {
            $('.btnAcademicos').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveAcademico')
            .then(response => {
                $('.btnAcademicos').html('<i class="fa fa-save"></i> Guardar Cambios')
                vmDatosAcademicos.refreshData()
                alertaSimple('','Tús Datos Academicos se editaron correctamente','success')
            })
            .catch(error => {
                $('.btnAcademicos').html('<i class="fa fa-save"></i> Guardar Cambios')
                alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
            })
        },
        loadAcademico() {
            alertaAjax('<i class="fa fa-gears fa-spin"></i> Cargando datos...')
            axios.get('/updateAcademico', {
                    params: {
                        idAcademico: this.form.idAcademico
                    }
                })
                .then(response => {
                    this.selectedTypeinstitute = CharUpper(response.data[0].type_institute)
                    this.selectedSituationacademy = CharUpper(response.data[0].situation_academy)
                    this.form.nameInstitution = response.data[0].name_institute
                    this.form.nameCareer = response.data[0].name_career
                    this.form.dateBegin = response.data[0].date_begin
                    this.form.dateFinish = response.data[0].date_finish
                    swal.close()
                })
                .catch(error => console.log(error))
        },
        nameInstitute() {
            axios.get('/getNameInstitutesAcademy', {
                    params: {
                        typeInstitute: this.form.typeInstitute
                    }
                })
                .then(response => {
                    let arraynameInstitute = []
                    let objectSearch = 'name_institute'
                    objectToArray(response.data, arraynameInstitute, objectSearch)
                    this.completeInstitute = arraynameInstitute
                })
                .catch(error => console.log(error))
        },
        nameCareers() {
            axios.get('/getNameCareers', {
                    params: {
                        typeInstitute: this.form.typeInstitute
                    }
                })
                .then(response => {
                    let arraynameCareer = []
                    let objectSearch = 'name_career'
                    objectToArray(response.data, arraynameCareer, objectSearch)
                    this.completeCareer = arraynameCareer
                })
                .catch(error => console.log(error))
        }
    }
})

singleDate('dateBegin')
$('.dateBegin').on('apply.daterangepicker', function (ev, picker) {
    vmFormDatosAcademicos.form.dateBegin = picker.startDate.format('YYYY-MM-DD')
})

singleDate('dateFinish')
$('.dateFinish').on('apply.daterangepicker', function (ev, picker) {
    vmFormDatosAcademicos.form.dateFinish = picker.startDate.format('YYYY-MM-DD')
})