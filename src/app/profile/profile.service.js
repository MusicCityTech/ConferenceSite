'use strict';

export class ProfileService {
  constructor($q, $log, authService, $odataresource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$q = $q;
    this.$log = $log;
    this.authService = authService;
    this.$odataresource = $odataresource;
    this.userResource = $odataresource(baseUrl + '/odata/Users');
    this.profileResource = $odataresource(baseUrl + 'odata/Profiles', 'id');
  }

  getProfile() {
    let deferred = this.$q.defer();
    let authData = this.authService.getCurrentToken();
    this.userResource
        .odata()
      .filter("userName", authData.username)
      .expand('profile')
      .select(['profile'])
        .single(response => {
          // honestly not when this gets called, need to check
          deferred.reject(response);
        }, response => {
          if (response.profile)
            deferred.resolve(response.profile);
          else
            deferred.reject("Not found");
        });

    return deferred.promise;
  }

  saveProfile(profile) {
    let deferred = this.$q.defer();
    let newProfile = new this.profileResource(profile);

    if (profile.id !== undefined && profile.id > 0) {
      this.$log.log("Updating");

      newProfile.$update(savedProfile => {
        deferred.resolve(savedProfile);
      }, err => {
        deferred.reject(ProfileService.formatErrorMessage(err));
      });

    } else {
      newProfile.$save(savedProfile => {
        deferred.resolve(savedProfile);
      }, err => {
        deferred.reject(ProfileService.formatErrorMessage(err));
      });
    }

    return deferred.promise;
  }

  static formatErrorMessage(err) {
    let error = err.data.error;
    let errorMessage = `<strong>${error.message}</strong>`;
    if(error.innererror) {
      errorMessage = `${errorMessage}<br><br>${error.innererror.message.replace(/(?:\r\n|\r|\n)/g, '<br>')}`;
    }

    return errorMessage;
  }
}
