var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
                    _this.onSuccess(response.data);
                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    $('#topcontrol').click();
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            alertaSimple('', 'Tu perfil fue registrado con exito', 'success');
            //this.reset()
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
 * Created by jdelacruz on 9/08/2017.
 */


var ubigeoID = '';
var extras = false;

var vueDatosPersonales = new Vue({
    el: '#datosPersonales',

    data: {
        selectedD: null,
        selectedP: null,
        selectedDi: null,
        typeDocument: null,
        typeLicense: null,
        maritalStatus: null,
        departamento: [],
        provincia: [],
        distrito: [],
        oldDepartamento: '',
        oldProvincia: '',
        form: new Form({
            Names: '',
            lastName: '',
            Departamento: '',
            Provincia: '',
            Distrito: '',
            nameAddress: '',
            numberTelephone: '',
            numberMobile: '',
            Email: '',
            Document: '',
            numberDocument: '',
            License: '',
            numberLicense: '',
            Marital: '',
            numberChildren: ''
        })
    },
    mounted: function mounted() {
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this2 = this;

            axios.post('viewProfile').then(function (response) {
                _this2.form.Names = response.data[0].name;
                _this2.form.lastName = response.data[0].last_name;
                _this2.loadDepartamento();
                var profileUser = response.data[0].users_information;
                if (profileUser) {
                    _this2.form.nameAddress = profileUser.address;
                    _this2.form.numberTelephone = profileUser.phone_home;
                    _this2.form.numberMobile = profileUser.phone_mobile;
                    _this2.form.Email = profileUser.email;
                    _this2.form.Document = profileUser.identity;
                    _this2.form.numberDocument = profileUser.identity_number;
                    _this2.form.License = profileUser.license;
                    _this2.form.numberLicense = profileUser.license_number;
                    _this2.form.Marital = profileUser.marital_status;
                    _this2.form.numberChildren = profileUser.children_number;
                    ubigeoID = profileUser.ubigeo_id;
                    extras = true;
                    _this2.$nextTick(function () {
                        _this2.loadSelect();
                        _this2.loadExtra();
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        loadDepartamento: function loadDepartamento() {
            var _this3 = this;

            axios.post('viewDepartamento').then(function (response) {
                var arraydepartamento = [];
                var objectSearch = 'departamento';
                objectToArray(response.data, arraydepartamento, objectSearch);
                _this3.departamento = arraydepartamento;
            }).catch(function (err) {
                console.log(err);
            });
        },

        loadProvincia: function loadProvincia(nameDepartamento) {
            var _this4 = this;

            if (nameDepartamento === null) {
                this.form.Departamento = null;
                this.form.Provincia = null;
                this.form.Distrito = null;
            }
            if (this.oldDepartamento != nameDepartamento) this.selectedP = '';
            this.form.Departamento = nameDepartamento;
            var parameters = { Departamento: nameDepartamento };
            axios.post('viewProvincia', parameters).then(function (response) {
                var arrayprovincia = [];
                var objectSearch = 'provincia';
                objectToArray(response.data, arrayprovincia, objectSearch);
                _this4.provincia = arrayprovincia;
            }).catch(function (err) {
                console.log(err);
            });
        },
        loadDistrito: function loadDistrito(nameProvincia) {
            var _this5 = this;

            if (this.oldProvincia != nameProvincia) this.selectedDi = '';
            this.form.Provincia = nameProvincia;
            var parameters = { Provincia: nameProvincia };
            axios.post('viewDistrito', parameters).then(function (response) {
                var arraydistrito = [];
                var objectSearch = 'distrito';
                objectToArray(response.data, arraydistrito, objectSearch);
                _this5.distrito = arraydistrito;
            }).catch(function (err) {
                console.log(err);
            });
        },
        getDistrito: function getDistrito(nameDistrito) {
            this.form.Distrito = nameDistrito;
        },
        loadSelect: function loadSelect() {
            var _this6 = this;

            var parameters = { idUbigeo: ubigeoID };
            axios.post('viewUbigeo', parameters).then(function (response) {
                if (response.data[0]) {
                    _this6.oldDepartamento = response.data[0].departamento;
                    _this6.selectedD = response.data[0].departamento;
                    _this6.oldProvincia = response.data[0].provincia;
                    _this6.selectedP = response.data[0].provincia;
                    _this6.selectedDi = response.data[0].distrito;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        loadExtra: function loadExtra() {
            if (extras) {
                this.typeDocument = CharUpper(this.form.Document);
                this.typeLicense = this.form.License;
                this.maritalStatus = CharUpper(this.form.Marital);
            }
        },
        getDocument: function getDocument(typeDocument) {
            this.form.Document = typeDocument.toLowerCase();
        },
        getLicense: function getLicense(typeLicense) {
            this.form.License = typeLicense;
        },
        getMarital: function getMarital(typeMarital) {
            this.form.Marital = typeMarital.toLowerCase();
        },
        onSubmit: function onSubmit() {
            var _this7 = this;

            this.form.post('/profile/saveDatos').then(function (response) {
                return _this7.loadData();
            }).catch(function (error) {
                return alertaSimple('', 'Hubo un error, favor de comunicarse con los especialistas', 'error');
            });
        }
    }
});