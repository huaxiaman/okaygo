require.config({
		paths: {
		
			"angular": "lib/angular-1.3.0",
			"ui-router": "lib/angular-ui-router",
			"angular-animate": "lib/angular-animate",
			"jquery": "lib/jquery-1.10.2.min",
			"bootstrap": "lib/bootstrap",
			"underscore": "lib/underscore",
			"router": "router",
			"mainController": "common/controllers/mainController",
			"mainDirective": "common/directives/mainDirective",
			"mainService": "common/services/mainService",
			"app": "app"
			
		},
		shim: {
			"underscore": {
				exports: "_"
			},
			"angular": {
				exports: "angular"
			},
			"ui-router": {
				deps: ['angular'],
				exports: "ui-router"
			}
			
		}
});


var permissionList;

require(['jquery','router'],function($){
	$(document).ready(function(){
		$.get('api/UserPermisson',function(data){
			permissionList = data;
			console.log(permissionList);
			angular.bootstrap(document, ["mean"]);  
		})
	})
	
})

/*require(['angular','ui-router','jquery','router'],function(angular,$){
	angular.element().ready(function(){
		angular.bootstrap(document,['mean']);
	})
})*/
