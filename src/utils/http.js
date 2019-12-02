import axios from 'axios';

var httpRequest = axios.create({
    // baseURL: '/cms/online_courseware/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    httpGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            httpRequest.get(url, params).then(response => {
                if(response.data.success==undefined){
                    resolve(response.data);
                }else {
                    if(response.data.success){
                        resolve(response.data.data);
                    } else {
                        reject(response.data.msg);
                    }
                }
            }).catch(err => {
                reject(err);
            })
        });
    },
    httpDelete(url, params = {}) {
        return new Promise((resolve, reject) => {
            httpRequest.delete(url, params).then(response => {
                if(response.data.success==undefined){
                    resolve(response.data);
                }else {
                    if(response.data.success){
                        resolve(response.data.data);
                    } else {
                        reject(response.data.msg);
                    }
                }
            }).catch(err => {
                reject(err);
            })
        });
    },
    httpPatch(url, params = {}) {
        return new Promise((resolve, reject) => {
            httpRequest.patch(url, params).then(response => {
                if(response.data.success==undefined){
                    resolve(response.data);
                }else {
                    if(response.data.success){
                        resolve(response.data.data);
                    } else {
                        reject(response.data.msg);
                    }
                }
            }).catch(err => {
                reject(err);
            })
        });
    },
    httpPost(url, data = {}) {
        return new Promise((resolve, reject) => {
            httpRequest.post(url, data).then(response => {
                if(response.data.success){
                    resolve(response.data.data);
                } else {
                    reject(response.data.msg);
                }
            }).catch(err => {
                reject(err);
            })
        });
    }
}