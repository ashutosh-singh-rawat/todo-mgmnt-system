app.controller('DashboardCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth){
    Auth.currentUser().then(function (user){
      $scope.user = user;
    });
  }
]);
