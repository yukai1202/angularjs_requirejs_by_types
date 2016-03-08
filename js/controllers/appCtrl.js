'use strict';

define(['angular'],function(angular){
     return angular.module('app').controller('appController', ['$scope', function($scope){
        $scope.title="app page";
    }]);

});