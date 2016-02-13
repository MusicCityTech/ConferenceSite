'use strict';

export function SignupDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/signup/signup.html',
    scope: {
      redirectPath: "@"
    },
    controller: SignupController,
    controllerAs: 'vm',
    bindToController: true
  };
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
    if(this.registration.password !== this.registration.confirmPassword) {
      this.message = "The passwords enter do not match.";
      return;
    }

    this.authService.saveRegistration(this.registration).then(() => {
      this.savedSuccessfully = true;
      this.message = "User has been registered successfully, you will be redirected to login page in 2 seconds.";
      this.startTimer();
    }, response => {
      let errors = [];
      for(let key in response.ModelState) {
        if(response.ModelState.hasOwnProperty(key)) {
          for(let i = 0; i < response.ModelState[key].length; i++) {
            if(response.ModelState[key].hasOwnProperty(i)) {
              errors.push(response.ModelState[key][i]);
            }
          }
        }


        this.message = "Failed to register user due to: " + errors.join(' ');
      }
    })
  }

  startTimer() {
    let timer = this.$timeout(() => {
      this.$timeout.cancel(timer);
      this.$location.path(this.redirectPath || '/');
    }, 2000);
  }
}
