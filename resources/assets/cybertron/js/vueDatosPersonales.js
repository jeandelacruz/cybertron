/**
 * Created by jdelacruz on 9/08/2017.
 */

var vueDatosPersonales = new Vue({
    el: '#datosPersonales',

    data: {
        form: new Form({
            Names: '',
            lastName: ''
        })
    },

    methods: {
        onSubmit() {
            this.form.post('/profile/saveDatos')
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
})