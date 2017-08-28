//API key 3a56ee99003fd9f9d53594c6ff58851e
var app = angular.module('myApp', []);
app.controller("MovieController", function($scope, $http) {
	$scope.$watch('search', function() {
		fetch();
	});

	function fetch() {
		$http.get("https://api.themoviedb.org/3/search/movie?api_key=3a56ee99003fd9f9d53594c6ff58851e&language=en-US&query=" + $scope.search + "&page=1&include_adult=false")
			.then(function(response) {
				$scope.details = response.data;
			});
	}

	$scope.update = function(movie) {
		$scope.search = movie.Title;
	};

	$scope.select = function() {
		this.setSelectionRange(0, this.value.length);
	}
});