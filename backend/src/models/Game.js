const mongoose = require('mongoose');
const DecisionList = require('./DecisionList');
const Company = require('./Company');
const Schema = mongoose.Schema;

const Question=require('./Question');
const { customAlphabet } = require('nanoid');

// set a custom alphabet for the shortcodes, includes alphanumeric values (lowercase) except l, 0, 5,
// since these values look similar to others values
const nanoid = customAlphabet('12346789abcdefghijkmnopqrstuvwxyz', 4);


const gameSchema = new Schema({
    shortcode: {
        type: String,
        default: () => nanoid()
    },
    duration: Number,
    players: [String],
    playersSel: [String],
    playerCount: Number,
    status: String,
    roles: [{type: mongoose.Schema.Types.ObjectId, ref: "Role"}],
    decisionList: {type: mongoose.Schema.Types.ObjectId, ref: "DecisionList"},
    finalOptionList: [{type: mongoose.Schema.Types.ObjectId, ref: "FinalOption"}],

    currQuestion:{type: mongoose.Schema.Types.Mixed, ref: "Question"},
    prevQuestion:{type: mongoose.Schema.Types.Mixed, ref: "Question"},
    finalOptionID: Number,
    companyState: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},

    receivedFeedbackCount: Number
},
    { timestamps: true }
)


module.exports = mongoose.model('Game', gameSchema);