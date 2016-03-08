/*app.js*/
define(['angular', './route'],function(angular, route){
    var app = angular.module('app');
    require(['controllers/index'],function(index){
        require(index,function(){
            angular.bootstrap(document, ['app']);
        });
    });
    return app;

});