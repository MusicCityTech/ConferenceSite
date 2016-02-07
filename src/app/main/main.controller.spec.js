describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('conferenceSite'));

  beforeEach(inject(($controller, webDevTec, toastr) => {
    spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('MainController');
  }));
});
