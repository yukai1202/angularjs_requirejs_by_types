'use strict';
require.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'ngRoute'
        }
    }
});

require(['./app'],function(){

});
