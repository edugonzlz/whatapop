/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("UserService", function ($http, Settings) {

        this.getUsers = function () {

            return $http.get(Settings.urlServidor + Settings.endpointUsers);

        };

        this.getUserById = function (userID) {

            return $http.get(Settings.urlServidor + Settings.endpointUsers + userID);

        };

    });