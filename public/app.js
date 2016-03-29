var app = angular.module('Tube', []);

app.controller('CtrlTube', function($scope) {
  $scope.code = 'BS0T8Cd4UhA';
});
app.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:350px;"><iframe style="overflow:hidden;height:350px;width:450px" width="450px" height="350px" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
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

// app.run(function () {
//   var tag = document.createElement('script');
//   tag.src = "http://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// });

// app.config( function ($httpProvider) {
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });

// $scope.search = function () {
//    $http.get('https://www.googleapis.com/youtube/v3/search', {
//      params: {
//        key: 'AIzaSyD2K6OooNWMPgEWlkAkgAIRctksFyKk1vY',
//        type: 'video',
//        maxResults: '8',
//        part: 'id,snippet',
//        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
//        q: this.query
//      }
//    })
// });
