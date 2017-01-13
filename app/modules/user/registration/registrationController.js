define([
	'common/controllers/controllerModule',
	'common/services/authenticationService',
	'common/services/userService'
	],function(controllers){
	
		controllers.controller('registrationController',['$location','$window','$scope','authenticationService','userService',function($location,$window,$scope,auth,userService){
			$scope.userDate = {
			};
			$scope.submitForm = function(){
				userService.register({userName:$scope.userDate.userName,userPassword:$scope.userDate.userPassword}).success(function(data){
					$window.sessionStorage.token = data.token;
					var payload = JSON.parse($window.atob(data.token.split('.')[1]));
					auth.isLogged = true;
					auth.name = payload.name;
					auth.id = payload._id;
					$location.path('/account');
				}).error(function(data){
					console.log({status:status,data:data})
				});
			}
		}])
	
	
})