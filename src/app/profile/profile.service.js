'use strict';

export class ProfileService {
  constructor($http, $q, $log, $odataresource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.$odataresource = $odataresource;
    this.baseUrl = baseUrl;
  }

  loadProfile(email) {
    let deferred = this.$q.defer();

     this.$odataresource(this.baseUrl + '/odata/Profiles')
        .odata()
        .get("'" + email + "'",
          response => {
            this.$log.log("success", response);
            deferred.resolve(response)
          },
          error => {
            this.$log.log("error", error);
            deferred.reject(error);
          });

    return deferred.promise;
  }
}
