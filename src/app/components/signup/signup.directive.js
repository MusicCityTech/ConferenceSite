'use strict';

export function SignupDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/signup/signup.html',
    scope: {
      successCallback: "&",
      errorCallback: "&"
    },
    controller: SignupController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class SignupController {
  constructor($location, $timeout, $log, authService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$location = $location;
    this.$timeout = $timeout;
    this.$log = $log;
    this.authService = authService;
    this.registration = {
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.message = '';
  }

  signUp() {
    if(this.registration.password !== this.registration.confirmPassword) {
      this.message = "The passwords enter do not match.";
      return;
    }

    this.authService.saveRegistration(this.registration).then( () => {
      this.successCallback()
    }, response => {

      this.errorCallback({
        errorMessage: '<strong>' +
                      response.message +
                      '</strong><br><br>' +
                      response.errors.join('<br>')});


    });
  }
}
