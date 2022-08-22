// We build the decision tree here, app.js should call this...
var QuestionTree = require('./QuestionTree');
var Question = require('./Question');
var Option = require('./Option');
var Company = require('./Company');

function buildTree() {
    var cons1 = new Company(50);
    var cons2 = new Company(20);

    var option1 = new Option("42", cons1, child1);
    var option2 = new Option("69", cons2, child2);

    var root = new Question(1, "What is the meaning of life?", [option1, option2], 10);
    
    /********************************************/

    var cons3 = new Company(10);
    var cons4 = new Company(5);

    var option3 = new Option("Donuts", cons3, null);
    var option4 = new Option("Beer", cons4, null);

    var child1 = new Question(2, "Donuts or beer?", [option3, option4], 10);

    /********************************************/

    var cons5 = new Company(100);
    var cons6 = new Company(-50);

    var option5 = new Option("Java", cons5, null);
    var option6 = new Option("Javascript", cons6, null);

    var child2 = new Question(3, "Java or Javascript?", [option5, option6], 10);

    var tree = new QuestionTree(root);

    return tree;
}