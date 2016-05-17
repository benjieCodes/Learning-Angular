import angular from 'angular';

// Controllers
import { Home Controller } from './controllers/home.controller';

angular
  .module('app', [])
  .controller('HomeController', HomeController)
;
