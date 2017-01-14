angular.module("todoListApp", []) // 2nd param defines dependencies and [] angular knows to create and app called todoListApp

//anonymous callback function, it takes 1 parameter - scope variable
//controller then must be injected into our template so it knows to use it there ng-controller directive in html
.controller('mainCtrl', function($scope) {
  //this helloWorld = this function which does a log - So when called, it's printed or logged
  $scope.helloWorld = function () {
    console.log("Hello There from Controller");
  };
});
