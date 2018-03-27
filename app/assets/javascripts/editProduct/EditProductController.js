app.controller('EditProductController', EditProductController);

function EditProductController($scope, $http, $state, ProductFactory, $stateParams) {

	$scope.product = {};
    $scope.isLoading = false;
    $scope.isEditingPhoto = false;

    $scope.updateProduct = function() {
        $scope.isLoading = true;
        
        if ($scope.product.name && $scope.product.price) {
                
            if (!$scope.product.url || checkURL($scope.product.url) || $scope.product.url.length < 5) {
                $scope.product.url = 'http://placehold.it/120x160';
            } else {
                $scope.onLoading = true;

                ProductFactory.updateProduct($scope.product)
                .then(function (response) {
                    $scope.isLoading = false;
                    $state.go('produtos');
                    $scope.product = {};
                })
                .catch(function (error) {
                    $scope.isLoading = false;
                    console.error(error);
                })
            }
        }
    }

    $scope.delete = function(id) {
        $scope.isLoading = true;
        ProductFactory.deleteProduct(id)
        .then(function (response) {
            $scope.isLoading = false;
            $state.go('produtos');
        })
        .catch(function (error) {
            $scope.isLoading = false;
            console.error(error);
        })
    }

    $scope.getProduct = function(id) {
        $scope.onLoading = true;
        ProductFactory.getProductById(id).then(function (response) {
            $scope.product = response.data;
            $scope.onLoading = false;
        });
    }

    $scope.showPhotoInput = function() {
        $scope.isEditingPhoto = !$scope.isEditingPhoto;
    }

    function checkURL(url) {
        return (url.match('/\.(jpeg|jpg|gif|png)$/') != null);
    }

    function onInit() {
        $scope.getProduct($stateParams.id);
    }

    onInit();



}