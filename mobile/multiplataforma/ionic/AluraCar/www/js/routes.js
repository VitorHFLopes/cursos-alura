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

            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
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

            .state('app.chosenCar', {
                url: '/car/:car',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/chosenCar.html',
                        controller: 'ChosenCarCtrl'
                    }
                }
            })

            .state('app.checkout', {
                url: '/checkout/:car',
                view: {
                    'menuContent' : {
                        templateUrl: 'templates/checkout.html',
                        controller: 'CheckoutCtrl'
                    }
                }
            })

    })
;