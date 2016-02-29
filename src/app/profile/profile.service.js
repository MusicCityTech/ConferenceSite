'use strict';

export class ProfileService {
  constructor($http, $q, $log, authService, $odataresource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.authService = authService;
    this.$odataresource = $odataresource;
    this.userResource = $odataresource(baseUrl + '/odata/Users');
    this.profileResource = $odataresource(baseUrl + 'odata/Profiles', 'Id');
  }

  getProfile() {
    let deferred = this.$q.defer();
    let authData = this.authService.getCurrentToken();
    this.userResource
        .odata()
        .filter("UserName", authData.username)
        .expand('Profile')
        .select(['Profile'])
        .single(response => {
          // honestly not when this gets called, need to check
          deferred.reject(response);
        }, response => {
          if(response.Profile)
            deferred.resolve(response.Profile);
          else
            deferred.reject("Not found");
        });

    return deferred.promise;
  }

  saveProfile(profile) {
    let deferred = this.$q.defer();

    if(profile.Id !== undefined && profile.Id > 0) {
      this.$log.log("Updating");
      let newProfile = new this.profileResource(profile);
      newProfile.$update(savedProfile => {
        deferred.resolve(savedProfile);
      }, err => {
        deferred.reject(this.formatErrorMessage(err));
      });

    } else {
      this.$log.log("creating");
      let newProfile = new this.profileResource(profile);
      newProfile.$save(savedProfile => {
        deferred.resolve(savedProfile);
      }, err => {
        deferred.reject(this.formatErrorMessage(err));
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
