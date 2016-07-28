app.controller('TodosCtrl', [
  '$scope', 
  '$state', 
  'Notifier', 
  'Todo', 
  'Auth', 
  'User',
  function($scope, $state, Notifier, Todo, Auth, User){
    $scope.markInProgress = function(todo_id){
      Todo.markInProgress(todo_id)
        .then(function(response) {
          $scope.todo = response.data.todo;
          Notifier.notifySuccess("Todo marked as InProgress");
          $state.reload();
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };
    $scope.markDone = function(todo_id){
      Todo.markDone(todo_id)
        .then(function(response) {
          $scope.todo = response.data.todo;
          Notifier.notifySuccess("Todo marked as Done");
          $state.reload();
        })
        .catch(function(err) {
          Notifier.processAndNotifyError(err);
        });
    };
  }
]);
