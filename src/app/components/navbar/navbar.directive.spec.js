/**
 * @todo Complete the test
 * This example is not perfect.
 */
describe('directive navbar', function() {
  let vm;
  let element;
  let timeInMs;

  beforeEach(angular.mock.module('conferenceSite'));

  beforeEach(inject(($compile, $rootScope) => {
    const currentDate = new Date();
    timeInMs = currentDate.setHours(currentDate.getHours() - 24);

    element = angular.element(`
      <navbar></navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });
});
