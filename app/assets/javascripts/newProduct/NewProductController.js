app.controller('NewProductController', NewProductController);

function NewProductController($scope, $http, $state, ProductFactory) {

	$scope.newProduct = {};
    $scope.isLoading = false;

    $scope.addNewProduct = function() {
        $scope.isLoading = true;
        
        if ($scope.newProduct.name && $scope.newProduct.price) {
            $scope.newProduct.likes = 0;
            $scope.newProduct.dislikes = 0;
            $scope.newProduct.category = document.getElementById('category').value;
            
            if (!$scope.newProduct.url || $scope.newProduct.url.length < 5) {
                $scope.newProduct.url = 'http://placehold.it/120x160';
            }

            ProductFactory.createProduct($scope.newProduct)
            .then(function (response) {
                $scope.isLoading = false;
                $state.go('produtos');
                $scope.newProduct = {};
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }

}