const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    university: String,
    studentid: Number
})

module.exports = mongoose.model('User', userSchema);