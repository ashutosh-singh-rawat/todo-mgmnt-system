app.controller('DashboardCtrl', [
  '$scope',
  '$state',
  'Auth',
  'User',
  'Notifier',
  function($scope, $state, Auth, User, Notifier){
    Auth.currentUser().then(function (user){
      $scope.user = user;
      console.log($scope.user);
      if($scope.user.role == "manager"){
        $scope.getDeveloperTodos();
        $scope.getProjectsTodos();
      }else if($scope.user.role == "developer"){

      }
    });


    $scope.getDeveloperTodos = function(){
      User.getDeveloperTodos()
        .then(function(response) {
          $scope.developers_todos = response.data.developers_todos;
          console.log( $scope.developers_todos)
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };

    $scope.getProjectsTodos = function(){
      User.getProjectsTodos()
        .then(function(response) {
          $scope.projects_todos = response.data.projects_todos;
          console.log( $scope.projects_todos)
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };


  }

]);
