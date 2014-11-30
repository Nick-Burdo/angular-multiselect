'use strict';

angular.module('myApp.view2', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }]).

    controller('View2Ctrl', ['$rootScope', '$scope', '$interval', function ($rootScope, $scope, $interval) {
        $rootScope.active = 'view2';
        $scope.timerCount = 0;
        $scope.popupDialogContent = 'Start timer?';
        $scope.popupDialogCallback = 'activateTimer';

        $scope.activateTimer = function() {
            $interval(function() {
                $scope.timerCount++;
            }, 500);
        };
        $scope.timerDialog = function() {
            $scope.showPopupDialog = true;
        };
    }]);