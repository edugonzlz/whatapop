/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("productDetail", {

        bindings:{
            $router: "<"
        },

        templateUrl: "views/product-detail.html",

        controller:["ProductService", "$sce",  function (ProductService, $sce) {

            var self = this;

            self.$routerOnActivate = function (next) {

                var productId = next.params.id;

                ProductService.getProductById(productId)
                    .then(function (response) {
                        self.product = response.data;
                        self.description = $sce.trustAsHtml(self.product.description);

                        if (self.product.state === "selling"){
                            self.selling = true;
                        }

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
            }

        }]
    });