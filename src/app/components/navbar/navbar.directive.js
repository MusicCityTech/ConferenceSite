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
  constructor ($state, authService) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$state = $state;
    this.authService = authService;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logOut();
    this.$state.go('login');

  }
}
