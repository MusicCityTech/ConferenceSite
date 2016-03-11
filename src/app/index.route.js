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
    .state('my-mcc', {
      url: '/my-mcc/',
      templateUrl: 'app/my-mcc/my-mcc.html',
      controller: 'MyMccController',
      controllerAs: 'vm'
    })
    .state('profile', {
      parent: 'my-mcc',
      url: '/my-mcc/profile',
      templateUrl: 'app/my-mcc/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm'
    })
    .state('my-talks', {
      parent: 'my-mcc',
      url: '/my-mcc/my-talks',
      templateUrl: 'app/my-mcc/my-talks.html',
      controller: 'MyTalksController',
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
