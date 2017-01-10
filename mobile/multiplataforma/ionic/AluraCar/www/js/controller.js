angular.module('starter')

    .controller('LoginCtrl', function ($ionicPopup, $rootScope, $scope, $state, CarService) {

        $scope.login = {
            email: 'joao@alura.com.br',
            password: 'alura123'
        };

        $scope.doLogin = function () {
            var login = {
                params: {
                    email: $scope.login.email,
                    senha: $scope.login.password
                }
            };

            CarService.doLogin(login).then(function (data) {
                $rootScope.user = data.usuario;
                $state.go('app.list');
            }, function (error) {
                $ionicPopup.alert({
                    title: 'Ops...',
                    template: 'Invalid Login'
                });
                console.log(error);
            })

        };

    })

    .controller('MenuCtrl', function ($rootScope, $scope) {

        $scope.loggedUser = $rootScope.user;

    })

    .controller('ListCtrl', function ($scope, CarService) {

        CarService.getCars().then(function (cars) {
            $scope.carsList = cars;
        });

    })

    .controller('ChosenCarCtrl', function ($scope, $stateParams) {

        $scope.car = angular.fromJson($stateParams.car);

        $scope.accessoryList = [
            {nome: 'Freio ABS', preco: 800},
            {nome: 'Ar Condicionado', preco: 1000},
            {nome: 'MP3 Player', preco: 500}
        ];

        $scope.change = function (accessory, isChecked) {

            if(isChecked) {
                $scope.car.preco += accessory.preco;
            } else {
                $scope.car.preco -= accessory.preco;
            }

        };

    })

    .controller('CheckoutCtrl', function ($ionicPopup, $scope, $state, $stateParams, CarService) {

        $scope.finishedCar = angular.fromJson($stateParams.car);

        $scope.checkout = function () {

            var order = {
                params: {
                    carro: $scope.finishedCar.nome,
                    preco: $scope.finishedCar.preco,
                    nome: $scope.finishedCar.fullName,
                    endereco: $scope.finishedCar.address,
                    email: $scope.finishedCar.email
                }
            };

            CarService.postCars(order).then(function () {
                $ionicPopup.alert({
                    title: 'Congratulations',
                    template: 'You\'ve just bought a car!'
                }).then(function () {
                    $state.go('list');
                })
            }, function () {
                $ionicPopup.alert({
                    title: 'Ops...',
                    template: 'Required fields'
                })
            })


        };

    })

;