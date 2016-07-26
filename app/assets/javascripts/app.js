var app = angular.module('todoMgmnt', ['ui.router', 'templates', 'Devise']);
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/_home.html',
      controller: 'MainCtrl',
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/_dashboard.html',
      controller: 'DashboardCtrl',
      // resolve: {
      //   postPromise: ['posts', function(posts){
      //     return posts.getAll();
      //   }]
      // }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/authentication/_login.html',
      controller: 'AuthenticationCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('dashboard');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/authentication/_register.html',
      controller: 'AuthenticationCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('dashboard');
        })
      }]
    });

    $urlRouterProvider.otherwise('home');
  }]
);
