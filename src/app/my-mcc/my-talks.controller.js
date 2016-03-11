export class MyTalksController {
  constructor($log, sessionService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$log = $log;
    this.sessionService = sessionService;
    this.proposedTalks = [];
    this.profile = {};

    sessionService
      .getProposedTalks()
      .then(response => {
        this.$log.log("talks", response);
        this.profile = response.profile;
        this.proposedTalks = response.sessions;
      })


  }
}
