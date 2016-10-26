import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import './sass/style.scss';
import routing from './config';
import home from './modules/home';
import user from './modules/user';
import battlefield from './modules/components/battlefield';

/*@ngInject*/
angular.module('app', [uirouter, sanitize, home, user, battlefield])
  .config(routing);
