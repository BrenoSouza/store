app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        })

        .state('produtos', {
            url: '/produtos',
            templateUrl: 'products/products.html',
            controller: 'ProductsController'
        })

        .state('editar-produto', {
            url: '/produtos/:id',
            templateUrl: 'editProduct/editProduct.html',
            controller: 'EditProductController'
        })

        .state('novo-produto', {
            url: '/novo-produto',
            templateUrl: 'newProduct/newProduct.html',
            controller: 'NewProductController'
        });

    $urlRouterProvider
        .otherwise('/produtos');

}]);