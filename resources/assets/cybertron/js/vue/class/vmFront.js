/**
 * Created by jdelacruz on 9/08/2017.
 */

class Form {
    constructor(data) {
        this.originalData = data
        for(let field in data){
            this[field] = data[field]
        }
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

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response.data)
            })
        })
    }
}