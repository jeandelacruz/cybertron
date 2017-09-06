/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmCertificaciones = new Vue({
    el: '#datosCertificaciones',
    data: {
        certificate: [],
        showCertificate: false
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
                .then(response => {
                    this.certificate = response.data
                    this.showCertificate = true
                })
                .catch(error => console.log(error))
        },
        onUpdate(idItem) {
            return updateModal('div.bodyCertification','formCertificacionesUpdate', idItem)
        },
        onUpload(idItem) {
            return modalUpload('div.bodyUpload','formUpload','image/*','certificado-'+idItem, 1)
        },
        refreshData() {
            this.showCertificate = false
            this.loadData()
        }
    }
})