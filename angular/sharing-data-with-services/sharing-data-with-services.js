ooaApp.controller('sharingDataWithServicesController', ['$scope', 'sharedService', function($scope, sharedService) {
    $scope.serviceObject = sharedService.getModelObject;
    $scope.servicePrimValue = sharedService.getModelObjectPrimitiveValue;
    $scope.sharedService = sharedService;

}]);
