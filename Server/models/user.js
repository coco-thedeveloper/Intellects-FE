const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname :{
        type: String,
        required: true
    },
    phno :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);