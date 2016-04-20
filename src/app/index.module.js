/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
//import { factoryBuilder } from './common/factory.builder'
import { LoginController } from './auth/login.controller';
import { RegisterController } from './auth/register.controller';
import { SessionsController } from './sessions/session-list.controller.js';
import { SubmitSessionController } from './my-mcc/submit-session.controller.js';
import { ProfileController } from './my-mcc/profile.controller';
import { MyMccController } from './my-mcc/my-mcc.controller';
import { MyTalksController } from './my-mcc/my-talks.controller';
import { HomeController } from './home/home.controller';
import { SessionService } from './sessions/sessions.service';
import { ProfileService } from './profile/profile.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceprtor';
import { LoginDirective } from './components/login/login.directive';
import { SignupDirective } from './components/signup/signup.directive';
import { NavbarDirective } from './components/navbar/navbar.directive';
import { SubmissionDirective } from './components/submission/submission.directive'
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
  .service('sessionService', SessionService)
  .service('authService', AuthService)
  .service('profileService', ProfileService)
  .directive('login', LoginDirective)
  .directive('signup', SignupDirective)
  .directive('navbar', NavbarDirective)
  .directive('profileEditor', ProfileEditorDirective)
  .directive('sessionSubmissionForm', SubmissionDirective)
  .controller('SessionsController', SessionsController)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('ProfileController', ProfileController)
  .controller('SubmitSessionController', SubmitSessionController)
  .controller('MyMccController', MyMccController)
  .controller('MyTalksController', MyTalksController)
  .controller('HomeController', HomeController);

