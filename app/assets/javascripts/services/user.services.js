app.factory('User', [
  '$http',
  'Notifier',
  '$q',
  'Auth',
  '$state',
  function($http, Notifier, $q, Auth, $state) {
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
      },
      skipIfLoggedIn: function(){
        if (Auth.isAuthenticated()) {
          return $q.reject("skip_login");
        } else {
          return "ok";
        }
      },
      loginRequired: function(){
        if (Auth.isAuthenticated()) {
          return "ok";
        } else {
          return $q.reject("login_required");
        }
      }
    };
  }
]);
