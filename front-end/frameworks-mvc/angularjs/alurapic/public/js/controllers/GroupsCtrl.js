angular.module('alurapic')

    .controller('GroupsCtrl', function ($scope, $http) {

        $scope.groups = [];

        $http({
            method: 'GET',
            url:'v1/grupos'
        }).success(function (groups) {
            $scope.groups = groups;
        }).error(function (error) {
            console.log(error);
        })

    })

;