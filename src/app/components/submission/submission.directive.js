"use strict";

export function SubmissionDirective() {
    //noinspection BadExpressionStatementJS
    'ngInject';

    return {
        restrict: 'E',
        templateUrl: 'app/components/submission/submission.html',
        scope: {
            creationDate: '='
        },
        controller: SubmissionController,
        controllerAs: 'vm',
        bindToController: true
    };
}

class SubmissionController {
    constructor ($state, authService) {
        //noinspection BadExpressionStatementJS
        'ngInject';

        this.$state = $state;
        this.authService = authService;

        this.formData = {
            title = "",
            audienceLevel = "",
            tags = "",
            outline = "",
            abstract = "",
            notes = ""
        };
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logOut();
        this.$state.go('login');
    }
}
