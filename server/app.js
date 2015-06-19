var express = require('express');
var app = express();
var routes = require('./routes');

exports.StartServer = function() {
	  //console.log("hello from server");

	//app.use('/', express.static('/index.html'));
	app.use(express.static('./client'), function(req, res, next) {
		//res.redirect('https://www.yahoo.com/');
		console.log("request path: " + req.path);
        next();
		 });


	

	// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
	//app.use('/', express.static('./client/index.html'));
	

	routes(app);

     //===============PORT=================
	var port = process.env.PORT || 9000;
	app.listen(port);
	console.log("listening on " + port + "!");

     

};  