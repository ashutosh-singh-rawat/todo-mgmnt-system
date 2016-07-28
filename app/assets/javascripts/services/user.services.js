app.factory('User', [
  '$http',
  function($http) {
    return {
      getManagerDeveloperTodos: function(){
        return $http.get('/manager/projects/developer_todos.json');
      },
      getManagerProjectsTodos: function(){
        return $http.get('/manager/projects/project_todos.json');
      },
      getManagerTeams: function(){
        return $http.get('/manager/teams.json');
      },
      getManagerDevelopers: function(){
        return $http.get('/manager/projects/developers.json');
      },
      getManagerProjects: function(){
        return $http.get('/manager/projects.json');
      },
      getManagerNewTodos: function(){
        return $http.get('/manager/projects/new_todos.json');
      },
      getDevelopersTodos: function(){
        return $http.get('/developer/todos.json');
      },
      getAllTeams: function(){
        return $http.get('/all_teams.json');
      }
    };
  }
]);
