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
    methods: {
        loadData() {
            axios.post('/viewDatosAcademicos')
                .then(response => this.academy = response.data)
                .catch(error => console.log(error))
        }
    }
})