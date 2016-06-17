/**
 * Created by Edu on 13/6/16.
 */
angular.module("whatapop")
    .service("CategoryService", function ($http, Settings) {

        this.getCategories = function () {

            return $http.get(Settings.urlServidor + Settings.endpointCategories);

        };

        this.getCategory = function (categoryId) {

            return $http.get(Settings.urlServidor + Settings.endpointCategories + categoryId);

        };

    });