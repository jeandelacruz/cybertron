/**
 * Created by jdelacruz on 16/08/2017.
 */
var vmExperiencia = new Vue({
    el: '#datosExperiencia',
    data: {
        experience: []
    },
    mounted(){
    this.loadData()
    },
    methods: {
        loadData() {
            axios.post('/viewExperiencias')
                .then(response => this.experience = response.data)
                .catch(error => console.log(error))
        }
    }
})