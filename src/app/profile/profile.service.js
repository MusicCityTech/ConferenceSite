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
          //maybe this is error? because it's not success
          deferred.resolve(response);
        }, response => {
          deferred.resolve(response.Profile);
        });

    return deferred.promise;
  }

  saveProfile(profile) {
    return this.profileResource.update(profile);
  }
}
