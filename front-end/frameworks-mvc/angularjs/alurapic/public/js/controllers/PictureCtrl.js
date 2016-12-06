angular.module('alurapic')

    //this "injections" before the function declaration of a controller is a solution to block the minify process
    //the convert the name of the injections, cause angular uses the NAME for injecting
    .controller('PictureCtrl', ['$scope', '$http', '$routeParams', 'pictureRegister', 'pictureResource', function ($scope, $http, $routeParams, pictureRegister, pictureResource) {

        $scope.picture = {
            url: '',
            title: '',
            description: ''
        };

        $scope.message = '';

        if($routeParams.pictureId) {

            /**RESOURCE IMPLEMENTATION*/
            pictureResource.get({
                pictureId: $routeParams.pictureId
            }, function (picture) {
                $scope.picture = picture;
            }, function (error) {
                console.log(error);
                $scope.message = 'Can\'t find the picture';
            });

            /**HTTP IMPLEMENTATION*/
            /*$http({
                method: 'GET',
                url:'v1/fotos/' + $routeParams.pictureId
            }).success(function (picture) {
                $scope.picture = picture;
            }).error(function (error) {
                console.log(error);
                $scope.message = 'Can\'t find the picture';
            })*/
        }

        $scope.submit = function () {
            if($scope.form.$valid) {

                /**SERVICE IMPLEMENTATION*/
                pictureRegister.register($scope.picture)
                    .then(function (response) {
                        $scope.message = response.message;
                        if(response.include) {
                            $scope.picture = {};
                        }
                    })
                    .catch(function (response) {
                        $scope.message = response.message;
                    });

                /**RESOURCE IMPLEMENTATION*/
                /*if($scope.picture._id) {
                    pictureResource.update({
                        pictureId: $scope.picture._id
                    }, $scope.picture, function () {
                        $scope.message = 'Picture was update successful!';
                    }, function (error) {
                        console.log(error);
                        $scope.message = 'Can\'t update this picture';
                    })
                } else {
                    pictureResource.save($scope.picture, function () {
                        $scope.message = 'Picture was registered successful!';
                        $scope.picture = {
                            url: '',
                            title: '',
                            description: ''
                        };
                    }, function (error) {
                        console.log(error);
                        $scope.message = 'Can\'t register this picture';
                    })
                }*/

                /**HTTP IMPLEMENTATION*/
                /*if($scope.picture._id) {
                    $http({
                        method: 'PUT',
                        url:'v1/fotos/' + $scope.picture._id,
                        data: $scope.picture
                    }).success(function () {
                        $scope.message = 'Picture was update successful!';
                    }).error(function (error) {
                        console.log(error);
                        $scope.message = 'Can\'t update this picture';
                    })
                } else {
                    $http({
                        method: 'POST',
                        url:'v1/fotos',
                        data: $scope.picture
                    }).success(function () {
                        $scope.message = 'Picture was registered successful!';
                        $scope.picture = {
                            url: '',
                            title: '',
                            description: ''
                        };
                    }).error(function () {
                        $scope.message = 'Can\'t register this picture';
                    })
                }*/
            }
        };

    }])

;