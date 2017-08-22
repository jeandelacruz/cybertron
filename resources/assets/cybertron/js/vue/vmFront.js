/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmProfile = new Vue({
    el:'#bodyProfile',
    data: {
        nameComplete: '-',
        typeDocument: '-',
        numberDocument: '-',
        roleUser: '-',
        dateBirthday: '-',
        daysBirthday: '-',
        listUser: []
    },
    mounted() {
        this.loadProfile()
        this.loadUser()
    },
    computed: {
        nameUserList() {
            return this.listUser.map(function(item) {
                return CharUpper(item.name + ' ' + item.first_last_name + ' ' + item.second_last_name)
            })
        },
        countphoneMobil() {
            return this.listUser.map(function(item) {
                if(item.users_information === null){
                    return false
                }else{
                    if(item.users_information.phone_mobile === null){
                        return false
                    }else{
                        return true
                    }
                }
            })
        },
        countPhone() {
            return this.listUser.map(function(item) {
                if(item.users_information === null){
                    return false
                }else{
                    if(item.users_information.phone_home === null){
                        return false
                    }else{
                        return true
                    }
                }
            })
        }
    },
    methods: {
        loadProfile(){
            axios.post('viewProfile')
                .then(response => {
                    this.nameComplete = CharUpper(response.data[0].name + ' ' + response.data[0].first_last_name + ' ' + response.data[0].second_last_name)
                    this.roleUser = CharUpper(response.data[0].name_job)
                    let profileUser = response.data[0].users_information
                    if(profileUser){
                        this.typeDocument = (profileUser.identity).toUpperCase()
                        this.numberDocument = profileUser.identity_number
                        this.dateBirthday = moment().format('DD/MM')
                        this.daysBirthday = '0'
                        if(profileUser.datebirthday){
                            this.dateBirthday = moment(profileUser.datebirthday).format('DD/MM') + moment().format('/YYYY')
                            this.daysBirthday = validateBirthday(profileUser.datebirthday)
                        }
                    }
                })
                .catch(err => { console.log(err) })
        },
        loadUser(){
            axios.post('/listUsers')
                .then(response => this.listUser = response.data)
                .catch(error => console.log(error))
        }
    }
})

const validateBirthday = (dateProfile) => {
    let dateStart = moment().format('YYYY-') + moment(dateProfile).format('MM-DD')
    let dateEnd = moment().format('YYYY-MM-DD')
    let dayBirthday = moment(dateStart).diff(dateEnd, 'day')
    if(moment(dateStart) < moment(dateEnd)){
        let moreYear = moment(dateStart).add(1, 'y')
        let calculate = moreYear.diff(dateEnd, 'day')
        vmProfile.dateBirthday = moreYear.format('DD/MM/YYYY')
        return calculate
    }else if(dateStart === dateEnd){
        return 'Happy'
    }
    return dayBirthday
}