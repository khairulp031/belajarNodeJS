const env = require('node-env-file');
env('.env');
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');

const create = (data) => {
    return jwt.sign(data, process.env.SECRET, { expiresIn: process.env.TOKEN_MAXAGE });
}

const cookieObject = () => {
    return {
        secure: /true/i.test(process.env.TOKEN_SECURE),
        httpOnly: /true/i.test(process.env.TOKEN_HTTPONLY),
        path: "/",
        domain: process.env.COOKIE_DOMAIN,
        maxAge: process.env.TOKEN_MAXAGE,
        SameSite: 'None'
    }
}

const createToken = (req, res, next) => {
    const uuid = uuidv4();
    const token = create({ csrf: uuid })
    res.cookie(process.env.COOKIE, token, cookieObject());
    res.setHeader('csrf', uuid);
    res.setHeader('token', token);
    next();
}
const verifyToken = (req, res, next) => {
    const headers = req.headers
    const token = headers['token']
    const csrf = headers['csrf']
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        if (decoded && decoded.csrf === csrf) {
            return next();
        }
    } catch (e) { }
    return res.status(403).send({
        status: 'ERROR',
        message: "insufficient permission."
    });
}
module.exports = {
    createToken,
    verifyToken
}