export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/sessions/sessions.html',
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
      templateUrl: 'app/profile/update.html',
      controller: 'ProfileController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
