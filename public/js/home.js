var app = angular.module('dvtzApp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("home");
	
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl :"/partials/initial.html",
		controller:'intitialCtrl'
	})
	.state("catList",{
		url:'/catList/{moreCat}',
		templateUrl:"/partials/categoryList.html",
		controller:'moreCatCtrl'
	})
	.state("tutorials",{
		url:'/tutorials',
		templateUrl:"/partials/tutDetails.html"
	})
}]);


app.factory('model',function(){
	
	modelVar ={
		lists : [{id:1,
				 mainheading:"Blog1",
				 desc:"Description of the awesome app 1",
				 mainbg:"",
				 tags:["html"],
				 date:{date:"",value:"1451221619320"},
				 content:[{seqno:1,type:"heading",desc:"hey"},
				          {seqno:2,type:"para",desc:"this is a para"},
				          {seqno:1,type:"code",desc:"this is a code"},
				          {seqno:1,type:"img",desc:"this is an img",src:""}],
				 prev:{id:"2"}
			     }],
		         
		  category:['HTML','CSS','Javascript']
	};
	
	return modelVar;
});

app.controller('intitialCtrl',['$scope','model','$http',function($scope,model,$http){
	$scope.models = model.lists;
	$scope.categories = model.category;
	$scope.loadList = function(category){
		$scope.catFilter = category;
	};
	
	$scope.db = function(){
		console.log('asdasd');
		$http.get('/postdb');
		
	};
}]);

app.controller('moreCatCtrl',['$scope','$stateParams','model',function($scope,$stateParams,model){
	$scope.models = model.lists;
	$scope.categories = model.category;
	
		$scope.moreCatFilter = $stateParams.moreCat;
	
}]);