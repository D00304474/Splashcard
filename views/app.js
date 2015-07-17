angular.module('app', ['ngRoute'])

	.factory('Cards', function() {
		return [
			{title: 'HTML',
				question: 'What is a div?',
				answer: 'Empty tag'},
			{title: 'HTML',
				question: 'What do you prefix a doc with?',
				answer: '<!DOCTYPE html>'},
				];
			});

	app.controller('CardController', ['$scope', 'Cards', function ($scope, Cards) {
		$scope.cards = Cards;
	}]);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/viewer', {
			templateUrl: '/viewer.html',
			controller: 'CardController'
		})
		.when('/:id', {
			templateUrl: '/edit.html',
			controller: 'EditController'
		})
		.when('/', {
			templateUrl: '/index.html',
			controller: 'IndexController'
		});

	}]);