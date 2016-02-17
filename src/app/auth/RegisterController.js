export class RegisterController {
  constructor($state, toastr) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    this.$state = $state;
    this.toastr = toastr;
  }

  onSuccess() {
    this.toastr.success("Registration successful!");
    this.$state.go("login");
  }

  onError(errorMessage) {
    this.toastr.error(errorMessage);
  }
}
