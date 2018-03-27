app.controller('ProductsController', function ($scope, $http, $state, ProductFactory) {

	$scope.products = [];
    $scope.onLoading = true;

    ProductFactory.getProduct().then(function (response) {
        $scope.products = response.data;
        $scope.onLoading = false;
    });

    
    $scope.editProduct = function(id) {
        $state.go('editar-produto/' + id);
    }

});