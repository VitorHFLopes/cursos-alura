angular.module('MyDirectives', [
    'MyServices'
])

    //Use camelCase for naming directives because this is an angular best (mandatory) practice
    //cause in view angular gonna use this name separated by '-'
    .directive('myPanel', function () {
        //Direct Definition Object
        var ddo = {};

        //A = Attribute
        //E = Element
        ddo.restrict = 'AE';

        //This is not a '$scope', this is a private scope for strict use of the directive
        ddo.scope = {
            title : '@'
        };

        //Enable transclude before injecting
        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/myPanel.html';

        // ddo.template = '<div class="panel panel-default">'
        //     + '<div class="panel-heading">'
        //         + '<h3 class="panel-title">{{title}}</h3>'
        //     + '</div>'
        //     + '<div class="panel-body" data-ng-transclude>'
        //     + '</div>'
        // + '</div>';

        //It's mandatory return the directive object
        return ddo;
    })

    .directive('myPicture', function () {
        var ddo = {};
        ddo.restrict = 'AE';
        ddo.scope = {
            url : '@',
            title: '@'
        };

        ddo.transclude = true;

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{title}}">';

        return ddo;
    })

    .directive('myDangerButton', function () {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.scope = {
            action: '&', //expression
            name: '@' //string
        };
        ddo.template = '<button class="btn btn-danger btn-block" data-ng-click="action()">{{name}}</button>';
        return ddo;
    })

    .directive('myFocus', function () {
        var ddo = {};

        ddo.restrict = 'A';

        ddo.scope = {
            focus: '=' //share this value between controller and directive
        };

        //link function deny change in the order of params, denying, for example, "element, scope"
        ddo.link = function (scope, element) {
            /**We use watchers just in ultimate case, when you don't have any other solution*/
            /*scope.$watch('focus', function () {
                if(scope.focus) {
                    element[0].focus();
                    scope.focus = false;
                }
            });*/

            /** It's better use $broadcast/$on instead, it uses less angular/application/client process
             * cause it'll be executed just when $broadcast is triggered */
            scope.$on('registeredPicture', function () {
                element[0].focus();
            })
        };


        return ddo;
    })

    .directive('myTitles', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul class="list-group"><li class="list-group-item" ng-repeat="title in titles">{{title}}</li></ul>';
        ddo.controller = function($scope, pictureResource) {
            pictureResource.query(function(pictures) {
                $scope.titles = pictures.map(function(picture) {
                    return picture.title;
                });
            });
        };
        return ddo;
    });

;