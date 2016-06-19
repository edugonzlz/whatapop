/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("products", {

        bindings: {
            $router: "<"
        },

        templateUrl: "views/products.html",

        controller: ["ProductService", "CategoryService", "DistanceService",
            function (ProductService, CategoryService, DistanceService) {

                var self = this;

                //Nos suscribimos a un hook de inicio
                self.$onInit = function () {

                    ProductService.getProducts()
                        .then(function (response) {
                            self.products = response.data;

                            self.productsInDistance = [];
                            self.distanceForProducts(self.products)

                        });

                    CategoryService.getCategories()
                        .then(function (response) {
                            self.categories = response.data;

                        });
                };

                self.getImageUrl = ProductService.getImageUrl;

                self.print = function () {
                    // self.productsInDistance = [];
                    // self.distanceForProducts(self.products)
                    console.log("a ver: ", self.productsInDistance);
                };

                self.distanceForProducts = function (products) {
                    async.each(products, function (product, callback) {
                        DistanceService.distanceFromProduct(product)
                            .then(function (meters) {
                                if (meters < 5000){

                                    self.productsInDistance.push(product);
                                    console.log(product.name + " esta a metros: " + meters);
                                }
                                callback();
                            })
                    },function (err) {
                        if (err){
                            return console.log("Algo ha fallado calculando distancias", err);
                        } else {
                            console.log("productos en la distancia", self.productsInDistance);
                            return console.log("Todo bien calculando distancias");
                        }
                    })
                };
                
            }]
    });