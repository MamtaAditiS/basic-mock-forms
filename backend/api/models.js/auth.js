
'use strict';
const { text } = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of the user'
    },
    email: {
        type: String,
        required: 'Please enter the email of the user'
    },
    password: {
        type: String, 
        required: 'Please enter the password of the user'
    },
    mobile: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('User', UserSchema);