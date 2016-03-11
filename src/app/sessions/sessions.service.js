'use strict';

export class SessionService {
  constructor($q, $log, authService, $odataresource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    this.$q = $q;
    this.$log = $log;
    this.authService = authService;
    this.$odataresource = $odataresource;
    this.baseUrl = baseUrl;
    this.sessionResource = $odataresource(baseUrl + 'odata/Sessions', 'id');
    this.userResource = $odataresource(baseUrl + 'odata/Users', 'id');
  }

  getSessions() {
    let deferred = this.$q.defer();

    this.sessionResource
      .odata()
      .expand("speaker($expand=profile)") // TODO: fix odataresource to convert .expand("speaker", "profile") to this instead of expand=speaker/profile
      .query(response => {
        deferred.resolve(response);
      }, err => {
        deferred.reject(err);
      });

    return deferred.promise;
  }

  saveSession(session) {
    let deferred = this.$q.defer();
    let newSession = new this.sessionResource({
      abstract: session.abstract,
      audienceLevel: session.audienceLevel,
      notes: session.notes,
      outline: session.outline,
      title: session.title
    });

    if (angular.isDefined(session.Id) && session.Id > 0) {
      newSession.$update(savedSession => {
        deferred.resolve(savedSession);
      }, err => {
        deferred.reject(SessionService.formatErrorMessage(err));
      });
    } else {
      newSession.$save(savedSession => {
        deferred.resolve(savedSession);
      }, err => {
        deferred.reject(SessionService.formatErrorMessage(err));
      })
    }

    return deferred.promise;
  }

  getProposedTalks() {
    let deferred = this.$q.defer();
    let authData = this.authService.getCurrentToken();
    this.userResource
      .odata()
      .filter('userName', authData.username)
      .expand("sessions")
      .expand("profile")
      .single(() => {
      }, response => {
        this.$log.log("success", response);
        deferred.resolve(response);
      }, err => {
        this.$log.log("error", err);
        deferred.reject(err);
      });

    return deferred.promise;
  }

  static formatErrorMessage(err) {
    let error = err.data.error;
    let errorMessage = `<strong>${error.message}</strong>`;
    if (error.innererror) {
      errorMessage = `${errorMessage}<br><br>${error.innererror.message.replace(/(?:\r\n|\r|\n)/g, '<br>')}`;
    }

    return errorMessage;
  }

}
