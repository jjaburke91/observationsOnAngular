ooaApp.directive('fooDirective', function() {
    return {
        restrict: 'E',
        template: "<p>{{serviceModelObject}} - Bound service value from directive</p>",
        controller: 'fooDirectiveController'
    }
});

ooaApp.controller('fooDirectiveController', ["$scope", "sharedService", function($scope, sharedService) {
    $scope.serviceModelObject = sharedService.getModelObject;

}]);
