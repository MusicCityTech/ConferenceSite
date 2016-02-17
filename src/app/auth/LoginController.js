export class LoginController {
  constructor($state, toastr) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$state = $state;
    this.toastr = toastr;
  }

  onSuccess() {
    this.toastr.success('Login Successful!');
    this.$state.go('home');
  }

  onError(errorMessage) {
    this.toastr.error(errorMessage);
  }
}
