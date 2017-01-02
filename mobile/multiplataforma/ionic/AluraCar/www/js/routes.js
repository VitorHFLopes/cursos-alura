angular.module('starter')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('list');

        $stateProvider

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

    })
;