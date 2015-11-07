'use strict';

/**
 * @ngdoc overview
 * @name scoutTestRepoApp
 * @description
 * # scoutTestRepoApp
 *
 * Main module of the application.
 */
angular
  .module('scoutTestRepoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
