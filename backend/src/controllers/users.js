const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUser = function(req, res, next) {
  res.send('respond with a resource');
};

exports.newUser = function (req, res) {
  var user = new User({
      name: req.body.name,
      university: req.body.university,
      studentid: req.body.studentid
  })
  user.save()
      .then(doc => { 
          res.status(200).json(doc); 
      })
      .catch(error => { 
          res.status(400).json(error);
      })
};