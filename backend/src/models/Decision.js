const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const decisionSchema = new Schema({
    gameID: {type: mongoose.Schema.Types.ObjectId, ref: "Game"},
    question: {type: mongoose.Schema.Types.Mixed, ref: "Question"},
    chosen: {type: mongoose.Schema.Types.Mixed, ref: "Option"},
    chosenBy: {type: mongoose.Schema.Types.Mixed, ref: "Role"},//could store the role name of the player who choose this one
})

module.exports = mongoose.model('Decision', decisionSchema);