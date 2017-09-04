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
        listUser: [],
        showProfile: false,
        showListuser: false
    },
    mounted() {
        this.loadProfile()
        this.loadUser()
    },
    computed: {
        nameUserList() {
            return this.listUser.map(function(item) {
                let Name  = ''
                let firstLastname = ''
                let secondLastname = ''
                if(item.name === null || item.name === ''){ Name = '-' }else{ Name = CharUpper(item.name) }
                if(item.first_last_name === null || item.first_last_name === ''){ firstLastname = '-' }else{ firstLastname = CharUpper(item.first_last_name) }
                if(item.second_last_name === null || item.second_last_name === ''){ secondLastname = '-' }else{ secondLastname = CharUpper(item.second_last_name) }
                return Name + ' ' + firstLastname + ' ' + secondLastname
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
        },
        UserRole() {
            if((this.roleUser).length > 19){
                return this.roleUser.substring(0, 19) + '...'
            }else{
                return this.roleUser
            }
        }
    },
    methods: {
        loadProfile(){
            axios.get('viewProfile')
                .then(response => {
                    this.nameComplete = CharUpper(response.data[0].name) + ' ' + CharUpper(response.data[0].first_last_name) + ' ' + CharUpper(response.data[0].second_last_name)
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
                    this.showProfile = true
                    setTimeout(function() { CustomTooltips() }, 1000)
                })
                .catch(err => console.log(err))

            axios.get('viewProfileJob')
                .then(response => {
                    this.roleUser = CharUpper(response.data[0].name_job)
                })
                .catch(err => console.log(err))
        },
        loadUser(){
            axios.get('/listUsers')
                .then(response => {
                    this.listUser = response.data
                    this.showListuser = true
                    setTimeout(function() { CustomScrollBar() }, 1000)
                })
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