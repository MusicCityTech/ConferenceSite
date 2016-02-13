/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { SessionsController } from './sessions/sessions.controller'
import { SessionService } from './sessions/sessions.service'
import { AuthService } from './auth/auth.service'
import { LoginDirective } from './components/login/login.directive'
import { SignupDirective } from './components/signup/signup.directive'

angular.module('conferenceSite',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
    'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ODataResources', 'LocalStorageModule'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('baseUrl', 'http://localhost:50391/')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .directive('login', LoginDirective)
  .directive('signup', SignupDirective)
  .service('SessionService', SessionService)
  .service('authService', AuthService)
  .controller('SessionsController', SessionsController);

