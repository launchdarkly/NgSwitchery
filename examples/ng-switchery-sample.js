'use strict';

var sampleApp = angular.module('NgSwitcherySample', ['NgSwitchery'])
   .controller('NgSwitcheryCtrl', ['$scope', function($scope){
   	    $scope.first = false;
   	    $scope.second = true;
   }])