console.log('MunifApp started');
var munifApp = angular.module("munifApp", []);

munifApp.controller('reposController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $scope.repos = [];
    $scope.videoes = [];
    $scope.msg = "Carrengado Repositórios";
    //https://www.googleapis.com/youtube/v3/search?channelId=munifgebara&part=snippet,id&order=date&maxResults=2

    $scope.getIframeVideo = function(video) {
      return $sce.trustAsHtml('<iframe class="bordered-feature-image" src="https://www.youtube.com/embed/'+ video.id.videoId + '" frameborder="0" allowfullscreen></iframe>');
    }

    $http.get('https://api.github.com/users/munifgebara/repos?sort=pushed&direction=desc')
        .success(
            function (result) {
                $scope.msg = result.length + " repositórios encontrados";
                $scope.repos = result;
            })
        .error(function (data, status) {
            $scope.msg = "Não foi possível carregar os repositórios";
        });
    $http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCWeBFE8HcxGygUEQmwrXv2ZfSDXq7E9-4&part=snippet&channelId=UCT39OB3qoGuJlL-57pmUcDA&order=date')
        .success(
            function (result) {
                $scope.videos = result;
            });
}]);
