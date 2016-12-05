'use strict';

angular.module('confusionApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app',
            {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/W3S4C4Ex1-header.html'
                    },
                    'content': {
                        template: '<h1>To be Completed</h1>',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/W3S4C4Ex1-footer.html'
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus',
            {
                url: 'aboutus',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus',
            {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'views/W3S4C4Ex1-contactus.html',
                        controller: 'ContactController'
                    }
                }
            })

            // route for the menu page
            .state('app.menu',
            {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl: 'views/W3S4C4Ex1-menu.html',
                        controller: 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails',
            {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/W3S4C4Ex1-dishdetail.html',
                        controller: 'DishDetailController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });