export class LoginController {
  constructor($state, toastr, profileService, authService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$state = $state;
    this.toastr = toastr;
    this.profileService = profileService;
    this.authService = authService;
  }

  onSuccess() {
    this.toastr.success('Login Successful!');
    this.profileService
      .getProfile()
      .then(() => this.$state.go('home'), () => this.$state.go('profile'));
  }

  onError(errorMessage) {
    this.toastr.error(errorMessage);
  }
}
