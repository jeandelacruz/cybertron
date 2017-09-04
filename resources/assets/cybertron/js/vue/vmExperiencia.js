/**
 * Created by jdelacruz on 16/08/2017.
 */
var vmExperiencia = new Vue({
    el: '#datosExperiencia',
    data: {
        experience: [],
        showExperience: false
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
                return moment(item.date_finish).format('DD/MM/YYYY')
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
        refreshData() {
            this.showExperience = false
            this.loadData()
        }
    }
})