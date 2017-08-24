/**
 * Created by jdelacruz on 21/08/2017.
 */
var vmFormUser = new Vue({
    el: '#formUser',
    data: {
        selectType: '',
        UserType: [],
        form: new Form({
            userRed: '',
            typeUser: '',
            idUser: '',
            passUser: ''
        })
    },
    mounted(){
        this.typeOptions()
    },
    methods: {
        getTypeUser: function(typeUser) {
            this.form.typeUser = typeUser
        },
        typeOptions: function(){
            axios.get('viewJobs')
            .then(response => {
                let arrayJobs = []
                let objectSearch = 'name_job'
                objectToArray(response.data, arrayJobs, objectSearch)
                this.UserType = arrayJobs
            })
            .catch(err => { console.log(err) })
        },
        loadUser() {
            axios.get('/updateUser', {
                params: {
                    idUser: this.form.idUser
                }
            })
            .then(response => {
                this.form.userRed = response.data[0].username
                this.form.typeUser = response.data[0].name_job
                this.selectType = response.data[0].name_job
            })
            .catch(error => console.log(error))
        },
        onSubmit() {
            $('.btnUser').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/user/saveUser')
                .then(response => {
                    $('.btnUser').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','Usuario Editado correctamente','success')
                })
                .catch(error => {
                    $('.btnUser').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
                })
        }
    }
})