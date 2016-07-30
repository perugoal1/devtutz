var app = angular.module('dvtzApp',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise("home");
	
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl :"/partials/initial.html",
		controller:'intitialCtrl',
		resolve: {
		    postPromise: ['model', function(model){
		      return model.getInitialList();
		    }]
		  }
	})
	.state("catList",{
		url:'/catList/{moreCat}',
		templateUrl:"/partials/categoryList.html",
		controller:'moreCatCtrl'
	})
	.state("tutorials",{
		url:'/tutorials/:tutsId',
		templateUrl:"/partials/tutDetails.html",
		controller:'tutDetailsCtrl'
	})
	.state("add",{
		url:'/add',
		templateUrl:"/partials/addPage.html",
		controller:'addPageController'
	});
}]);


app.factory('model',['$http','$q',function($http,$q){
	var modelVar ={
			initialList	: [],
			category:['HTML','CSS','Javascript'],
			tags:['HTML','CSS','Javascript','AngularJs','nodeJs','MongoDB','RestAPI','Jquey','LESS','Responsive Design']
	};
	modelVar.getInitialList = function(){
		return $http.get('/getinitialList').success(function(data){
			modelVar.initialList = angular.copy(data);
		});
	}
	
	modelVar.getDetails= function(id){
		var deferred = $q.defer()
		$http.get('/getDetails/'+ id).then(function(res){
		   deferred.resolve(res.data);
		});
		return deferred.promise;
	}
	
	
	
	/*modelVar ={
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
		         
		  
	};*/
	
	return modelVar;
}]);

app.controller('intitialCtrl',['$scope','model','$http',function($scope,model,$http){
	$scope.models = model.initialList;
	$scope.homePageTags = model.tags;
	$scope.categories = model.category;
	$scope.loadList = function(category){
		$scope.catFilter = category;
	};
	$scope.showAdd = false;
	$scope.validateLogin = function(){
		$http.post('/ValidateLogin',{user:$scope.user,pass:$scope.pass}).then(function(data){
			if(data.data == 'Login Successful' ){
				$scope.showAdd = true;
			}
		});
	};
	
	
}]);

app.controller('moreCatCtrl',['$scope','$stateParams','model',function($scope,$stateParams,model){
	$scope.models = model.lists;
	$scope.categories = model.category;
	
		$scope.moreCatFilter = $stateParams.moreCat;
	
}]);

app.controller('tutDetailsCtrl',['$scope','$stateParams','model','$sce','$timeout','$anchorScroll', '$location',function($scope,$stateParams,model,$sce,$timeout,$anchorScroll,$location){
    model.getDetails($stateParams.tutsId).then(function(data){
    	$anchorScroll.yOffset = 70;
    	$scope.tutsDetails = data;
    	var navID=1;
    	$scope.sideNav = [];
    	$timeout(function () {
    		$(".tutsDetailDiv").find('h2,h3,h4,h5,h6').each(function(){
        		$(this).attr('id', "anchor"+navID);
        		$scope.sideNav.push({val:$(this).text(),hrefVal:"anchor"+navID});
        		navID += 1  ;
        	});
        }, 500);
    	
    	
    	$scope.scrollTo = function(elementId) {
                $location.hash(elementId);
                $anchorScroll();
    	  };
    	
	});
}]);


app.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
  };
});