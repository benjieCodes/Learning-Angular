function HomeController ($http, $scope, URL) {

  $scope.name = 'Benjie Songsong';

  $scope.addPet = function (petObject) {

    $http.post(URL, petObject).then(function (res) {
      console.log(res);
      $scope.pet = {};
    });

  }
}

// DEPENDENCY INJECTIONNNN
HomeController.$inject = ['$http', '$scope', 'URL'];

export { HomeController };
