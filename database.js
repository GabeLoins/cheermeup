var mongodb = require('mongodb');
var url = require('url');
var mailer = require('./mail')
var requestMod = require("request");

log = console.log;

<<<<<<< HEAD
var MONGOHQ_URL="mongodb://GabeLyons:happynotsad@widmore.mongohq.com:10010/CheerMeUp";
=======
var MONGOHQ_URL="mongodb://GabeLyons:cabf03138a389445b1ab6e89bf465324@widmore.mongohq.com:10010/CheerMeUp";
>>>>>>> throwing that up

function addDB(time, yourName, yourMessage, yourEmail, theirEmail, theirName) {
	var connectionUri = url.parse(MONGOHQ_URL);
	var dbName = connectionUri.pathname.replace(/^\//, '');
	mongodb.Db.connect(MONGOHQ_URL, function(error, client) {
	  if (error) throw error;
	  var collection = new mongodb.Collection(client, "emails");
<<<<<<< HEAD
	  collection.save({'email' : theirEmail, 'yourEmail' : yourEmail, 'time' : time, 'yourName' : yourName, 'yourMessage' : yourMessage, 'theirName' : theirName});
=======
	  var currentDate = (parseInt(time.getUTCMonth()) + 1) + "/" + time.getUTCDate() + "/" + time.getUTCFullYear();
	  collection.save({'email' : theirEmail, 'yourEmail' : yourEmail, 'time' : time, 'yourName' : yourName, 'yourMessage' : yourMessage, 'theirName' : theirName, 'genTime' :  currentDate});
>>>>>>> throwing that up
	});
}

function checkDB(time) {
	var connectionUri = url.parse(MONGOHQ_URL);
	var dbName = connectionUri.pathname.replace(/^\//, '');
	mongodb.Db.connect(MONGOHQ_URL, function(error, client) {
	  if (error) throw error;
	  var collection = new mongodb.Collection(client, "emails");
<<<<<<< HEAD
	  var myCursor = collection.find();
	  //var myCursor = collection.find({'time' : time.getUTCHours() + "-" + time.getUTCDate() + "-" + time.getUTCMonth() + "-" + time.getUTCFullYear()});
      //var myCursor = collection.find();

      myCursor.toArray(function(error, docs) {
        if(error) throw error;
        console.log("this is possible:" + docs);
        docs.forEach(function(doc){
        	console.log("how is this possible ~~~~~~~~~~~~~~~~");
	        requestMod('http://peddler.co/form/scrape', function (error, response, body) {
			  if (!error && response.statusCode == 200) {
		          mailer.sendMail(doc.email, doc.yourEmail, doc.yourName, doc.theirName, doc.yourMessage, body);
=======

	  var myCursor = collection.find({'time' : time.getUTCHours() + "-" + time.getUTCDate() + "-" + time.getUTCMonth() + "-" + time.getUTCFullYear()});

      myCursor.toArray(function(error, docs) {
        if(error) throw error;
        docs.forEach(function(doc){
	        requestMod('http://peddler.co/form/scrape', function (error, response, body) {
			  if (!error && response.statusCode == 200) {
		          mailer.sendMail(doc.email, doc.yourEmail, doc.yourName, doc.theirName, doc.yourMessage, body, doc.genTime);
		          collection.remove({'time' : time.getUTCHours() + "-" + time.getUTCDate() + "-" + time.getUTCMonth() + "-" + time.getUTCFullYear()});
>>>>>>> throwing that up
		        }
			});
		});
      });
	});
}

exports.addDB = addDB;
exports.checkDB = checkDB;