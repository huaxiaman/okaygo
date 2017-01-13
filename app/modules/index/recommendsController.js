define(['common/controllers/controllerModule'], function(controllers) {

	controllers.controller('recommendsController', function($scope) {
		var recommends = [{
			kind: "javascript",	
			articals: [{
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}]
		}, {
			kind: "javascript",
			articals: [{
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}, {
				title: 'angularjs',
				des: 'angularjs',
				href: 'www.baidu.com',
				author: 'sunjianyun',
				date: '2010/05/06'
			}]
		}];

		$scope.recommends = recommends;
	})

})