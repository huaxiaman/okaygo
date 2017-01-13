define(['common/services/serviceModule'],function(services){
	
	
	
	
	services.service('listService',['$http','$q',function($http,$q){
		return function(){
			console.log('beizhi')
				 var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			      $http({method: 'GET', url: '/api/getarticle?articleAuthor=sunjiayun'}).  
			      success(function(data, status, headers, config) {  
			      	//console.log(data)
			      	
			        deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			      }).  
			      error(function(data, status, headers, config) {  
			        deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			      });  
			      //console.log(deferred.promise)
			      return deferred.promise; 
			}
		
	}])
})
