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
    let authData = this.authService.getCurrentToken();
    this.profileService
      .loadProfile(authData.username)
      .then(() => this.$state.go('home'), () => this.$state.go('profile'));
  }

  onError(errorMessage) {
    this.toastr.error(errorMessage);
  }
}
