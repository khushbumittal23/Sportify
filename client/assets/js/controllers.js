/**
 * Created by naved on 20/11/15.
 */
var main =  angular.module('application');
var left = 0;

main.controller('LoginController',['$rootScope','$scope','localStorageService','peer',function($rootScope,$scope,localStorageService,peer){
  if(typeof(peer) === "string"){
    $scope.peerId = peer;
    var thisPeer = new Peer(peer,{key:'ytgklpf684u0udi'});
    $rootScope.thisPeer = thisPeer;
  }
  else {
    $rootScope.$on('open', function (sender,peer) {
      generateQRCode(peer.id);
      $rootScope.thisPeer = peer;
    })
  }
  function generateQRCode(peerId){
    $scope.$apply(function(){
      $scope.peerId = peerId;
    });
  }

  $rootScope.thisPeer.on('connection',function(conn){
    conn.on('open',function(){
      $rootScope.connected = true;
      $rootScope.dataConnection = conn;
    });
  });

  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log('state change sucess');
    });

  $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log('state change error');
    });

}]);

main.controller('SearchController',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
  var tweets = $("#tweets");
  tweets.mousewheel(function(event){

      left = left - event.deltaY * 30
      var a  = tweets.width();
      var b = tweets.outerWidth();
      if (left > tweets.width()){
        left = 0;
        return;
      }
      $("#tweets").scrollLeft(left);
      event.preventDefault();
  });


}]);