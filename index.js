var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency
var app = express();

mongoose.connect('mongodb://localhost/commentDB'); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
  Name: String,
  Comment: String
});

var sportsComment = mongoose.model('sportsComment', commentSchema); //Makes an object from that schema as a model
var eduComment = mongoose.model('eduComment', commentSchema);
var newtopicsComment = mongoose.model('newtopicsComment', commentSchema);
var newmajorsComment = mongoose.model('newmajorsComment', commentSchema);
var libComment = mongoose.model('libComment', commentSchema);
var gospelComment = mongoose.model('gospelComment', commentSchema);

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected');
});
/* GET Sports */

router.post('/sportscomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new sportsComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/sportscomment', function(req, res, next) {
  console.log("In the GET route?");
  sportsComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

/* GET Education */

router.post('/educomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new eduComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/educomment', function(req, res, next) {
  console.log("In the GET route?");
  eduComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

/* GET NewTopics */

router.post('/newtopicscomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new newtopicsComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/newtopicscomment', function(req, res, next) {
  console.log("In the GET route?");
  newtopicsComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

/* GET NewMajors */

router.post('/newmajorscomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new newmajorsComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/newmajorscomment', function(req, res, next) {
  console.log("In the GET route?");
  newmajorsComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

/* GET Library */

router.post('/libcomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new libComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/libcomment', function(req, res, next) {
  console.log("In the GET route?");
  libComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

/* GET Gospel */

router.post('/gospelcomment', function(req, res, next) {
  console.log("POST comment route");
  var newcomment = new gospelComment(req.body);
console.log(newcomment);
newcomment.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/gospelcomment', function(req, res, next) {
  console.log("In the GET route?");
  gospelComment.find(function(err,commentList) {
    if (err) return console.error(err);
    else {
      console.log(commentList);
      res.json(commentList);
      
    }
  })
});

module.exports = router;
