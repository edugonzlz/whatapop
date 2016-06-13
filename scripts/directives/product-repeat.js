/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .directive("productRepeat", function () {
        
        return {
            bindings: {
                product: "@",
                $router: "<"
            },

            templateUrl: "views/product-repeat.html",

            controller: ["ProductService", function (ProductService) {

                var self = this;

                //Nos suscribimos a un hook de inicio
                self.$onInit = function () {

                    ProductService.getProducts()
                        .then(function (response) {
                            self.products = response.data;
                        });
                };

                self.getImageUrl = ProductService.getImageUrl;

            }]
        };
    });