/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("products", {

        bindings: {
            $router: "<"
        },

        templateUrl: "views/products.html",

        controller: ["ProductService", "CategoryService", "DistanceService", "$filter",
            function (ProductService, CategoryService, DistanceService, $filter) {

                var self = this;

                //Nos suscribimos a un hook de inicio
                self.$onInit = function () {

                    ProductService.getProducts()
                        .then(function (response) {
                            self.products = response.data;

                            DistanceService.nearlySellersIds()
                                .then(function (nearlySellersIds) {

                                    console.log("ids: ", nearlySellersIds);

                                    self.nearlyProducts = $filter("filter")(self.products, function (product) {
                                        return nearlySellersIds.indexOf(product.seller.id) > -1;
                                    });

                                    console.log("prods: ", self.nearlyProducts);
                                });
                        });
    
                    CategoryService.getCategories()
                        .then(function (response) {
                            self.categories = response.data;

                        });
                };

                self.getImageUrl = ProductService.getImageUrl;

            }]
    });