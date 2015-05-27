'use strict';

angular.module('keywordStatisticsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.url = '';
    $scope.statistics = false;
    $scope.order = 'count';
    $scope.reverse = true;

    $scope.getStatistic = function() {

      $http
        .get('/api/contents', {
          params: {
            url: $scope.url
          }
        })
        .success(function(data) {
          $scope.statistics = data;
        })
        .error(function(data) {
          console.log(data);
        });

    };

  });
