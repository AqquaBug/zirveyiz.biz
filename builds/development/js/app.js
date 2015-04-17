var zirveApp	=	angular.module('zirveApp',[
	'ngRoute',
	'zirveController'

	]);

zirveApp.config(['$routeProvider', function($routeProvider){

$routeProvider.
when('/list', {
	templateUrl : 'partials/list.html',
	controller : 'ListController'
}).
when('/contact',{
	templateUrl : 'partials/contact.html',
	controller : 'ContactController'
}).
when('/product/:itemId',{
	templateUrl : 'partials/product.html',
	controller : 'ProductController'
}).
when('/navigation',{
	templateUrl : 'partials/navigation.html',
	controller : 'NavigationController'
}).
otherwise({redirectTo: '/navigation'});

}]);