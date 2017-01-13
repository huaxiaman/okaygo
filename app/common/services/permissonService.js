define(['common/services/serviceModule'],function(services){
	services.factory('permissonService',function($rootScope){
		var permissonList;
		return {
			setPermisson: function(permisson){
				permissonList = permisson;
				$rootScope.$broadcast('permissonChanged');
				console.log('permissonList is :',permissonList);
			},
			hasPermisson: function(permisson){
				permisson = permisson.trim(); 
				return _.some(permissonList,function(item){
					if(_.isString(item.Name)){
						return item.Name.trim() === permisson;
					}
				})
			}
		}
	})
})