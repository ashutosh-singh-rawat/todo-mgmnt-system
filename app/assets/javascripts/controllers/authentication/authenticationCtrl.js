app.controller('AuthenticationCtrl', function($scope, $state, Auth, Notifier){
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      Notifier.notifyInfo("Logged In");
      $state.go('dashboard');
    })
    .catch(function(err) {
      Notifier.processAndNotifyError(err);
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('dashboard');
    }).catch(function(err) {
      Notifier.processAndNotifyError(err);
    });
  };
});
