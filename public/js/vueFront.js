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
 * Created by jdelacruz on 14/08/2017.
 */


var vmProfile = new Vue({
    el: '#bodyProfile',
    data: {
        nameComplete: '',
        typeDocument: '',
        numberDocument: '',
        dateBirthday: '',
        daysBirthday: ''
    },
    mounted: function mounted() {
        this.loadProfile();
    },

    methods: {
        loadProfile: function loadProfile() {
            var _this2 = this;

            axios.post('viewProfile').then(function (response) {
                _this2.nameComplete = response.data[0].name + ' ' + response.data[0].last_name;
                var profileUser = response.data[0].users_information;
                if (profileUser) {
                    _this2.typeDocument = CharUpper(profileUser.identity);
                    _this2.numberDocument = profileUser.identity_number;
                    _this2.dateBirthday = moment().format('DD/MM');
                    _this2.daysBirthday = '0';
                    if (profileUser.datebirthday) {
                        _this2.dateBirthday = moment(profileUser.datebirthday).format('DD/MM') + moment().format('/YYYY');
                        _this2.daysBirthday = validateBirthday(profileUser.datebirthday);
                    }
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});

var validateBirthday = function validateBirthday(dateProfile) {
    var dateStart = moment().format('YYYY-') + moment(dateProfile).format('MM-DD');
    var dateEnd = moment().format('YYYY-MM-DD');
    var dayBirthday = moment(dateStart).diff(dateEnd, 'day');
    if (moment(dateStart) < moment(dateEnd)) {
        var moreYear = moment(dateStart).add(1, 'y');
        var calculate = moreYear.diff(dateEnd, 'day');
        vmProfile.dateBirthday = moreYear.format('DD/MM/YYYY');
        return calculate;
    } else if (dateStart === dateEnd) {
        return 'Happy';
    }
    return dayBirthday;
};