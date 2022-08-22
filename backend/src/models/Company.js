const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
	//this part may need further modification based on the question
    contracts:Number,
	compContracts:Number,
	shares:Number,
	
	publicRep:Number,
	regulatorRep:Number,
	internalRep:Number,
	voardRep:Number,//CEO only
	enviroRep:Number,
	
	expectedProg:Number,
	actualProg:Number,
	expectedCost:Number,
	actualCost:Number
	
	
})

module.exports = mongoose.model('Company', companySchema);