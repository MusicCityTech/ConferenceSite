export function routerConfig ($stateProvider, $urlRouterProvider) {
  //noinspection BadExpressionStatementJS
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
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
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'app/schedule/schedule.html',
      controller: 'ScheduleController',
      controllerAs: 'vm'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    })
    .state('my-mcc', {
      abstract: true,
      url: '/my-mcc',
      templateUrl: 'app/my-mcc/my-mcc.html',
      controller: 'MyMccController',
      controllerAs: 'vm'
    })
    .state('my-mcc.profile', {
      parent: 'my-mcc',
      url: '/',
      templateUrl: 'app/my-mcc/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm'
    })
    .state('my-mcc.my-talks', {
      parent: 'my-mcc',
      url: '/my-talks',
      templateUrl: 'app/my-mcc/my-talks.html',
      controller: 'MyTalksController',
      controllerAs: 'vm'
    })
    .state('my-mcc.submit-talk', {
      parent: 'my-mcc',
      url: '/submit-talk',
      templateUrl: 'app/my-mcc/submit-session.html',
      controller: 'SubmitSessionController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
