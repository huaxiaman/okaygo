/**
 * @ requirejs 引用方式为 require(该模块(文件路径))
 * @ 描述： 该模块定义了一个angular module，这个module的作用是将项目中的各个分散的控制器
 * 进行集中管理，即每次定义一个新的控制器，都引用该模块，将要定义的控制器声明在该模块暴露的angular module
 * 下，即‘mean.controllers’名下
 *
 */
define(['angular'],function(angular){
	return angular.module('mean.controllers',[])
})