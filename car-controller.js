/* global angular */
var carApp = angular.module('carApp', []);

carApp.controller('CarCtrl', function ($scope){
  $scope.currentCar = "null";	
  $scope.cars = 
  [
	{
	type : "Economy", 
	sample: "Mitsubishi Mirage or similar",
	passengers:4,
	bags:2,
	rate: 30.00, 
	available:25,
	img:"Economy.png"
	},
	
	{
	type : "Standard", 
	sample: "Toyota Camry or similar",
	passengers:5,
	bags:2,
	rate: 50.00, 
	available:20,
	img:"Standard.png"
	},
	
	{
	type : "Luxury", 
	sample: "Cadillac XTS or similar",
	passengers:5,
	bags:2,
	rate: 80.00, 
	available:10,
	img:"Luxury.png"
	},
	
	{
	type : "Convertible", 
	sample: "Ford Mustang or similar",
	passengers:4,
	bags:2,
	rate: 90.00, 
	available:5,
	img:"Convertible.png"
	},
	
	{
	type : "SUV", 
	sample: "Ford Expedition or similar",
	passengers:7,
	bags:2,
	rate: 110.00, 
	available:5,
	img:"SUV.png"
	}
 ];
  
	$scope.setCurrentCar = function (type) {
		$scope.currentCar = type;
	};
  
	$scope.updateCount = function(car) {
		car.available--;
	};
  
});

