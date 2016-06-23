angular.module('dvtzApp').controller('addPageController',['$scope','$http', function($scope, $http){
	
	
	var editor = CKEDITOR.replace( 'editor1' );
	
	$scope.saveData = function (){
		    var postData = {};
		    postData.mainheading = $scope.mainheading;
		    postData.desc = $scope.desc
		    postData.content = editor.getData();

			$http.post('/postdb',postData).then(function(data){
				console.log(data);
			});
	};

	
}]);