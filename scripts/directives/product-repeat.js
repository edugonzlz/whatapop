/**
 * Created by Edu on 10/6/16.
 */
var productRepeat = function (ProductService) {

    return {

        restrict: "AE",

        templateUrl: "views/product-repeat.html",

        scope: {
            product: "<"
        },

        link: function (scope) {

            //Implementar el click a la vista general de producto?
            scope.getImageUrl = ProductService.getImageUrl;
        }
    };
};

productRepeat.$inject = ["ProductService"];

angular.module("whatapop").directive("productRepeat", productRepeat);