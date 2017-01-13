var mongoose = require('mongoose');
var crypto = require('crypto');


var userSchema = new mongoose.Schema({
	name: {type: String,unique: true,required: true},
	password: string,
	createdOn: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('User', userSchema);
