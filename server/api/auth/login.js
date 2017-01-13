var User = require('../../db/users.js');
function isEmptyObject(e){
	var t;
	for ( t in e ) {
		return !1;
	};
	return !0;
}

module.exports.signin = function(req, res){
	
	var userName = undefined;
	var userPassword = undefined;
	
	
	if ( req.query === undefined || isEmptyObject(req.query) ) {
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
			
			if (user.userPassword === req.query.userPassword){
				
				res.status(200).json({
					token: user.generateJwt(),
					stateCode: 3,
					stateMessage: '登录验证通过'
				})
				
				console.log('登录验证通过');
				
			} else {
				
				res.status(401).json({
					stateCode: 4,
					stateMessage: '密码错误'
				})
				
				console.log('密码错误');
			}
			
		} else {
			
			res.status(401).json({
				stateCode:5,
				stateMessage: '用户不存在'
			})
			
			console.log('用户不存在');
			
		}
		
	})
	
	
/*	if ( !req.query.uName || !req.query.uPwd ) {
		result.message = '登录失败，缺少参数';
		result.statusCode = 1;
		res.send(401);
		console.log(req.query.uName);
		console.log(req.query.uPwd);
		console.log(result);
	} else {
		User.find({username: req.query.uName},function(err, doc){
			if ( err ) {
				result.message = '查询数据库发生错误';
				result.statusCode = 2;
				res.send(401)
				console.log(result);
			} else {
				if ( doc.length === 0 ) {
					
					result.message = '用户名不存在';
					result.statusCode = 3;
		        	res.send(401)
		        	console.log(result);
					
				} else if ( doc.length > 0 && (doc[0].userpwd === req.query.uPwd) ) {
					result.message = '登录成功';
       				result.statusCode = 0;
       				result.token = doc[0].generateJwt();
					res.json(200,result);
					console.log(result);
				} else {
					result.message = '密码错误';
       				result.statusCode = 4;
					res.send(401)
					
					console.log(result);
				}
			}
		});
	}
	*/
}
