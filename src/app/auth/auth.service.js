'use strict';

export class AuthService {
  constructor ($http, $q, $log, localStorageService, baseUrl, moment) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.localStorageService = localStorageService;
    this.baseUrl = baseUrl;
    this.moment = moment;
    this.authentication = {
      isAuth: false,
      userName: ""
    };
  }

  saveRegistration(registration) {
    this.logOut();
    let deferred = this.$q.defer();

    this.$http.post(this.baseUrl + '/api/account/register', registration)
                .then(response => {
                  deferred.resolve(response.data);
                }, (err) => {
                  let message = err.data.Message || '';
                  let errors = [];

                  if(err.status < 0) {
                    message = "Error connecting to the api server at url " + this.baseUrl;
                  } else {
                    if(angular.isDefined(err.data.ModelState)) {
                      for (let key in err.data.ModelState) {
                        if (err.data.ModelState.hasOwnProperty(key)) {
                          for (let i = 0; i < err.data.ModelState[key].length; i++) {
                            if (err.data.ModelState[key].hasOwnProperty(i)) {
                              errors.push(err.data.ModelState[key][i]);
                            }
                          }
                        }
                      }
                    }
                  }

                  deferred.reject({message: message, errors: errors});

                });

    return deferred.promise;
  }

  login(loginData) {
    let data = "grant_type=password&username=" + loginData.email + "&password=" + loginData.password;
    let deferred = this.$q.defer();

    this.$http.post(this.baseUrl +"token", data)
      .then(response => {
        this.localStorageService.set('authorizationData', {
          token: response.data.access_token,
          token_type: response.data.token_type,
          issued: response.data[".issued"],
          expires: response.data[".expires"],
          expires_in: response.data.expires_in,
          username: response.data.userName,
          user_id: response.data.id
       });
        this.authentication.isAuth = true;
        this.authentication.userName = loginData.userName;

        deferred.resolve(response);
      }, err => {
        this.logOut();
        deferred.reject(err.data);
      });

    return deferred.promise;
  }

  logOut() {
    this.localStorageService.remove('authorizationData');
    this.authentication.isAuth = false;
    this.authentication.userName = "";
  }

  getCurrentToken() {
    return this.localStorageService.get('authorizationData');
  }

  getUserInfo() {
    let deferred = this.$q.defer();
    let userInfo = this.localStorage.get('userInfo');
    if(userInfo === undefined) {
      this.$http.get(this.baseUrl + 'api/Account/UserInfo')
        .then(response => {
          this.localStorage.set('userInfo', response);
          deferred.resolve(response);
        })
    } else {
      return deferred.resolve(userInfo);
    }

    return deferred.promise;
  }

  isLoggedIn() {
    var token = this.getCurrentToken();
    if(token === null) return false;

    var now = this.moment();
    var expiresAt = this.moment(new Date(token.expires));

    return expiresAt.isAfter(now);
  }

}
