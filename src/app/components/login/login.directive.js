export function LoginDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/login/login.html',
    scope: {
      onSuccess: '&',
      onError: '&'
    },
    controller: LoginController,
    controllerAs: 'vm',
    bindToController: true
  };
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
    this.authService.login(this.loginData).then(() => {
      this.onSuccess();
    }, err => {
      this.$log.log("from directive", err);
      this.onError({errorMessage: err.error_description});
    })
  }
}
