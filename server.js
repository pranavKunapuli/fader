var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); // Request body parser
var session = require('express-session');

var routes = require('./app/routes.js');

var port = 8000; // TCP port for incoming connections

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", routes);

// Listening on specified port
app.listen(port, function() {
	console.log("Started server listening on port " + port);
});