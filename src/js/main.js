import angular from 'angular';

// Controllers
import { HomeController } from './controllers/home.controller';

const url = 'https://secret-forest-21470.herokuapp.com/collections/learningangularbenjie';

angular
  .module('app', [])
  .constant('URL', url)
  .controller('HomeController', HomeController)
;
