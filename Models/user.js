var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	email: String,
	name: String,
    color:String,
	password: String,
}),
User = mongoose.model('User', userSchema);

module.exports = User;