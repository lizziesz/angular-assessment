var app = angular.module('capstoneBrochure', ['ngRoute']);

// app.config(function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'routes/home.html'
//       // controller: 'PiratesController'
//     })
//     // .when('/add', {
//     //   templateUrl: 'views/add.html',
//     //   controller: 'PiratesController'
//     // })
// })

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html'
      // controller: 'RedditController'
    })
    .otherwise( { redirectTo: '/' } );
});

app.directive('gsHome', function(){
  return {
    restrict: 'E',
    templateUrl: 'routes/home.html'
  }
})
