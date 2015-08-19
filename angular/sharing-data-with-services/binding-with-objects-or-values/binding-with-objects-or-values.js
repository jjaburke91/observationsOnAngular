ooaApp.controller('bindingServiceOrScopeController', ['$scope', 'sharedService', function($scope, sharedService) {
    // Binding to service objects or static values (numeric, string etc.)
    $scope.serviceObject = sharedService.getModelObject;
    $scope.servicePrimValue = sharedService.getModelObjectPrimitiveValue;
    $scope.sharedService = sharedService

}]);
