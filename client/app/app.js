'use strict';

angular.module('projectSiteSoftcrumApp', [
  'projectSiteSoftcrumApp.auth',
  'projectSiteSoftcrumApp.admin',
  'projectSiteSoftcrumApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
