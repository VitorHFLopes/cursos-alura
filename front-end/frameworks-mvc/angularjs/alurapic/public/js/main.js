angular.module('alurapic', ['MyDirectives', 'ngAnimate', 'ngRoute'])

    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/pictures', {
            templateUrl: 'partials/main.html',
            controller: 'PicturesCtrl'
        });

        $routeProvider.when('/pictures/add', {
            templateUrl: 'partials/picture.html',
            controller: 'PictureCtrl'
        });

        $routeProvider.otherwise('/pictures');
        
    })

;