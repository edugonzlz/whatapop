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

                });
            var id = self.product.id;
            self.fav = localStorage.getItem(id);
            console.log(self.fav);
        };
        
        self.getImageUrl = ProductService.getImageUrl;
        
        self.makeFavorite = function () {
            if (typeof(Storage) !== "undefined") {

                var id = self.product.id;

                //Recogemos el valor de nuestro id
                var fav = localStorage.getItem(id);

                if (fav === "fav"){
                    //Eliminamos favorito
                    localStorage.removeItem(id);
                    self.fav = false;
                    console.log(localStorage.getItem(id));
                }
                if (fav !== "fav"){
                    //Si no es favorito lo guardamos como fav
                    localStorage.setItem(id, "fav");
                    self.fav = true;
                    console.log(localStorage.getItem(id));
                }
            }
        }

    }]
});