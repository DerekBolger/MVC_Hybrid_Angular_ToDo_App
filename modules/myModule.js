/************************************************************
* Author: Derek Bolger
* Assignment: WE4 Mobile Web Applications, Digital Skills Academy
* Student ID Derek Bolger: D14127405
* Date: 22/06/2016
* Code reuse: WE4.0_A_MWA_workshop_08_Passing Data In Angular
* Ref: https://docs.angularjs.org/api/ngRoute
* Ref: https://docs.angularjs.org/api/ngAnimate
*************************************************************/

// create module and name it, also add angular routing and angular animation API's as dependenncies
var MyApp = angular.module('myModule', ['ngRoute', 'ngAnimate', 'ngStorage']);

// configure our routes
MyApp.config(function($routeProvider) {
	$routeProvider

		// route for homepage
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainController'
		})

		// route for the todo page
		.when('/todo', {
			templateUrl : 'views/todo.html',
			controller : 'todoController'
		})

		// route for gobbledegook URL
		.otherwise('/', {
			templateUrl : 'views/home.html',
			controller : 'wildcardController'
		});
});

// main controller and inject into $scope
MyApp.controller('mainController', function($scope) {
	// create a message to display in the view
	$scope.message = "Welcome to my To Do App!";
});

// todo controller
MyApp.controller('todoController', function($scope) {
	// create a message to display in the view
	$scope.todomessage = "Enter a task to do!";
	$scope.todomessage2 = "Then tap the + icon.";

});

// wildcard controller
MyApp.controller('wildcardController', function($scope) {

});