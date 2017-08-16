/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmFormDatosAcademicos = new Vue({
    el: '#formAcademico',
    data: {
        selectedInstitute: null,
        selectedAcademy: null,
        form: new Form({
            typeInstitute: '',
            nameInstitution: '',
            situationAcademy: '',
            nameCareer: '',
            dateBegin: '',
            dateFinish: ''
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
                alertaSimple('','Tús Datos Personales se editaron correctamente','success')
            })
            .catch(error => {
                $('.btnAcademicos').html('<i class="fa fa-save"></i> Guardar Cambios')
                alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
            })
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