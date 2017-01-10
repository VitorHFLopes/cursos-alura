angular.module('starter')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('app', {
                url: '/app',
                templateUrl: 'templates/menu.html',
                abstract: true,
                controller: 'MenuCtrl'
            })

            .state('app.list', {
                url: '/list',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/list.html',
                        controller: 'ListCtrl'
                    }
                }
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