const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const finalOptionListSchema = new Schema({
    questionID: String,
    questionText: String,
    decisionRoleRelation: [String],
    /*0-4 are
	Boeing Executive BE
	Aeronautical Engineer AE
	Software Developer SD
	FAA Official FAA
	Boeing Pilot AP	
	*/
    finalOptionID: String,
})

module.exports = mongoose.model("FinalOption", finalOptionListSchema);