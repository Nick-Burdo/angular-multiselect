'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'directives'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]).
    run(['$rootScope', function($rootScope) {
        $rootScope.active = 'view1';
    }]);
