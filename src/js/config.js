function config ($stateProvider, $urlRouterProvider) {

  // If a "state" does not exist for the URL
  // Then go to the page /#/
  $urlRouterProvider.otherwise('/');

  // Define some application states
  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('about', {
      url: '/about'
    })
    .state('contact', {
      url: '/contact-us'
    })
  ;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export { config };
