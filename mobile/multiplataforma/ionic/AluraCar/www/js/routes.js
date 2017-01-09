angular.module('starter')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListCtrl'
            })

            .state('chosenCar', {
                url: '/car/:car',
                templateUrl: 'templates/chosenCar.html',
                controller: 'ChosenCarCtrl'
            })

            .state('checkout', {
                url: '/checkout/:car',
                templateUrl: 'templates/checkout.html',
                controller: 'CheckoutCtrl'
            })

    })
;