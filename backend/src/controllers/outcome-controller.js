const mongoose = require('mongoose');
const Outcome = mongoose.model('Outcome');
const outcomes = require('../../data/outcomes');

const getOutcome = function(req, res, next) {
  Outcome.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch (error => {
      res.status(400).send(error);
    })
};

const newOutcome=function(req, res) {
  
  Outcome.insertMany(outcomes.outcomes)
    .then(doc => { 
      res.status(200).json(doc);
    })
    .catch(error => { 
      res.status(400).send(error);
    });
};


module.exports = {
    getOutcome,
	newOutcome
};