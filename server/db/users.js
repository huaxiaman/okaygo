var mongoose = require('./db.js'),
	jwt = require('jsonwebtoken'),
	Schema = mongoose.Schema;
	
//用户信息集合
var UserSchema = new Schema({
	userName: {type: String, required: true},
	userPassword: {type: String},
	userEmail: {type: String},
	userCreatedDate: {
		type: Date,
		default: Date.now
	},
	userLastLoginDate:{
		type: Date
	},
	userMobile: {type: String},
	userRole: {type: Number,default: 0},//
	userSex: {type: String},
	userQQ: {type: String},
	userEducation: {type: String},
	userBirthday: {type: Date},
	userNickName: {type: String,default: '游客'}
})
/*删除集合 db.集合名.drop();
查看集合下所有记录: db.集合名.find();*/
UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    return jwt.sign({
        _id: this._id,//process.env.JWT_SECRET
        name: this.userName,
        exp: parseInt(expiry.getTime()/1000)}, 'sunjianyun');
};

module.exports = mongoose.model('Users',UserSchema);
