'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$rootScope', function ($rootScope) {
        $rootScope.active = 'view1';
    }]).
    controller('helloCtrl', ['$scope', function ($scope) {
        $scope.name = 'Nick';
    }]).
    controller('itMultiSelectCtrl', ['$scope', '$resource', function($scope, $resource) {
        var VKCountries = $resource('data/countries.json');
        $scope.countries = [];
        $scope.countryNames = {};
        VKCountries.query(function(data) {
            $scope.countries = data;
            for(var i = 0, l = data.length; i < l; i++) {
                $scope.countryNames[data[i].id] = data[i].title;
            }
        });


        /* hand made multiselector  */

        //initial value
        $scope.directions =  {"21":"Албания","23":"Американское Самоа"}

        $scope.itMultiSelectShow = false;
        $scope.itMultiSelectFilter = '';
        $scope.itMultiSelectToggle = function() {
            if($scope.itMultiSelectShow) {
                $scope.itMultiSelectFilter = '';
            }
            $scope.itMultiSelectShow = !$scope.itMultiSelectShow;
        };
        $scope.itMultiSelectOpener = function() {
            $scope.itMultiSelectShow = true;
        };
        $scope.itMultiSelectClosers = function() {
            $scope.itMultiSelectShow = false;
            $scope.itMultiSelectFilter = '';
        };
        $scope.itMultiSelectRefresh = function() {
            $scope.itMultiSelectFilter = '';
        };
        $scope.isActive = function(item) {
            return $scope.directions[item];
        };
        $scope.directionsView = function() {
            var directions = [];
            angular.forEach($scope.directions, function(value, key){
                if(value) {
                    directions.push(value);
                }
            });
            return directions.join(', ');
        };
        $scope.itMultiSelectPlaceholder = function() {
            var count = $scope.directionsView().split(', ').length;
            if($scope.directionsView().length == 0) { return 'Выберите страну'; }
            if(count > 10 && count < 20) { return 'Выбрано ' + count + ' стран'; }
            switch(count%10) {
                case 1: return 'Выбрана ' + count + ' страна'; break;
                case 2: return 'Выбрано ' + count + ' страны'; break;
                case 3: return 'Выбрано ' + count + ' страны'; break;
                case 4: return 'Выбрано ' + count + ' страны'; break;
                default: return 'Выбрано ' + count + ' стран'; break;
            }
        };


        /* multi selector with directive */

        //initial value
        //$scope.result =  {"21":"Албания","23":"Американское Самоа"}
        $scope.imsResult =  {"21":"Албания","23":"Американское Самоа"}
        $scope.imsPlaceholder = function() {
            var count = 0;
            angular.forEach($scope.imsResult, function(value, key){
                if(value) {
                    count++;
                }
            });
            if(count == 0) { return 'Выберите страну'; }
            if(count > 10 && count < 20) { return 'Выбрано ' + count + ' стран'; }
            switch(count%10) {
                case 1: return 'Выбрана ' + count + ' страна'; break;
                case 2: return 'Выбрано ' + count + ' страны'; break;
                case 3: return 'Выбрано ' + count + ' страны'; break;
                case 4: return 'Выбрано ' + count + ' страны'; break;
                default: return 'Выбрано ' + count + ' стран'; break;
            }
        };
        $scope.resultView = function() {
            var result = [];
            angular.forEach($scope.imsResult, function(value, key){
                if(value) {
                    result.push(value);
                }
            });
            return result.join(', ');
        };




    }]);