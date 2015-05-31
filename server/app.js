
var express = require('express');
var app = express();

exports.StartServer = function() {
  //console.log("hello from server");

//app.use('/', express.static('/index.html'));
app.use(express.static('./client'));
app.use('/', express.static('./client/index.html'));
routes = require('./routes/index')(app);
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

 

};	

