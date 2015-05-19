/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */
/*
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                // Ui Bootstrap
        //'ngRoute',
        'ngResource',
        //'ngTouch',
        'ui.grid',
        'ui.grid.selection',
        'ui.grid.expandable',
        'ui.grid.pinning',
        'ui.grid.moveColumns',
        'ui.grid.pagination',
        'ui.grid.autoResize',
        'colorpicker.module',
        'wysiwyg.module'
    ])
})();
*/

var app =
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                // Ui Bootstrap
        //'ngRoute',
        'ngResource',
        //'ngTouch',
        'ui.grid',
        'ui.grid.selection',
        'ui.grid.expandable',
        'ui.grid.pinning',
        'ui.grid.moveColumns',
        'ui.grid.pagination',
        'ui.grid.autoResize',
        'colorpicker.module',
        'wysiwyg.module'
    ])
;

/*
app.factory('clientsFactory', ['$http', '$log', function($http, $log, $scope){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        },
        getClients: function () {
            $http.get('http://localhost:4000/clients')
                .success(function (data) {
                    $log.log( data);
                    $scope.clientGridOptions.data = data;
                    $log.log("******************** 1.5");
                    return data;
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $log.log("status" + status);
                    return "ERROR" + status;
                });


        }
    }
}]); */


app.factory('clientsFactory', ['$http', function($http){
    return {
            getClients: function () {
                return  $http.get('http://localhost:4000/clients')
            }
    }
}]);


