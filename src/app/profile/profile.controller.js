export class ProfileController {
  constructor($state, $log, profileService, toastr) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    this.profile = {};
    this.$state = $state;
    this.$log = $log;
    this.profileService = profileService;
    this.toastr = toastr;

    this.profile = this.profileService.getProfile().then(prof => {
      this.profile = prof;
    }, () => {

    });
  }

  saveProfile() {
    this.profileService
      .saveProfile(this.profile)
      .then(() => {
        this.toastr.success("Profile saved successfully!");
        this.$state.go("home");
      }, err => {
        this.$log.log(err);
        this.toastr.error(err);
      });
  }
}
