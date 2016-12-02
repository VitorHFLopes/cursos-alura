angular.module('alurapic')

    .controller('PictureCtrl', function ($scope, $http) {

        $scope.picture = {
            url: '',
            title: '',
            description: ''
        };
        $scope.message = '';

        $scope.submit = function () {
            if($scope.form.$valid) {

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

            }

        };

        $scope.delete = function (picture) {
            $http.({
                method: 'DELETE',
                data: picture,
                url: 'v1/fotos/' + picture._id
            }).success(function () {
                console.log()
            })
        };

    })

;