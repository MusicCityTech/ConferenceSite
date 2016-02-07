/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { SessionsController } from './sessions/sessions.controller'
import { SessionService } from './sessions/sessions.service'

angular.module('conferenceSite',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
    'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ODataResources'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('baseUrl', 'http://localhost:50391/')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('SessionService', SessionService)
  .controller('SessionsController', SessionsController);

