var express = require('express');
var app = express();
var routes = require('./routes');
var security = require('./security');

exports.StartServer = function() {
	  //console.log("hello from server");
console.log("path " +__dirname + '/client');
	 
	 app.use(express.static('./client'), function(req, res, next) {
		//res.redirect('https://www.yahoo.com/');
		console.log("request path: " + req.path);
        next();
		 });

 
	routes(app);
    security(app);
     //===============PORT=================
	var port = process.env.PORT || 9000;
	app.listen(port);
	console.log("listening on " + port + "!");

    
};  