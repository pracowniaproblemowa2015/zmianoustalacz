'use strict';
angular.module('frontendApp').controller('MainCtrl', function($scope, $resource, $stateParams, $filter, $interval, $http, Host, Auth) {
    $scope.user = Auth.user;


    $scope.logout = function(){
    	console.log('lol');
    	Auth.logout();
    }
});