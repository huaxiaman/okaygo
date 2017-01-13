define(['common/services/serviceModule'],function(){
	
	function config(templateUrl, controllerName, directive){
		if ( !$controllerProvider ) {
			throw new Error('$controllerProvider is not set....');
		}
		
		var defer,
			html,
			routerDefinition = {};
		
		routerDefinition.templateUrl = templateUrl;
		routerDefinition.controllerName = controllerName;
		routerDefinition.resolve = {
			delay: function($q, $rootScope){
				defer = $q.defer();
				
				var dependencies = [controllerName];
				if(directive){
					dependencies = dependencies.concat(directive);
				}
				require(dependencies, function(){
					var controller = arguments[0],
						template = "";
						
					for (var i = 2; i < arguments.length; i++) {
						lazyDirective.register(arguments[i]);
					}
				})
				
			}
		}
		
	}
	
})