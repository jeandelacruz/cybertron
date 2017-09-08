/**
 * Created by jdelacruz on 16/08/2017.
 */
var vmExperiencia = new Vue({
    el: '#datosExperiencia',
    data: {
        experience: [],
        showExperience: false,
        routeExperiencia: '',
        profileDocument: ''
    },
    mounted(){
        this.loadData()
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
        loadData() {
            axios.get('/viewExperiencias')
                .then(response => {
                    this.experience = response.data
                    this.showExperience = true
                })
                .catch(error => console.log(error))
        },
        onUpdate(idItem) {
            return updateModal('div.bodyExperience','formExperienceUpdate', idItem)
        },
        onUpload(idItem) {
            return modalUpload('div.bodyUpload','formUpload','image/*,.pdf','experiencia-'+idItem, 1)
        },
        refreshData() {
            this.showExperience = false
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
                    this.routeExperiencia = 'storage/' + fileRepositorie['name_folder'] + '/' + fileRepositorie['name_file'] + fileRepositorie['file_extension']
                    download(this.routeExperiencia+'?version='+moment())
                }else{
                    alertaSimple('','No existe documento registrado','error')
                }
            })
        }
    }
})