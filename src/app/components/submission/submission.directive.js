"use strict";

export function SubmissionDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/submission/submission.html',
    scope: {
      proposedTalk: '=',
      onSave: '&'
    },
    controller: SubmissionController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class SubmissionController {
  constructor($log) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$log = $log;
  }

  save() {
    this.onSave();
  }
}
