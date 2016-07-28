app.factory('Project', [
  '$http',
  function($http) {
    return {
      create: function(project){
        return $http.post('/manager/projects.json', project);
      },
      createTodo: function(todo){
        return $http.post('/manager/todos.json', todo);
      },
      assignTodo: function(todo){
        data = {
          developer_email: todo.developer_email
        }
        return $http.post('/manager/todos/'+ todo.id + '/assign_to_developer', data);
      },
      assignDeveloper: function(project){
        data = {
          developer_email: project.developer_email
        }
        return $http.post('/manager/projects/'+ project.id + '/assign_developer', data);
      }
    };
  }
]);
