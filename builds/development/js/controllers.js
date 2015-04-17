var zirveController = angular.module('zirveController', []);

zirveController.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.categories = data;
  });
}]);

zirveController.controller('NavigationController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.categories = data;
  });
}]);

zirveController.controller('ProductController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/products.json').success(function(data) {

    $scope.products = data;
    $scope.itemId		=	$routeParams.itemId;
  });
}]);



