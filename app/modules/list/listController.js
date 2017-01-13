define(['common/controllers/controllerModule'],function(controllers){
	controllers.controller('listController',['$scope','articles',function($scope,articles){
		$scope.articles = articles;
	}])
})