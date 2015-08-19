var ooaApp = angular.module('observationsOnAngularApp', ['ui.router']);

ooaApp.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/angular/home.html'
        })
        .state('sharing-data-with-services', {
            url: "/sharing-data-with-services",
            templateUrl: "angular/sharing-data-with-services/sharing-data-with-services.html",
            controller: 'sharingDataWithServicesController'
        });
}]);
