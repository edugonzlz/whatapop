/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("DistanceService", function (UserService, LocService, $haversine) {

        this.distanceFromProduct = function (product) {
            
            return new Promise (function (resolve, reject) {
                //Obtenemos nuestra posicion
                LocService.getLoc()
                    .then(function (mylocation) {

                        UserService.getUserById(product.seller.id)
                            .then(function (response) {

                                var user = response.data;

                                var userLoc = {"latitude": user.latitude,
                                    "longitude": user.longitude };

                                return resolve ($haversine.distance(mylocation, userLoc));
                            });

                    });
            });
            

        };

        this.distanceForProducts = function (products) {

            var productsNearly = [];

            async.each(products, function (product, callback) {
                distanceFromProduct(product)
                    .then(function (meters) {
                        if (meters < 5000){
                            console.log(product.name + " esta a metros: " + meters);
                            productsNearly.push(product);
                        }
                        callback();
                    })
            },function (err) {
                if (err){
                    return console.log("Algo ha fallado calculando distancias", err);
                } else {
                    console.log("Todo bien calculando distancias")
                    return productsNearly;
                }
            })
        };

        this.productLocation = function(product){

                UserService.getUserById(product.seller.id)
                    .then(function (response) {

                        var user = response.data;

                        return resolve ({"latitude": user.latitude,
                            "longitude": user.longitude });
                    })
        };
        
        this.userLocation = function (user) {
            
            return {"latitude": user.latitude,
                "longitude": user.longitude };
        };
        
        this.distanceTwoPoints = function (position1, position2) {
            
            return $haversine.distance(position1, position2);
        };
    });