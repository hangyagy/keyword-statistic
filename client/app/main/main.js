'use strict';

angular.module('keywordStatisticsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('default.main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
