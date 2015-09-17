var zirveApp	=	angular.module('zirveApp',[
	'ngRoute',
	'zirveController',
	'pascalprecht.translate'


	]);

zirveApp.config(['$routeProvider', function($routeProvider){

$routeProvider.
when('/list', {
	templateUrl : 'views/list.html',
	controller : 'ListController'
}).
when('/contact',{
	templateUrl : 'views/contact.html',
	controller : 'ContactController'
}).
when('/product/:itemId',{
	templateUrl : 'views/product.html',
	controller : 'ProductController'
}).
when('/navigation',{
	templateUrl : 'views/navigation.html',
	controller : 'NavigationController'
}).
otherwise({redirectTo: '/navigation'});

}]);

zirveApp.config(function($translateProvider) {




$translateProvider.useStaticFilesLoader({
    files: [{
        prefix: 'i18n/nav/',
        suffix: '.json'
    }, {
        prefix: 'i18n/nav/',
        suffix: '.json'
    }, {
        prefix: 'i18n/nav/',
        suffix: '.json'
    }]
});

$translateProvider.preferredLanguage('en');

//$translateProvider.useLoader('$translatePartialLoader', {
//  urlTemplate: '/i18n/{part}/{lang}.json'
//});


});



