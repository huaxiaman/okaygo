var mongoose = require('mongoose'),
	jwt = require('jsonwebtoken'),
	DB_URL = 'mongodb://localhost:27017/mean';

mongoose.Promise = global.Promise;

/* *
 * 连接数据库
 * 
 */

mongoose.connect(DB_URL);

//连接成功
mongoose.connection.on('connected',function(){
	console.log('Mongoose connection open to' + DB_URL);
});

//连接错误
mongoose.connection.on('error',function(err){
	console.log('Mongoose connection error: ' + err);
});

//连接错误
mongoose.connection.on('disconnected',function(err){
	console.log('Mongoose connection disconnected');
});

module.exports = mongoose;



