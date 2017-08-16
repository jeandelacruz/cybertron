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
            dateFinish: ''
        })
    },
    methods: {
        onSubmit() {
            $('.btnExperiencia').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveExperiencia')
                .then(response => {
                    console.log(response)
                    $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios')
                    vmExperiencia.loadData()
                    alertaSimple('','Tu Experiencia laboral se registro correctamente','success')
                })
                .catch(error => {
                    $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
                })
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