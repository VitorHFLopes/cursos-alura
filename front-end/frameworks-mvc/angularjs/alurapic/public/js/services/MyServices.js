angular.module('MyServices', ['ngResource'])

    .factory('pictureResource', function ($resource) {
        return $resource('v1/fotos/:pictureId', null, {
            update: {
                method: 'PUT'
            }
        });
    })

;