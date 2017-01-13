define(['common/controllers/controllerModule',
		'common/services/authority',
		'common/services/authenticationService',
		'common/services/permissonService',
		'common/directives/permissonDirective',
		
],function(controllers){
	
	
	controllers.controller('editArticleController',['$rootScope','$scope','$http','$window','authenticationService',function($rootScope,$scope,$http,$window,auth){
		var articleData = {};
		
		/*var token = auth.getToken();
		var payload = JSON.parse($window.atob(token.split('.')[1]));*/
		
		$scope.submit = function(){
			
			console.log($rootScope.sunjianyun);
			articleData.articleTitle = $scope.articleTitle;
			articleData.articleAbstract = $scope.articleAbstract;
			articleData.articleContent = $scope.articleContent;
			articleData.articleClassify = $scope.articleClassify;
			articleData.publishDate = new Date();
			articleData.articleAuthor = auth.name;
			console.debug('前端数据发送前： ' + articleData.articleAuthor);
			$http.post('/api/uparticle',articleData).success(function(data){
				console.log(data)
			})
			
		}
	}])
})