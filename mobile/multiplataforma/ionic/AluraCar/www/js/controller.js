angular.module('starter')

    .controller('ListCtrl', function ($scope) {

        $scope.carsList = [
            {name: 'BMW 120i', price: '100000'},
            {name: 'ONIX 1.0', price: '20000'},
            {name: 'FIESTA 1.0', price: '30000'},
            {name: 'C3 1.0', price: '80000'},
            {name: 'UNO FIRE', price: '10000'},
            {name: 'SENTRA 2.0', price: '40000'},
            {name: 'ASTRA SEDAN', price: '20000'},
            {name: 'VECTRA 2.0 TURBO', price: '30000'},
            {name: 'HILUX 4X4', price: '200000'},
            {name: 'MONTANA', price: '30000'}
        ];

    })

    .controller('ChosenCarCtrl', function ($scope, $stateParams) {

        $scope.car = angular.fromJson($stateParams.car);

    })

;