var app = angular.module('Tube', []);

app.controller('CtrlTube', function($scope) {
  $scope.code = '2O7wxkw1ras';
});
app.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:350px;"><iframe style="overflow:hidden;height:350px;width:400px" width="400px" height="350px" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});
