(function () {
  'use strict';

  angular.module('application', [
      'ui.router',
      'ngAnimate',

      //foundation
      'foundation',
      'foundation.dynamicRouting',
      'foundation.dynamicRouting.animations',
      'LocalStorageModule',
      'monospaced.qrcode',
      'sun.scrollable',
      'angular-embedly',
      'ngSanitize',
      'chart.js'
    ])
      .config(config)
      .run(run)
    ;


  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/home');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
