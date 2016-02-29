/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
//import { factoryBuilder } from './common/factory.builder'
import { LoginController } from './auth/login.controller';
import { RegisterController } from './auth/register.controller';
import { SessionsController } from './sessions/sessions.controller';
import { ProfileController } from './profile/profile.controller';
import { SessionService } from './sessions/sessions.service';
import { ProfileService } from './profile/profile.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceprtor';
import { LoginDirective } from './components/login/login.directive';
import { SignupDirective } from './components/signup/signup.directive';
import { NavbarDirective } from './components/navbar/navbar.directive';
import { ProfileEditorDirective } from './components/profile-editor/profile-editor.directive'

angular.module('conferenceSite', // eslint-disable-line
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
    'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ODataResources', 'LocalStorageModule'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('baseUrl', 'http://localhost:50391/')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('authInterceptorService', AuthInterceptor)
  .service('SessionService', SessionService)
  .service('authService', AuthService)
  .service('profileService', ProfileService)
  .directive('login', LoginDirective)
  .directive('signup', SignupDirective)
  .directive('navbar', NavbarDirective)
  .directive('profileEditor', ProfileEditorDirective)
  .controller('SessionsController', SessionsController)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('ProfileController', ProfileController);

