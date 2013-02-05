var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");
    route(handle, pathname, response, request);
  }

<<<<<<< HEAD
  http.createServer(onRequest).listen(process.env.PORT);
=======
  http.createServer(onRequest).listen(8080);
>>>>>>> throwing that up
  console.log("Server has started.");
}

exports.start = start;
