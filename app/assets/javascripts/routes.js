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
        });

    $urlRouterProvider
        .otherwise('/home');

}]);