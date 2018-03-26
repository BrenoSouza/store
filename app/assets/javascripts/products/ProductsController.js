app.controller('ProductsController', function ($scope, $http, $state, ProductFactory) {

	$scope.products = [];
    
    ProductFactory.getProduct().then(function (response) {
        $scope.products = response.data;
    });

    $scope.delete = function(id) {
        ProductFactory.deleteProduct(id)
        .then(function (response) {
            let products = [];

            $scope.products.forEach(element => {
                if (element.id !== id) {
                    products.push(element);
                }
            });

            $scope.products = products;
        })
        .catch(function (error) {
            console.error(error);
        })
    }
});