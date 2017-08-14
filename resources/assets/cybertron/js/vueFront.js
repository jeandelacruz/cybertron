/**
 * Created by jdelacruz on 14/08/2017.
 */
var vmProfile = new Vue({
    el:'#bodyProfile',
    data: {
        nameComplete: '',
        typeDocument: '',
        numberDocument: '',
        dateBirthday: '',
        daysBirthday: ''
    },
    mounted() {
        this.loadProfile()
    },
    methods: {
        loadProfile(){
            axios.post('viewProfile')
                .then(response => {
                    this.nameComplete = response.data[0].name + ' ' + response.data[0].last_name
                    let profileUser = response.data[0].users_information
                    if(profileUser){
                        this.typeDocument = CharUpper(profileUser.identity)
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