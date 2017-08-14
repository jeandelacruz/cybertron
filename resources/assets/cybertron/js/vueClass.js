/**
 * Created by jdelacruz on 9/08/2017.
 */
class Errors {
    constructor() { this.errors = {} }

    get(field) { if(this.errors[field]) return this.errors[field][0] }

    clear(field) {
        if(field) {
            delete this.errors[field]
            return
        }
        this.errors = {}
    }

    has(field) { return this.errors.hasOwnProperty(field) }

    any() { return Object.keys(this.errors).length > 0 }

    record(errors) { this.errors = errors }
}

class Form {
    constructor(data) {
        this.originalData = data
        for(let field in data){
            this[field] = data[field]
        }
        this.errors = new Errors()
    }

    data() {
        let data = {}
        for (let property in this.originalData) {
            data[property] = this[property];
        }
        return data
    }

    post(url) {
        return this.submit('post', url)
    }

    put(url) {
        return this.submit('put', url)
    }

    patch(url) {
        return this.submit('patch', url)
    }

    reset() {
        for(let field in this.originalData){
            this[field] = ''
        }
        this.errors.clear()
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
            .then(response => {
                this.onSuccess(response.data)
                resolve(response.data)
            })
            .catch(error => {
                this.onFail(error.response.data)
                $('#topcontrol').click()
                reject(error.response.data)
            })
        })
    }

    onSuccess(data) {
        alertaSimple('','Tu perfil fue registrado con exito', 'success')
        //this.reset()
    }

    onFail(errors) {
        this.errors.record(errors)
    }
}