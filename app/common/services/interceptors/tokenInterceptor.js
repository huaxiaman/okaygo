define(['common/services/serviceModule'],function(services){
	services.factory('tokenInterceptor',function($q,$window,authenticationService){
		return {
			
				//为请求添加token
				request: function(config){
					config.headers = config.headers || {};
					if($window.sessionStorage.token){
						config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
					}
					return config;
				}
			
		}
	})
})