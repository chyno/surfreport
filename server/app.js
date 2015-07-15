var express = require('express');
var app = express();
var routes = require('./routes');
var mongoose = require('mongoose');
var security = require('./security');
var fs = require('fs');
var join = require('path').join;


var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect('mongodb://localhost/test', options);
};

exports.StartServer = function() {

	connect();
	// Load models
	var modelsdirectory = join(__dirname, 'models');
	
	fs.readdirSync(modelsdirectory).forEach(function (file) {
  		if (~file.indexOf('.js'))
  		{
  			var fullfile = join(modelsdirectory, file); 
  			console.log("require file: " + fullfile);
  			require(fullfile)();
  		} 		
	});

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