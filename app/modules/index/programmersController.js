define(['common/controllers/controllerModule'], function(controllers) {
	controllers.controller('programmersController', function($scope) {
		var programers = [{
			programer: {
				name: 'web',
				career: 'www.baidu.com',
				des: '职业路径',
				res: [{
					des: '的各个',
					href: 'www.baidu.com'
				}, {
					des: '的各个',
					href: 'www.baidu.com'
				}, {
					des: '的各个',
					href: 'www.baidu.com'
				}]
			},
			longer: [{
				img: 'png',
				des: '斤斤计较经济',
				href: 'www.baidu.com'
			}, {
				img: 'png',
				des: '斤斤计较经济',
				href: 'www.baidu.com'
			}],
			short: [{
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
			}],
			list: [{
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}]
		}, {
			programer: {
				name: 'php',
				career: 'www.baidu.com',
				des: '职业路径',
				res: [{
					des: '的各个',
					href: 'www.baidu.com'
				}, {
					des: '的各个',
					href: 'www.baidu.com'
				}, {
					des: '的各个',
					href: 'www.baidu.com'
				}]
			},
			longer: [{
				img: 'png',
				des: '斤斤计较经济',
				href: 'www.baidu.com'
			}, {
				img: 'png',
				des: '斤斤计较经济',
				href: 'www.baidu.com'
			}],
			short: [{
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
			}],
			list: [{
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: 'www.baidu.com'
			}, {
				des: 'sdgggsdgdd',
				href: '#/list:'
			}]
		}];
		$scope.programers = programers;
	})
})