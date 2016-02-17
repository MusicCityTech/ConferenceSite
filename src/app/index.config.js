export function config ($httpProvider, $logProvider, toastrConfig) {
  //noinspection BadExpressionStatementJS
  'ngInject';

  $httpProvider.interceptors.push('authInterceptorService');

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}
