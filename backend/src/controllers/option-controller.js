const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Option = mongoose.model('Option');
const options = require('../../data/options');

const getOption = function(req, res, next) {
  Option.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch (error => {
      res.status(400).send(error);
    })
};

const newOption=function(req, res) {
	
  var q1 = new Option({
	optionID:1,
	questionID: 1,
    description: "this is demo option 1",
    consequences: {
        contracts:80,
		compContracts:0,
		shares:0,

		publicRep:0,
		regulatorRep:0,
		internalRep:0,
		voardRep:0,//CEO only
		enviroRep:0,

		expectedProg:0,
		actualProg:0,
		expectedCost:0,
		actualCost:0
    },//maybe company is OK for now
    next: 2,
	// chosenBy:[String]//could store the role name of the players who choose this one
  });
  
   var q2 = new Option({
	optionID:2,
	questionID: 1,
    description: "this is demo option 2",
    consequences: {
        contracts:-10,
		compContracts:0,
		shares:0,

		publicRep:0,
		regulatorRep:0,
		internalRep:0,
		voardRep:0,//CEO only
		enviroRep:0,

		expectedProg:0,
		actualProg:0,
		expectedCost:0,
		actualCost:0
    },//maybe company is OK for now
    next: 3,
	// chosenBy:[String]//could store the role name of the players who choose this one
  });
  
  q1.save()
  q2.save()
    .then(doc => { 
      res.status(200).json(doc);
    })
    .catch(error => { 
      res.status(400).send(error);
    });
};

const newAllOptions=function(req, res) {


    let option_list = [];
    let len = 0;
    for(let o in options.options){
        option_list.push(options.options[o]);
        len+=1;
    }

    Option.remove({})
        .then(doc => {
            Option.insertMany(option_list).then((docs) => {
                res.status(200).json(docs);

            }).catch((err) => {
                res.status(400).send(err);
            })

        })
        .catch(error => {
            res.status(400).send(error);
        });
};


const dropOption=function(req, res) {
	Option.remove({})
    .then(doc => { 
      res.status(200).json(doc);
    })
    .catch(error => { 
      res.status(400).send(error);
    });
};

module.exports = {
    getOption,
    newOption,
    newAllOptions,
	dropOption,
};