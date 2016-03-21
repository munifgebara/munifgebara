console.log('MunifApp started');
var munifApp = angular.module("munifApp", []);

munifApp.controller('reposController', ['$scope', '$http', function ($scope, $http) {
    $scope.repos = [];
    $scope.msg = "";
    //https://www.googleapis.com/youtube/v3/search?channelId=munifgebara&part=snippet,id&order=date&maxResults=2
    $http.get('https://api.github.com/users/munifgebara/repos?sort=pushed&direction=desc')
        .success(
            function (result) {
                $scope.repos = result;
                console.log($scope.repos);
            })
        .error(function (data, status) {
            $scope.msg = "Problem loading repos";

        })
}]);