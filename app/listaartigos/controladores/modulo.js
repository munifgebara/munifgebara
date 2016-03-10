'use strict';

angular.module('myApp.listaartigos.controles', ['myApp.listaartigos.services'])

        .controller('controlador', ['$scope', 'artigoService', function ($scope, artigoService) {
                var aqui=this;

                $scope.nome = 'munif';
                $scope.artigo = {titulo: 'vazio'};
                
                
                this.carrega = function () {
                    this.artigo = {titulo: 'nada'};
                    artigoService.carrega().then(function (response) {
                        $scope.artigos = response.data;
                    }, function (response) {
                        $scope.artigos = [{titulo: 'falha'}];
                    });
                }
                
               
                this.salva = function () {
                    console.log("Salvando " + this.artigo);
                    artigoService.salva(this.artigo).then(function (response) {
                        $scope.resposta = [{mensagem: 'salvo com sucesso'}];
                        console.log("OK");
                        aqui.carrega();
                    }, function (response) {
                        $scope.resposta = [{mensagem: 'erro ao salvar'}];
                        console.log("PAU");
                    });
                }
                
                
                this.carrega();




            }]
                )