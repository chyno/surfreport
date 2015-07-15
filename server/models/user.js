var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  password: { type: String, default: '' },
  zip: { type: String, default: '' },
  username: { type: String, default: '' }
   
});

module.exports = function() {
	console.log("in user module")
	mongoose.model('User', UserSchema);
};