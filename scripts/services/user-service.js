/**
 * Created by Edu on 17/6/16.
 */
var UserService = function ($http, Settings) {

    this.getUsers = function () {

        return $http.get(Settings.urlServer + Settings.endpointUsers);

    };

    this.getUserById = function (userId) {

        return $http.get(Settings.urlServer + Settings.endpointUsers + "/" + userId);

    };

};

UserService.$inject = ["$http", "Settings"];

angular.module("whatapop").service("UserService", UserService);