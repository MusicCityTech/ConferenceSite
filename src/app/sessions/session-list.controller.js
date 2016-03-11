export class SessionsController {
  constructor(sessionService) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    this.sessions = [];

    sessionService
      .getSessions()
      .then(response => {
        this.sessions = response;
      });
  }
}
