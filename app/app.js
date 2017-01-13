//app.js
define(['angular', 'underscore', 'mainController', 'mainDirective', 'mainService'], function(angular, _) {

	return angular.module('mean', ['ui.router', 'mean.controllers', 'mean.directives', 'mean.services']).config(['$httpProvider', function($httpProvider) {
		
		$httpProvider.interceptors.push('httpInterceptor');
		$httpProvider.interceptors.push('permissonInterceptor');
		
	}]).provider('permissonInterceptor', function() {
		this.$get = function($location, $q) {
			return function(promise) {
				return promise.then(null, function(response) {
					if(response.status === 403 || response.status === 401) {
						$location.path('/unauthorized');
						console.log('unauth')
					}
					return $q.reject(response);
				});
			};
		};
	}).controller('mainAppCtrl', ['$scope','$location','permissonService',function($scope, $location, permissonService) {
		console.log('总控制器');
		$scope.$on('permissonChanged',function(){
			console.log('权限改变');
		});
		/*$scope.$on('$routeChangeStart', function(scope, next, current) {
			console.log('权限改变');
			var permission = next.$$route.permission;
			if(_.isString(permission) && !permissions.hasPermission(permission))
				$location.path('/unauthorized');
		});*/
	}])/*.factory('httpInterceptor',['$log','$location',function($log,$location){
		$log.debug('httpInterceptor');
		
		var httpInterceptor = {
			
	        request: function(config){
	        	
	        	if(config['data'] != '' && config['data'] != null && config['data'] != undefined ){
	        		
	        	}
	        	$log.debug(config);
	        	$log.debug('11111111111111111');
	        	if(config.url === "modules/index/recommends.html"){
	        		config.url = "modules/management/account.html"
	        	}
	        	//$location.href('http://www.baidu.com');
	            
	            $log.debug(config)
	            return config;
	            
	        }
	        
	    };
	    
	    return httpInterceptor;
	    
	}])*/

})