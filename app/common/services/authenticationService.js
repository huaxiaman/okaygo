define(['common/services/serviceModule'],function(services){
	services.service('authenticationService',function($window){
		var payload;
		var auth = {
			token: '',
			isLogged: false,
			id: this.token ? JSON.parse($window.atob(this.token.split('. ')[1]))._id : '',
			name: this.token ? JSON.parse($window.atob(this.token.split('. ')[1])).name : ''
		}
		
		//初次加载应用
		
		if($window.sessionStorage.token){
			console.log($window.sessionStorage.token)
			console.log('2222')
			payload = JSON.parse($window.atob($window.sessionStorage.token.split('.')[1]));
			
			auth.isLogged = new Date(payload.exp*1000) > new Date();
			auth.id = payload._id;
			auth.name = payload.name;
		}
		
		//退出后，销毁token
		//登录注册后要修改认证信息
		
		
		return auth;
	})
})