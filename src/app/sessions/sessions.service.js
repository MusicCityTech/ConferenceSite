'use strict';

export class SessionService {
  constructor ($resource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    var odataUrl = baseUrl + '/odata/Sessions';
    return $resource('', {}, {
      'query': { method: 'GET', url: odataUrl + '?$expand=Speaker', isArray: true}
    });
  }
}
