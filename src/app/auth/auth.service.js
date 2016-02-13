'use strict';

export class AuthService {
  constructor ($http, $q, localStorageService, baseUrl) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
    this.baseUrl = baseUrl;
    this.authentication = {
      isAuth: false,
      userName: ""
    };
  }

  saveRegistration(registration) {
    this.logOut();

    return this.$http(this.baseUrl + '/api/account/register', registration)
                .then(response => {
                  return response;
                });
  }

  login(loginData) {
    let data = "grant_type=password&username=" + loginData.email + "&password=" + loginData.password;
    let deferred = this.$q.defer();

    this.$http.post(this.baseUrl +"token", data)
      .success(response => {
        this.localStorageService.set('authorizationData', {token: response.access_token, userName: loginData.userName});
        this.authentication.isAuth = true;
        this.authentication.userName = loginData.userName;

        deferred.resolve(response);
      }).error((err) => {
        this.logOut();
        deferred.reject(err);
      });

    return deferred.promise;
  }

  logOut() {
    this.localStorageService.remove('authorizationData');
    this.authentication.isAuth = false;
    this.authentication.userName = "";
  }

  fillAuthData() {
    var authData = this.localStorageService.get('authorizationData');
    if(authData) {
      this.authentication.isAuth = true;
      this.authentication.userName = authData.userName;
    }
  }
}
