// Code goes here

var app = angular.module("project",['ngRoute','Controllers','Factories']);

app.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        }).
        when('/help', {
            templateUrl: 'partials/help.html',
            controller: 'helpController'
        }).
					
				when('/details/:id?', {
            templateUrl: 'partials/details.html',
            controller: 'detailsController'
        }).
        
        when('/devi', {
            templateUrl: 'partials/devi.html',
            controller: 'deviController'
        }).
						otherwise({ 
            redirectTo: '/home'
        });
    }
]);





