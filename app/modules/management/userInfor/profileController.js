define(['common/controllers/controllerModule',
	'common/services/permissonService',
	'common/services/authenticationService',
	'common/services/userService'],function(controllers){
	controllers.controller('profileController',['$scope','$http','$q','authenticationService','userService','userInfor',function($scope,$http,$q,auth,userService,userInfor){
		
		
		function isEmptyObject(e){
			var t;
			for ( t in e ) {
				return !1;
			};
			return !0;
		}
		//修改后的数据
		var modifyData = {};
		
		//与修改后的数据做比较
		var modifyData_compare = {};
		
		var userData_compare = {};
		//var newData2 = {};
		
		$scope.userData = {
		};
		
  		$scope.educate = [
			'未填写',
			'小学以下',
			'小学',
			'初中',
			'高中',
			'本科',
			'硕士',
			'博士'
		];
		//$scope.userData.userEducation = $scope.userEducation;
		$scope.forbid = true;
		
		$scope.formOff = function(){
			$scope.forbid = !$scope.forbid;
		};
		
		$scope.submit = function(){
				if($scope.userEducation !== undefined){
					$scope.userData.userEducation = $scope.userEducation;
				}
				console.log($scope.userData)
				$scope.forbid = true;
	
				for (var p in $scope.userData) {
					
					if(!_.has(modifyData_compare,p)){
						
						modifyData[p] = $scope.userData[p];
					}
					
					if($scope.userData[p] != modifyData_compare[p]){
						
						modifyData[p] = $scope.userData[p];
						
						
						console.log($scope.userData[p]+' ：不等于： '+ modifyData_compare[p]);
					}
				}
				
				if(isEmptyObject(modifyData)){
					console.log('没有修改，不提交')
					return false;
					
				}else{
					
					console.log("$scope.userData")
					console.log($scope.userData)
					console.log("modifyData")
					console.log(modifyData)
					console.log("modifyData_compare")
					console.log(modifyData_compare)
				/*if(!isEmptyObject(modifyData) && _.isEqual(modifyData,modifyData_compare)){
					console.log('不能重复提交')
					console.log(modifyData)
					console.log(modifyData_compare)
					return false;
				};*/
					userService.updateUser(auth.id,modifyData).success(function(data,status){
						
						//提交成功后更新比较对象
						for (var c in modifyData) {
							modifyData_compare[p] = modifyData[p]
						}
						//modifyData_compare = modifyData;
						
						//重置修改对象集合
						modifyData = {};
						console.log(status)
						console.log(data)
						if(status === 200){
							$scope.forbid = true;
						}
					}).error(function(err,data){
						console.log(err)
						console.log(data)
					});
				}
			
			
		}
		
		if ( !isEmptyObject(userInfor.userInfor) ) {
			console.log(userInfor.userInfor)
			//查询用户信息时，根据返回的用户信息，创建一个比较对象，用于比较下次提交时，用户是否做了有效修改
			for ( var i in userInfor.userInfor ) {
				console.log(i)
				switch ( i ) {
					case 'userNickName': modifyData_compare[i] = userInfor.userInfor[i];
						$scope.userData.userNickName = userInfor.userInfor[i];
						break;
					case 'userEmail': $scope.userData.userEmail = userInfor.userInfor[i];
						modifyData_compare[i] = userInfor.userInfor[i];
						break;
					case 'userMobile': $scope.userData.userMobile = userInfor.userInfor[i]
						modifyData_compare[i] = userInfor.userInfor[i];
						break;
					case 'userQQ': $scope.userData.userQQ = userInfor.userInfor[i]
						modifyData_compare[i] = userInfor.userInfor[i];
						break;
					case 'userEducation': $scope.userEducation = userInfor.userInfor[i];
						$scope.userData.userEducation = userInfor.userInfor[i];
						userData_compare[i] = userInfor.userInfor[i];
						break;
				}
				
			}
			
			console.log(modifyData_compare)
			
			
		}
		
		
	
		

	}])
})