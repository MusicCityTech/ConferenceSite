export class SessionsController {
  constructor ($odataresource, $log, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';
      this.sessions = $odataresource(baseUrl + '/odata/Sessions')
        .odata()
        .expand("Speaker")
        .query();
      $log.log(this.sessions);

  }
}
