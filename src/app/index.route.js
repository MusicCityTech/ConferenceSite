export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
    .state('sessions', {
      url: '/',
      templateUrl: 'app/sessions/sessions.html',
      controller: 'SessionsController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
