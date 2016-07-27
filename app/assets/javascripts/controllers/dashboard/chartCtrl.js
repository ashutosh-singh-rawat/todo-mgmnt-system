app.controller('ChartCtrl', ['$scope',
  function ($scope) {
    $scope.getProjectStatusPiechartData = function(project){
      $scope.myChartObject = {};
      var dataset = project.todos;
      var counts = {pending: 0, in_progress: 0, done: 0}, i, todo;
      for (i = 0; i < dataset.length; i++) {
        todo = dataset[i];
        counts[todo.status]++;
      }
      console.log(counts);

      $scope.myChartObject.type = "PieChart";
      $scope.myChartObject.data = {
        "cols": [
          {id: "s", label: "Status", type: "string"},
          {id: "t", label: "Todo Count", type: "number"}
        ], 
        "rows": [
          {
            c: [
              {v: "New"},
              {v: counts.pending},
            ]
          },
          {
            c: [
              {v: "In Progress"},
              {v: counts.in_progress}
            ]
          },
          {c: [
            {v: "Done"},
            {v: counts.done},
          ]}
        ]
      };

      $scope.myChartObject.options = {
        'title': project.name,
        'is_3D': true
      };
      
    };

    
    
    // $scope.onions = [
    //   {v: "Onions"},
    //   {v: 3},
    // ];

  }
]);