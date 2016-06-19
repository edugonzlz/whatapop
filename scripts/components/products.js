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
                var cachedProducts;
                var nearlyProducts;


                //Nos suscribimos a un hook de inicio
                self.$onInit = function () {

                    ProductService.getProducts()
                        .then(function (response) {

                            cachedProducts = response.data;
                            self.products = cachedProducts;

                            DistanceService.nearlySellersIds()
                                .then(function (nearlySellersIds) {
                                    
                                    nearlyProducts = $filter("filter")(cachedProducts, function (product) {
                                        return nearlySellersIds.indexOf(product.seller.id) > -1;
                                    });

                                    //Cuando tenemos los id de los vendedores cercanos activamos el boton
                                    //Ademas lo cambiamos a false para no pintarlo
                                    self.buttonActivate = true;
                                    self.buttonState = false;

                                });
                        });
    
                    CategoryService.getCategories()
                        .then(function (response) {
                            self.categories = response.data;

                        });
                };

                self.getImageUrl = ProductService.getImageUrl;

                self.distanceFilter = function () {

                    if (self.buttonState === false){
                        self.products = nearlyProducts;
                        self.buttonState = true;
                    } else if (self.buttonState === true){
                        self.products = cachedProducts;
                        self.buttonState = false;
                    }
                }

            }]
    });