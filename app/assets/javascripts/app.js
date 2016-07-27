var app = angular.module('todoMgmnt', [
  'ui.router',
  'templates',
  'Devise',
  'toastr',
  'googlechart'
]);

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
    })
    .state('new-project', {
      url: '/new-project',
      templateUrl: 'views/projects/_new-project.html',
      controller: 'ProjectsCtrl'
    })
    .state('new-todo', {
      url: '/new-todo',
      templateUrl: 'views/projects/_new-todo.html',
      controller: 'ProjectsCtrl'
    })
    .state('assign-todo', {
      url: '/assign-todo',
      templateUrl: 'views/projects/_assign-todo.html',
      controller: 'ProjectsCtrl'
    }).state('assign-developer', {
      url: '/assign-developer',
      templateUrl: 'views/projects/_assign-developer.html',
      controller: 'ProjectsCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }]
);
