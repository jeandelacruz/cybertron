/**
 * Created by jdelacruz on 21/08/2017.
 */
var vmFormUser = new Vue({
    el: '#formUser',
    data: {
        typeDocument: null,
        selectType: '',
        UserType: [],
        Projects: [],
        selectProject: '',
        managerProject: '',
        form: new Form({
            userRed: '',
            typeUser: '',
            idUser: '',
            passUser: '',
            Document: '',
            numberDocument: '',
            projectUser: ''
        })
    },
    created(){
        this.typeOptions()
        this.loadProjects()
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
            alertaAjax('<i class="fa fa-gears fa-spin"></i> Cargando datos...')
            axios.get('/updateUser', {
                params: {
                    idUser: this.form.idUser
                }
            })
            .then(response => {
                this.form.userRed = response.data[0].username
                this.form.typeUser = response.data[0].name_job
                this.selectType = response.data[0].name_job
                if(response.data[0].identity){
                    this.form.Document = response.data[0].identity
                    this.typeDocument = (this.form.Document).toUpperCase()
                }
                if(response.data[0].identity_number){
                    this.form.numberDocument = response.data[0].identity_number
                }
                this.selectProject = response.data[0].name_project
                swal.close()
            })
            .catch(error => console.log(error))
        },
        getDocument: function(typeDocument){
            this.form.Document = (typeDocument).toLowerCase()
        },
        loadProjects() {
            axios.post('user/viewProjects')
                .then(response => {
                    let arrayproject = []
                    let objectSearch = 'name_project'
                    objectToArray(response.data, arrayproject, objectSearch)
                    this.Projects = arrayproject
                })
                .catch(err => { console.log(err) })
        },
        getProject(data) {
            axios.get('user/getManagerProject', {
                params: {
                    name_project: data
                }
            })
                .then(response => {
                    this.managerProject = response.data
                    this.form.projectUser = data
                })
                .catch(err => { console.log(err) })
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