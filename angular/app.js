var ooaApp = angular.module('observationsOnAngularApp', ['ui.router']);

ooaApp.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/angular/home.html'
        })
        .state('binding-to-service-or-scope', {
            url: "/binding-to-service-or-scope",
            templateUrl: "angular/sharing-data-with-services/binding-to-service-or-scope/binding-to-service-or-scope.html",
            controller: 'bindingServiceOrScopeController',
            parent: 'home'
        })
        .state('binding-with-objects-or-values', {
            url: "/binding-with-objects-or-values",
            templateUrl: "angular/sharing-data-with-services/binding-with-objects-or-values/binding-with-objects-or-values.html",
            controller: 'bindingWithObjectsOrValuesController',
            parent: 'home'
        })
        .state('binding-service-value-to-directive', {
            url: "/binding-service-value-to-directive",
            templateUrl: "angular/sharing-data-with-services/binding-service-value-to-directive/binding-service-value-to-directive.html",
            controller: "bindingServiceValueToDirectiveController",
            parent: "home"
        })
        ;
}]);
