app.controller('AuthenticationCtrl', [
  '$scope', 
  '$state', 
  'Auth', 
  'Notifier', 
  'User', 
  function($scope, $state, Auth, Notifier, User){
    User.getAllTeams().then(function(response){
      $scope.all_teams = response.data.teams;
    }).catch(function(err) {
      Notifier.processAndNotifyError(err);
    });

    $scope.login = function() {
      Auth.login($scope.user).then(function(response){
        Notifier.notifyInfo("Logged In");
        $state.go('dashboard');
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(response){
        $state.go('dashboard');
      }).catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
    };
  }
]);
