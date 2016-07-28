app.factory('Todo', function($http) {
  return {
    markInProgress: function(todo_id){
      var data = {
        status: 'in_progress'
      }
      return $http.patch('/developer/todos/'+ todo_id +'/mark_todo.json', data);
    },
    markDone: function(todo_id){
      var data = {
        status: 'done'
      }
      return $http.patch('/developer/todos/'+ todo_id +'/mark_todo.json', data);
    }
  };
});
