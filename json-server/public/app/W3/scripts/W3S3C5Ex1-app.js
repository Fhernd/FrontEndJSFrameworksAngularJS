'use strict';

angular.module('confusionApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/contactus',
        {
            templateUrl: 'W3S3C5Ex1-contactus.html',
            controller: 'ContactController'
        })
        .when('/menu',
        {
            templateUrl: 'W3S3C5Ex1-menu.html',
            controller: 'MenuController'
        })
        .when('/menu/:id',
        {
            templateUrl: 'W3S3C5Ex1-dishdetail.html',
            controller: 'DishDetailController'
        })
        .otherwise('/contactus');
})