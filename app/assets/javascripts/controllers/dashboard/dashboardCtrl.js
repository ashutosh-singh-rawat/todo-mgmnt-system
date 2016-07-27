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
          $scope.developer_todos = response.data.developer_todos;
          console.log( $scope.developer_todos)
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };

    $scope.getProjectsTodos = function(){
      User.getProjectsTodos()
        .then(function(response) {
          $scope.project_todos = response.data.project_todos;
          console.log( $scope.project_todos)
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };


  }

]);
