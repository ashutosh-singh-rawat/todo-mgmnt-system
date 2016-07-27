app.factory('User', [
  '$http',
  function($http) {
    return {
      getDeveloperTodos: function(){
        // return $http.post('/api/projects.json/', data);
        return $http.get('/manager/projects/developer_todos.json/');
      },
      getProjectsTodos: function(){
        // return $http.post('/api/projects.json/', data);
        return $http.get('/manager/projects/project_todos.json/');
      }
    };
  }
]);
