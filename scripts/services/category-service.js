/**
 * Created by Edu on 13/6/16.
 */

angular.module("whatapop")
    .service("CategoryService", function ($http) {

        this.getCategories = function () {

            return $http.get("http://localhost:8000/api/categories");

        };

        this.getCategory = function (categoryId) {

            return $http.get("http://localhost:8000/api/categories/" + categoryId);

        };

    });