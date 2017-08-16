var express = require('express');
var router = express.Router();

router.get("/", function(request, response) {
	response.send("Index page GET request");
});

module.exports = router;