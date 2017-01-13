define(['common/services/serviceModule'],function(services){
	
	authority.$inject = ['$window','$location','$timeout','$http'];
	
	function authority($window, $location, $timeout, $http){
		var saveToken = function (token) {
            $window.localStorage['read-token'] = token;
        };
        var getToken = function () {
            return $window.localStorage['read-token'];
        };
        
		var payload = (function(){
				var token = getToken();
				var payload = {};
				if( token ) {
					payload = JSON.parse($window.atob(token.split('.')[1]));
				}
				return payload;
			}());
			
		var authState = {
			name: payload.name || '',
			exp: payload.exp || '',
			msg: 'ddd',
			code: payload.exp ? ( payload.exp > Date.now() / 1000) : false 
		};
		
        var regist = function(user) {
        	
            return $http.post('/api/regist', user).success(function(data) {
            	var u = JSON.parse($window.atob(data.token.split('.')[1]));
                saveToken(data.token);
                
                authState.name = u.name;
                authState.msg="登录成功";
                authState.code = true; //1表在线
                console.log(data);
            });
        };
        var login = function(user) {
        	// GET /login
            return $http.post('/api/login', user).success(function(data) {
                var u = JSON.parse($window.atob(data.token.split('.')[1]));
                saveToken(data.token);
                
                authState.name = u.name;
                authState.msg="登录成功";
                authState.code = true; //1表在线
                
                $location.path('/account');
                console.log(authState);
                console.log(data);
               
            });
        };
        
        
        var logout = function() {
        	
        	// GET
            $window.localStorage.removeItem('read-token');
            authState.msg="退出登录";
            authState.code = false; //0表离线
           
        };

        return {
        	authState: authState,
            saveToken: saveToken,
            getToken: getToken,
            regist: regist,
            login: login,
            logout: logout
        };
	}
	services.service('authority',authority);
})