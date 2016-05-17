function HomeController ($http, $scope, URL) {
  $scope.name = 'Benjie Songsong';
  $http.get('');
  console.log(URL);

  $scope.addPet = function (petObject) {
    console.log(petObject);
  }
}

// DEPENDENCY INJECTIONNNN
HomeController.$inject = ['$http', '$scope', 'URL'];

export { HomeController };
