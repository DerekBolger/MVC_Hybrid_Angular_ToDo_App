/************************************************************
* Author: Derek Bolger
* Assignment: WE4 Mobile Web Applications, Digital Skills Academy
* Student ID Derek Bolger: D14127405
* Date: 22/06/2016
* Code reuse: WE4.0_A_MWA_derekbolger_workshop_07_Client Side MVC
*************************************************************/

// todo controller, inject scope o the controller.  shorthand name for this controller as todoController was used in routing
MyApp.controller('todoCtrl', ['$scope', '$localStorage', function($scope, $localStorage){

  // empty array to push submitted items to
  $scope.items = [];

  $scope.submitNewItem = function() {
    if( $scope.newItem ) {
      // push items to array from the input which uses ng-model newItem
      $scope.items.push({todo: $scope.newItem});
      $scope.newItem = '';
      // add items to local storage, can be viewed in Console > Resources > Local Storage, 
      // i.e. the item and if marked complete, e.g. [{"todo":"Research Lolcat Errors","status":"completed"}]
      // or in firefox type window.content.localStorage into the console to view localStorage items
      $localStorage.items = $scope.items;
    }
  };

  // function to apply/toggle to the bound ng-class if index item has been marked as complete.
  $scope.completeItem = function(index) {
    if( $scope.items[index].status == 'completed' ) {
      $scope.items[index].status = '';
    } else {
      $scope.items[index].status = 'completed';
    }
  };

  // (index, 1) is an integer indicating the number of old array elements to remove. 
  // If delete count is 0, no elements are removed. In this case, I specify at least
  // one new element. 
  $scope.deleteItem = function(index) {
    $scope.items.splice(index, 1);
  };
}]);