var app = angular.module('Tube', []);

app.run(function () {
  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

app.controller('CtrlTube', function($scope, $http){
$scope.videoId = '';
$scope.search = function () {
   $http.get('https://www.googleapis.com/youtube/v3/search', {
     params: {
       key: 'AIzaSyCKVJv8HQTENNu6_1NBjgnHNrYRqeLxdEs',
       type: 'video',
       part: 'id,snippet',
    //   fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
       q: this.query
     }
   })
   .then(function(response){
     console.log(response.data.items[0].id.videoId)
     $scope.videoId = response.data.items[0].id.videoId;
   });
 };
   $scope.go = 'BS0T8Cd4UhA';
   $scope.jive = '_8yGGtVKrD8';
   $scope.Kakashi = 'ndwGLN_ZWso';
   $scope.jump = 'q4V8pbg3rNU';
   $scope.Green = 'Ee_uujKuJMI';
});

app.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:350px;"><iframe style="overflow:hidden;height:350px;width:450px" width="450px" height="350px" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
//       console.log('code');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});
