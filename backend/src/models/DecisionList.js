const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const decisionListSchema = new Schema({
    decisions: [{type: mongoose.Schema.Types.ObjectId, ref: "Decision"}]
})

module.exports = mongoose.model('DecisionList', decisionListSchema);