angular.module('MyServices', ['ngResource'])

    .factory('pictureResource', function ($resource) {
        return $resource('v1/fotos/:pictureId', null, {
            update: {
                method: 'PUT'
            }
        });
    })

    .factory('pictureRegister', function (pictureResource, $q, $rootScope) {

        var service = {};
        var event = 'registeredPicture';

        service.register = function (picture) {
            return $q(function (resolve, reject) {
                if(picture._id) {

                    //method PUT with four params
                    pictureResource.update(

                        //pass the param to URL
                        {
                            pictureId: picture._id
                        },

                        //value to update the previous value
                        picture,

                        //success function
                        function () {
                            $rootScope.$broadcast(event);
                            resolve({
                                message: 'Picture ' + picture.title + ' was update successful!',
                                include: false
                            })
                        },

                        //error function
                        function (error) {
                            console.log(error);
                            reject({
                                message: 'Can\'t update the picture ' + picture.title
                            })
                        }
                    )
                } else {
                    //method POST with 3 params
                    pictureResource.save(

                        //add/save this value
                        picture,

                        //success function
                        function () {
                            $rootScope.$broadcast(event);
                            resolve({
                                message: 'Picture ' + picture.title + ' was registered successful!',
                                include: true
                            })
                        },

                        //error function
                        function (error) {
                            console.log(error);
                            reject({
                                message: 'Can\'t register the picture ' + picture.title
                            })
                        }
                    )
                }
            })
        };

        return service;
    })

;