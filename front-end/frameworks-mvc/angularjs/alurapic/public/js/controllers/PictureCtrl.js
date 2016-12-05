angular.module('alurapic')

    .controller('PictureCtrl', function ($scope, $http, $routeParams, pictureResource) {

        $scope.picture = {
            url: '',
            title: '',
            description: ''
        };

        $scope.message = '';

        if($routeParams.pictureId) {

            //resource implementation
            pictureResource.get({
                pictureId: $routeParams.pictureId
            }, function (picture) {
                $scope.picture = picture;
            }, function (error) {
                console.log(error);
                $scope.message = 'Can\'t find the picture';
            });

            //http implementation
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

                //resource implementation
                if($scope.picture._id) {
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
                }

                //http implementation
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

    })

;