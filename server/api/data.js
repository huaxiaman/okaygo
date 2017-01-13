var express = require('express');
var http = require('http');
var path = require('path');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../db/users.js');
var auth = require('./auth/auth');
var login = require('./auth/login');
var userpermisson = require('./auth/UserPermisson');
var uparticle = require('./upArticle');
/*var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
*/
/*
 * 登录登出
 * GET /session # 获取会话信息 
 * POST /session # 创建新的会话（登入） 
 * PUT /session # 更新会话信息 
 * DELETE /session # 销毁当前会话（登出）
 * 
 * 注册注销
 * GET /user/:id # 获取用户信息
 * POST /user # 创建新用户
 * PUT /user/:id # 更新用户
 * DELETE /user/:id # 注销用户
 * 
 * 
 * 
 * */

router.post('/api/session',login.signin);


router.get('/api/user/:id',auth.query);
router.post('/api/user',auth.register);
router.post('/api/user/:id',auth.update);
router.delete('/api/user/:id',function(){});


router.get('/list',function(req,res){
	res.send('后台返回数据');
});

//login
//router.post('/api/login',login.login);

router.post('/api/uparticle',uparticle.upArticle);

router.get('/api/getarticle',uparticle.getArticle);
router.get('/api/article/:id',uparticle.getArticle);

router.get('/api/UserPermisson',userpermisson.permisson);
/*
 
 * status: 0(注册成功),1(缺少参数错误),2(数据查询错误),3(数据保存错误),4(注册失败，用户已存在) 
 * */

router.post('/api/regist',function(){}/*function(req,response){
	
	var result = {
		errmsg: '注册成功',
		status: 0
	};
	
	if (!req.query.uName || !req.query.uPwd) {
		
        console.log("name", req.query.uName);
        console.log("password", req.query.uPwd);
        result.errmsg = '缺少参数，用户信息不完整';
        result.status = 1;
        
		console.log(result);
        response.send(result);
        
    } else {
    	
    	User.find({'username':req.query.uName},function(err,doc){
    		
			if(err){
				
				result.errmsg = '查询数据库发生错误';
       			result.status = 2;
       			
				console.log(result);
       			response.send(result);
				
			}else{
				
				if(doc.length===0){

					var user = new User({
				    	username: req.query.uName,
				    	userpwd: req.query.uPwd
				    });
				  
				    user.save(function(err,res) {
				    	
				        if (err) {
				        	
				        	result.errmsg = '数据保存失败';
       						result.status = 3;
       						
							console.log(result);
				        	console.log("发生错误: " + err);
				        	response.send(result);
				        	
				        } else {
				        	
				        	response.send(result);
							console.log(result);
				        	console.log("已保存数据: " + res);
				        	
				        }
				
				    });
				    
				}else{
					
					result.errmsg = '注册失败，该用户名已被使用';
       				result.status = 4;
					console.log(result);
					
					response.send(result);
				}
				
			}
			
		});
    }
	
	//res.send(result);
    
}*/);

module.exports = router;