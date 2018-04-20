i"use strict";

const request = require("request");
const rp = require('request-promise');

function postJSON(url, payload) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "POST",
            json: true,
            body: payload
        }, function (err, response, body) {
            if (err) return reject(err);

            try {
                resolve(JSON.parse(body));
            } catch (err) {
                resolve(body);
            }
        });
    });
}

function postFb(url, payload) {
    return postJSON(url, payload)
        .then(data => {
            if (data.error) {
                return Promise.reject(data.error.message);
            }
            return Promise.resolve(data);
        });
}

function get(url, access_token) {
    let headers = {
        'authorization': access_token
    };
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "GET",
            headers: headers
        }, function (err, response, body) {
            if (err) return reject(err);

            try {
                resolve(JSON.parse(body));
            } catch (err) {
                resolve(body);
            }
        });
    });
}

function getAuthServer(url, secret) {
    let headers = {
        'secret': secret
    };
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "GET",
            headers: headers
        }, function (err, response, body) {
            if (err) return reject(err);

            try {
                resolve(JSON.parse(body));
            } catch (err) {
                resolve(body);
            }
        });
    });
}

function getFb(url) {
    return get(url)
        .then(data => {
            if (data.error) {
                return Promise.reject(data.error.message);
            }
            return Promise.resolve(data);
        });
}

function post(url) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "POST"
        }, (err, response, body) => {
            if (err) return reject(err);
            resolve(JSON.parse(body));
        });
    });
}

function deleteFb(url) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "DELETE",
        }, (err, response, body) => {
            if (err) return reject(err);
            resolve(JSON.parse(body));
        });
    });
}

function deleteJSON(url, payload) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "DELETE",
            json: true,
            body: payload
        }, function (err, response, body) {
            if (err) return reject(err);

            try {
                resolve(JSON.parse(body));
            } catch (err) {
                resolve(body);
            }
        });
    });
}

let i = 0;
for(i = 0; i < 4000;i++) {
	let url = 
	deleteJSON(url, payload);
}

function getFb__(url) {
    let options = {
        uri: url,
        method: 'GET'
    }
    return rp(options);
}
function callSendMessengerAPI(payload, pageToken) {
    let options = {
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {
            access_token: pageToken
        },
        method: 'POST',
        body: payload,
        json: true
    };

    return rp(options);
}



module.exports = {
    postJSON: postJSON,
    get: get,
    getFb: getFb,
    getFb__: getFb__,
    postFb: postFb,
    post: post,
    deleteFb: deleteFb,
    deleteJSON: deleteJSON,
    callSendMessengerAPI: callSendMessengerAPI,
    getAuthServer: getAuthServer
};

