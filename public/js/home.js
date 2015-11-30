var app = angular.module('dvtzApp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("home");
	
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl :"/partials/initial.html"
	})
	
}]);