ag_apiApp.controller('GameplayCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.api_game = {src:"https://csnbo.w88.com/cas/?op=HOKIBET188", title:"test aframe"};
    
}]);