define(['common/services/serviceModule'],function(services){
	services.factory('userService',function($http){
		/*
		 
		 * @用户登录 login
		 * @用户登录 logout（由于使用token管理认证信息，登录即删除客户端token）
		 * @获取用户信息 queryUser
		 * @用户注册 register
		 * @用户更新信息 updateUser
		 * @用户注销 deleteUser
		 * 
		 * */
	function isEmptyObject(e){
		var t;
		for ( t in e ) {
			return !1;
		};
		return !0;
	}
		return {
			login: function(loginData){
				console.log(loginData);
				return $http.post('/api/session',loginData);
				
			},
			logout: function(){
				
			},
			register: function(registerData){
				return $http.post('/api/user',registerData);
			},
			queryUser: function(userId){
				return $http.get('/api/user/'+userId);
			},
			deleteUser: function(){
				return $http.delete('/api/user/:id');
			},
			updateUser: function(userId, updateData){
				/*if(!obj || typeof obj !== 'Object' || isEmptyObject(obj) ){
					return console.log('updateUser 参数错误！');
				}
				var keyword = ['username','useremail',
				'qq','education','birthday','createDate']
				for (var i in obj){
					
				}*/
				
				return $http.post('/api/user/'+userId, updateData);
			}
		};
	})
})