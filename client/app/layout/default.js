'use strict';

angular.module('keywordStatisticsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('default', {
        abstract: true,
        templateUrl: 'app/layout/default.html'
      });
  });
