var mongoose = require('mongoose'),
db = mongoose.connect('mongodb://localhost/test').connection;
db.on('error', console.error.bind(console, 'connection error:'));

var onErr = function(err,callback){
 mongoose.connection.close();
 callback(err);
};

//var UserSchema = mongoose.Schema({username:String, password: String,   zip:String});

var addUser = function(user, callback) {
		

       

	  	 var userSchema = new mongoose.Schema({
	   	 	username: String,
	   	 	password: String,
	   	 	zip: String
	  	  });
          
		  var User = db.model('User', userSchema);
		  console.log('usr being created');
	      var usr = new User(user);
	      if (usr)
	      {
	      	console.log('usr object' + usr);
	      }
	      else
	      {
	      	console.log('usr is null');
	      }
	      
	      usr.save(function(err) {
	      	 if(err) {
	      	 	console.log('user error' + err);
	      	 	onErr(err,callback);
	      	 }
	      	 else
	      	 {
	      	 	callback("");
	      	 	console.log('User added!');
	      	 }
	      });
	 	 
	  }

 exports.addUser =  addUser;