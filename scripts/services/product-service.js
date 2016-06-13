/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .service("ProductService", function ($http, Settings) {

        this.getProducts = function () {

            return $http.get(Settings.urlServidor + Settings.endpointProducts);

        };

        this.getProductById = function (productId) {

            return $http.get(Settings.urlServidor + Settings.endpointProducts + "/" + productId);

        };

        this.getImageUrl = function (imagesUrl) {

            return imagesUrl ? (Settings.urlServidor + "/" + imagesUrl) : undefined;

        };

    });