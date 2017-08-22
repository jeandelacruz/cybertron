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
        })
    },
    methods: {
        getTypeInstitute: function(typeInstitute) {
            this.form.typeInstitute = typeInstitute
        },
        getSituationAcademy: function(situationAcademy) {
            this.form.situationAcademy = situationAcademy
        },
        onSubmit() {
            $('.btnAcademicos').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveAcademico')
            .then(response => {
                $('.btnAcademicos').html('<i class="fa fa-save"></i> Guardar Cambios')
                vmDatosAcademicos.loadData()
                alertaSimple('','Tús Datos Academicos se editaron correctamente','success')
            })
            .catch(error => {
                $('.btnAcademicos').html('<i class="fa fa-save"></i> Guardar Cambios')
                alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
            })
        },
        loadAcademico() {
            axios.get('/updateAcademico', {
                    params: {
                        idAcademico: this.form.idAcademico
                    }
                })
                .then(response => {
                    this.selectedTypeinstitute = CharUpper(response.data[0].type_institute)
                    this.selectedSituationacademy = CharUpper(response.data[0].situation_academy)
                    this.form.nameInstitution = CharUpper(response.data[0].name_institute)
                    this.form.nameCareer = CharUpper(response.data[0].name_career)
                    this.form.dateBegin = response.data[0].date_begin
                    this.form.dateFinish = response.data[0].date_finish
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