app.controller('NewProductController', NewProductController);

function NewProductController($scope, $http, $state, ProductFactory) {

	$scope.newProduct = {};

    $scope.addNewProduct = function() {
        if ($scope.newProduct.name && $scope.newProduct.price) {
            $scope.newProduct.likes = 0;
            $scope.newProduct.dislikes = 0;
            $scope.newProduct.category = document.getElementById('category').value;
            
            if ($scope.newProduct.url.length < 5) {
                $scope.newProduct.url = 'http://placehold.it/120x160';
            }

            ProductFactory.createProduct($scope.newProduct)
            .then(function (response) {
                console.log(response)
                $state.go('produtos');
                $scope.newProduct = {};
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }

}