console.log('MunifApp started');
var munifApp = angular.module("munifApp", []);

munifApp.controller('reposController', ['$scope', '$http', function ($scope, $http) {

    $http.get('https://api.github.com/users/munifgebara/repos')
        .success(
            function (result) {
                console.log(result);
                $scope.repos = result;

            })
        .error(function (data, status) {

        })
}]);