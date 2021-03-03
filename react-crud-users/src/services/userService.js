const axios = require('axios')


const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

let baseURL = 'http://php:8000/api/user/';

class UserService {
    static async getUser(id) {
        return axios.get(baseURL + id);
    }

    static async createUser(data) {
        let httpData = {
            'name': data.name,
            'email': data.email
        };
        return axios.post(baseURL, httpData, { headers });
    }

    static async updateUser(data) {
        let httpData = {
            'name': data.name,
            'email': data.email
        };
        return axios.put(baseURL + data.id, httpData, { headers });
    }

    static async deleteUser(id) {
        return axios.delete(baseURL + id);
    }

    static async getUserList() {
        return axios.get(baseURL, {headers});
    }
}

module.exports = UserService;