export class SessionsController {
  constructor ($odataresource, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';
      this.sessions = $odataresource(baseUrl + '/odata/Sessions')
        .odata()
        .expand("Speaker")
        .query();

  }
}
