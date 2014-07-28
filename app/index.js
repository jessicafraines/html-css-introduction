'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

//this is configuring the web server
app.set('views', __dirname + '/views'); //says views is under dirname /views
app.set('view engine', 'ejs'); //says i'm going to write in ejs

app.use(morgan('dev'));//allows us to show debugging information

app.use(express.static(__dirname + '/static')); //this says to look in the static directory

app.get('/', function(req,res){ //this is the first route -- if this runs it means it got something back from the browser
  res.render('index');//giving ejs file to render (going to look in views directory according to line 8
});

app.get('/dogs', function(req,res){
  res.render('dogs');
});

app.get('/cats', function(req,res){
  res.render('cats');
});

app.get('/ninjas', function(req,res){
  res.render('ninjas');
});

app.get('/pirates', function(req,res){
  res.render('pirates');
});

app.listen(3000, function(){ //3000 is the local port (it's like an extension #)
 console.log('Express.js is listening...');
});
