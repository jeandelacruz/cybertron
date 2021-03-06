/**
 * Created by jdelacruz on 22/08/2017.
 */
var vmBio = new Vue({
    el:'#bioUser',
    data: {
        nameComplete: '-',
        typeDocument: '-',
        numberDocument: '-',
        roleUser: '-',
        dateBirthday: '-',
        daysBirthday: '-',
        Email: '-',
        numberTelephone: '-',
        numberMobile: '-',
        License: '-',
        numberLicense: '-',
        Marital: '-',
        numberChildren: '-',
        dateBorn: '-',
        Ubigeo: '-',
        nameAddress: '-',
        idUser: '-',
        routeAvatar: '/assets/img/user.jpg',
        routeCV: ''
    },
    methods: {
        loadProfile(){
            alertaAjax('<i class="fa fa-gears fa-spin"></i> Cargando datos...')
            axios.get('/user/viewProfile', {
                params: {
                    idUser: this.idUser
                }
            }).then(response => {
                this.nameComplete = CharUpper(response.data[0].name + ' ' + response.data[0].first_last_name + ' ' + response.data[0].second_last_name)
                this.Email = response.data[0].email
                let profileUser = response.data[0].users_information
                if(profileUser){
                    this.nameAddress = (profileUser.address === null ? '-' : profileUser.address)
                    this.typeDocument = (profileUser.identity === null ? '-' : (profileUser.identity).toUpperCase())
                    this.numberDocument = (profileUser.identity_number === null ? '-' : profileUser.identity_number)
                    this.numberTelephone = (profileUser.phone_home === null ? '-' : profileUser.phone_home)
                    this.numberMobile = (profileUser.phone_mobile === null ? '-' : profileUser.phone_mobile)
                    this.License = (profileUser.license === null ? '-' : profileUser.license)
                    this.numberLicense = (profileUser.license_number === null ? '-' : profileUser.license_number)
                    this.Marital = (profileUser.marital_status === null ? '-' : CharUpper(profileUser.marital_status))
                    this.numberChildren = (profileUser.children_number === null ? '-' : profileUser.children_number)
                    this.dateBorn = (profileUser.datebirthday === null ? '-' : moment(profileUser.datebirthday).format('DD/MM/YYYY'))
                    this.Ubigeo = (profileUser.ubigeo_id === null ? '-' : profileUser.ubigeo_id)
                    this.dateBirthday = moment().format('DD/MM')
                    this.daysBirthday = '0'
                    if(profileUser.datebirthday){
                        this.dateBirthday = moment(profileUser.datebirthday).format('DD/MM') + moment().format('/YYYY')
                        this.daysBirthday = validateBirthday(profileUser.datebirthday)
                    }
                }
                swal.close()
            }).catch(err => console.log(err))

            axios.get('/getRepositories', {
                params: {
                        idUser: this.idUser,
                        nameFile: 'avatar'
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeAvatar = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                }
            })

            axios.get('/getRepositories', {
                params: {
                    idUser: this.idUser,
                    nameFile: 'curriculum_vitae'
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeCV = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                }
            })

            axios.get('/user/viewJob', {
                params: {
                    idUser: this.idUser
                }
            }).then(response => {
                this.roleUser = CharUpper(response.data[0].name_job)
            }).catch(err => console.log(err))
        }
    }
})

var vmBioDatosAcademicos = new Vue({
    el: '#datosBioAcademicos',
    data: {
        academy: [],
        routeAcademy: '',
        viewAcademy: ''
    },
    computed: {
        nameCareer() {
            return this.academy.map(function(item) {
                return CharUpper(item.name_career)
            })
        },
        situationAcademy() {
            return this.academy.map(function(item) {
                return CharUpper(item.situation_academy)
            })
        },
        dateBegin() {
            return this.academy.map(function(item) {
                return moment(item.date_begin).format('DD/MM/YYYY')
            })
        },
        dateFinish() {
            return this.academy.map(function(item) {
                return moment(item.date_finish).format('DD/MM/YYYY')
            })
        }
    },
    methods: {
        loadAcademy() {
            axios.get('/user/viewDatosAcademicos', {
                params: {
                    idUser: vmBio.idUser
                }
            })
            .then(response => this.academy = response.data)
            .catch(error => console.log(error))
        },
        Repositories(nameFile){
            axios.get('/getRepositories', {
                params: {
                    idUser: vmBio.idUser,
                    nameFile: nameFile
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeAcademy = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                    this.viewAcademy = fileRepositorie['name_file']
                    download(this.routeAcademy)
                }else{
                    this.viewAcademy = 'not-' + nameFile
                }
            })
        },
        count() {
            if(Object.keys(this.academy).length > 4) scrollBar('scrollAcademy')
        }
    }
})

var vmBioCertificaciones = new Vue({
    el: '#datosBioCertificaciones',
    data: {
        certificate: [],
        routeCertificado: '',
        viewCertificado: ''
    },
    computed: {
        nameCertificate() {
            return this.certificate.map(function(item) {
                return CharUpper(item.name_certificate)
            })
        },
        dateBegin() {
            return this.certificate.map(function(item) {
                return moment(item.date_begin).format('DD/MM/YYYY')
            })
        },
        dateFinish() {
            return this.certificate.map(function(item) {
                return moment(item.date_finish).format('DD/MM/YYYY')
            })
        }
    },
    methods: {
        loadCertificaciones() {
            axios.get('/user/viewCertificaciones', {
                params: {
                    idUser: vmBio.idUser
                }
            })
            .then(response => this.certificate = response.data)
            .catch(error => console.log(error))
        },
        Repositories(nameFile){
            axios.get('/getRepositories', {
                params: {
                    idUser: vmBio.idUser,
                    nameFile: nameFile
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeCertificado = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                    this.viewCertificado = fileRepositorie['name_file']
                    download(this.routeCertificado)
                }else{
                    this.viewCertificado = 'not-' + nameFile
                }
            })
        },
        count() {
            if(Object.keys(this.certificate).length > 4) scrollBar('scrollCertificaciones')
        }
    }
})

var vmBioExperiencia = new Vue({
    el: '#datosBioExperiencia',
    data: {
        experience: [],
        routeExperiencia: '',
        viewExperiencia: ''
    },
    computed: {
        nameBusiness() {
            return this.experience.map(function(item) {
                return CharUpper(item.name_business)
            })
        },
        nameJob() {
            return this.experience.map(function(item) {
                return CharUpper(item.name_job)
            })
        },
        dateBegin() {
            return this.experience.map(function(item) {
                return moment(item.date_begin).format('DD/MM/YYYY')
            })
        },
        dateFinish() {
            return this.experience.map(function(item) {
                if(moment(item.date_begin) === moment(item.date_begin)) {
                    return 'Trabajando Actualmente'
                }else{
                    return ' Hasta : ' + moment(item.date_finish).format('DD/MM/YYYY')
                }
            })
        }
    },
    methods: {
        loadExperience() {
            axios.get('/user/viewExperiencias', {
                params: {
                    idUser: vmBio.idUser
                }
            })
            .then(response => this.experience = response.data)
            .catch(error => console.log(error))
        },
        Repositories(nameFile){
            axios.get('/getRepositories', {
                params: {
                    idUser: vmBio.idUser,
                    nameFile: nameFile
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeExperiencia = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                    this.viewExperiencia = fileRepositorie['name_file']
                    download(this.routeExperiencia)
                }else{
                    this.viewExperiencia = 'not-' + nameFile
                }
            })
        },
        count() {
            if(Object.keys(this.experience).length > 4) scrollBar('scrollExperiencia')
        }
    }
})

const scrollBar = (divScroll) => {
    setTimeout(function () {
        CustomScrollBar(divScroll)
    }, 1000)
}

const validateBirthday = (dateProfile) => {
    let dateStart = moment().format('YYYY-') + moment(dateProfile).format('MM-DD')
    let dateEnd = moment().format('YYYY-MM-DD')
    let dayBirthday = moment(dateStart).diff(dateEnd, 'day')
    if(moment(dateStart) < moment(dateEnd)){
        let moreYear = moment(dateStart).add(1, 'y')
        let calculate = moreYear.diff(dateEnd, 'day')
        vmProfile.dateBirthday = moreYear.format('DD/MM/YYYY')
        return calculate
    }else if(dateStart === dateEnd){
        return 'Happy'
    }
    return dayBirthday
}