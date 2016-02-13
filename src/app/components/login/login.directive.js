export function LoginDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/login/login.html',
    scope: {
      redirectPath: '@'
    },
    controller: LoginController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class LoginController {
  constructor($location, $log, authService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$location = $location;
    this.authService = authService;
    this.$log = $log;

    this.loginData = {
      email: "",
      password: ""
    };

    this.message = "";

  }

  login() {
    this.authService.login(this.loginData).then(response => {
      this.$location.path(this.redirectPath || '/')
    }, err => {
      this.$log.log(err);
      this.message = err.error_description;
    })
  }
}
