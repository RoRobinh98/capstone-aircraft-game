const mongoose = require('mongoose');
const Question = require('./Question');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
	optionID:Number,
	questionID:Number,//current question ID
    description: String,
    consequences: {type: mongoose.Schema.Types.Mixed, ref: "Company"},//maybe company is OK for now
	outcomeText:String,
    next: Number,//id of next question

	// chosenBy:[String]//could store the role name of the players who choose this one
})

module.exports = mongoose.model('Option', optionSchema);