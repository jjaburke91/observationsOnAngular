ooaApp.controller('bindingServiceOrScopeController', ['$scope', 'sharedService', function($scope, sharedService) {
    // $scope.serviceObject = sharedService.getModelObjectFunction();
    $scope.sharedService = sharedService;

}]);
