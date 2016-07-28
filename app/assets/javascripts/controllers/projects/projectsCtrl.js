app.controller('ProjectsCtrl', function($scope, $state, Notifier, Project, Auth, User){

  Auth.currentUser().then(function (user){
    $scope.user = user;
    if($scope.user.role == "manager"){
      User.getManagerTeams().then(function(response) {
        $scope.teams =  response.data.teams;
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });

      User.getManagerDevelopers().then(function(response) {
        $scope.developers =  response.data.developers;
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });

      User.getManagerProjects().then(function(response) {
        $scope.projects =  response.data.projects;
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });

      User.getManagerNewTodos().then(function(response) {
        $scope.todos =  response.data.todos;
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });

    }else if($scope.user.role == "developer"){

    }
  });

  $scope.create = function(){
    Project.create($scope.project)
      .then(function(response) {
        $scope.project = response.data.project;
        Notifier.notifySuccess("Project Created Successfully");
        $state.go("dashboard");
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
  };

  $scope.createTodo = function(){
    Project.createTodo($scope.todo)
      .then(function(response) {
        $scope.todo = response.data.todo;
        Notifier.notifySuccess("Todo Created Successfully");
        $state.go("dashboard");
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
  };

  $scope.assignTodo = function(){
    Project.assignTodo($scope.todo)
      .then(function(response) {
        $scope.todo = response.data.todo;
        Notifier.notifySuccess("Todo Assigned Successfully");
        $state.go("dashboard");
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
  };

  $scope.assignDeveloper = function(){
    Project.assignDeveloper($scope.project)
      .then(function(response) {
        $scope.project = response.data.project;
        Notifier.notifySuccess("Developer Assigned Successfully");
        $state.go("dashboard");
      })
      .catch(function(err) {
        Notifier.processAndNotifyError(err);
      });
  };


});
