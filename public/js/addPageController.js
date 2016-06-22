angular.module('dvtzApp').controller('addPageController',['$scope', function($scope){
	
	
	var editor = CKEDITOR.replace( 'editor1' );
	
	$scope.getData = function (){
		editor.getData();
	}
}]);