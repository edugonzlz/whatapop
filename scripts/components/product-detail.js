/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("productDetail", {

        bindings:{
            $router: "<"
        },

        templateUrl: "views/product-detail.html",

        controller:["ProductService", "$sce", "LocService",  function (ProductService, $sce, LocService) {

            var self = this;

            var location = {};
            
            self.$onInit = function () {

                self.location = {
                    latitude: 10,
                    longitude: 10
                };

                self.map = { center: {
                    latitude: location.latitude,
                    longitude: location.longitude },
                    zoom: 15,
                    options : {
                        scrollwheel: false,
                        draggable: false},
                    control:{}
                };
                self.marker = {
                    id: 1,
                    coords: {
                        latitude: location.latitude,
                        longitude: location.longitude
                    },
                    options: {
                        draggable: false
                    }
                };
            };

            self.$routerOnActivate = function (next) {

                var productId = next.params.id;

                ProductService.getProductById(productId)
                    .then(function (response) {
                        self.product = response.data;
                        self.description = $sce.trustAsHtml(self.product.description);

                        //Cargamos el estado del producto para decidir pintar el precio
                        if (self.product.state === "selling"){
                            self.selling = true;
                        }

                        LocService.productLocation(self.product)
                            .then(function (productLocation) {
                                location = {
                                    latitude: productLocation.latitude,
                                    longitude: productLocation.longitude
                                };

                                self.map = { center: {
                                    latitude: location.latitude,
                                    longitude: location.longitude }
                                };
                                self.marker = {
                                    id: 1,
                                    coords: {
                                        latitude: location.latitude,
                                        longitude: location.longitude }
                                };
                            });

                    });

                //Recuperamos el color del favorito
                self.favColor = localStorage.getItem(productId);

            };

            self.getImageUrl = ProductService.getImageUrl;

            self.makeFavorite = function () {
                if (typeof(Storage) !== "undefined") {

                    var id = self.product.id;

                    //Recogemos el valor de nuestro id
                    var fav = localStorage.getItem(id);

                    if (fav === "fav"){
                        //Si ya era favorito Eliminamos favorito
                        localStorage.removeItem(id);
                        self.favColor = false;
                    }
                    if (fav !== "fav"){
                        //Si no es favorito lo guardamos como favorito
                        localStorage.setItem(id, "fav");
                        self.favColor = true;
                    }
                }
            };

        }]
    });