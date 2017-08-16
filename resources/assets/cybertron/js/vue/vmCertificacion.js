/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmCertificaciones = new Vue({
    el: '#datosCertificaciones',
    data: {
        certificate: []
    },
    mounted(){
        this.loadData()
    },
    methods: {
        loadData() {
            axios.post('/viewCertificaciones')
                .then(response => this.certificate = response.data)
                .catch(error => console.log(error))
        }
    }
})