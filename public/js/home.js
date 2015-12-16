var app = angular.module('dvtzApp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("home");
	
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl :"/partials/initial.html"
	})
	.state("catList",{
		url:'/catList',
		templateUrl:"/partials/categoryList.html"
	})
	.state("tutorials",{
		url:'/tutorials',
		templateUrl:"/partials/tutDetails.html"
	})
}]);