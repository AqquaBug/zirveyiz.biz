var zirveApp = angular.module('zirveApp', []);

zirveApp.controller('MyController', ['$scope', '$http', function($scope, $http,) {
  $http.get('js/data.json').success(function(data) {
    $scope.categories = data;
  });
}]);



