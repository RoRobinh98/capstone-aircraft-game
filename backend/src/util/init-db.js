require('dotenv').config({ path: `${__dirname}/../../.env` });

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { program } = require('commander');

const options = require('../../data/options');
const questions = require('../../data/questions');
const Option = require('../models/Option');
const Question = require('../models/Question')
const outcomes = require('../../data/outcomes');
const Outcome = require('../models/Outcome')

const url = process.env.MONGODB_URL;
mongoose.Promise = Promise
mongoose.connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

const connectToDb = async function () {
    if (typeof (url) === 'undefined') {
        console.log('error MongoDB URL not defined, Initalisation Failed');
    }
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

}

const deleteAll = async function () {
    const modelsPath = path.resolve(__dirname, '../models')

    await Promise.all(fs.readdirSync(modelsPath).map(async file => {
        const model = require(modelsPath + '/' + file);
        await model.deleteMany({}, function (err) {
            console.log(`REMOVED: collection ${file.split('.')[0]}`)
        });
    }))
}

const initSchema = async function () {

    // Load in all the models for the DB
    const modelsPath = path.resolve(__dirname, '../models')
    await Promise.all(fs.readdirSync(modelsPath).map(async file => {
        await require(modelsPath + '/' + file);
        console.log(`INITALISED: collection ${file.split('.')[0]}`)
    }));
}

const importData = async function () {
    await Question.insertMany(questions.questions)
    console.log('Questions Added');
    await Option.insertMany(options.options)
    console.log('Options Added');
    await Outcome.insertMany(outcomes.outcomes)
    console.log('Outcomes Added');
}

const inquiry = async function () {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'runInit',
        message: 'WARNING: This process will delete all elements from the database. Are you sure you want to proceed',
        auto: session => process.argv.name ? process.argv.name : undefined
    }]);
}

const main = async function () {
    connectToDb()
        .then(() => deleteAll())
        .then(() => initSchema())
        .then(() => importData())
        .then(() => process.exit());
}

program.option('-y, --yes', 'Skip Confirmation');
program.parse(process.argv);
if (program.yes) {
    main();
} else {
    inquiry().then((answer) => {
        if (answer.runInit === true) {
            amain();
        } else {
            console.log('Process Aborted');
        }
    });
}

