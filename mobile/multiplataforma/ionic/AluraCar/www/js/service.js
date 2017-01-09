angular.module('starter')

    .service('CarService', function ($http) {

        var url = 'https://aluracar.herokuapp.com/';

        return {
            getCars: function () {
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            },

            postCars: function (order) {
                return $http.get(url + 'salvarpedido', order).then(function (response) {
                    return 'success';
                });
            },

            doLogin: function (login) {
                return $http.get(url + 'login', login).then(function (response) {
                    return response.data;
                });
            }
        }

    })
;