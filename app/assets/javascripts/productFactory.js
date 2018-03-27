app.factory('ProductFactory', ['$http', function($http) {
   
    let url = '/product';
    
    return {
        getProduct: getProduct,
        getProductById: getProductById,
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        updateProduct: updateProduct
    };

    function getProduct() {
        return $http.get(url);
    }

    function getProductById(id) {
        return $http.get(url + '/' + id);
    }

    function createProduct(product) {
        var req = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                product: product
            }
        }
        return $http(req).catch(handleError);
    };

    function deleteProduct(product_id) {
        return $http.delete(url + '/' + product_id)
            .then(handleResponse)
            .catch(handleError);
    };

    function updateProduct(product) {
        return $http.put(url + '/' + product.id, product)
            .then(handleResponse)
            .catch(handleError);
    }

    function handleResponse(response) {
        return response.data;
    };

    function handleError(error) {
        console.log(error);
    };

}]);