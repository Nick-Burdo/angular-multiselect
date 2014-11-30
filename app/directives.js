/**
 * Created by Тигра on 22.11.2014.
 */
angular.module('directives', []).
    directive('myHello', function () {
        return {
            compile: function (tplElement, tplAttrs) {
                tplElement.html('<span>' + tplAttrs.myHelloPrefix + ', {{' + tplAttrs.myHello + '}}!</span>');
            },
            link: function ($scope, element, attrs) {
                //$scope.$watch(attrs.myHello, function(value) {
                //    element.text(attrs.myHelloPrefix + ', ' +value + '!');
                //});
            }
        };
    }).
    directive('popUpDialog', function () {
        return {
            restrict: "E",
            scope: false,
            templateUrl: "popup_dialog.html",
            controller: function ($scope) {
                $scope.showPopupDialog = false;
                $scope.closePopupDialog = function () {
                    $scope.showPopupDialog = false;
                };
                $scope.popupDialogApprove = function () {
                    $scope[$scope.popupDialogCallback]();
                    $scope.showPopupDialog = false;
                };
            }
        }
    }).
    directive('itMultiSelect', function () {
        return {
            restrict: "E",
            templateUrl: 'components/templates/directives/it-multi-select.html',
            replace: true,
            scope: {
                result: "=itModel"
            },
            link: function ($scope, $linkElement, $linkAttributes) {
                $linkAttributes.$observe('itSource', function (value) {
                    $scope.items = angular.fromJson(value);
                });
                $linkAttributes.$observe('itPlaceholder', function (value) {
                    $scope.placeholder = value;
                });
                $linkAttributes.$observe('itSearchPlaceholder', function (value) {
                    $scope.searchPlaceholder = value;
                });

                $scope.listShow = false;
                $scope.filter = '';
                $scope.toggle = function () {
                    if ($scope.listShow) {
                        $scope.filter = '';
                    }
                    $scope.listShow = !$scope.listShow;
                };
                $scope.opener = function () {
                    $scope.listShow = true;
                };
                $scope.closers = function () {
                    $scope.listShow = false;
                    $scope.filter = '';
                };
                $scope.refresh = function () {
                    $scope.filter = '';
                };
            }
        };
    })
;
