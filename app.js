'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
  ,'myApp.listaartigos'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/artigos'});
}]);
        
        
        console.log('Seja bem vindo!');
        
        
        /*
        .
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

*/