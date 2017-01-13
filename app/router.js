define(['app','ui-router','common/services/authenticationService'],function(app){
		
		return app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){
			
			//$httpProvider.interceptors.push('httpInterceptor');
			//改变view时滚动至顶部
			$uiViewScrollProvider.useAnchorScroll();
			
			$urlRouterProvider.otherwise('/index');
			
			
			$stateProvider.state('index',{
				url: '/index',
				views: {
					'main': {
						templateUrl: 'modules/index/index.html'
					},
					'recommends@index': {
						templateUrl: 'modules/index/recommends.html'
					},
					'programmers@index': {
						templateUrl: 'modules/index/programmers.html'
					}
				}
			}).state('login',{
				url: '/login',
				views: {
					'main': {
						templateUrl: 'modules/user/login/login.html',
						controller: 'loginController'
					}
				}
				
			}).state('about',{
				url: '/huiyuan',
				views: {
					'main': {
						template: 'fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf'
					}
				}
			}).state('regist',{
				url: '/regist',
				views: {
					'main': {
						templateUrl: 'modules/user/registration/registration.html'
					}
				}
			}).state('list',{
				url: '/list',
				views: {
					'main': {
						templateUrl: 'modules/list/list.html',
						resolve: {
							'articles': function($http, $q){
								 var deferred = $q.defer(); 
							      $http({method: 'GET', url: '/api/getarticle?articleAuthor=sunjiayun'}).  
							      success(function(data, status, headers, config) {  
							        deferred.resolve(data); 
							        console.log(data)
							      }).error(function(data, status, headers, config) {  
							        deferred.reject(data);   
							      });  
							      return deferred.promise; 
							
							}
						},
						controller: 'listController'
					}
				}
			}).state('account',{
				url: '/account',
				views: {
					'main': {
						templateUrl: 'modules/management/account.html'
					},
					'account_content@account': {
						templateUrl: 'modules/management/userInfor/profile.html',
						resolve:{
							userInfor: function($http, $q, $window){
								var payload = JSON.parse($window.atob($window.sessionStorage.token.split('.')[1]));
								
								var deferred = $q.defer();
								$http.get('/api/user/' + payload._id).success(function(data){
									deferred.resolve(data);
									
								}).error(function(data, status, headers, config) {  
							        deferred.reject(data);   
							      }); 
								return deferred.promise;
							}
						},
						controller: 'profileController'
					}
				},
				access: { requiredLogin: true }
			}).state('account.profile',{
				url: '/profile',
				views: {
					'account_content@account': {
						templateUrl: 'modules/management/userInfor/profile.html',
						resolve:{
							'userInfor': function($http, $q, $window){
								var payload = JSON.parse($window.atob($window.sessionStorage.token.split('.')[1]));
								
								var deferred = $q.defer();
								$http.get('/api/user/' + payload._id).success(function(data){
									deferred.resolve(data);
								}).error(function(data, status, headers, config) {  
							        deferred.reject(data);   
							      }); 
								return deferred.promise;
								
							}
						},
						controller: 'profileController'
					}
				},
				access: { requiredLogin: true }
			}).state('account.editarticle',{
				url: '/editarticle',
				views: {
					'account_content@account': {
						templateUrl: 'modules/management/editArticle.html'
					}
				},
				access: { requiredLogin: true }
			}).state('account.upload',{
				url: '/upload',
				views: {
					'account_content@account': {
						templateUrl: 'modules/management/upload.html'
					}
				},
				access: { requiredLogin: true }
			}).state('error401',{
				url: '/error401',
				views: {
					'main': {
						templateUrl: 'common/tpls/errors/401.html'
					}
				}
				
			}).state('error403',{
				url: '/error403',
				views: {
					'main': {
						templateUrl: 'common/tpls/errors/403.html'
					}
				}
				
			}).state('error404',{
				url: '/error404',
				views: {
					'main': {
						templateUrl: 'common/tpls/errors/404.html'
					}
				}
				
			}).state('error500',{
				url: '/error500',
				views: {
					'main': {
						templateUrl: 'common/tpls/errors/500.html'
					}
				}
				
			}).state('error502',{
				url: '/error502',
				views: {
					'main': {
						templateUrl: 'common/tpls/errors/502.html'
					}
				}
				
			});
		}).run([
			'$rootScope',
			'$state',
			'$stateParams',
			'$window',
			'$location',
			'authenticationService',
		
			function($rootScope,$state,$stateParams,$window,$location,authenticationService){
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				
				//路由拦截
				$rootScope.$on('$stateChangeStart',function(event, toState,toParams,fromState,fromParams){
					if (toState != null && toState.access != null && toState.access.requiredLogin
			            && !authenticationService.isLogged && !$window.sessionStorage.token) {
						event.preventDefault();
						$state.go('login')
			        }
				})
			}
		]);
		
		
})