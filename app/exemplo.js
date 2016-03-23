var programa = angular.module("exemplo", []);

programa.controller('controlador'
    , ['$scope', '$http', function ($scope, $http) {
        $scope.msg = 'Carregando';
        $scope.filtro = '';
        $scope.lista = [];

        $http.get('https://api.github.com/users/munifgebara/repos?sort=pushed&direction=desc')
            .success(
                function (resultado) {
                    $scope.msg = resultado.length + " repositórios encontrados";
                    $scope.lista = resultado;
                })
            .error(function (data, status) {
                $scope.msg = "Não foi possível carregar os repositórios";
            })
}]);