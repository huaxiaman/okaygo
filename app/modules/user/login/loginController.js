define([
	'common/controllers/controllerModule',
	'common/services/permissonService',
	'common/services/authenticationService',
	'common/services/userService'
],function(controllers){
	
		controllers.controller('loginController',['$http','$state','$location','$window','$scope','$rootScope','authenticationService','userService','permissonService',function($http,$state,$location,$window,$scope,$rootScope,auth,userService,permisson){
			
			$scope.userDate = {
			};
			$scope.nofound = function(){
				$http.get('/sdfdf');
			};
			$scope.login = function(){
				if($scope.userDate.userName !== undefined && $scope.userDate.userPassword){
					
					userService.login({userName:$scope.userDate.userName,userPassword:$scope.userDate.userPassword}).success(function(data){
						
						if(data.token){
							$window.sessionStorage.token = data.token;
							var payload = JSON.parse($window.atob(data.token.split('.')[1]));
							auth.isLogged = true;
							auth.name = payload.name;
							auth.id = payload._id;
							$state.go('account');
							permisson.setPermisson('edit');
						}
						/*
						 * payload： 返回权限参数
						 * 权限级别： guest(游客);
						 * customer
						 * 
						 * 
						 * 
						 * */
						
						
						
					/*	荣誉:  充值满多少,自动升级,青铜-白银-黄金-钻石-圣斗士;
						vip: 游客,注册用户,普通会员,超级会员
						游客: 未登录
						注册用户: 已登录或已注册;
						普通会员: 购买1或3或6或12个月的普通付费会员,10元/月,27元/月,54元/月,108元/月;
						超级会员: 同上,资费为15元/月;
						var permissons = {
							guest: true,
							customer: true,
							vip: true,
							supervip: true
						}
						app初始化,从后台获取访问者的权限,将权限信息保存到权限服务模块中,每次路由跳转和获取数据都要从
						权限模块获取访问者的权限信息进行校验;
						用户注册后,后台默认权限为customer,后台返回一个token,包括用户名,用户权限,token过期时间等信息,
						用户每次访问数据或者路由时候,都要带上该token,其中auth信息,是否登出,用于判断会话是否过期,*/
						
						
						//认证登录状态
						
						//添加token
						
						
						
					}).error(function(status, data){
						
						console.log('登录请求已发送，并失败返回');
						console.log({status:status,data:data});
						
					})
				}
			};
			$scope.logout = function(){
				if(auth.isLogged){
					
					auth.isLogged = false;
					delete $window.sessionStorage.token;
					$location.path('/');
					
				}
			}
			
			/*$rootScope.$on('userIntercepted',function(errorType){
				// 跳转到登录界面，这里我记录了一个from，这样可以在登录后自动跳转到未登录之前的那个界面
				$state.go("login",{from:$state.current.name,w:errorType});
			});*/
		}])
	
	
})