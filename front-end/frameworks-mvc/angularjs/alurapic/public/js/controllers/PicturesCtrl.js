angular.module('alurapic')

    .controller('PicturesCtrl', function ($http, $scope) {

        $scope.pictures = [];
        $scope.filter = '';
        $scope.message = '';

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

        $scope.delete = function (picture) {
            $http({
                method: 'DELETE',
                data: picture,
                url: 'v1/fotos/' + picture._id
            }).success(function () {
                var pictureIndex = $scope.pictures.indexOf(picture);
                $scope.pictures.splice(pictureIndex, 1);
                $scope.message = 'Picture ' + picture.title + ' was remove successful';
            }).error(function (error) {
                console.log(error);
                $scope.message = 'Can\'t remove the picture ' + picture.title;

            })
        };

    })

;