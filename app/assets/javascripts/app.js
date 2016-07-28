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
      templateUrl: 'views/dashboard/_dashboard.html',
      controller: 'DashboardCtrl'
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
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('new-project', {
      url: '/new-project',
      templateUrl: 'views/projects/_new-project.html',
      controller: 'ProjectsCtrl',
      resolve: {
        access: loginRequired
      }
    })
    .state('new-todo', {
      url: '/new-todo',
      templateUrl: 'views/projects/_new-todo.html',
      controller: 'ProjectsCtrl',
      resolve: {
        access: loginRequired
      }
    })
    .state('assign-todo', {
      url: '/assign-todo',
      templateUrl: 'views/projects/_assign-todo.html',
      controller: 'ProjectsCtrl',
      resolve: {
        access: loginRequired
      }
    }).state('assign-developer', {
      url: '/assign-developer',
      templateUrl: 'views/projects/_assign-developer.html',
      controller: 'ProjectsCtrl',
      resolve: {
        access: loginRequired
      }
    });

    $urlRouterProvider.otherwise('home');

    function loginRequired(User){
      return User.loginRequired();
    }

    function skipIfLoggedIn(User){
      return User.skipIfLoggedIn();
    }

  }]
);

app.run(['$rootScope', 
  '$state',
  'Notifier',
  'Auth',
  function($rootScope, $state, Notifier, Auth){
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error){
      if(error == "login_required"){
        // Notifier.notifyWarning("You need to be logged in order to view this page");
        $state.go("login");
      }else if(error == "skip_login"){
        $state.go(fromState);
      }
    });
  }
]);
