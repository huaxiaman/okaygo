define(['common/directives/directiveModule','common/services/authenticationService'],function(directives){
	directives.directive('myheader',function(){
	return {
		restrict: 'AE',
		templateUrl: 'common/tpls/ng-header.html',
		controller: function($state,$window,$scope, $location, authenticationService){
			
			$scope.auth = authenticationService;
			$scope.logout = function () {
	            if(authenticationService.isLogged){
					authenticationService.isLogged = false;
					delete $window.sessionStorage.token;
				}
	            $state.go('login')
	           // $location.path('/');
	        };
		}
	}
});
})