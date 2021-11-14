const env = require('node-env-file');
env('.env');
const request = require('request');
const Error = require('../services/Error')

const recordError = async (...args) => {
    const error = new Error()
    error.ErrorObj = args[0]
    error.requestHeader = JSON.parse(JSON.stringify(args[1].headers))
    error.requestBody = JSON.parse(JSON.stringify(args[1].body))
    await error.save()
}

const post = (req, res, server, path, csrf, cookie, data) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: `${server}${path}`,
            headers: {
                cookie: `${cookie};`,
                csrf: `${csrf}`,
                'Content-Type': 'application/json'
            },
            json: data
        }, (err, httpResponse, body) => {
            if (err) {
                recordError(err, req)
                return resolve({ status: "NOT OK" });
            }
            const cookie = httpResponse.headers["set-cookie"]
            if (cookie) res.cookie(cookie)
            resolve(typeof body === 'string' ? JSON.parse(body) : body);
        });
    });
}

const get = (req, res, server, path, csrf, cookie) => {
    return new Promise((resolve, reject) => {
        request.get({
            url: `${server}${path}`,
            headers: {
                cookie: `${cookie};`,
                csrf: `${csrf}`,
                'Content-Type': 'application/json'
            }
        }, (err, httpResponse, body) => {
            if (err) {
                recordError(err, req)
                return resolve({ status: "NOT OK" });
            }
            const cookie = httpResponse.headers["set-cookie"]
            if (cookie) res.cookie(cookie)
            resolve(typeof body === 'string' ? JSON.parse(body) : body);
        });
    });
}

const del = (req, res, server, path, csrf, cookie) => {
    return new Promise((resolve, reject) => {
        request.delete({
            url: `${server}${path}`,
            headers: {
                cookie: `${cookie};`,
                csrf: `${csrf}`,
                'Content-Type': 'application/json'
            }
        }, (err, httpResponse, body) => {
            if (err) {
                recordError(err, req)
                return resolve({ status: "NOT OK" });
            }
            const cookie = httpResponse.headers["set-cookie"]
            if (cookie) res.cookie(cookie)
            resolve(typeof body === 'string' ? JSON.parse(body) : body);
        });
    });
}


module.exports = {
    post,
    get,
    del
}