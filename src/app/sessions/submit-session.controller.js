export class SubmitSessionController {
  constructor($state, $log, sessionService, toastr) {
    //noinspection BadExpressionStatementJS
    'ngInject';
    this.$state = $state;
    this.$log = $log;
    this.sessionService = sessionService;
    this.toastr = toastr;
    this.proposedTalk = {
      title: "",
      audienceLevel: "",
      tags: "",
      outline: "",
      abstract: "",
      notes: ""
    }
  }

  saveProposedTalk() {

    this.sessionService
      .saveSession(this.proposedTalk)
      .then(savedSession => {
        this.toastr.success(`${savedSession.title} submitted successfully`);
        this.$state.go('home');
      }, err => {
        this.toastr.error(err);
      });
  }
}
