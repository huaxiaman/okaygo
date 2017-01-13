define(['common/services/serviceModule'],function(services){
	services.factory('httpInterceptor',['$log','$q','$rootScope',function($log,$q,$rootScope){
		$log.debug('httpInterceptor');
		return {
			request: function(config){
				config.header['TOKEN'] = $rootScope.user.token;
				return config;
			},
			responseError: function(response){
				var data = response.data;
				
				if(data['errorCode'] == '500999'){
					$rootScope.user = {token : ''};
					$rootScope.$emit("userIntercepted","notLogin",response);
				}
				if(data["errorCode"] == "500998"){
           		    $rootScope.$emit("userIntercepted","sessionOut",response);
            	}
				return $q.reject(response);
			}
			
		}
	}])
})