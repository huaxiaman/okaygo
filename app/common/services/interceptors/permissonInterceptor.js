define(['common/services/serviceModule'], function(services) {

	/*services.provider('permissionInterceptor', function() {
		this.$get = function($location, $q) {
			return function(promise) {
				return promise.then(null, function(response) {
					if(response.status === 403 || response.status === 401) {
						$location.path('/unauthorized');
					}
					return $q.reject(response);
				});
			};
		};
	});*/
/*	services.factory('permissionInterceptor', function() {
		return {}
		this.$get = function($location, $q) {
			return function(promise) {
				return promise.then(null, function(response) {
					if(response.status === 403 || response.status === 401) {
						$location.path('/unauthorized');
					}
					return $q.reject(response);
				});
			};
		};
	});*/

/*	services.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.$inject = ['$rootScope', '$q', '$injector', '$window'];

	function httpInterceptor($rootScope, $q, $injector, $window) {
		var httpInterceptor = {
			request: function(config) {
				var url = config.url;
				if(url && config.method.toLowerCase() == 'GET'.toLowerCase() && url.indexOf('.html') < 0) {
					config.params = config.params || {};
					config.params.timestamp = new Date().getTime();
				}
				if(angular.isObject(config.data)) {
					var param = [];
					angular.forEach(config.data, function(value, key) {
						this.push(key + '=' + value)
					}, param);
					config.data = param.join('&');
				}
				config.headers = config.headers || {};
				config.headers['Content-Type'] = "application/x-www-form-urlencoded";
				return config;
			},
			requestError: function(config) {
				return $q.reject('网络连接错误');
			},
			response: function(response) {
				return response;
			},
			responseError: function(response) {
				if(response.status === -1) {
					response.status = 200;
				}
			}
		}
		return httpInterceptor;
	}*/
})