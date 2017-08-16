var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jdelacruz on 16/08/2017.
 */
/**
 * Created by jdelacruz on 9/08/2017.
 */
var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'get',
        value: function get(field) {
            if (this.errors[field]) return this.errors[field][0];
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
                return;
            }
            this.errors = {};
        }
    }, {
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'record',
        value: function record(errors) {
            this.errors = errors;
        }
    }]);

    return Errors;
}();

var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;
        for (var field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }
    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }
    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }
    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }
            this.errors.clear();
        }
    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    resolve(response.data);
                    $('.modaladdExperience').modal('toggle');
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();
/**
 * Created by jdelacruz on 16/08/2017.
 */


var vmFormExperiencia = new Vue({
    el: '#formExperiencia',
    data: {
        form: new Form({
            namePuesto: '',
            nameEmpresa: '',
            reviewPuesto: '',
            dateBegin: '',
            dateFinish: ''
        })
    },
    methods: {
        onSubmit: function onSubmit() {
            $('.btnExperiencia').html('<i class="fa fa-spin fa-spinner"></i> Cargando');
            this.form.post('/profile/saveExperiencia').then(function (response) {
                console.log(response);
                $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios');
                vmExperiencia.loadData();
                alertaSimple('', 'Tu Experiencia laboral se registro correctamente', 'success');
            }).catch(function (error) {
                $('.btnExperiencia').html('<i class="fa fa-save"></i> Guardar Cambios');
                alertaSimple('', 'No completaste los campos correctamente o</br>Ha ocurrido un problema<br>Comunicarse con los especialistas', 'error', '4000');
            });
        }
    }
});

singleDate('dateBegin');
$('.dateBegin').on('apply.daterangepicker', function (ev, picker) {
    vmFormExperiencia.form.dateBegin = picker.startDate.format('YYYY-MM-DD');
});

singleDate('dateFinish');
$('.dateFinish').on('apply.daterangepicker', function (ev, picker) {
    vmFormExperiencia.form.dateFinish = picker.startDate.format('YYYY-MM-DD');
});