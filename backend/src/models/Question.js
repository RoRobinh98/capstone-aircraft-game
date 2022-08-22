const mongoose = require('mongoose');
const Option = require('./Option');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
	questionID:Number,

	background: String,
    question: String,
	roleInfo: [String],

    options: [Number],//optionIDs
	duration:Number,//not sure if we do need this if time for each round is fixed
	weights:[Number],//sum to 100,
	readyCount:Number,//count number of ready player
	readyPlayer:[String],

	decisions:[Number],//options chosen by role[0-4]
	optionsFinalWeights:[Number],
	votedCount: Number,
	votedPlayer: [String],
    /*0-4 are
	Boeing Executive BE
	Aeronautical Engineer AE
	Software Developer SD
	FAA Official FAA
	Boeing Pilot AP	
	*/
})
module.exports = mongoose.model('Question', questionSchema);