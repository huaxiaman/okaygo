define(['common/services/serviceModule'],function(services){
	services.factory('httpInterceptor',httpInterceptor);
	
	httpInterceptor.$inject = ['$location','$rootScope','$q','$injector','$window'];
	function httpInterceptor ($location,$rootScope, $q, $injector,$window){
		var httpInterceptor = {
			request: function(config){
				/*
				 * @ request 在请求发送到后台之前，对请求进行处理
				 * @ config（参数）包含 本次请求的配置信息的对象
				 * @ 返回值 request方法的返回值必须为config或者promise对象
				 * 
				 * */
				//为每个请求的添加token
				config.headers = config.headers || {};
				if($window.sessionStorage.token){
					config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
				}
				return config;
			},
			requestError: function(rejectReason){
				console.log(rejectReason);
				return rejectReason;
			},
			response: function(response){
				
				/*if(response.status === 401 || response.status === 401){
					console.log('res '+response.status)
				}*/
				
				return response;
			},
			responseError: function(response){
				//404状态返回
				if(response.status === 404){
					$location.path('/error404');
				}
				console.log('响应错误');
				console.log(response);
				
				return response;
			}
		}
		return httpInterceptor;
	}
})