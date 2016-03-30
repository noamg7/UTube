var app = angular.module('Tube', []);

app.run(function () {
  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

app.controller('CtrlTube', function($scope) {
$scope.search = function () {
   $http.get('https://www.googleapis.com/youtube/v3/search', {
     params: {
       key: 'AIzaSyD2K6OooNWMPgEWlkAkgAIRctksFyKk1vY',
       type: 'video',
       maxResults: '8',
       part: 'id,snippet',
       fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
       q: this.query
     }
   });
 };
  $scope.code = 'BS0T8Cd4UhA';
  $scope.jive = '_8yGGtVKrD8';
  $scope.jump = 'q4V8pbg3rNU';
});

app.config( function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

// app.controller('VideosController', function ($scope, $http, $log, VideosService) {
//
//     init();
//
//     function init() {
//       $scope.youtube = VideosService.getYoutube();
//       $scope.results = VideosService.getResults();
//       $scope.playlist = true;
//     }
//
//     $scope.launch = function (id, title) {
//       VideosService.launchPlayer(id, title);
//       VideosService.archiveVideo(id, title);
//       $log.info('Launched id:' + id + ' and title:' + title);
//     };


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
