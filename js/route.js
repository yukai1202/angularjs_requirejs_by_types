/**
 * Created by Administrator on 2016/3/8.
 */
define(['angular', 'angular-route'],function(angular, ngRoute){

    var app = angular.module('app',['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home',{
                controller:'homeController',
                templateUrl: 'views/home.html'
            })
            .when('/app',{
                controller:'appController',
                templateUrl: 'views/app.html'
            })
            .otherwise('/home');
    }]);


});