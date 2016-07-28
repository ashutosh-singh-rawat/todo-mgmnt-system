app.controller('NavCtrl', [
  '$scope', 
  'Auth', 
  '$state',
  'Notifier',
  function($scope, Auth, $state, Notifier){
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
    Auth.currentUser().then(function (user){
      $scope.user = user;
    });
    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });
    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });
    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
      Notifier.notifyInfo("Logged Out");
      $state.go("home");
    });

    $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
      Notifier.notifyError("Inavlid email/password combination");
    });
  }
]);
