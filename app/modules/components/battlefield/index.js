import angular from 'angular';
import uirouter from 'angular-ui-router';

import Battlefield from './directive/battlefield.js'

export default angular.module('Battlefield', [uirouter])
  .directive('battlefield', () => new Battlefield())
  .name;
