/**
 * Created by Edu on 10/6/16.
 */

var ProductService = function ($http, Settings) {

    this.getProducts = function () {

        return $http.get(Settings.urlServer + Settings.endpointProducts);

    };

    this.getProductById = function (productId) {

        return $http.get(Settings.urlServer + Settings.endpointProducts + "/" + productId);

    };

    this.getImageUrl = function (imageUrl) {

        return imageUrl ? (Settings.urlServer + "/" + imageUrl) : undefined;

    };

};

ProductService.$inject = [ "$http", "Settings"];

angular.module("whatapop").service("ProductService", ProductService);