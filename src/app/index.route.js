export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/sessions/session-list.html',
      controller: 'SessionsController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'app/auth/register.html',
      controller: 'RegisterController',
      controllerAs: 'vm'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/profile/edit.html',
      controller: 'ProfileController',
      controllerAs: 'vm'
    })
    .state('submit-talk', {
      url: '/submit-talk',
      templateUrl: 'app/sessions/submit-session.html',
      controller: 'SubmitSessionController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
