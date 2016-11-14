(function(){
    'use strict';
var CONTROLLER_VIEW_MODEL_NAME = 'vm';

function config($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/',{
        templateUrl: '../partials/home.html',
        controller: 'HomeController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/profile',{
        templateUrl: '../partials/profile.html',
        controller: 'HomeController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/skills',{
        templateUrl: '../partials/skills.html',
        controller: 'SkillsControler',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/add/skill',{
        templateUrl: '../partials/add-skill.html',
        controller: 'SkillsControler',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/education',{
        templateUrl: '../partials/employment.html',
        controller: 'EmploymentController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/qualifications',{
        templateUrl: '../partials/profile.html',
        controller: 'HomeController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/experience',{
        templateUrl: '../partials/experience.html',
        controller: 'EmploymentController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    .when('/employment',{
        templateUrl: '../partials/employment.html',
        controller: 'EmploymentController',
        controllerAs: CONTROLLER_VIEW_MODEL_NAME
    })
    
    .otherwise({redirectTo: '/'});
}
    angular.module('cvApp.controller', []);
    angular.module('cvApp', ['ngRoute','cvApp.controller'])
    .config(['$routeProvider', '$locationProvider', config]);
}());