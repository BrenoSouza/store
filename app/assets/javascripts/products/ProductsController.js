app.controller('ProductsController', function ($scope, $http, $state, ProductFactory) {

	$scope.products = [];
    $scope.onLoading = true;

    ProductFactory.getProduct().then(function (response) {
        $scope.products = response.data;
        $scope.onLoading = false;
    });

    $scope.delete = function(id) {
        $scope.onLoading = true;
        ProductFactory.deleteProduct(id)
        .then(function (response) {
            let products = [];

            $scope.products.forEach(element => {
                if (element.id !== id) {
                    products.push(element);
                }
            });

            $scope.products = products;
            $scope.onLoading = false;
        })
        .catch(function (error) {
            $scope.onLoading = false;
            console.error(error);
        })
    }
});