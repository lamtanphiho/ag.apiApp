ag_apiApp.controller('GameplayCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.api_game = {src:"https://docs.angularjs.org", title:"test aframe"};
    
}]);