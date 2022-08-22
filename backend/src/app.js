var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rolesRouter = require('./routes/roles');
var playRouter = require('./routes/play');
var questionRouter = require('./routes/questions');
var outcomeRouter = require('./routes/outcomes');
var optionRouter = require('./routes/options');


require('dotenv').config() 

var app = express();

// prevent CORS issues when front-end connects to back-end
const cors = require("cors");
app.use(cors());

var mongoose = require('mongoose');

const url = process.env.MONGODB_URL;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/play', playRouter);
app.use('/questions', questionRouter);
app.use('/options', optionRouter);
app.use('/outcomes', outcomeRouter);


module.exports = app;
