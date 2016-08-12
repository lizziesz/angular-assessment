var app = angular.module('capstoneBrochure', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/sample', {
      templateUrl: 'views/sample.html'
    })
    .when('/sample/select/:isbn/:id', {
      templateUrl: 'views/select.html',
      controller: 'selectController'
    })
    .when('/about/developer', {
      templateUrl: 'views/developer.html'
    })
    .otherwise( { redirectTo: '/' } );
});

app.directive('gsSampleSearch', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/search.html'
  }
});
