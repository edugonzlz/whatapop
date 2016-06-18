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

                        });

                    CategoryService.getCategories()
                        .then(function (response) {
                            self.categories = response.data;

                        });


                };

                self.getImageUrl = ProductService.getImageUrl;

                self.distance = function (element, index, products) {
                    return new Promise(function (resolve, reject) {
                        async.each(products, function (product, callback) {
                            DistanceService.distanceFromProduct(product).then(function (meters) {
                                console.log("metrosssss: ", meters);
                                if (meters < 1000){
                                    return resolve (true);
                                }
                                callback();
                            })
                        },function (err) {
                            if (err){
                                return reject (console.log("Algo ha fallado calculando distancias", err));
                            } else {
                                return resolve (console.log("Todo bien calculando distancias"));
                            }
                        })
                    })
                }
            }]
    });