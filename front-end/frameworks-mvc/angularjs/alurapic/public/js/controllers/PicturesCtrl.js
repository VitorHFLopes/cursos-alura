angular.module('alurapic')

    .controller('PicturesCtrl', function ($http, $scope) {

        $scope.pictures = [];

        var promise = $http.get('v1/fotos');

        //Angular $http natural response
        promise.then(function (response) {
            $scope.pictures = response.data;
        }).catch(function (error) {
            console.log(error);
        });

        //Angular $http shortcut if you don't wanna ".data" in response
        // promise.success(function (response) {
        //     $scope.pictures = response;
        // }).error(function (error) {
        //     console.log(error);
        // });

    })

;