/**
 * Created by Edu on 13/6/16.
 */
var CategoryService = function ($http, Settings) {

    this.getCategories = function () {

        return $http.get(Settings.urlServer + Settings.endpointCategories);

    };

    this.getCategoryById = function (categoryId) {

        return $http.get(Settings.urlServer + Settings.endpointCategories + "/" + categoryId);

    };

};

CategoryService.$inject = [ "$http", "Settings"];

angular.module("whatapop").service("CategoryService", CategoryService);