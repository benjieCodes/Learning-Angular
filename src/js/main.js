import angular from 'angular';

// Controllers
import { HomeController } from './controllers/home.controller';

// Config
import { config } from './config';
// UI Router
import 'angular-ui-router';

// Back-End Server URL
const url = 'https://secret-forest-21470.herokuapp.com/collections/learningangularbenjie';

// Our Module
angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('URL', url)
  .controller('HomeController', HomeController)
;
