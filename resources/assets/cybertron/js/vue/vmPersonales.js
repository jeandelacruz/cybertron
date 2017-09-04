/**
 * Created by jdelacruz on 9/08/2017.
 */
var ubigeoID = ''
var extras = false

var vmDatosPersonales = new Vue({
    el: '#datosPersonales',

    data: {
        selectedD: null,
        selectedP: null,
        selectedDi: null,
        typeDocument: null,
        typeLicense: null,
        maritalStatus: null,
        departamento: [],
        provincia: [],
        distrito: [],
        oldDepartamento: '',
        oldProvincia: '',
        form: new Form({
            Names: '',
            FirstlastName: '',
            SecondlastName: '',
            Departamento: '',
            Provincia: '',
            Distrito: '',
            nameAddress: '',
            numberTelephone: '',
            numberMobile: '',
            Email: '',
            Document: '',
            numberDocument: '',
            License: '',
            numberLicense: '',
            Marital: '',
            numberChildren: '',
            dateBirthday: ''
        }),
        showPersonales: false
    },
    mounted()  {
        this.loadData()
        this.loadDepartamento()
    },
    methods: {
        loadData(){
            axios.get('viewProfile')
                .then(response => {
                    this.form.Names = CharUpper(response.data[0].name)
                    this.form.FirstlastName = CharUpper(response.data[0].first_last_name)
                    this.form.SecondlastName = CharUpper(response.data[0].second_last_name)
                    this.form.Email = response.data[0].email
                    let profileUser = response.data[0].users_information
                    if(profileUser){
                        this.form.nameAddress = profileUser.address
                        this.form.numberTelephone = profileUser.phone_home
                        this.form.numberMobile = profileUser.phone_mobile
                        this.form.Document = profileUser.identity
                        this.form.numberDocument = profileUser.identity_number
                        this.form.License = profileUser.license
                        this.form.numberLicense = profileUser.license_number
                        this.form.Marital = profileUser.marital_status
                        this.form.numberChildren = profileUser.children_number
                        this.form.dateBirthday = profileUser.datebirthday
                        ubigeoID = profileUser.ubigeo_id
                        extras = true
                        this.$nextTick( () => {
                            this.loadSelect()
                            this.loadExtra()
                        })
                    }
                })
                .catch(err => { console.log(err) })
        },
        loadDepartamento() {
            axios.post('viewDepartamento')
                .then(response => {
                    let arraydepartamento = []
                    let objectSearch = 'departamento'
                    objectToArray(response.data, arraydepartamento, objectSearch)
                    this.departamento = arraydepartamento
                })
                .catch(err => { console.log(err) })
        },
        loadProvincia: function(nameDepartamento) {
            if(nameDepartamento === null) {
                this.form.Departamento = null
                this.form.Provincia = null
                this.form.Distrito = null
            }
            if (this.oldDepartamento != nameDepartamento) this.selectedP = ''
            this.form.Departamento = nameDepartamento
            let parameters = { Departamento: nameDepartamento }
            axios.post('viewProvincia',parameters)
                .then(response => {
                    let arrayprovincia = []
                    let objectSearch = 'provincia'
                    objectToArray(response.data, arrayprovincia, objectSearch)
                    this.provincia = arrayprovincia
                })
                .catch(err => { console.log(err) })
        },
        loadDistrito: function(nameProvincia) {
            if (this.oldProvincia != nameProvincia) this.selectedDi = ''
            this.form.Provincia = nameProvincia
            let parameters = { Provincia: nameProvincia }
            axios.post('viewDistrito',parameters)
                .then(response => {
                    let arraydistrito = []
                    let objectSearch = 'distrito'
                    objectToArray(response.data, arraydistrito, objectSearch)
                    this.distrito = arraydistrito
                })
                .catch(err => { console.log(err) })
        },
        getDistrito: function(nameDistrito){
            this.form.Distrito = nameDistrito
        },
        loadSelect: function(){
            let parameters = { idUbigeo: ubigeoID }
            axios.post('viewUbigeo',parameters)
                .then(response => {
                    if(response.data[0]){
                        this.oldDepartamento = response.data[0].departamento
                        this.selectedD = response.data[0].departamento
                        this.oldProvincia = response.data[0].provincia
                        this.selectedP = response.data[0].provincia
                        this.selectedDi = response.data[0].distrito
                    }
                })
                .catch(err => { console.log(err) })
        },
        loadExtra: function(){
            if(extras){
                this.typeDocument = (this.form.Document).toUpperCase()
                this.typeLicense = this.form.License
                this.maritalStatus = CharUpper(this.form.Marital)
            }
            this.showPersonales = true
        },
        getDocument: function(typeDocument){
            this.form.Document = (typeDocument).toLowerCase()
        },
        getLicense: function(typeLicense){
            this.form.License = typeLicense
        },
        getMarital: function(typeMarital){
            this.form.Marital = (typeMarital).toLowerCase()
        },
        onSubmit() {
            $('.btnPersonales').html('<i class="fa fa-spin fa-spinner"></i> Cargando')
            this.form.post('/profile/saveDatos')
                .then(response => {
                    this.loadData()
                    vmProfile.loadProfile()
                    $('.btnPersonales').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','Tús Datos Personales se editaron correctamente','success')
                })
                .catch(error => {
                    $('.btnPersonales').html('<i class="fa fa-save"></i> Guardar Cambios')
                    alertaSimple('','No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas','error','4000')
                })
        }
    }
})

singleDate('dateBirthday', 'up')
$('input[name=dateBirthday]').on('apply.daterangepicker', function (ev, picker) {
    vmDatosPersonales.form.dateBirthday = picker.startDate.format('YYYY-MM-DD')
})