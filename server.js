var express = require('express');
var bodyParser = require('body-parser');

var port = 8000;

var app = express();

app.use(bodyParser());

app.listen(port, function() {
	console.log("Started server listening on port " + port);
});