var server = require("./realServer");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var db = require("./database");

var handle = {}
handle[""] = requestHandlers.index;
handle["/"] = requestHandlers.index;
handle["/index"] = requestHandlers.index;
handle["/vinh"] = requestHandlers.vinh;
handle["/dooman"] = requestHandlers.dooman;
handle["/newCheer"] = requestHandlers.newCheer;

setInterval(function() {
<<<<<<< HEAD
=======
	//var time = new Date();
	//console.log(time.getUTCHours() + "-" + time.getUTCDate() + "-" + time.getUTCMonth() + "-" + time.getUTCFullYear());
>>>>>>> throwing that up
	var now = new Date();
	db.checkDB(now);
}, 10000);

<<<<<<< HEAD
=======

>>>>>>> throwing that up
server.start(router.route, handle);