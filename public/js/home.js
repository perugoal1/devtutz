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
		url:'/catList',
		templateUrl:"/partials/categoryList.html"
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
			     },
			     {id:2,
					 mainheading:"Blog2",
					 desc:"Description of the awesome app 1",
					 mainbg:"",
					 tags:["css"],
					 date:{date:"",value:"1451221619321"},
					 content:[{seqno:1,type:"heading",desc:"hey"},
					          {seqno:2,type:"para",desc:"this is a para"},
					          {seqno:1,type:"code",desc:"this is a code"},
					          {seqno:1,type:"img",desc:"this is an img",src:""}]
				     },
			     {id:3,
					 mainheading:"Blog3",
					 desc:"Description of the awesome app 1",
					 mainbg:"",
					 tags:["html","css"],
					 date:{date:"",value:"1451221619322"},
					 content:[{seqno:1,type:"heading",desc:"hey"},
					          {seqno:2,type:"para",desc:"this is a para"},
					          {seqno:1,type:"code",desc:"this is a code"},
					          {seqno:1,type:"img",desc:"this is an img",src:""}]
				     }
		         ],
		         
		  category:['HTML','CSS','Javascript']
	};
	
	return modelVar;
});

app.controller('intitialCtrl',['$scope','model',function($scope,model){
	$scope.models = model.lists;
	$scope.categories = model.category;
	$scope.loadList = function(category){
		$scope.catFilter = category;
	};
}]);