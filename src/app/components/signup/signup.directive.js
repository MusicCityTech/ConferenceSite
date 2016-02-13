'use strict';

export function SignupDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/signup/signup.html',
    scope: {
    },
    controller: SignupController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SignupController {
  constructor($location, $timeout, authService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$location = $location;
    this.$timeout = $timeout;
    this.authService = authService;
    this.registration = {
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.savedSuccessfully = false;
    this.message = '';
  }

  signUp() {
    this.authService.saveRegistration(self.registration).then(response => {
      this.savedSuccessfully = true;
      this.message = "User has been registered successfully, you will be redirected to login page in 2 seconds.";
      this.startTimer();
    }, response => {
      let errors = [];
      for(let key in response.data.modelState) {
        for(let i = 0; i < response.data.modelState[key].length; i++) {
          errors.push(response.data.modelState[key][i]);
        }

        this.message = "Failed to register user due to: " + errors.join(' ');
      }
    })
  }

  startTimer() {
    let timer = self.$timeout(() => {
      this.timeout.cancel(timer);
      this.$location.path('/login');
    }, 2000);
  }
}
