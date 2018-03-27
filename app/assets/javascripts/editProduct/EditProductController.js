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

                ProductFactory.updateProduct($scope.product)
                .then(function (response) {
                    $scope.isLoading = false;
                    $state.go('produtos');
                    $scope.product = {};
                })
                .catch(function (error) {
                    console.error(error);
                })
            }
        }
    }

    $scope.getProduct = function(id) {
        ProductFactory.getProductById(id).then(function (response) {
            $scope.product = response.data;
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