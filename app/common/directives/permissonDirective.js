define(['common/directives/directiveModule','underscore'],function(directives,_){
	
	directives.directive('hasPermisson',function(permissonService){
		return {
			link: function(scope, element, attrs){
				if(!_.isString(attrs.hasPermisson)){
					throw 'hasPermisson value must be a string';
				}
				var value = attrs.hasPermisson.trim();
				var notPermissonFlag = value[0] === '!';
				if(notPermissonFlag){
					value = value.slice(1).trim();
				}
				function toggleVisibilityBasedOnpermisson() {  
			        var haspermisson = permissonService.hasPermisson(value);  
			    
			        if(haspermisson && !notPermissonFlag || !haspermisson && notPermissonFlag)  
			          element.show();  
			        else 
			          element.hide();  
			    }  
			    toggleVisibilityBasedOnpermisson();  
			    scope.$on('permissonsChanged', toggleVisibilityBasedOnpermisson);  
			}
		}
	})
})
