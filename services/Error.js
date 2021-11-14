const mongoose = require("mongoose");
const Error = new mongoose.Schema({
    ErrorObj: Object,
    requestHeader: Object,
    requestBody: Object
});

module.exports = mongoose.model('Error', Error);

