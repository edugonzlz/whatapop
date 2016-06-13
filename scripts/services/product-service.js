/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .service("ProductService", function ($http) {

        this.getProducts = function () {

            return $http.get("http://localhost:8000/api/products");

        };

        this.getProductById = function (productId) {

            return $http.get("http://localhost:8000/api/products/" + productId);

        };

        this.getImageUrl = function (imagesUrl) {

            return imagesUrl ? ("http://localhost:8000" + "/" + imagesUrl) : undefined;

        };

    });