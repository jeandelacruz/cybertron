var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jdelacruz on 9/08/2017.
 */

var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;
        for (var field in data) {
            this[field] = data[field];
        }
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
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    reject(error.response.data);
                });
            });
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
        nameComplete: '-',
        typeDocument: '-',
        numberDocument: '-',
        roleUser: '-',
        dateBirthday: '-',
        daysBirthday: '-'
    },
    mounted: function mounted() {
        this.loadProfile();
    },

    methods: {
        loadProfile: function loadProfile() {
            var _this2 = this;

            axios.post('viewProfile').then(function (response) {
                _this2.nameComplete = response.data[0].name + ' ' + response.data[0].last_name;
                _this2.roleUser = CharUpper(response.data[0].roles[0].name);
                var profileUser = response.data[0].users_information;
                if (profileUser) {
                    _this2.typeDocument = profileUser.identity.toUpperCase();
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