/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("productDetail", {

    bindings:{
        $router: "<"
    },

    templateUrl: "views/product-detail.html",
    
    controller:["ProductService", function (ProductService) {

        var self = this;

        self.$routerOnActivate = function (next) {
            
            var productId = next.params.id;
            
            ProductService.getProductById(productId)
                .then(function (response) {
                    self.product = response.data;

                });
        };
        
        self.getImageUrl = ProductService.getImageUrl;
    }]
});