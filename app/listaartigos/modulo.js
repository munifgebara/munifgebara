'use strict';

angular.module('myApp.listaartigos', ['ngRoute','myApp.listaartigos.controles'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artigos', {
    templateUrl: 'app/listaartigos/views/artigos.html',
    controller: 'controlador'
  });
}])

