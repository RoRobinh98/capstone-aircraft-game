const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const questions = require('../../data/questions');

const getQuestion = function(req, res, next) {
  Question.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch (error => {
      res.status(400).send(error);
    })
};
	/*0-4 are
	Boeing Executive BE
	Software Developer SD
	Airline Pilot AP
	Aeronautical Engineer AE
	FAA Official FAA*/
const newQuestion=function(req, res) {
  Question.remove({})
  var q1 = new Question({
      questionID:1,

    //description: "this is a demo question 1",
	background: "The FAA are due to conduct their final inspection of the new plane. The company has been asked to report to the FAA to highlight any possible issues that have been brought up by the team as to the quality of the plane that may require further investigation. Note that all investigation costs are taken up by the company.",
    question: "What will the report look like?",
	roleInfo: ["you are responsible for the report on behalf of the company. A more comprehensive test means more money loss of the company","You found a power unit issue but only occured once in your internal testing","No abnormalities found during your flight test","No abnormalities found during your inspection","Your relationship with the CEO is very good, and according to previous reports the Boeing aircraft is in good condition."],
    options: [1,2,3],
    duration:20,//not sure if we do need this if time for each round is fixed
    weights:[40,10,10,10,10],
    optionsFinalWeights:[0,0],
	decisions:[0,0,0,0,0],
    readyCount:0,
    readyPlayer:[],
    votedCount:0,
    votedPlayer:[],
  })
  
  var q2 = new Question({
    questionID:2,
    //description: "this is a demo question 1",
	background: "The software engineers are asked to provide a technical report regarding the progress of the power unit fixes. The team has unfortunately come into some issues that have now been navigated, but has led to substantial delays. The project will thus now run overtime by 1 month unless the next item on the agenda - pilot testing of the fixes, is cut, this would also cut costs for pilots and manhours.",
    question: "What should the software team do?",
  	roleInfo: ["The board does not want the project to be postponed","Your team has been working for ten consecutive days","There is a risk of crash if the unit is not comletely fixed","You designed a holidy to company your kids after fixing the unit","No extra information for you"],
    options: [4,5,6],
    duration:20,//not sure if we do need this if time for each round is fixed
    weights:[20,30,20,20,10],
    optionsFinalWeights:[0,0],
	decisions:[0,0,0,0,0],
    readyCount:0,
    readyPlayer:[],
    votedCount:0,
    votedPlayer:[],
  })
  
   var q3 = new Question({
    questionID:3,
    //description: "this is a demo question 1",
	background: "The company have several flight tests, in particular it sometimes seizes control from the pilot when not intended to. However, everyone formally approved the software design of the auto-pilot 2 months ago, so reporting this now will likely extremely displease both the software team and management; in fact, it will almost certainly result in a loss of job",
    question: "What should the pilot team do?",
  	roleInfo: ["The board does not want the project to be postponed","You have got a approval from BE and Pilot team","You (TP) have noticed a substantial issue with the auto-pilot of the plane","No extra information for you","You do not know the details of the flight tests."],
    options: [7,8,9],
    duration:20,//not sure if we do need this if time for each round is fixed
    weights:[20,30,20,20,10],
    optionsFinalWeights:[0,0],
	decisions:[0,0,0,0,0],
    readyCount:0,
    readyPlayer:[],
    votedCount:0,
    votedPlayer:[],
  })

  q3.save()
  q2.save()
  q1.save()
    .then(doc => { 
      res.status(200).json(doc);
    })
    .catch(error => { 
      res.status(400).send(error);
    });
};


const newAllQuestions=function(req, res) {
    let question_list = [];
    let len = 0;
    for(let q in questions.questions){
        question_list.push(questions.questions[q]);
        len+=1;
    }

    Question.remove({})
        .then(doc => {
            console.log(doc);
            Question.insertMany(question_list).then((docs) => {
                res.status(200).json(docs);

            }).catch((err) => {
                res.status(400).send(err);
            })
        })
        .catch(error => {
            res.status(400).send(error);
        });



};

const dropQuestion=function(req, res) {
    Question.remove({})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(error => {
            res.status(400).send(error);
        });
};

module.exports = {
    getQuestion,
    newQuestion,
    newAllQuestions,
	dropQuestion,
};