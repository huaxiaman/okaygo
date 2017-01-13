
var User = require('../../db/users.js');

function isEmptyObject(e){
		var t;
		for ( t in e ) {
			return !1;
		};
		return !0;
	}

/**
 * 用户注册
 * @ req是http请求信息
 * @ res是http响应信息
 * @ 用户注册要求http请求参数中包含合法的用户名及密码
 * @ 返回的响应信息中应包含注册结果
 * @ 注册结果由token、stateCode、stateMessage组成
 * */
module.exports.register = function(req, res){
	
	var userName = undefined;
	var userPassword = undefined;

	if( req.query === undefined || isEmptyObject(req.query) ) {
		req.query = req.body;
	}
	
	userName = req.query.userName;
	userPassword = req.query.userPassword;
	
	if ( !userName || !userPassword ) {
		
		res.status(401).json({
			stateCode: 1,
			stateMessage: '请完善注册信息',
		})
		
		console.log('请完善注册信息');
		
		return ;
		
	}
	
	User.findOne({userName: userName},function(err, user){
		
		if ( err ) {
			
			res.status(500).json({
				stateCode: 2,
				stateMessage: '查询数据库发生错误'
			})
			
			console.log('查询数据库发生错误')
			
		} else if ( user ) {
			
			res.status(401).json({
				stateCode: 3,
				stateMessage: '该用户已存在'
			})
			
			console.log('该用户已存在')
			
			
		} else {
			
			var newUser = new User({
				userName: userName,
				userPassword: userPassword,
				userCreatedDate: new Date(),
				userLastLoginDate: new Date(),
				userNickName: '游客'
			});
			
			newUser.save(function(error,savaData){
				
				if ( error ) {
					
					res.status(500).json({
						stateCode: 4,
						stateMessage: '执行数据库操作发生错误'
					})
					
					console.log('执行数据库操作发生错误')
					
					
				} else {
					
					
					res.status(200).json({
						stateCode: 5,
						stateMessage: '注册成功',
						token: newUser.generateJwt()
					})
					
					console.log('注册成功')
					
					
				}
				
			})
			
		}
		
	})
		
}
module.exports.query = function(req, res){
	
	if(req.params.id === undefined){
		//如果没指定用户id
		
		res.status(401).json({
			stateCode: 0,
			stateMessage: '没指定用户id'
		})
		
		return ;
		
	}
	
	User.findOne({_id: req.params.id},function(err,doc){
		
		if ( err ) {
			res.status(500).json({
				stateCode: 1,
				stateMessage: '查询失败'
			});
			console.log(err);
			console.log('查询失败');
		}else{
			res.status(200).json({
				stateCode: 2,
				stateMessage: '查询成功',
				userInfor: doc
			})
		}
		
	})
	
	
};

module.exports.update = function(req,res){
	
	if(req.params.id === undefined){
		//如果没指定用户id
		
		res.status(401).json({
			stateCode: 0,
			stateMessage: '没指定用户id'
		})
		
		return ;
		
	}
	
	if( req.query === undefined || isEmptyObject(req.query) ){
		req.query = req.body;
	}
	
	if(isEmptyObject(req.query)) {
		
		res.status(401).json({
			stateCode: 1,
			stateMessage: '请传递有效的更新信息'
		})
		
		console.log('请传递有效的更新信息');
		
		return ;
	}
	var conditions = {_id: req.params.id};
	var update = {$set: req.query};
	var options = {upsert: true}; 
	
	User.update(conditions,update,options,function(err,tip){
		
		if( err ){
			
			res.status(500).json({
				stateCode: 2,
				stateMessage: '更新失败'
			});
			console.log(err);
			
			
		} else {
			
			res.status(200).json({
				stateCode: 3,
				stateMessage: '更新成功'
			});
			console.log('更新成功');
			console.log(tip);
		}
	})
	
} 