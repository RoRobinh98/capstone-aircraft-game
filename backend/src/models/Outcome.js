const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outcomeSchema = new Schema({
    outcomeID:Number,
	gameOutcome:String,
	roleOutcome:[String]
	
})

module.exports = mongoose.model('Outcome', outcomeSchema);