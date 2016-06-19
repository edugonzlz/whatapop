/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .directive("productRepeat", function (ProductService, DistanceService) {
        
        return {

            restrict: "AE",

            templateUrl: "views/product-repeat.html",

            scope: {
                product: "<",
            },

            link: function (scope) {

                //Implementar el click a la vista general de producto?
                scope.getImageUrl = ProductService.getImageUrl;

            }
        };
    });