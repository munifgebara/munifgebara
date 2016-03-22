console.log('MunifApp started');
var munifApp = angular.module("munifApp", []);

munifApp.controller('reposController', ['$scope', '$http', function ($scope, $http) {
    $scope.repos = [];
    $scope.msg = "Carrengado Repositórios";
    //https://www.googleapis.com/youtube/v3/search?channelId=munifgebara&part=snippet,id&order=date&maxResults=2
    $http.get('https://api.github.com/users/munifgebara/repos?sort=pushed&direction=desc')
        .success(
            function (result) {
                $scope.msg = result.length + " repositórios encontrados";
                $scope.repos = result;
            })
        .error(function (data, status) {
            $scope.msg = "Não foi possível carregar os repositórios";
        })
}]);