export function ProfileEditorDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/profile-editor/profile-editor.html',
    scope: {
      profile: '=',
      onSave: '&'
    },
    controller: ProfileEditorController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class ProfileEditorController {
  constructor($log) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$log = $log;
  }

  saveProfile() {
    this.onSave();
  }
}
