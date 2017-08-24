/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmDatosAcademicos = new Vue({
    el: '#datosAcademicos',
    data: {
        academy: []
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
                .then(response => this.academy = response.data)
                .catch(error => console.log(error))
        },
        onUpdate() {
            return this.academy.map(function(item) {
                return updateModal('div.bodyStudy','formDatosAcademicosUpdate', item.id)
            })
        }
    }
})