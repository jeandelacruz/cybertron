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
        loadData() {
            axios.get('/viewCertificaciones')
                .then(response => this.certificate = response.data)
                .catch(error => console.log(error))
        },
        onUpdate() {
            return this.certificate.map(function(item) {
                return updateModal('div.bodyCertification','formCertificacionesUpdate', item.id)
            })
        }
    }
})