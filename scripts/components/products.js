/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("products", {

        bindings: {
            $router: "<"
        },

        templateUrl: "views/products.html",

        controller: ["ProductService", "CategoryService", function (ProductService, CategoryService) {
            
            var self = this;
            
            //Nos suscribimos a un hook de inicio
            self.$onInit = function () {
                
                ProductService.getProducts()
                    .then(function (response) {
                       self.products = response.data;
                    });
                
                CategoryService.getCategories()
                    .then(function (response) {
                        self.categories = response.data;
                    });
            };

            self.getImageUrl = ProductService.getImageUrl;
            
        }]
    });