"use strict";

export function NavbarDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class NavbarController {
  constructor () {

  }
}
