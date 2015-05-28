'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('HomeCtrl', ['$scope',  ($scope) => {
  	$scope.toppings = ['sch3lp', 'bktid', 'memic', 'mike', 'mr. buts'];
  	var machine1;
  

	$scope.randomize = function() {
		machine1 = $('#firstMachine').slotMachine({
			active : 0,
			delay : 500
		});

		machine1.shuffle(5, onComplete);
	}

	function onComplete(){
		console.log('complete');
	}

  }]);
