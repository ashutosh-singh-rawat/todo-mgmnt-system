app.controller('DashboardCtrl', [
  '$scope',
  '$state',
  'Auth',
  'User',
  'Notifier',
  function($scope, $state, Auth, User, Notifier){
    Auth.currentUser().then(function (user){
      $scope.user = user;
      if($scope.user.role == "manager"){
        $scope.getManagerDeveloperTodos();
        $scope.getManagerProjectsTodos();
      }else if($scope.user.role == "developer"){
         $scope.getDevelopersTodos();
      }
    });

    $scope.getManagerDeveloperTodos = function(){
      User.getManagerDeveloperTodos()
        .then(function(response) {
          $scope.developers_todos = response.data.developers_todos;
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };

    $scope.getDevelopersTodos = function(){
      User.getDevelopersTodos()
        .then(function(response) {
          $scope.todos = response.data.todos;
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };

    $scope.getManagerProjectsTodos = function(){
      User.getManagerProjectsTodos()
        .then(function(response) {
          $scope.projects_todos = response.data.projects_todos;
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };


  }

]);
