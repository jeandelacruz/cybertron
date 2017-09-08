/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmDatosAcademicos = new Vue({
    el: '#datosAcademicos',
    data: {
        academy: [],
        showAcademy: false,
        routeAcademy: '',
        profileDocument: ''
    },
    mounted(){
        this.loadData()
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
        loadData() {
            axios.get('/viewDatosAcademicos')
                .then(response => {
                    this.academy = response.data
                    this.showAcademy = true
                })
                .catch(error => console.log(error))
        },
        onUpdate(idItem) {
            return updateModal('div.bodyStudy','formDatosAcademicosUpdate', idItem)
        },
        onUpload(idItem) {
            return modalUpload('div.bodyUpload','formUpload','image/*,.pdf','academico-'+idItem, 1)
        },
        refreshData() {
            this.showAcademy = false
            this.loadData()
        },
        Repositories(nameFile){
            axios.get('/getRepositories', {
                params: {
                    nameFile: nameFile
                }
            }).then(response => {
                if(response.data[0]){
                    let fileRepositorie = response.data[0]
                    this.routeAcademy = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                    download(this.routeAcademy+'?version='+moment())
                }else{
                    alertaSimple('','No existe documento registrado','error')
                }
            })
        }
    }
})