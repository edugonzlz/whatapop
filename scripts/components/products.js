/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("products", {

        bindings: {
            $router: "<"
        },

        templateUrl: "views/products.html",

        controller: ["ProductService", "CategoryService", "LocService", function (ProductService, CategoryService, LocService) {
            
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
                
                LocService.getLoc()
                    .then(function (response) {
                        self.myposition = response;
                    });
            };

            self.getImageUrl = ProductService.getImageUrl;

        }]
    });