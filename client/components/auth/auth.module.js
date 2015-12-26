'use strict';

angular.module('projectSiteSoftcrumApp.auth', [
  'projectSiteSoftcrumApp.constants',
  'projectSiteSoftcrumApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
